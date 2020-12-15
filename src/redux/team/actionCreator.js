import actions from './actions';
import staticData from '../../demoData/teamData.json';

const { teamDataBegin, teamDataSuccess, teamDataErr } = actions;

const teamGetData = () => {
  return async dispatch => {
    try {
      dispatch(teamDataBegin());
      dispatch(teamDataSuccess(staticData));
    } catch (err) {
      dispatch(teamDataErr(err));
    }
  };
};

export { teamGetData };
