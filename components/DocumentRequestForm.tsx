"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormData } from '@/types/form';

interface DocumentRequestFormProps {
  isMobile?: boolean;
}

export default function DocumentRequestForm({ isMobile = false }: DocumentRequestFormProps) {
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
    agreedToTerms: false
  });

  // ZapierのWebhook URL（API Route経由）
  const ZAPIER_WEBHOOK_URL = '/api/webhook/document';

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

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    // 必須項目チェック
    if (!formData.lastName || !formData.firstName || !formData.company || 
        !formData.department || !formData.position || !formData.email || 
        !formData.phone || !formData.agreedToTerms) {
      alert('必須項目をすべて入力してください。');
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
      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString('ja-JP', { 
            timeZone: 'Asia/Tokyo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          }),
          lastName: formData.lastName,
          firstName: formData.firstName,
          company: formData.company,
          department: formData.department,
          position: formData.position,
          email: formData.email,
          phone: formData.phone
        }),
      });

      if (response.ok) {
        // GTM dataLayer に送信（トリガー名 'form_submit_document_request' と一致）
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'form_submit_document_request',
            form_type: 'document_request',
            company: formData.company,
            department: formData.department,
          });
        }
        // GA4イベント送信
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit_document_request', {
            form_type: 'document_request',
            company: formData.company,
            department: formData.department
          });
        }

        // サンクスページに遷移
        router.push('/document-request/thank-you');
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('送信エラーレスポンス:', errorData);
        throw new Error('送信に失敗しました。');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      alert('送信に失敗しました。もう一度お試しください。');
      setIsSubmitting(false);
    }
  };

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
  
      {/* 同意チェック */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '8px 0' }}>
        <input
          type="checkbox"
          id={isMobile ? "check-mobile" : "check-pc"}
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
        <label htmlFor={isMobile ? "check-mobile" : "check-pc"} style={{
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