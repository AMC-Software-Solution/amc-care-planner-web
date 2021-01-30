import actions from './actions';
//import initialState from '../../demoData/branches.json';
import {
  fetchSingleEmployeeLocation,
  fetchAllEmployeeLocations,
} from '../../config/dataService/employeeLocationDataService';

const {
  singleEmployeeLocationSuccess,
  singleEmployeeLocationErr,

  allEmployeeLocationsSuccess,
  allEmployeeLocationsErr,
} = actions;

const getAllEmployeeLocations = () => {
  return async dispatch => {
    try {
      const response = await fetchAllEmployeeLocations();
      dispatch(allEmployeeLocationsSuccess(response.data));
    } catch (err) {
      dispatch(allEmployeeLocationsErr(err.toString()));
    }
  };
};

const getSingleEmployeeLocation = id => {
  return async dispatch => {
    try {
      const response = await fetchSingleEmployeeLocation(id);
      dispatch(singleEmployeeLocationSuccess(response.data));
    } catch (err) {
      dispatch(singleEmployeeLocationErr(err.toString()));
    }
  };
};

export { getAllEmployeeLocations, getSingleEmployeeLocation };
