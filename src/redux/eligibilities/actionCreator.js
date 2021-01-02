import actions from './actions';
import initialState from '../../demoData/eligibility.json';
// import {fetchAllEligibilitys} from '../../config/dataService/eligibilityDataService';

const {
  singleEligibilityBegin,
  singleEligibilitySuccess,
  singleEligibilityErr,

  filterEligibilityBegin,
  filterEligibilitySuccess,
  filterEligibilityErr,

  sortingEligibilityBegin,
  sortingEligibilitySuccess,
  sortingEligibilityErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleEligibilityBegin());
      const data = initialState.filter(eligibility => {
        return eligibility.id === parseInt(paramsId, 10);
      });
      dispatch(singleEligibilitySuccess(data));
    } catch (err) {
      dispatch(singleEligibilityErr(err));
    }
  };
};

const filterEligibilityByGender = gender => {
  return async dispatch => {
    try {
      dispatch(filterEligibilityBegin());
      const data = initialState.filter(eligibility => {
        if (gender !== 'all') {
          return eligibility.gender === gender;
        }
        return initialState;
      });
      dispatch(filterEligibilitySuccess(data));
    } catch (err) {
      dispatch(filterEligibilityErr(err.toString()));
    }
  };
};

const sortingEligibilityByEligibility = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingEligibilityBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingEligibilitySuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingEligibilityErr(err));
    }
  };
};


// const getAllEligibilitys = () => {
//     return async dispatch => {
//         try {
//           const response = await fetchAllEligibilitys();
//           dispatch(filterEligibilitySuccess(response.data));
//         } catch (err) {
//           dispatch(filterEligibilityErr(err.toString()));
//         }  
//       };
//     };
    

//export { filterSinglePage, filterEligibilityByGender, sortingEligibilityByEligibility, getAllEligibilitys };


export { filterSinglePage, filterEligibilityByGender, sortingEligibilityByEligibility  };
