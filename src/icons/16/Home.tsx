import React from 'react';
import { Icon16 } from '../../components/Icon16';
import { IconProps } from '../../types';

export const Home: React.FC<IconProps> = (props) => {
  return (
    <Icon16 {...props}>
      <path d='M2 6l6-4.5L14 6v7.5c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5V6z' />
      <polyline points='6,15 6,9 10,9 10,15' />
    </Icon16>
  );
};

export default Home;
