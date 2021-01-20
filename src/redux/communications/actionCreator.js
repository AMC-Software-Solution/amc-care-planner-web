import actions from './actions';
import initialState from '../../demoData/communication.json';
// import {fetchAllCommunications} from '../../config/dataService/communicationDataService';

const {
  singleCommunicationBegin,
  singleCommunicationSuccess,
  singleCommunicationErr,

  filterCommunicationBegin,
  filterCommunicationSuccess,
  filterCommunicationErr,

  sortingCommunicationBegin,
  sortingCommunicationSuccess,
  sortingCommunicationErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleCommunicationBegin());
      const data = initialState.filter(communication => {
        return communication.id === parseInt(paramsId, 10);
      });
      dispatch(singleCommunicationSuccess(data));
    } catch (err) {
      dispatch(singleCommunicationErr(err));
    }
  };
};

const filterCommunicationByGender = gender => {
  return async dispatch => {
    try {
      dispatch(filterCommunicationBegin());
      const data = initialState.filter(communication => {
        if (gender !== 'all') {
          return communication.gender === gender;
        }
        return initialState;
      });
      dispatch(filterCommunicationSuccess(data));
    } catch (err) {
      dispatch(filterCommunicationErr(err.toString()));
    }
  };
};

const sortingCommunicationByCommunication = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingCommunicationBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingCommunicationSuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingCommunicationErr(err));
    }
  };
};

export { filterSinglePage, filterCommunicationByGender, sortingCommunicationByCommunication };
