import actions from './actions';
import staticData from '../../demoData/gallery.json';

const initialState = {
  data: staticData,
  loading: false,
  error: null,
};

const { FILTER_GALLERY_BEGIN, FILTER_GALLERY_SUCCESS, FILTER_GALLERY_ERR } = actions;

const galleryReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_GALLERY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FILTER_GALLERY_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case FILTER_GALLERY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default galleryReducer;
