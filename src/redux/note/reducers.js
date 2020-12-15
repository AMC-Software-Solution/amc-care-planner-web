import actions from './actions';
import toData from '../../demoData/note.json';

const initialState = {
  data: toData,
  loading: false,
  error: null,
};

const {
  NOTE_READ_BEGIN,
  NOTE_READ_SUCCESS,
  NOTE_READ_ERR,
  NOTE_STAR_UPDATE_BEGIN,
  NOTE_STAR_UPDATE_SUCCESS,
  NOTE_STAR_UPDATE_ERR,
  NOTE_LABEL_UPDATE_BEGIN,
  NOTE_LABEL_UPDATE_SUCCESS,
  NOTE_LABEL_UPDATE_ERR,
} = actions;

const NoteReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case NOTE_STAR_UPDATE_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case NOTE_STAR_UPDATE_SUCCESS:
      return {
        ...state,
        data,
        sLoading: false,
      };
    case NOTE_STAR_UPDATE_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };
    case NOTE_LABEL_UPDATE_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case NOTE_LABEL_UPDATE_SUCCESS:
      return {
        ...state,
        data,
        sLoading: false,
      };
    case NOTE_LABEL_UPDATE_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };
    case NOTE_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case NOTE_READ_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case NOTE_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default NoteReducer;
