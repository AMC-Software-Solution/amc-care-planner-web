const actions = {
  SINGLE_TIMESHEET_SUCCESS: 'SINGLE_TIMESHEET_SUCCESS',
  SINGLE_TIMESHEET_ERR: 'SINGLE_TIMESHEET_ERR',

  TIMESHEETS_SUCCESS: 'TIMESHEETS_SUCCESS',
  TIMESHEETS_ERR: 'TIMESHEETS_ERR',

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

  TimesheetsSuccess: data => {
    return {
      type: actions.TIMESHEETS_SUCCESS,
      data,
    };
  },

  TimesheetsErr: err => {
    return {
      type: actions.TIMESHEETS_ERR,
      err,
    };
  },
};

export default actions;
