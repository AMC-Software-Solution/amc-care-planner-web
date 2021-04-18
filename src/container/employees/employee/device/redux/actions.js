const actions = {
  SINGLE_DEVICE_BEGIN: 'SINGLE_DEVICE_BEGIN',
  SINGLE_DEVICE_SUCCESS: 'SINGLE_DEVICE_SUCCESS',
  SINGLE_DEVICE_ERR: 'SINGLE_DEVICE_ERR',

  FILTER_DEVICE_BEGIN: 'FILTER_DEVICE_BEGIN',
  FILTER_DEVICE_SUCCESS: 'FILTER_DEVICE_SUCCESS',
  FILTER_DEVICE_ERR: 'FILTER_DEVICE_ERR',

  SORTING_DEVICE_BEGIN: 'SORTING_DEVICE_BEGIN',
  SORTING_DEVICE_SUCCESS: 'SORTING_DEVICE_SUCCESS',
  SORTING_DEVICE_ERR: 'SORTING_DEVICE_ERR',

  singleDeviceBegin: () => {
    return {
      type: actions.SINGLE_DEVICE_BEGIN,
    };
  },

  singleDeviceSuccess: data => {
    return {
      type: actions.SINGLE_DEVICE_SUCCESS,
      data,
    };
  },

  singleDeviceErr: err => {
    return {
      type: actions.SINGLE_DEVICE_ERR,
      err,
    };
  },

  filterDeviceBegin: () => {
    return {
      type: actions.FILTER_DEVICE_BEGIN,
    };
  },

  filterDeviceSuccess: data => {
    return {
      type: actions.FILTER_DEVICE_SUCCESS,
      data,
    };
  },

  filterDeviceErr: err => {
    return {
      type: actions.FILTER_DEVICE_ERR,
      err,
    };
  },

  sortingDeviceBegin: () => {
    return {
      type: actions.SORTING_DEVICE_BEGIN,
    };
  },

  sortingDeviceSuccess: data => {
    return {
      type: actions.SORTING_DEVICE_SUCCESS,
      data,
    };
  },

  sortingDeviceErr: err => {
    return {
      type: actions.SORTING_DEVICE_ERR,
      err,
    };
  },
};

export default actions;
