const actions = {
  SINGLE_EMPLOYEELOCATION_BEGIN: 'SINGLE_EMPLOYEELOCATION_BEGIN',
  SINGLE_EMPLOYEELOCATION_SUCCESS: 'SINGLE_EMPLOYEELOCATION_SUCCESS',
  SINGLE_EMPLOYEELOCATION_ERR: 'SINGLE_EMPLOYEELOCATION_ERR',

  FILTER_EMPLOYEELOCATION_BEGIN: 'FILTER_EMPLOYEELOCATION_BEGIN',
  FILTER_EMPLOYEELOCATION_SUCCESS: 'FILTER_EMPLOYEELOCATION_SUCCESS',
  FILTER_EMPLOYEELOCATION_ERR: 'FILTER_EMPLOYEELOCATION_ERR',

  SORTING_EMPLOYEELOCATION_BEGIN: 'SORTING_EMPLOYEELOCATION_BEGIN',
  SORTING_EMPLOYEELOCATION_SUCCESS: 'SORTING_EMPLOYEELOCATION_SUCCESS',
  SORTING_EMPLOYEELOCATION_ERR: 'SORTING_EMPLOYEELOCATION_ERR',

  singleEmployeeLocationBegin: () => {
    return {
      type: actions.SINGLE_EMPLOYEELOCATION_BEGIN,
    };
  },

  singleEmployeeLocationSuccess: data => {
    return {
      type: actions.SINGLE_EMPLOYEELOCATION_SUCCESS,
      data,
    };
  },

  singleEmployeeLocationErr: err => {
    return {
      type: actions.SINGLE_EMPLOYEELOCATION_ERR,
      err,
    };
  },

  filterEmployeeLocationBegin: () => {
    return {
      type: actions.FILTER_EMPLOYEELOCATION_BEGIN,
    };
  },

  filterEmployeeLocationSuccess: data => {
    return {
      type: actions.FILTER_EMPLOYEELOCATION_SUCCESS,
      data,
    };
  },

  filterEmployeeLocationErr: err => {
    return {
      type: actions.FILTER_EMPLOYEELOCATION_ERR,
      err,
    };
  },

  sortingEmployeeLocationBegin: () => {
    return {
      type: actions.SORTING_EMPLOYEELOCATION_BEGIN,
    };
  },

  sortingEmployeeLocationSuccess: data => {
    return {
      type: actions.SORTING_EMPLOYEELOCATION_SUCCESS,
      data,
    };
  },

  sortingEmployeeLocationErr: err => {
    return {
      type: actions.SORTING_EMPLOYEELOCATION_ERR,
      err,
    };
  },
};

export default actions;
