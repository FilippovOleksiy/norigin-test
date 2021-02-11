import React from 'react';

import { Tile } from './styles';

export default ({ month, dayOfMonth, dayOfWeek }) => {
  return (
    <Tile>
      <div>{dayOfWeek}</div>
      <div>
        {dayOfMonth}.{month}
      </div>
    </Tile>
  );
};
