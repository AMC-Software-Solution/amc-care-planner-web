import actions from './actions';
import initialState from '../../../../../demoData/notifications.json';

const { readNotificationBegin, readNotificationSuccess, readNotificationErr } = actions;

const readNotificationList = () => {
  return async dispatch => {
    try {
      dispatch(readNotificationBegin());
      dispatch(readNotificationSuccess(initialState));
    } catch (err) {
      dispatch(readNotificationErr(err));
    }
  };
};

export { readNotificationList };
