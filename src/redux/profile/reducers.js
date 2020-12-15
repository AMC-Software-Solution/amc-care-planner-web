import actions from './actions';
import toData from '../../demoData/friends.json';
import posts from '../../demoData/post.json';

const initialState = {
  friends: toData,
  loading: false,
  error: null,
  posts,
  postLoading: false,
};

const {
  PROFILE_FRIENDS_BEGIN,
  PROFILE_FRIENDS_SUCCESS,
  PROFILE_FRIENDS_ERR,
  POST_DATA_BEGIN,
  POST_DATA_SUCCESS,
  POST_DATA_ERR,
} = actions;

const ProfileReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case PROFILE_FRIENDS_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case PROFILE_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: data,
        sLoading: false,
      };
    case PROFILE_FRIENDS_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };
    case POST_DATA_BEGIN:
      return {
        ...state,
        postLoading: true,
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        posts: data,
        postLoading: false,
      };
    case POST_DATA_ERR:
      return {
        ...state,
        error: err,
        postLoading: false,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
