import React from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import { Progress } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { Button } from '../../../components/buttons/buttons';
import { fmAddActiveClass, fmReadAllFileFolder } from '../../../redux/fileManager/actionCreator';

const SideNav = () => {
  const dispatch = useDispatch();
  const { FileManager } = useSelector(state => {
    return {
      FileManager: state.FileManager.data,
    };
  });

  const { path } = useRouteMatch();

  const toggleActive = paths => {
    dispatch(fmAddActiveClass(paths));
    dispatch(fmReadAllFileFolder(paths));
  };

  const SubFolder = ({ folders }) => {
    return (
      <ul className="common-ul display">
        {folders.map(item => {
          return (
            <li className={item.className} key={item.id}>
              <NavLink onClick={() => toggleActive(item.path)} to={`${path}/${item.path}`}>
                {item.folder.length ? (
                  <FeatherIcon icon={item.className ? 'chevron-down' : 'chevron-right'} size={14} />
                ) : null}
                {item.name}
              </NavLink>
              {item.folder.length ? <Folder folders={item.folder} /> : null}
            </li>
          );
        })}
      </ul>
    );
  };

  SubFolder.propTypes = {
    folders: PropTypes.array,
  };

  const Folder = ({ folders }) => {
    return (
      <ul className="common-ul display">
        {folders.map(item => {
          return (
            <li className={item.className} key={item.id}>
              <NavLink onClick={() => toggleActive(item.path)} to={`${path}/${item.path}`}>
                {item.folder.length ? (
                  <FeatherIcon icon={item.className ? 'chevron-down' : 'chevron-right'} size={14} />
                ) : null}
                {item.name}
              </NavLink>
              {item.folder.length ? <SubFolder folders={item.folder} /> : null}
            </li>
          );
        })}
      </ul>
    );
  };

  Folder.propTypes = {
    folders: PropTypes.array,
  };

  return (
    <Cards headless>
      <Dropdown
        content={
          <>
            <Link to="#">
              <FeatherIcon icon="folder" /> Create Folder
            </Link>
            <Link to="#">
              <FeatherIcon icon="file" /> Create File
            </Link>
            <Link to="#">
              <FeatherIcon icon="paperclip" /> File upload
            </Link>
            <Link to="#">
              <FeatherIcon icon="folder" /> Folder upload
            </Link>
          </>
        }
        action={['click']}
      >
        <Button size="large" shape="round" type="info">
          <FeatherIcon icon="plus" />
          Add Files
        </Button>
      </Dropdown>
      <h3>Files</h3>
      <ul className="common-ul">
        <li className="active">
          <NavLink to="#">
            <FeatherIcon icon="chevron-down" size={14} />
            <FeatherIcon icon="file" size={14} />
            My files
          </NavLink>
          <ul className="common-ul display">
            {FileManager.map(item => {
              return (
                <li className={item.className} key={item.id}>
                  <NavLink onClick={() => toggleActive(item.path)} to={`${path}/${item.path}`}>
                    {item.folder.length ? (
                      <FeatherIcon icon={item.className ? 'chevron-down' : 'chevron-right'} size={14} />
                    ) : null}
                    {item.name}
                  </NavLink>
                  {item.folder.length ? <Folder folders={item.folder} /> : null}
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <FeatherIcon icon="file" size={14} />
          My Computer
        </li>
      </ul>

      <h2>STORAGE</h2>
      <Progress percent={80} className="progress-success" />
      <p>9.5 GB of 15 GB Used</p>
    </Cards>
  );
};

SideNav.propTypes = {};

export default SideNav;
