import actions from './actions';
import fmData from '../../demoData/fileManager.json';

const initialState = {
  data: fmData,
  loading: false,
  error: null,
  reData: fmData,
  reLoading: false,
  reError: null,
};

const {
  FM_DATA_BEGIN,
  FM_DATA_SUCCESS,
  FM_DATA_ERR,
  FM_DATA_RECEIVED_BEGIN,
  FM_DATA_RECEIVED_SUCCESS,
  FM_DATA_RECEIVED_ERR,
} = actions;

const FmReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FM_DATA_RECEIVED_BEGIN:
      return {
        ...state,
        reLoading: true,
      };
    case FM_DATA_RECEIVED_SUCCESS:
      return {
        ...state,
        reData: data,
        reLoading: false,
      };
    case FM_DATA_RECEIVED_ERR:
      return {
        ...state,
        reError: err,
        reLoading: false,
      };
    case FM_DATA_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FM_DATA_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case FM_DATA_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default FmReducer;
