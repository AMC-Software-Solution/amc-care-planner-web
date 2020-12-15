import actions from './actions';
import staticData from '../../demoData/projectData.json';

const {
  SINGLE_PROJECT_BEGIN,
  SINGLE_PROJECT_SUCCESS,
  SINGLE_PROJECT_ERR,

  FILTER_PROJECT_BEGIN,
  FILTER_PROJECT_SUCCESS,
  FILTER_PROJECT_ERR,

  SORTING_PROJECT_BEGIN,
  SORTING_PROJECT_SUCCESS,
  SORTING_PROJECT_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const projectReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_PROJECT_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_PROJECT_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_PROJECT_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_PROJECT_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_PROJECT_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_PROJECT_ERR:
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

const SingleProjectReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_PROJECT_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_PROJECT_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_PROJECT_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleProjectReducer, projectReducer };
