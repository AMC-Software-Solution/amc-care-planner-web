const actions = {
  SINGLE_SERVICE_USER_SUCCESS: 'SINGLE_SERVICE_USER_SUCCESS',
  SINGLE_SERVICE_USER_ERR: 'SINGLE_SERVICE_USER_ERR',

  SERVICE_USERS_SUCCESS: 'SERVICE_USERS_SUCCESS',
  SERVICE_USERS_ERR: 'SERVICE_USERS_ERR',

  singleServiceUserSuccess: data => {
    return {
      type: actions.SINGLE_SERVICE_USER_SUCCESS,
      data,
    };
  },

  singleServiceUserErr: err => {
    return {
      type: actions.SINGLE_SERVICE_USER_ERR,
      err,
    };
  },

  ServiceUsersSuccess: data => {
    return {
      type: actions.SERVICE_USERS_SUCCESS,
      data,
    };
  },

  ServiceUsersErr: err => {
    return {
      type: actions.SERVICE_USERS_ERR,
      err,
    };
  },
};

export default actions;
