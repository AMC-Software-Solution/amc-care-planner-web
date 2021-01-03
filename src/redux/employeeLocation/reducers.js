import actions from './actions';
//import staticData from '../../demoData/employeeLocation.json';

const {
  SINGLE_EMPLOYEE_LOCATION_SUCCESS,
  SINGLE_EMPLOYEE_LOCATION_ERR,


  ALL_EMPLOYEE_LOCATION_SUCCESS,
  ALL_EMPLOYEE_LOCATION_ERR,
} = actions;

const initialStateFilter = {
  data: null,
  loading: false,
  error: null,
};

const employeeLocationReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
   
    case ALL_EMPLOYEE_LOCATION_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case ALL_EMPLOYEE_LOCATION_ERR:
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

const SingleEmployeeLocationReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_EMPLOYEE_LOCATION_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_EMPLOYEE_LOCATION_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleEmployeeLocationReducer, employeeLocationReducer };
