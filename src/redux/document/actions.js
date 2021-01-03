const actions = {
  SINGLE_DOCUMENT_BEGIN: 'SINGLE_DOCUMENT_BEGIN',
  SINGLE_DOCUMENT_SUCCESS: 'SINGLE_DOCUMENT_SUCCESS',
  SINGLE_DOCUMENT_ERR: 'SINGLE_DOCUMENT_ERR',

  FILTER_DOCUMENT_BEGIN: 'FILTER_DOCUMENT_BEGIN',
  FILTER_DOCUMENT_SUCCESS: 'FILTER_DOCUMENT_SUCCESS',
  FILTER_DOCUMENT_ERR: 'FILTER_DOCUMENT_ERR',

  SORTING_DOCUMENT_BEGIN: 'SORTING_DOCUMENT_BEGIN',
  SORTING_DOCUMENT_SUCCESS: 'SORTING_DOCUMENT_SUCCESS',
  SORTING_DOCUMENT_ERR: 'SORTING_DOCUMENT_ERR',

  singleDocumentBegin: () => {
    return {
      type: actions.SINGLE_DOCUMENT_BEGIN,
    };
  },

  singleDocumentSuccess: data => {
    return {
      type: actions.SINGLE_DOCUMENT_SUCCESS,
      data,
    };
  },

  singleDocumentErr: err => {
    return {
      type: actions.SINGLE_DOCUMENT_ERR,
      err,
    };
  },

  filterDocumentBegin: () => {
    return {
      type: actions.FILTER_DOCUMENT_BEGIN,
    };
  },

  filterDocumentSuccess: data => {
    return {
      type: actions.FILTER_DOCUMENT_SUCCESS,
      data,
    };
  },

  filterDocumentErr: err => {
    return {
      type: actions.FILTER_DOCUMENT_ERR,
      err,
    };
  },

  sortingDocumentBegin: () => {
    return {
      type: actions.SORTING_DOCUMENT_BEGIN,
    };
  },

  sortingDocumentSuccess: data => {
    return {
      type: actions.SORTING_DOCUMENT_SUCCESS,
      data,
    };
  },

  sortingDocumentErr: err => {
    return {
      type: actions.SORTING_DOCUMENT_ERR,
      err,
    };
  },
};

export default actions;
