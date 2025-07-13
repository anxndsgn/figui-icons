import React from 'react';
import { IconProps } from '../types';

// Base Icon16 component optimized for 16px icons
export const Icon16: React.FC<IconProps & { children: React.ReactNode }> = ({
  size = 16,
  color = 'currentColor',
  className = '',
  children,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
};

export default Icon16;
