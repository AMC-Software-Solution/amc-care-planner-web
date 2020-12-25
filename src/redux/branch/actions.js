const actions = {
  SINGLE_BRANCH_SUCCESS: 'SINGLE_BRANCH_SUCCESS',
  SINGLE_BRANCH_ERR: 'SINGLE_BRANCH_ERR',

  ALL_BRANCHES_SUCCESS: 'ALL_BRANCHES_SUCCESS',
  ALL_BRANCHES_ERR: 'ALL_BRANCHES_ERR',



  singleBranchSuccess: data => {
    return {
      type: actions.SINGLE_BRANCH_SUCCESS,
      data,
    };
  },

  singleBranchErr: err => {
    return {
      type: actions.SINGLE_BRANCH_ERR,
      err,
    };
  },
  
  allBranchesSuccess: data => {
    return {
      type: actions.ALL_BRANCHES_SUCCESS,
      data,
    };
  },

  allBranchesErr: err => {
    return {
      type: actions.ALL_BRANCHES_ERR,
      err,
    };
  },

 

};

export default actions;
