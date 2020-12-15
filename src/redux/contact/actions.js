const actions = {
  CONTACT_READ_BEGIN: 'CONTACT_READ_BEGIN',
  CONTACT_READ_SUCCESS: 'CONTACT_READ_SUCCESS',
  CONTACT_READ_ERR: 'CONTACT_READ_ERR',

  CONTACT_STAR_UPDATE_BEGIN: 'CONTACT_STAR_UPDATE_BEGIN',
  CONTACT_STAR_UPDATE_SUCCESS: 'CONTACT_STAR_UPDATE_SUCCESS',
  CONTACT_STAR_UPDATE_ERR: 'CONTACT_STAR_UPDATE_ERR',

  starUpdateBegin: () => {
    return {
      type: actions.CONTACT_STAR_UPDATE_BEGIN,
    };
  },

  starUpdateSuccess: data => {
    return {
      type: actions.CONTACT_STAR_UPDATE_SUCCESS,
      data,
    };
  },

  starUpdateErr: err => {
    return {
      type: actions.CONTACT_STAR_UPDATE_ERR,
      err,
    };
  },
  readBegin: () => {
    return {
      type: actions.CONTACT_READ_BEGIN,
    };
  },

  readSuccess: data => {
    return {
      type: actions.CONTACT_READ_SUCCESS,
      data,
    };
  },

  readErr: err => {
    return {
      type: actions.CONTACT_READ_ERR,
      err,
    };
  },
};

export default actions;
