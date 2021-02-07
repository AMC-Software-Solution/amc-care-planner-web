import actions from './actions';
import { fetchAllDocuments, fetchSingleDocument } from '../../config/dataService/employeeDocumentDataService';

const {
  singleDocumentSuccess,
  singleDocumentErr,

  documentsSuccess,
  documentsErr,
} = actions;

const getAllDocuments = employeeId => {
  return async dispatch => {
    try {
      const response = await fetchAllDocuments(employeeId);
      dispatch(documentsSuccess(response.data));
    } catch (err) {
      dispatch(documentsErr(err.toString()));
    }
  };
};

const getSingleDocument = id => {
  return async dispatch => {
    try {
      const response = await fetchSingleDocument(id);
      dispatch(singleDocumentSuccess(response.data));
    } catch (err) {
      dispatch(singleDocumentErr(err.toString()));
    }
  };
};

export { getAllDocuments, getSingleDocument };
