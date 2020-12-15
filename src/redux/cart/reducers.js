import actions from './actions';

const {
  CART_DATA_BEGIN,
  CART_DATA_SUCCESS,
  CART_DATA_ERR,

  CART_UPDATE_BEGIN,
  CART_UPDATE_SUCCESS,
  CART_UPDATE_ERR,

  CART_DELETE_BEGIN,
  CART_DELETE_SUCCESS,
  CART_DELETE_ERR,
} = actions;

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CART_DATA_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CART_DATA_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case CART_DATA_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case CART_UPDATE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CART_UPDATE_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case CART_UPDATE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case CART_DELETE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CART_DELETE_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case CART_DELETE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
