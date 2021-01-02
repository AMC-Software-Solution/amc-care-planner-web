import actions from './actions';
import staticData from '../../demoData/employeeHoliday.json';

const {
  SINGLE_EMPLOYEEHOLIDAY_BEGIN,
  SINGLE_EMPLOYEEHOLIDAY_SUCCESS,
  SINGLE_EMPLOYEEHOLIDAY_ERR,

  FILTER_EMPLOYEEHOLIDAY_BEGIN,
  FILTER_EMPLOYEEHOLIDAY_SUCCESS,
  FILTER_EMPLOYEEHOLIDAY_ERR,

  SORTING_EMPLOYEEHOLIDAY_BEGIN,
  SORTING_EMPLOYEEHOLIDAY_SUCCESS,
  SORTING_EMPLOYEEHOLIDAY_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const employeeHolidayReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_EMPLOYEEHOLIDAY_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_EMPLOYEEHOLIDAY_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_EMPLOYEEHOLIDAY_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_EMPLOYEEHOLIDAY_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_EMPLOYEEHOLIDAY_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_EMPLOYEEHOLIDAY_ERR:
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

const SingleEmployeeHolidayReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_EMPLOYEEHOLIDAY_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_EMPLOYEEHOLIDAY_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_EMPLOYEEHOLIDAY_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleEmployeeHolidayReducer, employeeHolidayReducer };
