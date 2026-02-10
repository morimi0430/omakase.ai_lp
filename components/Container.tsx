import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * 左右の余白を共通化。モバイル 16px / PC 120px。
 * globals.css の .lp-container で指定（* リセットに負けないため）。
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`lp-container ${className}`.trim()}>
      {children}
    </div>
  );
}