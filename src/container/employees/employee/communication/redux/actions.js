const actions = {
  SINGLE_COMMUNICATION_SUCCESS: 'SINGLE_COMMUNICATION_SUCCESS',
  SINGLE_COMMUNICATION_ERR: 'SINGLE_COMMUNICATION_ERR',

  COMMUNICATIONS_SUCCESS: 'COMMUNICATIONS_SUCCESS',
  COMMUNICATIONS_ERR: 'COMMUNICATIONS_ERR',

  singleCommunicationsuccess: data => {
    return {
      type: actions.SINGLE_COMMUNICATION_SUCCESS,
      data,
    };
  },

  singleCommunicationErr: err => {
    return {
      type: actions.SINGLE_COMMUNICATION_ERR,
      err,
    };
  },

  CommunicationsSuccess: data => {
    return {
      type: actions.COMMUNICATIONS_SUCCESS,
      data,
    };
  },

  CommunicationsErr: err => {
    return {
      type: actions.COMMUNICATIONS_ERR,
      err,
    };
  },
};

export default actions;
