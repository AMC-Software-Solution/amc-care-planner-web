const actions = {
  SINGLE_EMPLOYEEHOLIDAY_BEGIN: 'SINGLE_EMPLOYEEHOLIDAY_BEGIN',
  SINGLE_EMPLOYEEHOLIDAY_SUCCESS: 'SINGLE_EMPLOYEEHOLIDAY_SUCCESS',
  SINGLE_EMPLOYEEHOLIDAY_ERR: 'SINGLE_EMPLOYEEHOLIDAY_ERR',

  FILTER_EMPLOYEEHOLIDAY_BEGIN: 'FILTER_EMPLOYEEHOLIDAY_BEGIN',
  FILTER_EMPLOYEEHOLIDAY_SUCCESS: 'FILTER_EMPLOYEEHOLIDAY_SUCCESS',
  FILTER_EMPLOYEEHOLIDAY_ERR: 'FILTER_EMPLOYEEHOLIDAY_ERR',

  SORTING_EMPLOYEEHOLIDAY_BEGIN: 'SORTING_EMPLOYEEHOLIDAY_BEGIN',
  SORTING_EMPLOYEEHOLIDAY_SUCCESS: 'SORTING_EMPLOYEEHOLIDAY_SUCCESS',
  SORTING_EMPLOYEEHOLIDAY_ERR: 'SORTING_EMPLOYEEHOLIDAY_ERR',

  singleEmployeeHolidayBegin: () => {
    return {
      type: actions.SINGLE_EMPLOYEEHOLIDAY_BEGIN,
    };
  },

  singleEmployeeHolidaySuccess: data => {
    return {
      type: actions.SINGLE_EMPLOYEEHOLIDAY_SUCCESS,
      data,
    };
  },

  singleEmployeeHolidayErr: err => {
    return {
      type: actions.SINGLE_EMPLOYEEHOLIDAY_ERR,
      err,
    };
  },

  filterEmployeeHolidayBegin: () => {
    return {
      type: actions.FILTER_EMPLOYEEHOLIDAY_BEGIN,
    };
  },

  filterEmployeeHolidaySuccess: data => {
    return {
      type: actions.FILTER_EMPLOYEEHOLIDAY_SUCCESS,
      data,
    };
  },

  filterEmployeeHolidayErr: err => {
    return {
      type: actions.FILTER_EMPLOYEEHOLIDAY_ERR,
      err,
    };
  },

  sortingEmployeeHolidayBegin: () => {
    return {
      type: actions.SORTING_EMPLOYEEHOLIDAY_BEGIN,
    };
  },

  sortingEmployeeHolidaySuccess: data => {
    return {
      type: actions.SORTING_EMPLOYEEHOLIDAY_SUCCESS,
      data,
    };
  },

  sortingEmployeeHolidayErr: err => {
    return {
      type: actions.SORTING_EMPLOYEEHOLIDAY_ERR,
      err,
    };
  },
};

export default actions;
