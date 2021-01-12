/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Input } from 'antd';
import { Button } from '../../../components/buttons/buttons';

const KanbanBoardItem = ({ data, showModal, onBackShadow, taskId, onTaskTitleUpdate, onTaskTitleDelete }) => {
  const { title, id } = data;
  const [value, setValue] = useState(title);
  const onTaskTitleChange = e => {
    setValue(e.target.value);
  };
  return (
    <div className={taskId === id ? 'sDash_kanvan-task__editable' : ''}>
      <h4 className="sDash_kanvan-task__title">
        <Link onClick={() => showModal(data)} to="#">
          {title}
        </Link>
        <Link to="#" className="btn-edit" onClick={() => onBackShadow(id)}>
          <FeatherIcon icon="edit-2" size={12} />
        </Link>
      </h4>
      <div className="sDash_kanvan-task__edit" draggable="false">
        <div className="sDash_kanvan-task__edit--left">
          <Input onPressEnter={() => onTaskTitleUpdate(value, id)} onChange={onTaskTitleChange} value={value} />
          <Button
            onClick={() => onTaskTitleUpdate(value, id)}
            className="edit-kanban-task"
            htmlType="submit"
            size="small"
            type="primary"
          >
            Save
          </Button>
        </div>
        <div className="sDash_kanvan-task__edit--right">
          <Link to="#" className="btn-delete" onClick={e => onTaskTitleDelete(e, id)}>
            <FeatherIcon icon="trash-2" size={12} />
            <span>Delete Task</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

KanbanBoardItem.propTypes = {
  data: propTypes.object,
  showModal: propTypes.func,
  onBackShadow: propTypes.func,
  taskId: propTypes.string,
  onTaskTitleUpdate: propTypes.func,
  onTaskTitleDelete: propTypes.func,
};

export default KanbanBoardItem;
