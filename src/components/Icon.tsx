import React from 'react';
import { IconProps } from '../types';

// Size mapping for predefined sizes
const sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

// Base Icon component
export const Icon: React.FC<IconProps & { children: React.ReactNode }> = ({
  size = 'md',
  color = 'currentColor',
  className = '',
  children,
  ...props
}) => {
  const iconSize =
    typeof size === 'string' ? sizeMap[size as keyof typeof sizeMap] : size;

  return (
    <svg
      width={iconSize}
      height={iconSize}
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

export default Icon;
