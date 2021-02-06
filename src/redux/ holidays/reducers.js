import actions from './actions';

const {
  SINGLE_HOLIDAY_SUCCESS,
  SINGLE_HOLIDAY_ERR,

  HOLIDAYS_SUCCESS,
  HOLIDAYS_ERR,
} = actions;

const initialStateFilter = {
  data: null,
  loading: false,
  error: null,
};

const holidaysReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case HOLIDAYS_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case HOLIDAYS_ERR:
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

const SingleHolidayReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_HOLIDAY_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_HOLIDAY_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleHolidayReducer, holidaysReducer };
