import React from 'react';
import { Icon16 } from '../../components/Icon16';
import { IconProps } from '../../types';

export const User: React.FC<IconProps> = (props) => {
  return (
    <Icon16 {...props}>
      <path d='M13.5 14v-1.5c0-1.1-.9-2-2-2h-7c-1.1 0-2 .9-2 2V14' />
      <circle cx='8' cy='5' r='2.5' />
    </Icon16>
  );
};

export default User;
