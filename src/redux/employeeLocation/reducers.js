import actions from './actions';
import staticData from '../../demoData/employeeLocation.json';

const {
  SINGLE_EMPLOYEELOCTION_BEGIN,
  SINGLE_EMPLOYEELOCTION_SUCCESS,
  SINGLE_EMPLOYEELOCTION_ERR,

  FILTER_EMPLOYEELOCTION_BEGIN,
  FILTER_EMPLOYEELOCTION_SUCCESS,
  FILTER_EMPLOYEELOCTION_ERR,

  SORTING_EMPLOYEELOCTION_BEGIN,
  SORTING_EMPLOYEELOCTION_SUCCESS,
  SORTING_EMPLOYEELOCTION_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const employeeLocationReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_EMPLOYEELOCTION_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_EMPLOYEELOCTION_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_EMPLOYEELOCTION_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_EMPLOYEELOCTION_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_EMPLOYEELOCTION_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_EMPLOYEELOCTION_ERR:
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

const SingleEmployeeLocationReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_EMPLOYEELOCTION_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_EMPLOYEELOCTION_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_EMPLOYEELOCTION_ERR:
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
