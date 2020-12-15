const actions = {
  TODO_READ_BEGIN: 'TODO_READ_BEGIN',
  TODO_READ_SUCCESS: 'TODO_READ_SUCCESS',
  TODO_READ_ERR: 'TODO_READ_ERR',

  TODO_STAR_UPDATE_BEGIN: 'TODO_STAR_UPDATE_BEGIN',
  TODO_STAR_UPDATE_SUCCESS: 'TODO_STAR_UPDATE_SUCCESS',
  TODO_STAR_UPDATE_ERR: 'TODO_STAR_UPDATE_ERR',

  starUpdateBegin: () => {
    return {
      type: actions.TODO_STAR_UPDATE_BEGIN,
    };
  },

  starUpdateSuccess: data => {
    return {
      type: actions.TODO_STAR_UPDATE_SUCCESS,
      data,
    };
  },

  starUpdateErr: err => {
    return {
      type: actions.TODO_STAR_UPDATE_ERR,
      err,
    };
  },

  todoReadBegin: () => {
    return {
      type: actions.TODO_READ_BEGIN,
    };
  },

  todoReadSuccess: data => {
    return {
      type: actions.TODO_READ_SUCCESS,
      data,
    };
  },

  todoReadErr: err => {
    return {
      type: actions.TODO_READ_ERR,
      err,
    };
  },
};

export default actions;
