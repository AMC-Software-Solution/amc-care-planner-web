import actions from './actions';
import initialState from '../../demoData/countries.json';
// import {fetchAllAvailabilitys} from '../../config/dataService/AvailabilityDataService';

const {
  singleAvailabilityBegin,
  singleAvailabilitySuccess,
  singleAvailabilityErr,

  filterAvailabilityBegin,
  filterAvailabilitySuccess,
  filterAvailabilityErr,

  sortingAvailabilityBegin,
  sortingAvailabilitySuccess,
  sortingAvailabilityErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleAvailabilityBegin());
      const data = initialState.filter(availability => {
        return availability.id === parseInt(paramsId, 10);
      });
      dispatch(singleAvailabilitySuccess(data));
    } catch (err) {
      dispatch(singleAvailabilityErr(err));
    }
  };
};

const filterAvailabilityByGender = gender => {
  return async dispatch => {
    try {
      dispatch(filterAvailabilityBegin());
      const data = initialState.filter(availability => {
        if (gender !== 'all') {
          return availability.gender === gender;
        }
        return initialState;
      });
      dispatch(filterAvailabilitySuccess(data));
    } catch (err) {
      dispatch(filterAvailabilityErr(err.toString()));
    }
  };
};

const sortingAvailabilityByAvailability = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingAvailabilityBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingAvailabilitySuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingAvailabilityErr(err));
    }
  };
};


// const getAllAvailabilitys = () => {
//     return async dispatch => {
//         try {
//           const response = await fetchAllAvailabilitys();
//           dispatch(filterAvailabilitySuccess(response.data));
//         } catch (err) {
//           dispatch(filterAvailabilityErr(err.toString()));
//         }  
//       };
//     };
    

//export { filterSinglePage, filterAvailabilityByGender, sortingAvailabilityByAvailability, getAllAvailabilitys };


export { filterSinglePage, filterAvailabilityByGender, sortingAvailabilityByAvailability  };
