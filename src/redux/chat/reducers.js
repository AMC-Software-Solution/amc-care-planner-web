import actions from './actions';
import staticData from '../../demoData/chatData.json';

const initialState = {
  data: staticData[0].privetChat,
  loading: false,
  error: null,
};

const initialStateGroupChat = {
  data: staticData[0].groupChat,
  loading: false,
  error: null,
};

const initialStateGroup = {
  data: staticData[0].groupChat,
  loading: false,
  error: null,
};

const initialStateUpdate = {
  data: staticData[0].privetChat,
  loading: false,
  error: null,
};

const {
  SINGLE_CHAT_BEGIN,
  SINGLE_CHAT_SUCCESS,
  SINGLE_CHAT_ERR,

  SINGLE_GROUP_CHAT_BEGIN,
  SINGLE_GROUP_CHAT_SUCCESS,
  SINGLE_GROUP_CHAT_ERR,

  UPDATE_GROUP_CHAT_BEGIN,
  UPDATE_GROUP_CHAT_SUCCESS,
  UPDATE_GROUP_CHAT_ERR,

  UPDATE_PRIVET_CHAT_BEGIN,
  UPDATE_PRIVET_CHAT_SUCCESS,
  UPDATE_PRIVET_CHAT_ERR,
} = actions;

const chatReducer = (state = initialStateUpdate, action) => {
  const { type, data, err } = action;
  switch (type) {
    case UPDATE_PRIVET_CHAT_BEGIN:
      return {
        ...initialStateUpdate,
        loading: true,
      };
    case UPDATE_PRIVET_CHAT_SUCCESS:
      return {
        ...initialStateUpdate,
        data,
        loading: false,
      };
    case UPDATE_PRIVET_CHAT_ERR:
      return {
        ...initialStateUpdate,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

const SingleChatReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_CHAT_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_CHAT_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_CHAT_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

const groupChatReducer = (state = initialStateGroupChat, action) => {
  const { type, data, err } = action;
  switch (type) {
    case UPDATE_GROUP_CHAT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_GROUP_CHAT_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case UPDATE_GROUP_CHAT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

const SingleChatGroupReducer = (state = initialStateGroup, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_GROUP_CHAT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_GROUP_CHAT_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case SINGLE_GROUP_CHAT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleChatReducer, chatReducer, groupChatReducer, SingleChatGroupReducer };
