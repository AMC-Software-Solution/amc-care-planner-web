const actions = {
  SINGLE_DOCUMENT_SUCCESS: 'SINGLE_DOCUMENT_SUCCESS',
  SINGLE_DOCUMENT_ERR: 'SINGLE_DOCUMENT_ERR',

  DOCUMENTS_SUCCESS: 'DOCUMENTS_SUCCESS',
  DOCUMENTS_ERR: 'DOCUMENTS_ERR',

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

  documentsSuccess: data => {
    return {
      type: actions.DOCUMENTS_SUCCESS,
      data,
    };
  },

  documentsErr: err => {
    return {
      type: actions.DOCUMENTS_ERR,
      err,
    };
  },
};

export default actions;
