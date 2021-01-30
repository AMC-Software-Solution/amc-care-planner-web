const actions = {
  SINGLE_EMPLOYEE_SUCCESS: 'SINGLE_EMPLOYEE_SUCCESS',
  SINGLE_EMPLOYEE_ERR: 'SINGLE_EMPLOYEE_ERR',

  EMPLOYEES_SUCCESS: 'EMPLOYEES_SUCCESS',
  EMPLOYEES_ERR: 'EMPLOYEES_ERR',

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

  EmployeesSuccess: data => {
    return {
      type: actions.EMPLOYEES_SUCCESS,
      data,
    };
  },

  EmployeesErr: err => {
    return {
      type: actions.EMPLOYEES_ERR,
      err,
    };
  },
};

export default actions;
