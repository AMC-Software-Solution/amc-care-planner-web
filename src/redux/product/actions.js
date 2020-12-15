const actions = {
  SINGLE_PRODUCT_BEGIN: 'SINGLE_PRODUCT_BEGIN',
  SINGLE_PRODUCT_SUCCESS: 'SINGLE_PRODUCT_SUCCESS',
  SINGLE_PRODUCT_ERR: 'SINGLE_PRODUCT_ERR',

  FILTER_PRODUCT_BEGIN: 'FILTER_PRODUCT_BEGIN',
  FILTER_PRODUCT_SUCCESS: 'FILTER_PRODUCT_SUCCESS',
  FILTER_PRODUCT_ERR: 'FILTER_PRODUCT_ERR',

  SORTING_PRODUCT_BEGIN: 'SORTING_PRODUCT_BEGIN',
  SORTING_PRODUCT_SUCCESS: 'SORTING_PRODUCT_SUCCESS',
  SORTING_PRODUCT_ERR: 'SORTING_PRODUCT_ERR',

  singleProductBegin: () => {
    return {
      type: actions.SINGLE_PRODUCT_BEGIN,
    };
  },

  singleProductSuccess: data => {
    return {
      type: actions.SINGLE_PRODUCT_SUCCESS,
      data,
    };
  },

  singleProductErr: err => {
    return {
      type: actions.SINGLE_PRODUCT_ERR,
      err,
    };
  },

  filterProductBegin: () => {
    return {
      type: actions.FILTER_PRODUCT_BEGIN,
    };
  },

  filterProductSuccess: data => {
    return {
      type: actions.FILTER_PRODUCT_SUCCESS,
      data,
    };
  },

  filterProductErr: err => {
    return {
      type: actions.FILTER_PRODUCT_ERR,
      err,
    };
  },

  sortingProductBegin: () => {
    return {
      type: actions.SORTING_PRODUCT_BEGIN,
    };
  },

  sortingProductSuccess: data => {
    return {
      type: actions.SORTING_PRODUCT_SUCCESS,
      data,
    };
  },

  sortingProductErr: err => {
    return {
      type: actions.SORTING_PRODUCT_ERR,
      err,
    };
  },
};

export default actions;
