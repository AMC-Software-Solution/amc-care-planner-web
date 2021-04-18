import actions from './actions';
import {
  fetchAllCommunications,
  fetchSingleCommunication,
} from '../../../../../config/dataService/communicationDataService';

const {
  singleCommunicationSuccess,
  singleCommunicationErr,

  CommunicationsSuccess,
  CommunicationsErr,
} = actions;

const getAllCommunications = employeeId => {
  return async dispatch => {
    try {
      const response = await fetchAllCommunications(employeeId);
      dispatch(CommunicationsSuccess(response.data));
    } catch (err) {
      dispatch(CommunicationsErr(err.toString()));
    }
  };
};

const getSingleCommunication = id => {
  return async dispatch => {
    try {
      const response = await fetchSingleCommunication(id);
      dispatch(singleCommunicationSuccess(response.data));
    } catch (err) {
      dispatch(singleCommunicationErr(err.toString()));
    }
  };
};

export { getAllCommunications, getSingleCommunication };
