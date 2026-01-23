'use client';

import { useEffect, useState } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  const [padding, setPadding] = useState({ left: '16px', right: '16px' });

  useEffect(() => {
    const updatePadding = () => {
      if (window.innerWidth >= 768) {
        setPadding({ left: '120px', right: '120px' });
      } else {
        setPadding({ left: '16px', right: '16px' });
      }
    };

    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  return (
    <div 
      className={className}
      style={{
        paddingLeft: padding.left,
        paddingRight: padding.right
      }}
    >
      {children}
    </div>
  );
}