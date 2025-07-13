import React from 'react';
import { Icon } from '../components/Icon';
import { IconProps } from '../types';

export const Heart: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
    </Icon>
  );
};

export default Heart;
