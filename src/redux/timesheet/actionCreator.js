import actions from './actions';
import initialState from '../../demoData/timesheet.json';
// import {fetchAllTimesheets} from '../../config/dataService/TimesheetDataService';

const {
  singleTimesheetBegin,
  singleTimesheetSuccess,
  singleTimesheetErr,

  filterTimesheetBegin,
  filterTimesheetSuccess,
  filterTimesheetErr,

  sortingTimesheetBegin,
  sortingTimesheetSuccess,
  sortingTimesheetErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleTimesheetBegin());
      const data = initialState.filter(timesheet => {
        return timesheet.id === parseInt(paramsId, 10);
      });
      dispatch(singleTimesheetSuccess(data));
    } catch (err) {
      dispatch(singleTimesheetErr(err));
    }
  };
};

const filterTimesheetByGender = gender => {
  return async dispatch => {
    try {
      dispatch(filterTimesheetBegin());
      const data = initialState.filter(timesheet => {
        if (gender !== 'all') {
          return timesheet.gender === gender;
        }
        return initialState;
      });
      dispatch(filterTimesheetSuccess(data));
    } catch (err) {
      dispatch(filterTimesheetErr(err.toString()));
    }
  };
};

const sortingTimesheetByTimesheet = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingTimesheetBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingTimesheetSuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingTimesheetErr(err));
    }
  };
};


// const getAllTimesheets = () => {
//     return async dispatch => {
//         try {
//           const response = await fetchAllTimesheets();
//           dispatch(filterTimesheetSuccess(response.data));
//         } catch (err) {
//           dispatch(filterTimesheetErr(err.toString()));
//         }  
//       };
//     };
    

//export { filterSinglePage, filterTimesheetByGender, sortingTimesheetByTimesheet, getAllTimesheets };


export { filterSinglePage, filterTimesheetByGender, sortingTimesheetByTimesheet  };
