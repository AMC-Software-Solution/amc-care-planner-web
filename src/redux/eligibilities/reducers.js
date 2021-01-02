import actions from './actions';
import staticData from '../../demoData/eligibility.json';

const {
  SINGLE_ELIGIBILITY_BEGIN,
  SINGLE_ELIGIBILITY_SUCCESS,
  SINGLE_ELIGIBILITY_ERR,

  FILTER_ELIGIBILITY_BEGIN,
  FILTER_ELIGIBILITY_SUCCESS,
  FILTER_ELIGIBILITY_ERR,

  SORTING_ELIGIBILITY_BEGIN,
  SORTING_ELIGIBILITY_SUCCESS,
  SORTING_ELIGIBILITY_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const eligibilityReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_ELIGIBILITY_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_ELIGIBILITY_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_ELIGIBILITY_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_ELIGIBILITY_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_ELIGIBILITY_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_ELIGIBILITY_ERR:
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

const SingleEligibilityReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_ELIGIBILITY_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_ELIGIBILITY_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_ELIGIBILITY_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleEligibilityReducer, eligibilityReducer };
