export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const EPG = 'EPG';
export const EPG_SUCCESS = 'EPG_SUCCESS';
export const EPG_FAIL = 'EPG_FAIL';
export const UPDATE_CHANNELS = 'UPDATE_CHANNELS';
export const UPDATE_PICKED_DATA = 'UPDATE_PICKED_DATA';

export const updateSchedule = (schedule) => ({
  type: UPDATE_SCHEDULE,
  payload: schedule,
});

export const loadEPG = () => {
  return {
    types: [EPG, EPG_SUCCESS, EPG_FAIL],
    payload: {
      request: {
        url: '/epg',
      },
    },
  };
};

export const updateChanels = (channels) => ({
  type: UPDATE_CHANNELS,
  payload: channels,
});

export const updatePickedData = (pickedData) => ({
  type: UPDATE_PICKED_DATA,
  payload: pickedData,
});
