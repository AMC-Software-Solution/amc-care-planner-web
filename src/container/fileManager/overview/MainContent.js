import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useDispatch } from 'react-redux';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { deleteAddActiveClass } from '../../../redux/fileManager/actionCreator';

const MainContent = ({ folder }) => {
  const dispatch = useDispatch();
  const deleteFileNdFolder = paths => {
    return dispatch(deleteAddActiveClass(paths));
  };
  return (
    <div className="sDash-file-card">
      <Cards headless bodyStyle={{ background: '#F4F5F7', borderRadius: '10px' }}>
        <Dropdown
          className="folder-dropdown"
          content={
            <>
              <Link to="#">
                <FeatherIcon icon="eye" size={14} />
                Download
              </Link>
              <Link onClick={() => deleteFileNdFolder(folder.path)} to="#">
                <FeatherIcon icon="link" size={14} />
                Copy
              </Link>
              <Link to="#">
                <FeatherIcon icon="trash-2" size={14} />
                Delete
              </Link>
            </>
          }
          action={['click']}
        >
          <Link to="#">
            <FeatherIcon icon="more-vertical" />
          </Link>
        </Dropdown>
        <div className="file-logo">
          <img src={require(`../../../static/img/files/pdf.png`)} alt="" />
        </div>
        <span className="file-name">
          {folder.name}
          {folder.type ? `.${folder.type}` : ''}
        </span>
      </Cards>
    </div>
  );
};

MainContent.propTypes = {
  folder: PropTypes.object,
};

export default MainContent;
