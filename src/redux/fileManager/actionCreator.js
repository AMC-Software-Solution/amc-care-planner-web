/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import actions from './actions';
import initialState from '../../demoData/fileManager.json';

const {
  fmDataBegin,
  fmDataSuccess,
  fmDataErr,
  fmDataReceivedBegin,
  fmDataReceivedSuccess,
  fmDataReceivedErr,
} = actions;

const fmGetData = () => {
  return async dispatch => {
    try {
      dispatch(fmDataBegin());
      dispatch(fmDataSuccess(initialState));
    } catch (err) {
      dispatch(fmDataErr(err));
    }
  };
};

const Folder = (folders, paths) => {
  return folders.map(item => {
    if (item.path === paths) {
      item.className = item.className === 'active' ? '' : 'active';
    }
    return item.folder.length && SubFolder(item.folder, paths);
  });
};

const SubFolder = (folders, paths) => {
  return folders.map(item => {
    if (item.path === paths) {
      item.className = item.className === 'active' ? '' : 'active';
    }
    return item.folder.length && Folder(item.folder, paths);
  });
};

const fmAddActiveClass = paths => {
  return async dispatch => {
    try {
      dispatch(fmDataBegin());
      initialState.map(value => {
        if (value.path === paths) {
          value.className = value.className === 'active' ? '' : 'active';
        }
        return value.folder.length && Folder(value.folder, paths);
      });

      dispatch(fmDataSuccess(initialState));
    } catch (err) {
      dispatch(fmDataErr(err));
    }
  };
};

const DeleteFolder = (folders, paths) => {
  return folders.map(item => {
    if (item.path === paths) {
      return item.path !== paths;
    }
    return item.folder.length && DeleteSubFolder(item.folder, paths);
  });
};

const DeleteSubFolder = (folders, paths) => {
  return folders.map(item => {
    if (item.path === paths) {
      item.className = item.className === 'active' ? '' : 'active';
    }
    return item.folder.length && DeleteFolder(item.folder, paths);
  });
};

const deleteAddActiveClass = paths => {
  return async dispatch => {
    try {
      dispatch(fmDataBegin());
      initialState.map(value => {
        if (value.path === paths) {
          console.log(paths);
          value.className = value.className === 'active' ? '' : 'active';
        }
        return value.folder.length && DeleteFolder(value.folder, paths);
      });

      dispatch(fmDataSuccess(initialState));
    } catch (err) {
      dispatch(fmDataErr(err));
    }
  };
};

const GetFolderData = (folders, paths, dispatch) => {
  return folders.filter(item => {
    if (item.path === paths) {
      return dispatch(fmDataReceivedSuccess([item]));
    }
    return item.folder.length && GetSubFolderData(item.folder, paths, dispatch);
  });
};

const GetSubFolderData = (folders, paths, dispatch) => {
  return folders.filter(item => {
    if (item.path === paths) {
      return dispatch(fmDataReceivedSuccess([item]));
    }
    return item.folder.length && Folder(item.folder, paths, dispatch);
  });
};

const fmReadAllFileFolder = paths => {
  return async dispatch => {
    try {
      dispatch(fmDataReceivedBegin());
      return initialState.filter(value => {
        if (value.path === paths) {
          return dispatch(fmDataReceivedSuccess([value]));
        }
        return value.folder.length && GetFolderData(value.folder, paths, dispatch);
      });
    } catch (err) {
      dispatch(fmDataReceivedErr(err));
    }
  };
};

export { fmGetData, fmAddActiveClass, fmReadAllFileFolder, deleteAddActiveClass };
