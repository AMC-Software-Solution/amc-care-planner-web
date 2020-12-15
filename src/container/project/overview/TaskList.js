import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/buttons/buttons';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { TasklistAction } from '../style';

const TaskList = () => {
  const [state, setState] = useState({
    selectedRowKeys: [],
    selectedRows: [],
  });
  const dataSource = [
    {
      key: '1',
      title: <span className="task-title">Add Images To the gallery</span>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img
            className="task-author"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="task-move">
            <FeatherIcon icon="move" size={16} />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <>
                  <Link to="#">
                    <FeatherIcon icon="eye" size={14} />
                    View
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="edit" size={14} />
                    Edit
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="trash-2" size={14} />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <FeatherIcon icon="more-horizontal" size={16} />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
    {
      key: '2',
      title: <span className="task-title">Add Images To the gallery</span>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img
            className="task-author"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="task-move">
            <FeatherIcon icon="move" size={16} />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <>
                  <Link to="#">
                    <FeatherIcon icon="eye" size={14} />
                    View
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="edit" size={14} />
                    Edit
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="trash-2" size={14} />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <FeatherIcon icon="more-horizontal" size={16} />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
    {
      key: '3',
      title: <span className="task-title">Add Images To the gallery</span>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img
            className="task-author"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="task-move">
            <FeatherIcon icon="move" size={16} />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <>
                  <Link to="#">
                    <FeatherIcon icon="eye" size={14} />
                    View
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="edit" size={14} />
                    Edit
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="trash-2" size={14} />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <FeatherIcon icon="more-horizontal" size={16} />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
    {
      key: '4',
      title: <span className="task-title">Add Images To the gallery</span>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img
            className="task-author"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="task-move">
            <FeatherIcon icon="move" size={16} />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <>
                  <Link to="#">
                    <FeatherIcon icon="eye" size={14} />
                    View
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="edit" size={14} />
                    Edit
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="trash-2" size={14} />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <FeatherIcon icon="more-horizontal" size={16} />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
    {
      key: '5',
      title: <span className="task-title">Add Images To the gallery</span>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img
            className="task-author"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="task-move">
            <FeatherIcon icon="move" size={16} />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <>
                  <Link to="#">
                    <FeatherIcon icon="eye" size={14} />
                    View
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="edit" size={14} />
                    Edit
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="trash-2" size={14} />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <FeatherIcon icon="more-horizontal" size={16} />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
    {
      key: '6',
      title: <span className="task-title">Add Images To the gallery</span>,
      component: (
        <TasklistAction>
          <span className="task-created">09:20 AM </span>
          <img
            className="task-author"
            style={{ width: '30px' }}
            src={require('../../../static/img/users/1.png')}
            alt=""
          />
          <span className="task-move">
            <FeatherIcon icon="move" size={16} />
          </span>
          <div className="task-action">
            <Dropdown
              content={
                <>
                  <Link to="#">
                    <FeatherIcon icon="eye" size={14} />
                    View
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="edit" size={14} />
                    Edit
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="trash-2" size={14} />
                    Delete
                  </Link>
                </>
              }
            >
              <Link to="#">
                <FeatherIcon icon="more-horizontal" size={16} />
              </Link>
            </Dropdown>
          </div>
        </TasklistAction>
      ),
    },
  ];

  const columns = [
    {
      dataIndex: 'title',
      key: 'title',
    },
    {
      dataIndex: 'component',
      key: 'component',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setState({ ...state, selectedRowKeys, selectedRows });
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div className="task-list-inner table-responsive">
      <Table pagination={false} rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
      <div className="tasklist-action">
        <Button type="primary" size="large" transparented>
          <FeatherIcon icon="plus" size="14" /> Add New Task
        </Button>
      </div>
    </div>
  );
};

export default TaskList;
