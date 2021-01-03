const actions = {
  SINGLE_COMMUNICATION_BEGIN: 'SINGLE_COMMUNICATION_BEGIN',
  SINGLE_COMMUNICATION_SUCCESS: 'SINGLE_COMMUNICATION_SUCCESS',
  SINGLE_COMMUNICATION_ERR: 'SINGLE_COMMUNICATION_ERR',

  FILTER_COMMUNICATION_BEGIN: 'FILTER_COMMUNICATION_BEGIN',
  FILTER_COMMUNICATION_SUCCESS: 'FILTER_COMMUNICATION_SUCCESS',
  FILTER_COMMUNICATION_ERR: 'FILTER_COMMUNICATION_ERR',

  SORTING_COMMUNICATION_BEGIN: 'SORTING_COMMUNICATION_BEGIN',
  SORTING_COMMUNICATION_SUCCESS: 'SORTING_COMMUNICATION_SUCCESS',
  SORTING_COMMUNICATION_ERR: 'SORTING_COMMUNICATION_ERR',

  singleCommunicationBegin: () => {
    return {
      type: actions.SINGLE_COMMUNICATION_BEGIN,
    };
  },

  singleCommunicationSuccess: data => {
    return {
      type: actions.SINGLE_COMMUNICATION_SUCCESS,
      data,
    };
  },

  singleCommunicationErr: err => {
    return {
      type: actions.SINGLE_COMMUNICATION_ERR,
      err,
    };
  },

  filterCommunicationBegin: () => {
    return {
      type: actions.FILTER_COMMUNICATION_BEGIN,
    };
  },

  filterCommunicationSuccess: data => {
    return {
      type: actions.FILTER_COMMUNICATION_SUCCESS,
      data,
    };
  },

  filterCommunicationErr: err => {
    return {
      type: actions.FILTER_COMMUNICATION_ERR,
      err,
    };
  },

  sortingCommunicationBegin: () => {
    return {
      type: actions.SORTING_COMMUNICATION_BEGIN,
    };
  },

  sortingCommunicationSuccess: data => {
    return {
      type: actions.SORTING_COMMUNICATION_SUCCESS,
      data,
    };
  },

  sortingCommunicationErr: err => {
    return {
      type: actions.SORTING_COMMUNICATION_ERR,
      err,
    };
  },
};

export default actions;
