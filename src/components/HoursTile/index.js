import React from 'react';

import { HoursTile, Pointer } from './styles';

export default ({ hours, minutes }) => {
  return (
    <HoursTile>
      {hours}:{minutes}
      <Pointer />
    </HoursTile>
  );
};
