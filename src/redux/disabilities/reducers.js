import actions from './actions';
import staticData from '../../demoData/disability.json';

const {
  SINGLE_DISABILITY_BEGIN,
  SINGLE_DISABILITY_SUCCESS,
  SINGLE_DISABILITY_ERR,

  FILTER_DISABILITY_BEGIN,
  FILTER_DISABILITY_SUCCESS,
  FILTER_DISABILITY_ERR,

  SORTING_DISABILITY_BEGIN,
  SORTING_DISABILITY_SUCCESS,
  SORTING_DISABILITY_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const disabilityReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_DISABILITY_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_DISABILITY_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_DISABILITY_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_DISABILITY_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_DISABILITY_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_DISABILITY_ERR:
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

const SingleDisabilityReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_DISABILITY_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_DISABILITY_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_DISABILITY_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleDisabilityReducer, disabilityReducer };
