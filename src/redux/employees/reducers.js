import actions from './actions';
import staticData from '../../demoData/employees.json';

const {
  SINGLE_EMPLOYEE_BEGIN,
  SINGLE_EMPLOYEE_SUCCESS,
  SINGLE_EMPLOYEE_ERR,

  FILTER_EMPLOYEE_BEGIN,
  FILTER_EMPLOYEE_SUCCESS,
  FILTER_EMPLOYEE_ERR,

  SORTING_EMPLOYEE_BEGIN,
  SORTING_EMPLOYEE_SUCCESS,
  SORTING_EMPLOYEE_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const employeeReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_EMPLOYEE_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_EMPLOYEE_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_EMPLOYEE_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_EMPLOYEE_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_EMPLOYEE_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_EMPLOYEE_ERR:
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
  data: staticData,
  loading: false,
  error: null,
};

const SingleEmployeeReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_EMPLOYEE_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
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

export { SingleEmployeeReducer, employeeReducer };
