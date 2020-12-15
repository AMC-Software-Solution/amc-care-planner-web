import actions from './actions';
import toData from '../../demoData/contact.json';

const initialState = {
  data: toData,
  loading: false,
  error: null,
};

const {
  CONTACT_READ_BEGIN,
  CONTACT_READ_SUCCESS,
  CONTACT_READ_ERR,
  CONTACT_STAR_UPDATE_BEGIN,
  CONTACT_STAR_UPDATE_SUCCESS,
  CONTACT_STAR_UPDATE_ERR,
} = actions;

const ContactReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CONTACT_STAR_UPDATE_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case CONTACT_STAR_UPDATE_SUCCESS:
      return {
        ...state,
        data,
        sLoading: false,
      };
    case CONTACT_STAR_UPDATE_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };

    case CONTACT_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CONTACT_READ_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case CONTACT_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default ContactReducer;
