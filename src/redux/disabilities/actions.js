const actions = {
  SINGLE_DISABILITY_BEGIN: 'SINGLE_DISABILITY_BEGIN',
  SINGLE_DISABILITY_SUCCESS: 'SINGLE_DISABILITY_SUCCESS',
  SINGLE_DISABILITY_ERR: 'SINGLE_DISABILITY_ERR',

  FILTER_DISABILITY_BEGIN: 'FILTER_DISABILITY_BEGIN',
  FILTER_DISABILITY_SUCCESS: 'FILTER_DISABILITY_SUCCESS',
  FILTER_DISABILITY_ERR: 'FILTER_DISABILITY_ERR',

  SORTING_DISABILITY_BEGIN: 'SORTING_DISABILITY_BEGIN',
  SORTING_DISABILITY_SUCCESS: 'SORTING_DISABILITY_SUCCESS',
  SORTING_DISABILITY_ERR: 'SORTING_DISABILITY_ERR',

  singleDisabilityBegin: () => {
    return {
      type: actions.SINGLE_DISABILITY_BEGIN,
    };
  },

  singleDisabilitySuccess: data => {
    return {
      type: actions.SINGLE_DISABILITY_SUCCESS,
      data,
    };
  },

  singleDisabilityErr: err => {
    return {
      type: actions.SINGLE_DISABILITY_ERR,
      err,
    };
  },

  filterDisabilityBegin: () => {
    return {
      type: actions.FILTER_DISABILITY_BEGIN,
    };
  },

  filterDisabilitySuccess: data => {
    return {
      type: actions.FILTER_DISABILITY_SUCCESS,
      data,
    };
  },

  filterDisabilityErr: err => {
    return {
      type: actions.FILTER_DISABILITY_ERR,
      err,
    };
  },

  sortingDisabilityBegin: () => {
    return {
      type: actions.SORTING_DISABILITY_BEGIN,
    };
  },

  sortingDisabilitySuccess: data => {
    return {
      type: actions.SORTING_DISABILITY_SUCCESS,
      data,
    };
  },

  sortingDisabilityErr: err => {
    return {
      type: actions.SORTING_DISABILITY_ERR,
      err,
    };
  },
};

export default actions;
