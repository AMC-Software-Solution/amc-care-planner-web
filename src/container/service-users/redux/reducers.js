import actions from './actions';

const {
  SINGLE_SERVICE_USER_SUCCESS,
  SINGLE_SERVICE_USER_ERR,

  SERVICE_USERS_SUCCESS,
  SERVICE_USERS_ERR,
} = actions;

const initialStateFilter = {
  data: null,
  loading: false,
  error: null,
};

const serviceUsersReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SERVICE_USERS_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SERVICE_USERS_ERR:
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

const singleServiceUserReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_SERVICE_USER_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_SERVICE_USER_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { singleServiceUserReducer, serviceUsersReducer };
