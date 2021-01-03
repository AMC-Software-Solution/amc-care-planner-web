import actions from './actions';
import staticData from '../../demoData/communication.json';

const {
  SINGLE_COMMUNICATION_BEGIN,
  SINGLE_COMMUNICATION_SUCCESS,
  SINGLE_COMMUNICATION_ERR,

  FILTER_COMMUNICATION_BEGIN,
  FILTER_COMMUNICATION_SUCCESS,
  FILTER_COMMUNICATION_ERR,

  SORTING_COMMUNICATION_BEGIN,
  SORTING_COMMUNICATION_SUCCESS,
  SORTING_COMMUNICATION_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const communicationReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_COMMUNICATION_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_COMMUNICATION_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_COMMUNICATION_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_COMMUNICATION_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_COMMUNICATION_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_COMMUNICATION_ERR:
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
  data: staticData,
  loading: false,
  error: null,
};

const SingleCommunicationReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_COMMUNICATION_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
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

export { SingleCommunicationReducer, communicationReducer };
