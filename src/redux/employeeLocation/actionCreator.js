import actions from './actions';
import initialState from '../../demoData/employeeLocation.json';
// import {fetchAllEmployeeLocations} from '../../config/dataService/EmployeeLocationDataService';

const {
  singleEmployeeLocationBegin,
  singleEmployeeLocationSuccess,
  singleEmployeeLocationErr,

  filterEmployeeLocationBegin,
  filterEmployeeLocationSuccess,
  filterEmployeeLocationErr,

  sortingEmployeeLocationBegin,
  sortingEmployeeLocationSuccess,
  sortingEmployeeLocationErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleEmployeeLocationBegin());
      const data = initialState.filter(employeeLocation => {
        return employeeLocation.id === parseInt(paramsId, 10);
      });
      dispatch(singleEmployeeLocationSuccess(data));
    } catch (err) {
      dispatch(singleEmployeeLocationErr(err));
    }
  };
};

const filterEmployeeLocationByGender = gender => {
  return async dispatch => {
    try {
      dispatch(filterEmployeeLocationBegin());
      const data = initialState.filter(employeeLocation => {
        if (gender !== 'all') {
          return employeeLocation.gender === gender;
        }
        return initialState;
      });
      dispatch(filterEmployeeLocationSuccess(data));
    } catch (err) {
      dispatch(filterEmployeeLocationErr(err.toString()));
    }
  };
};

const sortingEmployeeLocationByEmployeeLocation = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingEmployeeLocationBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingEmployeeLocationSuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingEmployeeLocationErr(err));
    }
  };
};


// const getAllEmployeeLocations = () => {
//     return async dispatch => {
//         try {
//           const response = await fetchAllEmployeeLocations();
//           dispatch(filterEmployeeLocationSuccess(response.data));
//         } catch (err) {
//           dispatch(filterEmployeeLocationErr(err.toString()));
//         }  
//       };
//     };
    

//export { filterSinglePage, filterEmployeeLocationByGender, sortingEmployeeLocationByEmployeeLocation, getAllEmployeeLocations };


export { filterSinglePage, filterEmployeeLocationByGender, sortingEmployeeLocationByEmployeeLocation  };
