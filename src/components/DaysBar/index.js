import React from 'react';

import twoDigits from '../../utils/twoDigits';
import DayTile from '../DayTile';
import getDayOfWeek from '../../utils/getDayOfWeek';

import { Bar } from './styles';

const generateDaysTiles = (dates) =>
  dates.map(({ year, month, day }) => (
    <DayTile
      key={month + day}
      {...{
        month: twoDigits(month + 1),
        dayOfMonth: twoDigits(day),
        dayOfWeek: getDayOfWeek(new Date(year, month, day)),
      }}
    />
  ));

export default ({ dates }) => {
  return <Bar>{generateDaysTiles(dates)}</Bar>;
};
