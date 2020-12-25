import actions from './actions';
//import staticData from '../../demoData/branchs.json';

const {
  SINGLE_BRANCH_SUCCESS,
  SINGLE_BRANCH_ERR,

  ALL_BRANCHES_SUCCESS,
  ALL_BRANCHES_ERR,
} = actions;

const initialStateFilter = {
  data: null,
  loading: false,
  error: null,
};

const branchReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case ALL_BRANCHES_SUCCESS:
      return {
        ...initialStateFilter,
        data,
        loading: false,
      };
    case ALL_BRANCHES_ERR:
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
  data: null,
  loading: false,
  error: null,
};

const singleBranchReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_BRANCH_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_BRANCH_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { singleBranchReducer, branchReducer };
