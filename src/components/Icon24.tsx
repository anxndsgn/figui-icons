import React from 'react';
import { IconProps } from '../types';

// Base Icon24 component optimized for 24px icons
export const Icon24: React.FC<IconProps & { children: React.ReactNode }> = ({
  size = 24,
  color = 'currentColor',
  className = '',
  children,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
};

export default Icon24;
