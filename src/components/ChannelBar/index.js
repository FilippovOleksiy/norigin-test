import React from 'react';

import ChannelTile from '../ChannelTile';

import { Container } from './styles';

const generateChannelTile = (channels) =>
  channels.map((channel) => (
    <ChannelTile
      key={channel.id}
      {...{
        logo: channel.images.logo,
      }}
    />
  ));

export default ({ channels }) => {
  return <Container>{generateChannelTile(channels)}</Container>;
};
