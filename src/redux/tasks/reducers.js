import actions from './actions';

const {
  SINGLE_TASK_SUCCESS,
  SINGLE_TASK_ERR,

  TASKS_SUCCESS,
  TASKS_ERR,
} = actions;

const initialStateFilter = {
  data: null,
  loading: false,
  error: null,
};

const tasksReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case TASKS_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case TASKS_ERR:
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
  data: null,
  loading: false,
  error: null,
};

const SingleTaskReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_TASK_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_TASK_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleTaskReducer, tasksReducer };
