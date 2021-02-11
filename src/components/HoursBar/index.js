import React from 'react';

import twoDigits from '../../utils/twoDigits';
import HoursTile from '../HoursTile';

import { Bar } from './styles';

const generateHoursTiles = (hours) =>
  hours.map((hoursValue) => (
    <HoursTile
      key={hoursValue}
      {...{ hours: twoDigits(hoursValue), minutes: '00' }}
    />
  ));

export default ({ hours }) => {
  return <Bar>{generateHoursTiles(hours)}</Bar>;
};
