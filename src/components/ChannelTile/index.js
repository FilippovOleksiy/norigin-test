import React from 'react';

import { Tile, TileContent, Image } from './styles';

export default ({ logo }) => {
  return (
    <Tile>
      <TileContent>{logo && <Image src={logo} />}</TileContent>
    </Tile>
  );
};
