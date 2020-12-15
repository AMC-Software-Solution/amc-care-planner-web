import actions from './actions';
import initialState from '../../demoData/todo.json';

const { todoReadBegin, todoReadSuccess, todoReadErr, starUpdateBegin, starUpdateSuccess, starUpdateErr } = actions;

const ToDoGetData = () => {
  return async dispatch => {
    try {
      dispatch(todoReadBegin());
      dispatch(todoReadSuccess(initialState));
    } catch (err) {
      dispatch(todoReadErr(err));
    }
  };
};

const ToDoAddData = data => {
  return async dispatch => {
    try {
      dispatch(todoReadBegin());
      dispatch(todoReadSuccess(data));
    } catch (err) {
      dispatch(todoReadErr(err));
    }
  };
};

const ToDoDeleteData = data => {
  return async dispatch => {
    try {
      dispatch(todoReadBegin());
      dispatch(todoReadSuccess(data));
    } catch (err) {
      dispatch(todoReadErr(err));
    }
  };
};

const onStarUpdate = (data, id) => {
  return async dispatch => {
    try {
      dispatch(starUpdateBegin());
      data.map(item => {
        if (item.key === id) {
          const fav = item;
          if (item.favorite) {
            fav.favorite = false;
          } else {
            fav.favorite = true;
          }
        }
        return dispatch(starUpdateSuccess(data));
      });
    } catch (err) {
      dispatch(starUpdateErr(err));
    }
  };
};

export { ToDoGetData, ToDoAddData, ToDoDeleteData, onStarUpdate };
