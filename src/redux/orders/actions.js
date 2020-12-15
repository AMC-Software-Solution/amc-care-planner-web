const actions = {
  FILTER_ORDER_BEGIN: 'FILTER_ORDER_BEGIN',
  FILTER_ORDER_SUCCESS: 'FILTER_ORDER_SUCCESS',
  FILTER_ORDER_ERR: 'FILTER_ORDER_ERR',

  filterOrderBegin: () => {
    return {
      type: actions.FILTER_ORDER_BEGIN,
    };
  },

  filterOrderSuccess: data => {
    return {
      type: actions.FILTER_ORDER_SUCCESS,
      data,
    };
  },

  filterOrderErr: err => {
    return {
      type: actions.FILTER_ORDER_ERR,
      err,
    };
  },
};

export default actions;
