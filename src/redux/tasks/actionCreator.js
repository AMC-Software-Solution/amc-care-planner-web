import actions from './actions';
import initialState from '../../demoData/countries.json';
// import {fetchAllTaskss} from '../../config/dataService/TasksDataService';

const {
  singleTasksBegin,
  singleTasksSuccess,
  singleTasksErr,

  filterTasksBegin,
  filterTasksSuccess,
  filterTasksErr,

  sortingTasksBegin,
  sortingTasksSuccess,
  sortingTasksErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleTasksBegin());
      const data = initialState.filter(tasks => {
        return tasks.id === parseInt(paramsId, 10);
      });
      dispatch(singleTasksSuccess(data));
    } catch (err) {
      dispatch(singleTasksErr(err));
    }
  };
};

const filterTasksByGender = gender => {
  return async dispatch => {
    try {
      dispatch(filterTasksBegin());
      const data = initialState.filter(tasks => {
        if (gender !== 'all') {
          return tasks.gender === gender;
        }
        return initialState;
      });
      dispatch(filterTasksSuccess(data));
    } catch (err) {
      dispatch(filterTasksErr(err.toString()));
    }
  };
};

const sortingTasksByTasks = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingTasksBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingTasksSuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingTasksErr(err));
    }
  };
};


// const getAllTaskss = () => {
//     return async dispatch => {
//         try {
//           const response = await fetchAllTaskss();
//           dispatch(filterTasksSuccess(response.data));
//         } catch (err) {
//           dispatch(filterTasksErr(err.toString()));
//         }  
//       };
//     };
    

//export { filterSinglePage, filterTasksByGender, sortingTasksByTasks, getAllTaskss };


export { filterSinglePage, filterTasksByGender, sortingTasksByTasks  };
