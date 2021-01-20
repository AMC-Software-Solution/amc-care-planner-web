import actions from './actions';
import initialState from '../../demoData/document.json';
// import {fetchAllDocuments} from '../../config/dataService/documentDataService';

const {
  singleDocumentBegin,
  singleDocumentSuccess,
  singleDocumentErr,

  filterDocumentBegin,
  filterDocumentSuccess,
  filterDocumentErr,

  sortingDocumentBegin,
  sortingDocumentSuccess,
  sortingDocumentErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleDocumentBegin());
      const data = initialState.filter(document => {
        return document.id === parseInt(paramsId, 10);
      });
      dispatch(singleDocumentSuccess(data));
    } catch (err) {
      dispatch(singleDocumentErr(err));
    }
  };
};

const filterDocumentByGender = gender => {
  return async dispatch => {
    try {
      dispatch(filterDocumentBegin());
      const data = initialState.filter(document => {
        if (gender !== 'all') {
          return document.gender === gender;
        }
        return initialState;
      });
      dispatch(filterDocumentSuccess(data));
    } catch (err) {
      dispatch(filterDocumentErr(err.toString()));
    }
  };
};

const sortingDocumentByDocument = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingDocumentBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingDocumentSuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingDocumentErr(err));
    }
  };
};

export { filterSinglePage, filterDocumentByGender, sortingDocumentByDocument  };
