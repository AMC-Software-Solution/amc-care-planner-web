const actions = {
  SINGLE_EMPLOYEE_BEGIN: 'SINGLE_EMPLOYEE_BEGIN',
  SINGLE_EMPLOYEE_SUCCESS: 'SINGLE_EMPLOYEE_SUCCESS',
  SINGLE_EMPLOYEE_ERR: 'SINGLE_EMPLOYEE_ERR',

  FILTER_EMPLOYEE_BEGIN: 'FILTER_EMPLOYEE_BEGIN',
  FILTER_EMPLOYEE_SUCCESS: 'FILTER_EMPLOYEE_SUCCESS',
  FILTER_EMPLOYEE_ERR: 'FILTER_EMPLOYEE_ERR',

  SORTING_EMPLOYEE_BEGIN: 'SORTING_EMPLOYEE_BEGIN',
  SORTING_EMPLOYEE_SUCCESS: 'SORTING_EMPLOYEE_SUCCESS',
  SORTING_EMPLOYEE_ERR: 'SORTING_EMPLOYEE_ERR',

  singleEmployeeBegin: () => {
    return {
      type: actions.SINGLE_EMPLOYEE_BEGIN,
    };
  },

  singleEmployeeSuccess: data => {
    return {
      type: actions.SINGLE_EMPLOYEE_SUCCESS,
      data,
    };
  },

  singleEmployeeErr: err => {
    return {
      type: actions.SINGLE_EMPLOYEE_ERR,
      err,
    };
  },

  filterEmployeeBegin: () => {
    return {
      type: actions.FILTER_EMPLOYEE_BEGIN,
    };
  },

  filterEmployeeSuccess: data => {
    return {
      type: actions.FILTER_EMPLOYEE_SUCCESS,
      data,
    };
  },

  filterEmployeeErr: err => {
    return {
      type: actions.FILTER_EMPLOYEE_ERR,
      err,
    };
  },

  sortingEmployeeBegin: () => {
    return {
      type: actions.SORTING_EMPLOYEE_BEGIN,
    };
  },

  sortingEmployeeSuccess: data => {
    return {
      type: actions.SORTING_EMPLOYEE_SUCCESS,
      data,
    };
  },

  sortingEmployeeErr: err => {
    return {
      type: actions.SORTING_EMPLOYEE_ERR,
      err,
    };
  },
};

export default actions;
