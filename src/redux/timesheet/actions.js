const actions = {
  SINGLE_TIMESHEET_BEGIN: 'SINGLE_TIMESHEET_BEGIN',
  SINGLE_TIMESHEET_SUCCESS: 'SINGLE_TIMESHEET_SUCCESS',
  SINGLE_TIMESHEET_ERR: 'SINGLE_TIMESHEET_ERR',

  FILTER_TIMESHEET_BEGIN: 'FILTER_TIMESHEET_BEGIN',
  FILTER_TIMESHEET_SUCCESS: 'FILTER_TIMESHEET_SUCCESS',
  FILTER_TIMESHEET_ERR: 'FILTER_TIMESHEET_ERR',

  SORTING_TIMESHEET_BEGIN: 'SORTING_TIMESHEET_BEGIN',
  SORTING_TIMESHEET_SUCCESS: 'SORTING_TIMESHEET_SUCCESS',
  SORTING_TIMESHEET_ERR: 'SORTING_TIMESHEET_ERR',

  singleTimesheetBegin: () => {
    return {
      type: actions.SINGLE_TIMESHEET_BEGIN,
    };
  },

  singleTimesheetSuccess: data => {
    return {
      type: actions.SINGLE_TIMESHEET_SUCCESS,
      data,
    };
  },

  singleTimesheetErr: err => {
    return {
      type: actions.SINGLE_TIMESHEET_ERR,
      err,
    };
  },

  filterTimesheetBegin: () => {
    return {
      type: actions.FILTER_TIMESHEET_BEGIN,
    };
  },

  filterTimesheetSuccess: data => {
    return {
      type: actions.FILTER_TIMESHEET_SUCCESS,
      data,
    };
  },

  filterTimesheetErr: err => {
    return {
      type: actions.FILTER_TIMESHEET_ERR,
      err,
    };
  },

  sortingTimesheetBegin: () => {
    return {
      type: actions.SORTING_TIMESHEET_BEGIN,
    };
  },

  sortingTimesheetSuccess: data => {
    return {
      type: actions.SORTING_TIMESHEET_SUCCESS,
      data,
    };
  },

  sortingTimesheetErr: err => {
    return {
      type: actions.SORTING_TIMESHEET_ERR,
      err,
    };
  },
};

export default actions;
