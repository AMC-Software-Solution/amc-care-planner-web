import actions from './actions';
import { fetchAllServiceUsers, fetchSingleServiceUser } from '../../../config/dataService/serviceUserDataService';

const {
  singleServiceUserSuccess,
  singleServiceUserErr,

  ServiceUsersSuccess,
  ServiceUsersErr,
} = actions;

const getAllServiceUsers = () => {
  return async dispatch => {
    try {
      const response = await fetchAllServiceUsers();
      dispatch(ServiceUsersSuccess(response.data));
    } catch (err) {
      dispatch(ServiceUsersErr(err.toString()));
    }
  };
};

const getSingleServiceUser = id => {
  return async dispatch => {
    try {
      const response = await fetchSingleServiceUser(id);
      dispatch(singleServiceUserSuccess(response.data));
    } catch (err) {
      dispatch(singleServiceUserErr(err.toString()));
    }
  };
};

export { getAllServiceUsers, getSingleServiceUser };
