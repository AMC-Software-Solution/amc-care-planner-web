const actions = {
  SINGLE_TASKS_BEGIN: 'SINGLE_TASKS_BEGIN',
  SINGLE_TASKS_SUCCESS: 'SINGLE_TASKS_SUCCESS',
  SINGLE_TASKS_ERR: 'SINGLE_TASKS_ERR',

  FILTER_TASKS_BEGIN: 'FILTER_TASKS_BEGIN',
  FILTER_TASKS_SUCCESS: 'FILTER_TASKS_SUCCESS',
  FILTER_TASKS_ERR: 'FILTER_TASKS_ERR',

  SORTING_TASKS_BEGIN: 'SORTING_TASKS_BEGIN',
  SORTING_TASKS_SUCCESS: 'SORTING_TASKS_SUCCESS',
  SORTING_TASKS_ERR: 'SORTING_TASKS_ERR',

  singleTasksBegin: () => {
    return {
      type: actions.SINGLE_TASKS_BEGIN,
    };
  },

  singleTasksSuccess: data => {
    return {
      type: actions.SINGLE_TASKS_SUCCESS,
      data,
    };
  },

  singleTasksErr: err => {
    return {
      type: actions.SINGLE_TASKS_ERR,
      err,
    };
  },

  filterTasksBegin: () => {
    return {
      type: actions.FILTER_TASKS_BEGIN,
    };
  },

  filterTasksSuccess: data => {
    return {
      type: actions.FILTER_TASKS_SUCCESS,
      data,
    };
  },

  filterTasksErr: err => {
    return {
      type: actions.FILTER_TASKS_ERR,
      err,
    };
  },

  sortingTasksBegin: () => {
    return {
      type: actions.SORTING_TASKS_BEGIN,
    };
  },

  sortingTasksSuccess: data => {
    return {
      type: actions.SORTING_TASKS_SUCCESS,
      data,
    };
  },

  sortingTasksErr: err => {
    return {
      type: actions.SORTING_TASKS_ERR,
      err,
    };
  },
};

export default actions;
