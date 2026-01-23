'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div 
      className={`bg-white cursor-pointer border transition-all w-full md:w-[1000px] ${
        isActive ? 'border-violet-200' : 'border-white hover:border-violet-200'
      }`}
      style={{ 
        minHeight: '62px',
        paddingTop: '16px',
        paddingRight: '20px',
        paddingBottom: '16px',
        paddingLeft: '20px',
        borderRadius: '16px'
      }}
      onClick={handleToggle}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 flex-1">
          <div className="text-violet-700 text-xl font-bold leading-loose">Q</div>
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