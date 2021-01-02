import actions from './actions';
import staticData from '../../demoData/timesheet.json';

const {
  SINGLE_TIMESHEET_BEGIN,
  SINGLE_TIMESHEET_SUCCESS,
  SINGLE_TIMESHEET_ERR,

  FILTER_TIMESHEET_BEGIN,
  FILTER_TIMESHEET_SUCCESS,
  FILTER_TIMESHEET_ERR,

  SORTING_TIMESHEET_BEGIN,
  SORTING_TIMESHEET_SUCCESS,
  SORTING_TIMESHEET_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const timesheetReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_TIMESHEET_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_TIMESHEET_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_TIMESHEET_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_TIMESHEET_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_TIMESHEET_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_TIMESHEET_ERR:
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

const SingleTimesheetReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_TIMESHEET_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_TIMESHEET_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_TIMESHEET_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleTimesheetReducer, timesheetReducer };
