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
    <Cards headless bodyStyle={{ background: '#F4F5F7', borderRadius: '10px' }}>
      <Dropdown
        content={
          <>
            <Link to="#">Open</Link>
            <Link onClick={() => deleteFileNdFolder(folder.path)} to="#">
              Delete
            </Link>
            <Link to="#">Rename</Link>
          </>
        }
        action={['click']}
      >
        <Link to="#">
          <FeatherIcon icon="more-vertical" />
        </Link>
      </Dropdown>
      {folder.type ? <FeatherIcon icon="file" /> : <FeatherIcon icon="folder" />} <br />
      {folder.name}
      {folder.type ? `.${folder.type}` : ''}
    </Cards>
  );
};

MainContent.propTypes = {
  folder: PropTypes.object,
};

export default MainContent;
