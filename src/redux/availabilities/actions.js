const actions = {
  SINGLE_AVAILABILITY_BEGIN: 'SINGLE_AVAILABILITY_BEGIN',
  SINGLE_AVAILABILITY_SUCCESS: 'SINGLE_AVAILABILITY_SUCCESS',
  SINGLE_AVAILABILITY_ERR: 'SINGLE_AVAILABILITY_ERR',

  FILTER_AVAILABILITY_BEGIN: 'FILTER_AVAILABILITY_BEGIN',
  FILTER_AVAILABILITY_SUCCESS: 'FILTER_AVAILABILITY_SUCCESS',
  FILTER_AVAILABILITY_ERR: 'FILTER_AVAILABILITY_ERR',

  SORTING_AVAILABILITY_BEGIN: 'SORTING_AVAILABILITY_BEGIN',
  SORTING_AVAILABILITY_SUCCESS: 'SORTING_AVAILABILITY_SUCCESS',
  SORTING_AVAILABILITY_ERR: 'SORTING_AVAILABILITY_ERR',

  singleAvailabilityBegin: () => {
    return {
      type: actions.SINGLE_AVAILABILITY_BEGIN,
    };
  },

  singleAvailabilitySuccess: data => {
    return {
      type: actions.SINGLE_AVAILABILITY_SUCCESS,
      data,
    };
  },

  singleAvailabilityErr: err => {
    return {
      type: actions.SINGLE_AVAILABILITY_ERR,
      err,
    };
  },

  filterAvailabilityBegin: () => {
    return {
      type: actions.FILTER_AVAILABILITY_BEGIN,
    };
  },

  filterAvailabilitySuccess: data => {
    return {
      type: actions.FILTER_AVAILABILITY_SUCCESS,
      data,
    };
  },

  filterAvailabilityErr: err => {
    return {
      type: actions.FILTER_AVAILABILITY_ERR,
      err,
    };
  },

  sortingAvailabilityBegin: () => {
    return {
      type: actions.SORTING_AVAILABILITY_BEGIN,
    };
  },

  sortingAvailabilitySuccess: data => {
    return {
      type: actions.SORTING_AVAILABILITY_SUCCESS,
      data,
    };
  },

  sortingAvailabilityErr: err => {
    return {
      type: actions.SORTING_AVAILABILITY_ERR,
      err,
    };
  },
};

export default actions;
