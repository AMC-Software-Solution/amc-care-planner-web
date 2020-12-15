import actions from './actions';
import initialState from '../../demoData/chatData.json';

const {
  singleChatBegin,
  singleChatSuccess,
  singleChatErr,

  singleGroupChatBegin,
  singleGroupChatSuccess,
  singleGroupChatErr,

  updateGroupChatBegin,
  updateGroupChatSuccess,
  updateGroupChatErr,

  updatePrivetChatBegin,
  updatePrivetChatSuccess,
  updatePrivetChatErr,
} = actions;

const filterSinglePage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleChatBegin());
      const data = initialState[0].privetChat.filter(user => {
        return user.email === paramsId;
      });
      dispatch(singleChatSuccess(data));
    } catch (err) {
      dispatch(singleChatErr(err));
    }
  };
};

const updatePrivetChat = (paramsId, pushItem) => {
  return async dispatch => {
    try {
      dispatch(updatePrivetChatBegin());
      const data = initialState[0].privetChat.map(item => {
        const user = item;
        if (user.email === paramsId) {
          user.time = pushItem.time;
          user.content = [...user.content, pushItem];
        }
        return user;
      });
      dispatch(updatePrivetChatSuccess(data));
    } catch (err) {
      dispatch(updatePrivetChatErr(err));
    }
  };
};

const filterSinglepageGroup = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleGroupChatBegin());
      const data = initialState[0].groupChat.filter(user => {
        return user.id === paramsId;
      });
      dispatch(singleGroupChatSuccess(data));
    } catch (err) {
      dispatch(singleGroupChatErr(err));
    }
  };
};

const updateGroupChat = (paramsId, pushItem) => {
  return async dispatch => {
    try {
      dispatch(updateGroupChatBegin());
      const data = initialState[0].groupChat.map(item => {
        const user = item;
        if (user.id === paramsId) {
          user.time = pushItem.time;
          user.content = [...user.content, pushItem];
        }
        return user;
      });
      dispatch(updateGroupChatSuccess(data));
    } catch (err) {
      dispatch(updateGroupChatErr(err));
    }
  };
};

export { filterSinglePage, filterSinglepageGroup, updateGroupChat, updatePrivetChat };
