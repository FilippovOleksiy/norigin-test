import React from 'react';
import { useSelector } from 'react-redux';

import ChannelBar from '../ChannelBar';
import ProgramList from '../ProgramList';
import TranslateAnimation from '../TranslateAnimation';
import HoursBar from '../../components/HoursBar';

import { Container, TimePointer } from './styles';

export default () => {
  const { hours } = useSelector((state) => state.main.schedule);
  const pickedData = useSelector((state) => state.main.pickedData);

  return (
    <Container>
      <ChannelBar {...{ channels: pickedData }} />
      <TimePointer />
      <TranslateAnimation
        {...{ startPosition: 200, endPosition: -400, time: 100 }}
      >
        <HoursBar {...{ hours }} />
        <ProgramList {...{ channels: pickedData }}></ProgramList>
      </TranslateAnimation>
    </Container>
  );
};
