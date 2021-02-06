const actions = {
  SINGLE_HOLIDAY_SUCCESS: 'SINGLE_HOLIDAY_SUCCESS',
  SINGLE_HOLIDAY_ERR: 'SINGLE_HOLIDAY_ERR',

  HOLIDAYS_SUCCESS: 'HOLIDAYS_SUCCESS',
  HOLIDAYS_ERR: 'HOLIDAYS_ERR',

  singleHolidySuccess: data => {
    return {
      type: actions.SINGLE_HOLIDAY_SUCCESS,
      data,
    };
  },

  singleHolidayErr: err => {
    return {
      type: actions.SINGLE_HOLIDAY_ERR,
      err,
    };
  },

  holidaysSuccess: data => {
    return {
      type: actions.HOLIDAYS_SUCCESS,
      data,
    };
  },

  holidaysErr: err => {
    return {
      type: actions.HOLIDAYS_ERR,
      err,
    };
  },
};

export default actions;
