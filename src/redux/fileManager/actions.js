const actions = {
  FM_DATA_BEGIN: 'FM_DATA_BEGIN',
  FM_DATA_SUCCESS: 'FM_DATA_SUCCESS',
  FM_DATA_ERR: 'FM_DATA_ERR',

  FM_DATA_RECEIVED_BEGIN: 'FM_DATA_RECEIVED_BEGIN',
  FM_DATA_RECEIVED_SUCCESS: 'FM_DATA_RECEIVED_SUCCESS',
  FM_DATA_RECEIVED_ERR: 'FM_DATA_RECEIVED_ERR',

  fmDataReceivedBegin: () => {
    return {
      type: actions.FM_DATA_RECEIVED_BEGIN,
    };
  },

  fmDataReceivedSuccess: data => {
    return {
      type: actions.FM_DATA_RECEIVED_SUCCESS,
      data,
    };
  },

  fmDataReceivedErr: err => {
    return {
      type: actions.FM_DATA_RECEIVED_ERR,
      err,
    };
  },

  fmDataBegin: () => {
    return {
      type: actions.FM_DATA_BEGIN,
    };
  },

  fmDataSuccess: data => {
    return {
      type: actions.FM_DATA_SUCCESS,
      data,
    };
  },

  fmDataErr: err => {
    return {
      type: actions.FM_DATA_ERR,
      err,
    };
  },
};

export default actions;
