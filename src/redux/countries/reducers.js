import actions from './actions';
import staticData from '../../demoData/countries.json';

const {
  SINGLE_COUNTRY_BEGIN,
  SINGLE_COUNTRY_SUCCESS,
  SINGLE_COUNTRY_ERR,

  FILTER_COUNTRY_BEGIN,
  FILTER_COUNTRY_SUCCESS,
  FILTER_COUNTRY_ERR,

  SORTING_COUNTRY_BEGIN,
  SORTING_COUNTRY_SUCCESS,
  SORTING_COUNTRY_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const countryReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_COUNTRY_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_COUNTRY_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_COUNTRY_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_COUNTRY_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_COUNTRY_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_COUNTRY_ERR:
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

const SingleCountryReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_COUNTRY_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_COUNTRY_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_COUNTRY_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleCountryReducer, countryReducer };
