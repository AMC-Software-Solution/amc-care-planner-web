import actions from './actions';

const {
  toAddBoardReadBegin,
  toAddBoardSuccess,
  toAddBoardReadErr,
  toAddTaskBegin,
  toAddTaskSuccess,
  toAddTaskErr,
  toDeleteTaskBegin,
  toDeleteTaskSuccess,
  toDeleteTaskErr,
} = actions;

const ToAddBoard = data => {
  return async dispatch => {
    try {
      dispatch(toAddBoardReadBegin());
      dispatch(toAddBoardSuccess(data));
    } catch (err) {
      dispatch(toAddBoardReadErr(err));
    }
  };
};

const ToAddTask = data => {
  return async dispatch => {
    try {
      dispatch(toAddTaskBegin());
      dispatch(toAddTaskSuccess(data));
    } catch (err) {
      dispatch(toAddTaskErr(err));
    }
  };
};

const ToDeleteTask = data => {
  return async dispatch => {
    try {
      dispatch(toDeleteTaskBegin());
      dispatch(toDeleteTaskSuccess(data));
    } catch (err) {
      dispatch(toDeleteTaskErr(err));
    }
  };
};

export { ToAddBoard, ToAddTask, ToDeleteTask };
