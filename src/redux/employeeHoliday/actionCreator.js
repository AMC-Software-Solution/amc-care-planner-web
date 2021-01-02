import actions from './actions';
import initialState from '../../demoData/employeeHoliday.json';
// import {fetchAllEmployeeHolidays} from '../../config/dataService/EmployeeHolidayDataService';

const {
  singleEmployeeHolidayBegin,
  singleEmployeeHolidaySuccess,
  singleEmployeeHolidayErr,

  filterEmployeeHolidayBegin,
  filterEmployeeHolidaySuccess,
  filterEmployeeHolidayErr,

  sortingEmployeeHolidayBegin,
  sortingEmployeeHolidaySuccess,
  sortingEmployeeHolidayErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleEmployeeHolidayBegin());
      const data = initialState.filter(employeeHoliday => {
        return employeeHoliday.id === parseInt(paramsId, 10);
      });
      dispatch(singleEmployeeHolidaySuccess(data));
    } catch (err) {
      dispatch(singleEmployeeHolidayErr(err));
    }
  };
};

const filterEmployeeHolidayByGender = gender => {
  return async dispatch => {
    try {
      dispatch(filterEmployeeHolidayBegin());
      const data = initialState.filter(employeeHoliday => {
        if (gender !== 'all') {
          return employeeHoliday.gender === gender;
        }
        return initialState;
      });
      dispatch(filterEmployeeHolidaySuccess(data));
    } catch (err) {
      dispatch(filterEmployeeHolidayErr(err.toString()));
    }
  };
};

const sortingEmployeeHolidayByEmployeeHoliday = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingEmployeeHolidayBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingEmployeeHolidaySuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingEmployeeHolidayErr(err));
    }
  };
};


// const getAllEmployeeHolidays = () => {
//     return async dispatch => {
//         try {
//           const response = await fetchAllEmployeeHolidays();
//           dispatch(filterEmployeeHolidaySuccess(response.data));
//         } catch (err) {
//           dispatch(filterEmployeeHolidayErr(err.toString()));
//         }  
//       };
//     };
    

//export { filterSinglePage, filterEmployeeHolidayByGender, sortingEmployeeHolidayByEmployeeHoliday, getAllEmployeeHolidays };


export { filterSinglePage, filterEmployeeHolidayByGender, sortingEmployeeHolidayByEmployeeHoliday  };
