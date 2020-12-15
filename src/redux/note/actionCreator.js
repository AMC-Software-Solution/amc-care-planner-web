import actions from './actions';
import initialState from '../../demoData/note.json';

const {
  noteReadBegin,
  noteReadSuccess,
  noteReadErr,
  starUpdateBegin,
  starUpdateSuccess,
  starUpdateErr,
  labelUpdateBegin,
  labelUpdateSuccess,
  labelUpdateErr,
} = actions;

const noteDragData = data => {
  return async dispatch => {
    try {
      dispatch(labelUpdateBegin());
      dispatch(labelUpdateSuccess(data));
    } catch (err) {
      dispatch(labelUpdateErr(err));
    }
  };
};

const noteGetData = () => {
  return async dispatch => {
    try {
      dispatch(noteReadBegin());
      dispatch(noteReadSuccess(initialState));
    } catch (err) {
      dispatch(noteReadErr(err));
    }
  };
};

const noteAddData = data => {
  return async dispatch => {
    try {
      dispatch(noteReadBegin());
      dispatch(noteReadSuccess(data));
    } catch (err) {
      dispatch(noteReadErr(err));
    }
  };
};

const noteDeleteData = data => {
  return async dispatch => {
    try {
      dispatch(noteReadBegin());
      dispatch(noteReadSuccess(data));
    } catch (err) {
      dispatch(noteReadErr(err));
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
          if (item.stared) {
            fav.stared = false;
          } else {
            fav.stared = true;
          }
        }
        return dispatch(starUpdateSuccess(data));
      });
    } catch (err) {
      dispatch(starUpdateErr(err));
    }
  };
};

const onLabelUpdate = (data, id, value) => {
  return async dispatch => {
    try {
      dispatch(labelUpdateBegin());
      data.map(item => {
        if (item.key === id) {
          const fav = item;
          fav.label = value;
        }
        return dispatch(labelUpdateSuccess(data));
      });
    } catch (err) {
      dispatch(labelUpdateErr(err));
    }
  };
};

const onLabelFilter = label => {
  return async dispatch => {
    try {
      dispatch(labelUpdateBegin());
      const data = initialState.filter(item => {
        return label === 'all' ? initialState : label === 'favorite' ? item.stared : item.label === label;
      });

      dispatch(labelUpdateSuccess(data));
    } catch (err) {
      dispatch(labelUpdateErr(err));
    }
  };
};

export { noteGetData, noteAddData, noteDeleteData, onStarUpdate, onLabelUpdate, onLabelFilter, noteDragData };
