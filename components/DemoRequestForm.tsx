"use client";

import { useState, useCallback, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FormData } from '@/types/form';

interface DemoRequestFormProps {
  isMobile?: boolean;
}

type Slot = { value: string; label: string; startMillisUtc: number };

export default function DemoRequestForm({ isMobile = false }: DemoRequestFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    lastName: '',
    firstName: '',
    company: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    website: '',
    preferredDate: '',
    agreedToTerms: false
  });

  const [availabilitySlots, setAvailabilitySlots] = useState<Slot[]>([]);
  const [availabilityLoading, setAvailabilityLoading] = useState(false);
  const [availabilityError, setAvailabilityError] = useState<string | null>(null);
  const [availableUserIds, setAvailableUserIds] = useState<string[]>([]);
  const [meetingDuration, setMeetingDuration] = useState(1800000);
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [, setHasLoadedAvailability] = useState(false);

  const DEMO_REQUEST_API = '/api/demo-request';
  const AVAILABILITY_API = '/api/hubspot/availability';

  const fetchAvailability = useCallback(async (offset: number = 0) => {
    setAvailabilityError(null);
    setAvailabilityLoading(true);
    try {
      const res = await fetch(`${AVAILABILITY_API}?timezone=Asia/Tokyo&monthOffset=${offset}`);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setAvailabilityError(data.details || data.error || '空き時間の取得に失敗しました');
        setAvailabilitySlots([]);
        return;
      }
      setAvailabilitySlots(data.slots ?? []);
      setAvailableUserIds(data.availableUserIds ?? []);
      setMeetingDuration(data.duration ?? 1800000);
      setHasLoadedAvailability(true);
    } catch {
      setAvailabilityError('空き時間の取得に失敗しました');
      setAvailabilitySlots([]);
    } finally {
      setAvailabilityLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAvailability(0);
  }, [fetchAvailability]);

  const handleMonthChange = (delta: number) => {
    const newOffset = monthOffset + delta;
    if (newOffset < 0) return;
    setMonthOffset(newOffset);
    setSelectedDate('');
    fetchAvailability(newOffset);
  };

  const slotsByDate = useMemo(() => {
    const map: Record<string, Slot[]> = {};
    for (const slot of availabilitySlots) {
      const date = slot.value.split('T')[0];
      if (!map[date]) map[date] = [];
      map[date].push(slot);
    }
    return map;
  }, [availabilitySlots]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^(0\d{1,4}-?\d{1,4}-?\d{4}|0\d{9,10})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.lastName || !formData.firstName || !formData.company || 
        !formData.department || !formData.position || !formData.email || 
        !formData.phone || !formData.website || !formData.agreedToTerms) {
      alert('必須項目をすべて入力してください。');
      return;
    }

    if (!formData.preferredDate) {
      alert('デモ・ミーティングの希望日時を選択してください。');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('メールアドレスの形式が正しくありません。');
      return;
    }

    if (!validatePhone(formData.phone)) {
      alert('電話番号の形式が正しくありません。\n例：03-1234-5678 または 0312345678');
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedSlot = availabilitySlots.find(s => s.value === formData.preferredDate);
      const response = await fetch(DEMO_REQUEST_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lastName: formData.lastName,
          firstName: formData.firstName,
          company: formData.company,
          department: formData.department,
          position: formData.position,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          preferred_date: formData.preferredDate || undefined,
          ...(selectedSlot && {
            startMillisUtc: selectedSlot.startMillisUtc,
            availableUserIds,
            meetingDuration,
          }),
        }),
      });

      if (response.ok) {
        const hasMtgBooking = !!(selectedSlot?.startMillisUtc);

        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || [];

          // ① フォーム送信完了（MTG予約有無を問わず）
          window.dataLayer.push({
            event: 'form_submit_demo_request',
            form_type: 'demo_request',
            mtg_booked: hasMtgBooking,
            company: formData.company,
            department: formData.department,
          });

          // ② MTG予約あり専用イベント
          if (hasMtgBooking) {
            window.dataLayer.push({
              event: 'demo_mtg_booked',
              form_type: 'demo_request',
              mtg_datetime: formData.preferredDate,
              company: formData.company,
              department: formData.department,
            });
          }

          // ③ サンクスページ到達イベント（遷移前にpushしGA4二重初期化による重複送信を防ぐ）
          window.dataLayer.push({
            event: 'page_view_demo_request_thankyou',
            page_path: '/demo-request/thank-you',
          });
        }
        // PDF を自動ダウンロード
        if (typeof window !== 'undefined') {
          const a = document.createElement('a');
          a.href = '/document/Omakase AI_法人様向け資料.pdf';
          a.download = 'Omakase AI_法人様向け資料.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }

        router.push('/demo-request/thank-you');
      } else {
        const text = await response.text();
        let errorData: { error?: string; source?: string; details?: string } = {};
        try {
          errorData = JSON.parse(text);
        } catch {
          errorData = { error: '送信に失敗しました', details: text.slice(0, 200) };
        }
        console.error('送信エラーレスポンス:', errorData);
        const who = errorData.source === 'zapier' ? 'Zapier（Slack等）' : errorData.source === 'hubspot' ? 'HubSpot' : '';
        const msg = who ? `${errorData.error || 'エラー'}（${who}）\n${errorData.details || ''}` : (errorData.error || '送信に失敗しました。') + (errorData.details ? `\n${errorData.details}` : '');
        throw new Error(msg);
      }
    } catch (error) {
      console.error('送信エラー:', error);
      const message = error instanceof Error ? error.message : '送信に失敗しました。もう一度お試しください。';
      alert(message);
      setIsSubmitting(false);
    }
  };

  const todayStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tokyo' }).format(new Date());
  const calBase = new Date();
  calBase.setDate(1);
  calBase.setMonth(calBase.getMonth() + monthOffset);
  const calYear = calBase.getFullYear();
  const calMonth = calBase.getMonth();
  const firstDayOfWeek = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

  const labelStyle = {
    color: '#000',
    fontFamily: '"Noto Sans JP"',
    fontSize: '12px',
    fontWeight: 700
  };
  
  const requiredStyle = {
    color: '#FF0000',
    fontFamily: '"Noto Sans JP"',
    fontSize: '12px',
    fontWeight: 700,
    marginLeft: '4px'
  };

  const inputStyle = {
    height: '45px',
    padding: '12px',
    border: '1px solid #E5E5E5',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: '"Noto Sans JP"',
    outline: 'none',
    background: '#FFF'
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: isMobile ? '100%' : '701px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      background: '#FFF',
      paddingTop: '20px',
      paddingRight: '30px',
      paddingBottom: '20px',
      paddingLeft: '30px'
    }}>
      {/* 姓・名 */}
      {!isMobile ? (
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>
              姓<span style={requiredStyle}>（必須）</span>
            </label>
            <input 
              type="text" 
              placeholder="山田" 
              style={inputStyle} 
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              required 
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>
              名<span style={requiredStyle}>（必須）</span>
            </label>
            <input 
              type="text" 
              placeholder="太郎" 
              style={inputStyle}
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              required 
            />
          </div>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>
              姓<span style={requiredStyle}>（必須）</span>
            </label>
            <input 
              type="text" 
              placeholder="山田" 
              style={inputStyle}
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              required 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>
              名<span style={requiredStyle}>（必須）</span>
            </label>
            <input 
              type="text" 
              placeholder="太郎" 
              style={inputStyle}
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              required 
            />
          </div>
        </>
      )}
  
      {/* 会社名 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>
          会社名<span style={requiredStyle}>（必須）</span>
        </label>
        <input 
          type="text" 
          placeholder="ABC株式会社" 
          style={inputStyle}
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
          required 
        />
      </div>
  
      {/* 部署名・役職 */}
      {!isMobile ? (
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>
              部署名<span style={requiredStyle}>（必須）</span>
            </label>
            <input 
              type="text" 
              placeholder="法人営業部" 
              style={inputStyle}
              value={formData.department}
              onChange={(e) => handleInputChange('department', e.target.value)}
              required 
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>
              役職<span style={requiredStyle}>（必須）</span>
            </label>
            <input 
              type="text" 
              placeholder="営業部長" 
              style={inputStyle}
              value={formData.position}
              onChange={(e) => handleInputChange('position', e.target.value)}
              required 
            />
          </div>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>
              部署名<span style={requiredStyle}>（必須）</span>
            </label>
            <input 
              type="text" 
              placeholder="法人営業部" 
              style={inputStyle}
              value={formData.department}
              onChange={(e) => handleInputChange('department', e.target.value)}
              required 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>
              役職<span style={requiredStyle}>（必須）</span>
            </label>
            <input 
              type="text" 
              placeholder="営業部長" 
              style={inputStyle}
              value={formData.position}
              onChange={(e) => handleInputChange('position', e.target.value)}
              required 
            />
          </div>
        </>
      )}
  
      {/* メールアドレス */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>
          メールアドレス<span style={requiredStyle}>（必須）</span>
        </label>
        <input 
          type="email" 
          placeholder="ABC.1234@123.co.jp" 
          style={inputStyle}
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required 
        />
      </div>
  
      {/* 電話番号 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>
          電話番号<span style={requiredStyle}>（必須）</span>
        </label>
        <input 
          type="tel" 
          placeholder="080-1234-5678" 
          style={inputStyle}
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          required 
        />
      </div>

      {/* 導入検討中のホームページ */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>
          Omakase AIの導入を検討しているホームページ<span style={requiredStyle}>（必須）</span>
        </label>
        <input
          type="url"
          placeholder="https://example.co.jp"
          style={inputStyle}
          value={formData.website}
          onChange={(e) => handleInputChange('website', e.target.value)}
          required
        />
      </div>

      {/* デモ・ミーティングの希望日時 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ ...labelStyle, margin: 0 }}>
          デモ・ミーティングの希望日時<span style={requiredStyle}>（必須）</span>
        </p>
        <p style={{ fontFamily: '"Noto Sans JP"', fontSize: '11px', fontWeight: 400, color: '#666', margin: 0, lineHeight: 1.5 }}>
          カレンダーから日付を選択し、希望の時間帯を選んでください。
        </p>

        {/* カレンダーウィジェット */}
        <div style={{ border: '1px solid #E5E5E5', borderRadius: '12px', overflow: 'hidden' }}>
          {/* ヘッダー */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #E5E5E5', background: '#FAFAFA' }}>
            <button
              type="button"
              onClick={() => handleMonthChange(-1)}
              disabled={monthOffset <= 0}
              style={{ width: '32px', height: '32px', border: 'none', background: 'transparent', fontSize: '20px', cursor: monthOffset <= 0 ? 'default' : 'pointer', color: monthOffset <= 0 ? '#CCC' : '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
            >
              ‹
            </button>
            <span style={{ fontFamily: '"Noto Sans JP"', fontSize: '14px', fontWeight: 700 }}>
              {calYear}年{calMonth + 1}月
            </span>
            <button
              type="button"
              onClick={() => handleMonthChange(1)}
              style={{ width: '32px', height: '32px', border: 'none', background: 'transparent', fontSize: '20px', cursor: 'pointer', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
            >
              ›
            </button>
          </div>

          {/* 曜日ヘッダー */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: '1px solid #E5E5E5' }}>
            {['日', '月', '火', '水', '木', '金', '土'].map((d, i) => (
              <div key={d} style={{ textAlign: 'center', padding: '8px 0', fontSize: '11px', fontFamily: '"Noto Sans JP"', fontWeight: 700, color: i === 0 ? '#E53935' : i === 6 ? '#1565C0' : '#666' }}>
                {d}
              </div>
            ))}
          </div>

          {/* グリッド本体 */}
          {availabilityLoading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#666', fontFamily: '"Noto Sans JP"', fontSize: '13px' }}>
              空き時間を取得中...
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '8px 4px', gap: '4px 0' }}>
              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const isAvailable = !!slotsByDate[dateStr];
                const isSelected = selectedDate === dateStr;
                const isPast = dateStr < todayStr;
                const isToday = dateStr === todayStr;
                const dayOfWeek = (firstDayOfWeek + i) % 7;
                return (
                  <div key={day} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px 0' }}>
                    <button
                      type="button"
                      disabled={!isAvailable || isPast}
                      onClick={() => { if (isAvailable && !isPast) setSelectedDate(dateStr); }}
                      style={{
                        width: isMobile ? '36px' : '40px',
                        height: isMobile ? '36px' : '40px',
                        borderRadius: '50%',
                        border: isToday && !isSelected ? '1.5px solid #5004F5' : 'none',
                        background: isSelected ? '#5004F5' : 'transparent',
                        color: isSelected ? '#FFF' : isPast || !isAvailable ? '#CCC' : dayOfWeek === 0 ? '#E53935' : dayOfWeek === 6 ? '#1565C0' : '#000',
                        fontFamily: '"Noto Sans JP"',
                        fontSize: isMobile ? '12px' : '13px',
                        fontWeight: isAvailable && !isPast ? 700 : 400,
                        cursor: isAvailable && !isPast ? 'pointer' : 'default',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1px',
                        padding: 0,
                      }}
                    >
                      <span>{day}</span>
                      {isAvailable && !isPast && !isSelected && (
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#5004F5', flexShrink: 0 }} />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {availabilityError && (
          <p style={{ fontFamily: '"Noto Sans JP"', fontSize: '12px', color: '#c00', margin: 0 }}>
            {availabilityError}
          </p>
        )}

        {/* 選択日の時間スロット */}
        {selectedDate && slotsByDate[selectedDate] && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', background: '#F8F6FF', borderRadius: '8px' }}>
            <span style={labelStyle}>
              {(() => {
                const [, m, d] = selectedDate.split('-').map(Number);
                const dt = new Date(calYear, calMonth, d);
                const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
                return `${m}月${d}日(${weekdays[dt.getDay()]})`;
              })()}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {slotsByDate[selectedDate].map((slot) => {
                const isSlotSelected = formData.preferredDate === slot.value;
                const time = slot.value.split('T')[1];
                return (
                  <button
                    key={slot.value}
                    type="button"
                    onClick={() => handleInputChange('preferredDate', slot.value)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: `1.5px solid ${isSlotSelected ? '#5004F5' : '#E5E5E5'}`,
                      background: isSlotSelected ? '#5004F5' : '#FFF',
                      color: isSlotSelected ? '#FFF' : '#000',
                      fontFamily: '"Noto Sans JP"',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                    }}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
  
      {/* 同意チェック */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '8px 0' }}>
        <input
          type="checkbox"
          id={isMobile ? "demo-check-mobile" : "demo-check-pc"}
          checked={formData.agreedToTerms}
          onChange={(e) => handleInputChange('agreedToTerms', e.target.checked)}
          style={{
            width: '20px',
            height: '20px',
            cursor: 'pointer',
            marginTop: '2px',
            flexShrink: 0,
            accentColor: '#6017FF'
          }}
        />
        <label htmlFor={isMobile ? "demo-check-mobile" : "demo-check-pc"} style={{
          fontSize: '11px',
          fontFamily: '"Noto Sans JP"',
          color: '#666',
          lineHeight: '1.5',
          cursor: 'pointer'
        }}>
          このフォームから送信することで、利用規約、個人情報の取り扱いに同意したものとみなします。
        </label>
      </div>
  
      {/* 送信ボタン */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          style={{
            width: isMobile ? '311px' : '183px',
            height: '48px',
            paddingTop: '10px',
            paddingRight: '24px',
            paddingBottom: '10px',
            paddingLeft: '24px',
            borderRadius: '300px',
            background: isSubmitting ? '#ccc' : '#5004F5',
            color: '#FFF',
            fontFamily: '"Noto Sans JP"',
            fontSize: '14px',
            fontWeight: 700,
            border: 'none',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'opacity 0.3s'
          }}
          onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          {isSubmitting ? '送信中...' : '送信'}
        </button>
      </div>
    </div>
  );
}
