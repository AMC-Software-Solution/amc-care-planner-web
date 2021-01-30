import actions from './actions';

const {
  SINGLE_EMPLOYEE_SUCCESS,
  SINGLE_EMPLOYEE_ERR,

  EMPLOYEES_SUCCESS,
  EMPLOYEES_ERR,
} = actions;

const initialStateFilter = {
  data: null,
  loading: false,
  error: null,
};

const employeeReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case EMPLOYEES_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case EMPLOYEES_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const singleEmployeeReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_EMPLOYEE_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_EMPLOYEE_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { singleEmployeeReducer, employeeReducer };
