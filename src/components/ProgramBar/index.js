import React from 'react';

import ProgramTile from '../ProgramTile';
import convertDateToObject from '../../utils/convertDateToObject';
import twoDigits from '../../utils/twoDigits';

import { Container } from './styles';

const minutesInPixels = 0.2;
const calculatePixels = (milliseconds, minutesInPixels) =>
  milliseconds / (1000 * 60 * minutesInPixels);

const generateProgramTiles = (schedules) =>
  schedules.map(({ start, end, title }) => {
    const startOptions = convertDateToObject(new Date(start));
    const endOptions = convertDateToObject(new Date(end));
    return (
      <ProgramTile
        key={start}
        {...{
          title,
          start: `${twoDigits(startOptions.hours)}:${twoDigits(
            startOptions.minutes
          )}`,
          end: `${twoDigits(endOptions.hours)}:${twoDigits(
            endOptions.minutes
          )}`,
          containerWidth: calculatePixels(
            endOptions.time - startOptions.time,
            minutesInPixels
          ),
        }}
      />
    );
  });

export default ({ schedules }) => {
  return <Container>{generateProgramTiles(schedules)}</Container>;
};
