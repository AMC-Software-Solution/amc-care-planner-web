import actions from './actions';

const {
  SINGLE_TIMESHEET_SUCCESS,
  SINGLE_TIMESHEET_ERR,

  TIMESHEETS_SUCCESS,
  TIMESHEETS_ERR,
} = actions;

const initialStateFilter = {
  data: null,
  loading: false,
  error: null,
};

const timesheetsReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case TIMESHEETS_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case TIMESHEETS_ERR:
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

const SingleTimesheetReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
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

export { SingleTimesheetReducer, timesheetsReducer };
