import React from 'react';
import { Icon16 } from '../../components/Icon16';
import { IconProps } from '../../types';

export const Heart: React.FC<IconProps> = (props) => {
  return (
    <Icon16 {...props}>
      <path d='M13.6 2.4c-1.5-1.5-4-1.5-5.6 0L8 2.4l-.7-.7c-1.5-1.5-4-1.5-5.6 0-1.5 1.5-1.5 4 0 5.6L8 13.6l6.3-6.3c1.5-1.5 1.5-4 0-5.6z' />
    </Icon16>
  );
};

export default Heart;
