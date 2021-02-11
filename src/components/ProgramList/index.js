import React from 'react';

import ProgramBar from '../ProgramBar';
import { Container } from './styles';

const generateProgramBars = (channels) =>
  channels.map((channel) => (
    <ProgramBar
      key={channel.id}
      {...{
        schedules: channel.schedules,
      }}
    />
  ));

export default ({ channels }) => {
  return <Container>{generateProgramBars(channels)}</Container>;
};
