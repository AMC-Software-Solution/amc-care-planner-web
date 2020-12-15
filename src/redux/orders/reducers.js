import actions from './actions';
import staticData from '../../demoData/orders.json';

const initialState = {
  data: staticData,
  loading: false,
  error: null,
};

const { FILTER_ORDER_BEGIN, FILTER_ORDER_SUCCESS, FILTER_ORDER_ERR } = actions;

const ordersReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_ORDER_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case FILTER_ORDER_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case FILTER_ORDER_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default ordersReducer;
