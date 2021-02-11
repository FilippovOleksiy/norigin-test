import React from 'react';

import { HoursTile, Pointer } from './styles';

export default ({ hours, minutes }) => {
  return (
    <HoursTile width={200}>
      {hours}:{minutes}
      <Pointer />
    </HoursTile>
  );
};
