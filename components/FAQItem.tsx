'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  /** Qラベル・枠のアクセント色。未指定時は紫 */
  accentColor?: string;
}

export default function FAQItem({ question, answer, accentColor }: FAQItemProps) {
  const [isActive, setIsActive] = useState(false);
  const borderColor = accentColor ?? '#c4b5fd'; // violet-200
  const labelColor = accentColor ?? '#6d28d9'; // violet-700

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div 
      className="bg-white cursor-pointer border transition-all w-full md:w-[1000px]"
      style={{ 
        minHeight: '62px',
        paddingTop: '16px',
        paddingRight: '20px',
        paddingBottom: '16px',
        paddingLeft: '20px',
        borderRadius: '16px',
        borderWidth: '1px',
        borderColor: isActive ? borderColor : 'transparent',
        borderStyle: 'solid'
      }}
      onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.borderColor = borderColor; }}
      onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.borderColor = 'transparent'; }}
      onClick={handleToggle}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 flex-1">
          <div className="text-xl font-bold leading-loose" style={{ color: labelColor }}>Q</div>
          <div className="text-black text-base font-medium flex-1">{question || '質問がありません'}</div>
        </div>
        <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0 ml-4">
          <div className="absolute w-4 h-0.5 bg-black"></div>
          <div 
            className="absolute w-0.5 h-4 bg-black transition-transform duration-300"
            style={{
              transform: isActive ? 'rotate(90deg) scaleY(0)' : 'rotate(0deg) scaleY(1)'
            }}
          ></div>
        </div>
      </div>
      <div 
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: isActive ? '500px' : '0',
          paddingTop: isActive ? '16px' : '0'
        }}
      >
        <div className="flex gap-4">
          <div className="opacity-0 text-xl font-bold">Q</div>
          <div 
            className="text-black text-base font-normal leading-relaxed flex-1"
            dangerouslySetInnerHTML={{ __html: (answer || '回答がありません').replace(/\n/g, '<br/>') }}
          />
        </div>
      </div>
    </div>
  );
}