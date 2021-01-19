import actions from './actions';
//import initialState from '../../demoData/branches.json';
import {fetchAllBranches, fetchSingleBranch} from '../../config/dataService/branchDataService';

const {
  singleBranchSuccess,
  singleBranchErr,

  allBranchesSuccess,
  allBranchesErr,
} = actions;



const getAllBranches = () => {
    return async dispatch => {
        try {
          const response = await fetchAllBranches();
          dispatch(allBranchesSuccess(response.data));
        } catch (err) {
          dispatch(allBranchesErr(err.toString()));
        }  
      };
    };

    const getSingleBranch = (id) => {
      return async dispatch => {
          try {
            const response = await fetchSingleBranch(id);
            dispatch(singleBranchSuccess(response.data));
            const vrkkk = response.data;
          } catch (err) {
            dispatch(singleBranchErr(err.toString()));
          }  
        };
      };
    

export {  getAllBranches, getSingleBranch };
