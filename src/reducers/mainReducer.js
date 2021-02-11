import {
  UPDATE_SCHEDULE,
  UPDATE_CHANNELS,
  UPDATE_PICKED_DATA,
} from '../actions';

const initState = {
  schedule: { dates: [], hours: [] },
  channels: [
    {
      id: '',
      images: { logo: '' },
      title: '',
      schedules: [{ title: '', end: '', start: '' }],
    },
  ],
  pickedData: [
    {
      id: '',
      images: { logo: '' },
      title: '',
      schedules: [{ title: '', end: '', start: '' }],
    },
  ],
};

function mainReducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_SCHEDULE:
      return {
        ...state,
        schedule: action.payload,
      };
    case UPDATE_CHANNELS:
      return {
        ...state,
        channels: action.payload,
      };
    case UPDATE_PICKED_DATA:
      return {
        ...state,
        pickedData: action.payload,
      };

    default:
      return state;
  }
}

export default mainReducer;
