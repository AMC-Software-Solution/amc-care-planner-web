import actions from './actions';
import kanbanBoardData from '../../demoData/kanbanBoard.json';
import kanbanTaskData from '../../demoData/kanbanTasks.json';

const initialState = {
  boardData: kanbanBoardData,
  taskData: kanbanTaskData,
  loading: false,
  tsLoading: false,
  error: null,
};

const {
  BOARD_READ_BEGIN,
  BOARD_READ_SUCCESS,
  BOARD_READ_ERR,
  TASK_READ_BEGIN,
  TASK_READ_SUCCESS,
  TASK_READ_ERR,
} = actions;

const kanbanBoardReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case BOARD_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case BOARD_READ_SUCCESS:
      return {
        ...state,
        boardData: data,
        loading: false,
      };
    case BOARD_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case TASK_READ_BEGIN:
      return {
        ...state,
        tsLoading: true,
      };
    case TASK_READ_SUCCESS:
      return {
        ...state,
        taskData: data,
        tsLoading: false,
      };
    case TASK_READ_ERR:
      return {
        ...state,
        error: err,
        tsLoading: false,
      };
    default:
      return state;
  }
};

export default kanbanBoardReducer;
