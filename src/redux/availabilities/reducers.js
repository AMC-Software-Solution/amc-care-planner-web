import actions from './actions';
import staticData from '../../demoData/availability.json';

const {
  SINGLE_AVAILABILITY_BEGIN,
  SINGLE_AVAILABILITY_SUCCESS,
  SINGLE_AVAILABILITY_ERR,

  FILTER_AVAILABILITY_BEGIN,
  FILTER_AVAILABILITY_SUCCESS,
  FILTER_AVAILABILITY_ERR,

  SORTING_AVAILABILITY_BEGIN,
  SORTING_AVAILABILITY_SUCCESS,
  SORTING_AVAILABILITY_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const availabilityReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_AVAILABILITY_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_AVAILABILITY_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_AVAILABILITY_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_AVAILABILITY_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_AVAILABILITY_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_AVAILABILITY_ERR:
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

const SingleAvailabilityReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_AVAILABILITY_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_AVAILABILITY_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_AVAILABILITY_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleAvailabilityReducer, availabilityReducer };
