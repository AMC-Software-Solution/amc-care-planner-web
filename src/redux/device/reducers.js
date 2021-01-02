import actions from './actions';
import staticData from '../../demoData/device.json';

const {
  SINGLE_DEVICE_BEGIN,
  SINGLE_DEVICE_SUCCESS,
  SINGLE_DEVICE_ERR,

  FILTER_DEVICE_BEGIN,
  FILTER_DEVICE_SUCCESS,
  FILTER_DEVICE_ERR,

  SORTING_DEVICE_BEGIN,
  SORTING_DEVICE_SUCCESS,
  SORTING_DEVICE_ERR,
} = actions;

const initialStateFilter = {
  data: staticData,
  loading: false,
  error: null,
};

const deviceReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_DEVICE_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case FILTER_DEVICE_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case FILTER_DEVICE_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    case SORTING_DEVICE_BEGIN:
      return {
        ...initialStateFilter,
        loading: true,
      };
    case SORTING_DEVICE_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case SORTING_DEVICE_ERR:
      return {
        ...initialStateFilter,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

const initialState = {
  data: staticData,
  loading: false,
  error: null,
};

const SingleDeviceReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_DEVICE_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_DEVICE_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_DEVICE_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleDeviceReducer, deviceReducer };
