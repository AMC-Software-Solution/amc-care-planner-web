import actions from './actions';
import { fetchAllEmployees, fetchSingleEmployee } from '../../config/dataService/employeeDataService';

const {
  singleEmployeeSuccess,
  singleEmployeeErr,

  EmployeesSuccess,
  EmployeesErr,
} = actions;

const getAllEmployees = () => {
  return async dispatch => {
    try {
      const response = await fetchAllEmployees();
      dispatch(EmployeesSuccess(response.data));
    } catch (err) {
      dispatch(EmployeesErr(err.toString()));
    }
  };
};

const getSingleEmployee = id => {
  return async dispatch => {
    try {
      const response = await fetchSingleEmployee(id);
      dispatch(singleEmployeeSuccess(response.data));
    } catch (err) {
      dispatch(singleEmployeeErr(err.toString()));
    }
  };
};

export { getAllEmployees, getSingleEmployee };
