import actions from './actions';

const {
  SINGLE_DOCUMENT_SUCCESS,
  SINGLE_DOCUMENT_ERR,

  DOCUMENTS_SUCCESS,
  DOCUMENTS_ERR,
} = actions;

const initialStateFilter = {
  data: null,
  loading: false,
  error: null,
};

const documentsReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case DOCUMENTS_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case DOCUMENTS_ERR:
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
  data: null,
  loading: false,
  error: null,
};

const SingleDocumentReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
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

export { SingleDocumentReducer, documentsReducer };
