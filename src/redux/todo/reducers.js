import actions from './actions';
import toData from '../../demoData/todo.json';

const initialState = {
  data: toData,
  loading: false,
  error: null,
};

const {
  TODO_READ_BEGIN,
  TODO_READ_SUCCESS,
  TODO_READ_ERR,
  TODO_STAR_UPDATE_BEGIN,
  TODO_STAR_UPDATE_SUCCESS,
  TODO_STAR_UPDATE_ERR,
} = actions;

const TodoReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case TODO_STAR_UPDATE_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case TODO_STAR_UPDATE_SUCCESS:
      return {
        ...state,
        allMessage: data,
        sLoading: false,
      };
    case TODO_STAR_UPDATE_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };
    case TODO_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case TODO_READ_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case TODO_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default TodoReducer;
