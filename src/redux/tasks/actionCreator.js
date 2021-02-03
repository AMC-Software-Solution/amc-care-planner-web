import actions from './actions';
import { fetchAllTasks, fetchSingleTask } from '../../config/dataService/taskDataService';

const {
  singleTaskSuccess,
  singleTaskErr,

  TasksSuccess,
  TasksErr,
} = actions;

const getAllTasks = employeeId => {
  return async dispatch => {
    try {
      const response = await fetchAllTasks(employeeId);
      dispatch(TasksSuccess(response.data));
    } catch (err) {
      dispatch(TasksErr(err.toString()));
    }
  };
};

const getSingleTask = id => {
  return async dispatch => {
    try {
      const response = await fetchSingleTask(id);
      dispatch(singleTaskSuccess(response.data));
    } catch (err) {
      dispatch(singleTaskErr(err.toString()));
    }
  };
};

export { getAllTasks, getSingleTask };
