const actions = {
  SINGLE_TASK_SUCCESS: 'SINGLE_TASK_SUCCESS',
  SINGLE_TASK_ERR: 'SINGLE_TASK_ERR',

  TASKS_SUCCESS: 'TASKS_SUCCESS',
  TASKS_ERR: 'TASKS_ERR',

  singleTaskSuccess: data => {
    return {
      type: actions.SINGLE_TASK_SUCCESS,
      data,
    };
  },

  singleTaskErr: err => {
    return {
      type: actions.SINGLE_TASK_ERR,
      err,
    };
  },

  TasksSuccess: data => {
    return {
      type: actions.TASKS_SUCCESS,
      data,
    };
  },

  TasksErr: err => {
    return {
      type: actions.TASKS_ERR,
      err,
    };
  },
};

export default actions;
