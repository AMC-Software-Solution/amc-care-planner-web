import actions from './actions';
import staticData from '../../demoData/document.json';

const {
  SINGLE_DOCUMENT_BEGIN,
  SINGLE_DOCUMENT_SUCCESS,
  SINGLE_DOCUMENT_ERR,

  FILTER_DOCUMENT_BEGIN,
  FILTER_DOCUMENT_SUCCESS,
  FILTER_DOCUMENT_ERR,

  SORTING_DOCUMENT_BEGIN,
  SORTING_DOCUMENT_SUCCESS,
  SORTING_DOCUMENT_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const documentReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_DOCUMENT_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_DOCUMENT_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_DOCUMENT_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_DOCUMENT_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_DOCUMENT_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_DOCUMENT_ERR:
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

const SingleDocumentReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_DOCUMENT_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_DOCUMENT_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_DOCUMENT_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleDocumentReducer, documentReducer };
