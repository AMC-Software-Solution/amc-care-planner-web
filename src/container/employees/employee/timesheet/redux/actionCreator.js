import actions from './actions';
import { fetchAllTimesheets, fetchSingleTimesheet } from '../../../../../config/dataService/timesheetDataService';

const {
  singleTimesheetSuccess,
  singleTimesheetErr,

  TimesheetsSuccess,
  TimesheetsErr,
} = actions;

const getAllTimesheets = employeeId => {
  return async dispatch => {
    try {
      const response = await fetchAllTimesheets(employeeId);
      dispatch(TimesheetsSuccess(response.data));
    } catch (err) {
      dispatch(TimesheetsErr(err.toString()));
    }
  };
};

const getSingleTimesheet = id => {
  return async dispatch => {
    try {
      const response = await fetchSingleTimesheet(id);
      dispatch(singleTimesheetSuccess(response.data));
    } catch (err) {
      dispatch(singleTimesheetErr(err.toString()));
    }
  };
};

export { getAllTimesheets, getSingleTimesheet };
