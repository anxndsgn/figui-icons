import React from 'react';
import { Icon24 } from '../../components/Icon24';
import { IconProps } from '../../types';

export const User: React.FC<IconProps> = (props) => {
  return (
    <Icon24 {...props}>
      <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </Icon24>
  );
};

export default User;
