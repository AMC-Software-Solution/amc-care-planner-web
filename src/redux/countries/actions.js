const actions = {
  SINGLE_COUNTRY_BEGIN: 'SINGLE_COUNTRY_BEGIN',
  SINGLE_COUNTRY_SUCCESS: 'SINGLE_COUNTRY_SUCCESS',
  SINGLE_COUNTRY_ERR: 'SINGLE_COUNTRY_ERR',

  FILTER_COUNTRY_BEGIN: 'FILTER_COUNTRY_BEGIN',
  FILTER_COUNTRY_SUCCESS: 'FILTER_COUNTRY_SUCCESS',
  FILTER_COUNTRY_ERR: 'FILTER_COUNTRY_ERR',

  SORTING_COUNTRY_BEGIN: 'SORTING_COUNTRY_BEGIN',
  SORTING_COUNTRY_SUCCESS: 'SORTING_COUNTRY_SUCCESS',
  SORTING_COUNTRY_ERR: 'SORTING_COUNTRY_ERR',

  singleCountryBegin: () => {
    return {
      type: actions.SINGLE_COUNTRY_BEGIN,
    };
  },

  singleCountrySuccess: data => {
    return {
      type: actions.SINGLE_COUNTRY_SUCCESS,
      data,
    };
  },

  singleCountryErr: err => {
    return {
      type: actions.SINGLE_COUNTRY_ERR,
      err,
    };
  },

  filterCountryBegin: () => {
    return {
      type: actions.FILTER_COUNTRY_BEGIN,
    };
  },

  filterCountrySuccess: data => {
    return {
      type: actions.FILTER_COUNTRY_SUCCESS,
      data,
    };
  },

  filterCountryErr: err => {
    return {
      type: actions.FILTER_COUNTRY_ERR,
      err,
    };
  },

  sortingCountryBegin: () => {
    return {
      type: actions.SORTING_COUNTRY_BEGIN,
    };
  },

  sortingCountrySuccess: data => {
    return {
      type: actions.SORTING_COUNTRY_SUCCESS,
      data,
    };
  },

  sortingCountryErr: err => {
    return {
      type: actions.SORTING_COUNTRY_ERR,
      err,
    };
  },
};

export default actions;
