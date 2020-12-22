import actions from './actions';
import initialState from '../../demoData/employees.json';
import {fetchAllEmployees} from '../../config/dataService/employeeDataService';

const {
  singleEmployeeBegin,
  singleEmployeeSuccess,
  singleEmployeeErr,

  filterEmployeeBegin,
  filterEmployeeSuccess,
  filterEmployeeErr,

  sortingEmployeeBegin,
  sortingEmployeeSuccess,
  sortingEmployeeErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleEmployeeBegin());
      const data = initialState.filter(employee => {
        return employee.id === parseInt(paramsId, 10);
      });
      dispatch(singleEmployeeSuccess(data));
    } catch (err) {
      dispatch(singleEmployeeErr(err));
    }
  };
};

const filterEmployeeByGender = gender => {
  return async dispatch => {
    try {
      dispatch(filterEmployeeBegin());
      const data = initialState.filter(employee => {
        if (gender !== 'all') {
          return employee.gender === gender;
        }
        return initialState;
      });
      dispatch(filterEmployeeSuccess(data));
    } catch (err) {
      dispatch(filterEmployeeErr(err.toString()));
    }
  };
};

const sortingEmployeeByCountry = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingEmployeeBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingEmployeeSuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingEmployeeErr(err));
    }
  };
};


const getAllEmployees = () => {
    return async dispatch => {
        try {
          const response = await fetchAllEmployees();
          dispatch(filterEmployeeSuccess(response.data));
        } catch (err) {
          dispatch(filterEmployeeErr(err.toString()));
        }  
      };
    };
    

export { filterSinglePage, filterEmployeeByGender, sortingEmployeeByCountry, getAllEmployees };
