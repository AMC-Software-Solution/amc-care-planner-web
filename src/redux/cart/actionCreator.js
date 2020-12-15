import actions from './actions';
import products from '../../demoData/cart.json';

const {
  cartDataBegin,
  cartDataSuccess,
  cartDataErr,

  cartUpdateBegin,
  cartUpdateSuccess,
  cartUpdateErr,

  cartDeleteBegin,
  cartDeleteSuccess,
  cartDeleteErr,
} = actions;

const cartGetData = () => {
  return async dispatch => {
    try {
      dispatch(cartDataBegin());
      dispatch(cartDataSuccess(products));
    } catch (err) {
      dispatch(cartDataErr(err));
    }
  };
};

const cartUpdateQuantity = (id, quantity, cartData) => {
  return async dispatch => {
    try {
      dispatch(cartUpdateBegin());
      const data = cartData.map(item => {
        if (item.id === id) item.quantity = quantity;
        return item;
      });
      dispatch(cartUpdateSuccess(data));
    } catch (err) {
      dispatch(cartUpdateErr(err));
    }
  };
};

const cartDelete = (id, chartData) => {
  return async dispatch => {
    try {
      dispatch(cartDeleteBegin());
      const data = chartData.filter(item => item.id !== id);
      setTimeout(() => {
        dispatch(cartDeleteSuccess(data));
      }, 500);
    } catch (err) {
      dispatch(cartDeleteErr(err));
    }
  };
};

export { cartGetData, cartUpdateQuantity, cartDelete };
