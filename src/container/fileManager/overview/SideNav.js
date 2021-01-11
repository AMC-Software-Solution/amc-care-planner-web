import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import { Progress, Modal, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { Button } from '../../../components/buttons/buttons';
import { fmAddActiveClass, fmReadAllFileFolder } from '../../../redux/fileManager/actionCreator';
import { SidebarNav } from '../Style';

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

  const [state, setState] = useState({
    isModalVisible: false,
  });
  const { isModalVisible } = state;

  const showModal = () => {
    setState({
      ...state,
      isModalVisible: true,
    });
  };
  const handleCancel = () => {
    setState({
      ...state,
      isModalVisible: false,
    });
  };

  const SubFolder = ({ folders }) => {
    return (
      <ul className="sDash_filemanager-nav display">
        {folders.map(item => {
          return (
            <li className={`sDash_filemanager-nav__item ${item.className}`} key={item.id}>
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
      <ul className="sDash_filemanager-nav display">
        {folders.map(item => {
          return (
            <li className={`sDash_filemanager-nav__item ${item.className}`} key={item.id}>
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
    <SidebarNav>
      <Cards headless>
        <Dropdown
          className="add-file-dropdown"
          content={
            <>
              <Link to="#" onClick={showModal}>
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
          <Button className="btn-fileAdd" size="large" shape="round" type="primary">
            <FeatherIcon icon="plus" />
            Add Files
          </Button>
        </Dropdown>
        <Modal
          title="Create File"
          wrapClassName="sDash_create-file"
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <Form name="contact">
            <Form.Item name="f_name">
              <Input placeholder="File Name" />
            </Form.Item>
            <div className="sDash-button-grp">
              <Button htmlType="submit" onClick={handleCancel} size="default" type="white" outlined>
                Cancel
              </Button>
              <Button onClick={handleCancel} className="btn-create" type="primary">
                Create
              </Button>
            </div>
          </Form>
        </Modal>
        <h3 className="sDash_filemanager-title">Files</h3>
        <ul className="sDash_filemanager-nav">
          <li className="sDash_filemanager-nav__item active">
            <NavLink to="#">
              <span className="sDash-dropdown-icon">
                <FeatherIcon icon="chevron-down" size={14} />
              </span>
              <span className="sDash_filemanager-fileicon">
                <FeatherIcon icon="file" size={14} />
              </span>
              My files
            </NavLink>
            <ul className="sDash_filemanager-nav display">
              {FileManager.map(item => {
                return (
                  <li className={item.className} key={item.id}>
                    <NavLink onClick={() => toggleActive(item.path)} to={`${path}/${item.path}`}>
                      {item.folder.length ? (
                        <>
                          <span className="sDash-dropdown-icon">
                            <FeatherIcon icon={item.className ? 'chevron-down' : 'chevron-right'} size={14} />
                          </span>
                          <span className="sDash_filemanager-fileicon">
                            <FeatherIcon icon="folder" size={14} />
                          </span>
                        </>
                      ) : null}
                      {item.name}
                    </NavLink>
                    {item.folder.length ? <Folder folders={item.folder} /> : null}
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="sDash_filemanager-nav__item">
            <span>
              <span className="sDash_filemanager-fileicon">
                <FeatherIcon icon="file" size={14} />
              </span>
              My Computer
            </span>
          </li>
        </ul>
        <div className="sDash_filemanager-bottom">
          <h2 className="sDash_filemanager-bottom__title">STORAGE</h2>
          <Progress percent={80} className="progress-success" />
          <p>9.5 GB of 15 GB Used</p>
        </div>
      </Cards>
    </SidebarNav>
  );
};

SideNav.propTypes = {};

export default SideNav;
