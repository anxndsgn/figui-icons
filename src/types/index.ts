import { SVGProps } from 'react';

// Base icon props interface
export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

// Icon size variants
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

// Icon configuration
export interface IconConfig {
  name: string;
  viewBox?: string;
  path: string;
  defaultSize?: number;
}
