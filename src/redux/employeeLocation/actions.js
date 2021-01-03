const actions = {

  SINGLE_EMPLOYEE_LOCATION_SUCCESS: 'SINGLE_EMPLOYEE_LOCATION_SUCCESS',
  SINGLE_EMPLOYEE_LOCATION_ERR: 'SINGLE_EMPLOYEE_LOCATION_ERR',


  ALL_EMPLOYEE_LOCATION_SUCCESS: 'ALL_EMPLOYEE_LOCATION_SUCCESS',
  ALL_EMPLOYEE_LOCATION_ERR: 'ALL_EMPLOYEE_LOCATION_ERR',




  singleEmployeeLocationSuccess: data => {
    return {
      type: actions.SINGLE_EMPLOYEE_LOCATION_SUCCESS,
      data,
    };
  },

  singleEmployeeLocationErr: err => {
    return {
      type: actions.SINGLE_EMPLOYEE_LOCATION_ERR,
      err,
    };
  },


  allEmployeeLocationsSuccess: data => {
    return {
      type: actions.ALL_EMPLOYEE_LOCATION_SUCCESS,
      data,
    };
  },

  allEmployeeLocationsErr: err => {
    return {
      type: actions.ALL_EMPLOYEE_LOCATION_ERR,
      err,
    };
  },

  
};

export default actions;
