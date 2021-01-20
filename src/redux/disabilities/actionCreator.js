import actions from './actions';
import initialState from '../../demoData/countries.json';
// import {fetchAllDisabilitys} from '../../config/dataService/DisabilityDataService';

const {
  singleDisabilityBegin,
  singleDisabilitySuccess,
  singleDisabilityErr,

  filterDisabilityBegin,
  filterDisabilitySuccess,
  filterDisabilityErr,

  sortingDisabilityBegin,
  sortingDisabilitySuccess,
  sortingDisabilityErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleDisabilityBegin());
      const data = initialState.filter(disability => {
        return disability.id === parseInt(paramsId, 10);
      });
      dispatch(singleDisabilitySuccess(data));
    } catch (err) {
      dispatch(singleDisabilityErr(err));
    }
  };
};

const filterDisabilityByGender = gender => {
  return async dispatch => {
    try {
      dispatch(filterDisabilityBegin());
      const data = initialState.filter(disability => {
        if (gender !== 'all') {
          return disability.gender === gender;
        }
        return initialState;
      });
      dispatch(filterDisabilitySuccess(data));
    } catch (err) {
      dispatch(filterDisabilityErr(err.toString()));
    }
  };
};

const sortingDisabilityByDisability = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingDisabilityBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingDisabilitySuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingDisabilityErr(err));
    }
  };
};

export { filterSinglePage, filterDisabilityByGender, sortingDisabilityByDisability };
