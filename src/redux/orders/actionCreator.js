import actions from './actions';
import initialState from '../../demoData/orders.json';

const { filterOrderBegin, filterOrderSuccess, filterOrderErr } = actions;

const orderFilter = (column, value) => {
  return async dispatch => {
    try {
      dispatch(filterOrderBegin());

      const data = initialState.filter(item => {
        if (value !== '') {
          return item[column] === value;
        }
        return item;
      });

      dispatch(filterOrderSuccess(data));
    } catch (err) {
      dispatch(filterOrderErr(err));
    }
  };
};

export { orderFilter };
