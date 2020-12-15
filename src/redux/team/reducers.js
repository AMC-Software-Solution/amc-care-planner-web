import actions from './actions';
import staticData from '../../demoData/teamData.json';

const initialState = {
  data: staticData,
  loading: false,
  error: null,
};
const { TEAM_DATA_BEGIN, TEAM_DATA_SUCCESS, TEAM_DATA_ERR } = actions;
const teamReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case TEAM_DATA_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case TEAM_DATA_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case TEAM_DATA_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { teamReducer };
