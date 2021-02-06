import actions from './actions';
import { fetchAllHolidays, fetchSingleHoliday } from '../../config/dataService/holidayDataService';

const {
  singleHolidaySuccess,
  singleHolidayErr,

  HolidaysSuccess,
  HolidaysErr,
} = actions;

const getAllHolidays = employeeId => {
  return async dispatch => {
    try {
      const response = await fetchAllHolidays(employeeId);
      dispatch(HolidaysSuccess(response.data));
    } catch (err) {
      dispatch(HolidaysErr(err.toString()));
    }
  };
};

const getSingleHoliday = id => {
  return async dispatch => {
    try {
      const response = await fetchSingleHoliday(id);
      dispatch(singleHolidaySuccess(response.data));
    } catch (err) {
      dispatch(singleHolidayErr(err.toString()));
    }
  };
};

export { getAllHolidays, getSingleHoliday };
