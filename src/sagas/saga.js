import { takeEvery, put } from 'redux-saga/effects';
import {
  updateSchedule,
  updateChanels,
  EPG_SUCCESS,
  updatePickedData,
} from '../actions';
import generateDates from '../utils/generateDates';
import generateHours from '../utils/generateHours';
import convertDateToObject from '../utils/convertDateToObject';

const startDate = new Date(2018, 9, 26);
const hoursRange = [-4, 4];

const hoursToMilliseconds = (hours) => hours * 60 * 60 * 1000;

const filterChannels = (channels, timeRange) => {
  const filtered = [];
  channels.forEach((channel) => {
    const filteredSchedules = channel.schedules.filter(({ start, end }) => {
      const startOptions = convertDateToObject(new Date(start));
      const endOptions = convertDateToObject(new Date(end));
      let result = false;
      if (startOptions.time < timeRange[0] && endOptions.time > timeRange[1]) {
        result = true;
      } else if (
        startOptions.time >= timeRange[0] &&
        startOptions.time < timeRange[1]
      ) {
        result = true;
      }

      return result;
    });
    filtered.push({ ...channel, schedules: filteredSchedules });
  });

  return filtered;
};

function* fetchChannels({
  payload: {
    data: { channels },
  },
}) {
  yield put(updateChanels(channels));

  const dates = generateDates(startDate, [-4, 4]);
  const hours = generateHours(startDate, hoursRange);

  const startDateOptions = convertDateToObject(startDate);

  const timeRange = [
    startDateOptions.time + hoursToMilliseconds(hoursRange[0]),
    startDateOptions.time + hoursToMilliseconds(hoursRange[1]),
  ];

  yield put(updateSchedule({ dates, hours }));
  yield put(updatePickedData(filterChannels(channels, timeRange)));
}

export default function* rootSaga() {
  yield takeEvery(EPG_SUCCESS, fetchChannels);
}
