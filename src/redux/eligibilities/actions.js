const actions = {
  SINGLE_ELIGIBILITY_BEGIN: 'SINGLE_ELIGIBILITY_BEGIN',
  SINGLE_ELIGIBILITY_SUCCESS: 'SINGLE_ELIGIBILITY_SUCCESS',
  SINGLE_ELIGIBILITY_ERR: 'SINGLE_ELIGIBILITY_ERR',

  FILTER_ELIGIBILITY_BEGIN: 'FILTER_ELIGIBILITY_BEGIN',
  FILTER_ELIGIBILITY_SUCCESS: 'FILTER_ELIGIBILITY_SUCCESS',
  FILTER_ELIGIBILITY_ERR: 'FILTER_ELIGIBILITY_ERR',

  SORTING_ELIGIBILITY_BEGIN: 'SORTING_ELIGIBILITY_BEGIN',
  SORTING_ELIGIBILITY_SUCCESS: 'SORTING_ELIGIBILITY_SUCCESS',
  SORTING_ELIGIBILITY_ERR: 'SORTING_ELIGIBILITY_ERR',

  singleEligibilityBegin: () => {
    return {
      type: actions.SINGLE_ELIGIBILITY_BEGIN,
    };
  },

  singleEligibilitySuccess: data => {
    return {
      type: actions.SINGLE_ELIGIBILITY_SUCCESS,
      data,
    };
  },

  singleEligibilityErr: err => {
    return {
      type: actions.SINGLE_ELIGIBILITY_ERR,
      err,
    };
  },

  filterEligibilityBegin: () => {
    return {
      type: actions.FILTER_ELIGIBILITY_BEGIN,
    };
  },

  filterEligibilitySuccess: data => {
    return {
      type: actions.FILTER_ELIGIBILITY_SUCCESS,
      data,
    };
  },

  filterEligibilityErr: err => {
    return {
      type: actions.FILTER_ELIGIBILITY_ERR,
      err,
    };
  },

  sortingEligibilityBegin: () => {
    return {
      type: actions.SORTING_ELIGIBILITY_BEGIN,
    };
  },

  sortingEligibilitySuccess: data => {
    return {
      type: actions.SORTING_ELIGIBILITY_SUCCESS,
      data,
    };
  },

  sortingEligibilityErr: err => {
    return {
      type: actions.SORTING_ELIGIBILITY_ERR,
      err,
    };
  },
};

export default actions;
