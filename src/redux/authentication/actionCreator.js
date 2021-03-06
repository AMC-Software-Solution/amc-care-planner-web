/* import Cookies from 'js-cookie';
import actions from './actions';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = () => {
  return async dispatch => {
    try {
      dispatch(loginBegin());
      setTimeout(() => {
        Cookies.set('logedIn', true);
        return dispatch(loginSuccess(true));
      }, 1000);
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin());
      Cookies.remove('logedIn');
      dispatch(logoutSuccess(null));
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut };
*/

import Cookies from 'js-cookie';
import actions from './actions';
import DataService from '../../config/dataService/dataService';

const { loginSuccess, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = (username, password) => dispatch => {
  return DataService.login(username, password).then(
    () => {
      return DataService.getAccount().then(
        success => {
          // success.data.imageUrl = 'https://img.apmcdn.org/12ed7a29f3f7e1f57770a5a1c4d001986ec24fd4/portrait/6a53a7-20110607-farah-mohamed-beledi.jpg';
          dispatch(loginSuccess(success.data));
          return Promise.resolve();
        },
        () => {
          dispatch({
            type: actions.LOGIN_ERR,
          });

          return Promise.reject();
        },
      );
    },
    () => {
      dispatch({
        type: actions.LOGIN_ERR,
      });

      return Promise.reject();
    },
  );
};

const logOut = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin());
      Cookies.remove('logedIn');
      dispatch(logoutSuccess(null));
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut };
