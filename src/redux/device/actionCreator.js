import actions from './actions';
import initialState from '../../demoData/device.json';
// import {fetchAllDevices} from '../../config/dataService/DeviceDataService';

const {
  singleDeviceBegin,
  singleDeviceSuccess,
  singleDeviceErr,

  filterDeviceBegin,
  filterDeviceSuccess,
  filterDeviceErr,

  sortingDeviceBegin,
  sortingDeviceSuccess,
  sortingDeviceErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleDeviceBegin());
      const data = initialState.filter(device => {
        return device.id === parseInt(paramsId, 10);
      });
      dispatch(singleDeviceSuccess(data));
    } catch (err) {
      dispatch(singleDeviceErr(err));
    }
  };
};

const filterDeviceByGender = gender => {
  return async dispatch => {
    try {
      dispatch(filterDeviceBegin());
      const data = initialState.filter(device => {
        if (gender !== 'all') {
          return device.gender === gender;
        }
        return initialState;
      });
      dispatch(filterDeviceSuccess(data));
    } catch (err) {
      dispatch(filterDeviceErr(err.toString()));
    }
  };
};

const sortingDeviceByDevice = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingDeviceBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });

      setTimeout(() => {
        dispatch(sortingDeviceSuccess(data));
      }, 500);
    } catch (err) {
      dispatch(sortingDeviceErr(err));
    }
  };
};

export { filterSinglePage, filterDeviceByGender, sortingDeviceByDevice };
