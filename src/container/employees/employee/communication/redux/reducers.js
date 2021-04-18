import actions from './actions';

const {
  SINGLE_COMMUNICATION_SUCCESS,
  SINGLE_COMMUNICATION_ERR,

  COMMUNICATIONS_SUCCESS,
  COMMUNICATIONS_ERR,
} = actions;

const initialStateFilter = {
  data: null,
  loading: false,
  error: null,
};

const communicationsReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case COMMUNICATIONS_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case COMMUNICATIONS_ERR:
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

const SingleCommunicationReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_COMMUNICATION_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_COMMUNICATION_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleCommunicationReducer, communicationsReducer };
