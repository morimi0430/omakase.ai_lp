"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { InquiryFormData } from '@/types/form';

export default function Form() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // フォームの状態管理
  const [formData, setFormData] = useState<InquiryFormData>({
    lastName: '',
    firstName: '',
    company: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    inquiryType: '選択してください。',
    inquiryDetail: '',
    agreedToTerms: false
  });

  const menuItems = [
    'サービス資料が欲しい',
    '詳しい話を聞きたい',
    '導入事例を知りたい',
    'その他のご相談'
  ];

  // バリデーション関数
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // 日本の電話番号形式（ハイフンあり・なし両対応）
    const phoneRegex = /^(0\d{1,4}-?\d{1,4}-?\d{4}|0\d{9,10})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  // 外部クリックでドロップダウンを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (!isDropdownOpen) return;

    const timerId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchend', handleClickOutside);
    }, 10);

    return () => {
      clearTimeout(timerId);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleInputChange = (field: keyof InquiryFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    // 必須項目チェック
    if (!formData.lastName || !formData.firstName || !formData.company || 
        !formData.email || !formData.phone || formData.inquiryType === '選択してください。' || !formData.agreedToTerms) {
      alert('必須項目をすべて入力し、規約に同意してください。');
      return;
    }

    // メールアドレス形式チェック
    if (!validateEmail(formData.email)) {
      alert('メールアドレスの形式が正しくありません。');
      return;
    }

    // 電話番号形式チェック
    if (!validatePhone(formData.phone)) {
      alert('電話番号の形式が正しくありません。\n例：03-1234-5678 または 0312345678');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/webhook/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }),
          ...formData
        }),
      });

      if (response.ok) {
        // 送信成功したら thank you ページへリダイレクト
        router.push('document-request/thank-you');
      } else {
        throw new Error();
      }
    } catch (error) {
      alert('送信に失敗しました。時間をおいて再度お試しください。');
      setIsSubmitting(false);
    }
  };

  // 共通スタイル
  const labelStyle = { color: '#000', fontFamily: '"Noto Sans JP"', fontSize: '12px', fontWeight: 700 };
  const requiredStyle = { color: '#FF0000', fontFamily: '"Noto Sans JP"', fontSize: '12px', fontWeight: 700, marginLeft: '4px' };
  const inputStyle = { height: '45px', padding: '12px', border: '1px solid #E5E5E5', borderRadius: '8px', fontSize: '14px', fontFamily: '"Noto Sans JP"', outline: 'none', background: '#FFF' };

  // フォームの中身（PC/Mobile共通で利用できるように修正）
  const renderFormFields = (isMobile: boolean) => (
    <div style={{
      width: '100%', display: 'flex', flexDirection: 'column', gap: '20px',
      background: '#FFF', borderRadius: '16px', border: '1px solid #E5E5E5',
      padding: '20px 30px'
    }}>
      {/* 氏名 */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '16px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={labelStyle}>姓<span style={requiredStyle}>（必須）</span></label>
          <input type="text" placeholder="山田" style={inputStyle} value={formData.lastName} onChange={(e)=>handleInputChange('lastName', e.target.value)} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={labelStyle}>名<span style={requiredStyle}>（必須）</span></label>
          <input type="text" placeholder="太郎" style={inputStyle} value={formData.firstName} onChange={(e)=>handleInputChange('firstName', e.target.value)} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>会社名<span style={requiredStyle}>（必須）</span></label>
        <input type="text" placeholder="ABC株式会社" style={inputStyle} value={formData.company} onChange={(e)=>handleInputChange('company', e.target.value)} />
      </div>

      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '16px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={labelStyle}>部署名<span style={requiredStyle}>（必須）</span></label>
          <input type="text" placeholder="法人営業部" style={inputStyle} value={formData.department} onChange={(e)=>handleInputChange('department', e.target.value)} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={labelStyle}>役職<span style={requiredStyle}>（必須）</span></label>
          <input type="text" placeholder="営業部長" style={inputStyle} value={formData.position} onChange={(e)=>handleInputChange('position', e.target.value)} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>メールアドレス<span style={requiredStyle}>（必須）</span></label>
        <input type="email" placeholder="ABC.1234@123.co.jp" style={inputStyle} value={formData.email} onChange={(e)=>handleInputChange('email', e.target.value)} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>電話番号<span style={requiredStyle}>（必須）</span></label>
        <input type="tel" placeholder="080-1234-5678" style={inputStyle} value={formData.phone} onChange={(e)=>handleInputChange('phone', e.target.value)} />
      </div>

      {/* お問い合わせ内容（ドロップダウン） */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', position: 'relative' }} ref={dropdownRef}>
        <label style={labelStyle}>お問い合わせ内容<span style={requiredStyle}>（必須）</span></label>
        <div
          onTouchEnd={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
          }}
          style={{ ...inputStyle, border: '1px solid #4D9FFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
        >
          <span style={{ color: formData.inquiryType === '選択してください。' ? '#A0A0A0' : '#000' }}>{formData.inquiryType}</span>
          <svg style={{ width: '24px', height: '24px', transition: 'transform 0.3s', transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="#6C6C6C" strokeWidth="2">
            <path d="M6 9L12 15L18 9" />
          </svg>
        </div>
        {isDropdownOpen && (
          <div style={{ position: 'absolute', left: 0, right: 0, top: '100%', marginTop: '4px', background: '#FFF', border: '1px solid #E5E5E5', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 50, padding: '8px' }}>
            {menuItems.map((item, index) => (
              <div 
                key={index}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleInputChange('inquiryType', item); 
                  setIsDropdownOpen(false);
                }}
                onClick={(e) => { 
                  e.stopPropagation();
                  handleInputChange('inquiryType', item); 
                  setIsDropdownOpen(false); 
                }} 
                style={{ padding: '12px', cursor: 'pointer', fontSize: '14px', fontFamily: '"Noto Sans JP"' }} 
                onMouseEnter={(e) => e.currentTarget.style.background = '#F5F5F5'} 
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>内容詳細</label>
        <textarea
          style={{ ...inputStyle, height: '160px', resize: 'none' }}
          value={formData.inquiryDetail}
          onChange={(e) => handleInputChange('inquiryDetail', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '8px 0' }}>
        <input type="checkbox" id={isMobile ? "check-mobile" : "check-pc"} checked={formData.agreedToTerms} onChange={(e) => handleInputChange('agreedToTerms', e.target.checked)} style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: '#6017FF' }} />
        <label htmlFor={isMobile ? "check-mobile" : "check-pc"} style={{ fontSize: '11px', fontFamily: '"Noto Sans JP"', color: '#666', lineHeight: '1.5', cursor: 'pointer' }}>
          このフォームから送信することで、利用規約、個人情報の取り扱いに同意したものとみなします。
        </label>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          style={{ width: isMobile ? '311px' : '183px', height: '48px', borderRadius: '300px', background: isSubmitting ? '#ccc' : '#5004F5', color: '#FFF', fontWeight: 700, border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
        >
          {isSubmitting ? '送信中...' : '送信'}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* モバイル：About と同じく padding のみ、中身は中央 */}
      <section className="w-full md:hidden bg-[#5004F5]" style={{ paddingTop: '60px', paddingBottom: '60px', paddingLeft: '16px', paddingRight: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <h2 style={{ color: '#FFF', fontSize: '24px', fontWeight: 700 }}>お問い合わせ</h2>
          <div style={{ height: '24px' }} /><div style={{ width: '44px', height: '4px', background: '#FFF' }} />
          <div style={{ height: '60px' }} />
          {renderFormFields(true)}
        </div>
      </section>

      {/* PC：About と同じ構造（flex + justify-center + max-w で中央配置） */}
      <section className="hidden md:flex w-full justify-center bg-[#5004F5]" style={{ paddingTop: '66px', paddingBottom: '66px' }}>
        <div className="w-full md:max-w-[1440px]" style={{ paddingLeft: '120px', paddingRight: '120px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <h2 style={{ color: '#FFF', fontSize: '36px', fontWeight: 700 }}>お問い合わせ</h2>
            <div style={{ height: '24px' }} /><div style={{ width: '44px', height: '4px', background: '#FFF' }} />
            <div style={{ height: '80px' }} />
            <div style={{ width: '100%', maxWidth: '701px' }}>
              {renderFormFields(false)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}











