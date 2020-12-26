import actions from './actions';
import staticData from '../../demoData/tasks.json';

const {
  SINGLE_TASKS_BEGIN,
  SINGLE_TASKS_SUCCESS,
  SINGLE_TASKS_ERR,

  FILTER_TASKS_BEGIN,
  FILTER_TASKS_SUCCESS,
  FILTER_TASKS_ERR,

  SORTING_TASKS_BEGIN,
  SORTING_TASKS_SUCCESS,
  SORTING_TASKS_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const tasksReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_TASKS_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_TASKS_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_TASKS_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_TASKS_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_TASKS_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_TASKS_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

const initialState = {
  data: staticData,
  loading: false,
  error: null,
};

const SingleTasksReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_TASKS_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_TASKS_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_TASKS_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleTasksReducer, tasksReducer };
