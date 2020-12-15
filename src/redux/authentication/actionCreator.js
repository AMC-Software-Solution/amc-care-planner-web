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
import actions from './actions'   ;
import DataService from '../../config/dataService/dataService';
import API from '../../config/api/index';
import { setItem } from '../../utility/localStorageControl';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;



const login = (username, password) => (dispatch) => {
  return DataService.login(username, password).then(
    (data) => {
       return DataService.getAccount().then(  (success) =>{
         dispatch(loginSuccess(success.data));
         return Promise.resolve();
       },
       (error) => {
          const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: actions.LOGIN_ERR,
        });

        return Promise.reject();
       }
       );

      
      
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: actions.LOGIN_ERR,
      });

      return Promise.reject();
    }
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
