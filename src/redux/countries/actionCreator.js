import actions from './actions';
import initialState from '../../demoData/countries.json';
// import {fetchAllCountrys} from '../../config/dataService/countryDataService';

const {
  singleCountryBegin,
  singleCountrySuccess,
  singleCountryErr,

  filterCountryBegin,
  filterCountrySuccess,
  filterCountryErr,

  sortingCountryBegin,
  sortingCountrySuccess,
  sortingCountryErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleCountryBegin());
      const data = initialState.filter(country => {
        return country.id === parseInt(paramsId, 10);
      });
      dispatch(singleCountrySuccess(data));
    } catch (err) {
      dispatch(singleCountryErr(err));
    }
  };
};

const filterCountryByGender = gender => {
  return async dispatch => {
    try {
      dispatch(filterCountryBegin());
      const data = initialState.filter(country => {
        if (gender !== 'all') {
          return country.gender === gender;
        }
        return initialState;
      });
      dispatch(filterCountrySuccess(data));
    } catch (err) {
      dispatch(filterCountryErr(err.toString()));
    }
  };
};

const sortingCountryByCountry = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingCountryBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingCountrySuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingCountryErr(err));
    }
  };
};

export { filterSinglePage, filterCountryByGender, sortingCountryByCountry };
