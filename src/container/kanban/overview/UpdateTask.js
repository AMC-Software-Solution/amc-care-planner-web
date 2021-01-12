/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { Input, Modal, Progress } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { ChecklistWrap } from '../style';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { Checkbox } from '../../../components/checkbox/checkbox';
import { Button } from '../../../components/buttons/buttons';
import { ToAddTask } from '../../../redux/kanban/actionCreator';

const UpdateTask = ({ data, modalVisible, handleCancel }) => {
  const { checklist } = data;
  const dispatch = useDispatch();
  const { tasks } = useSelector(state => {
    return {
      tasks: state.KanbanBoard.taskData,
    };
  });

  const [state, setState] = useState({
    editable: false,
    checkListPopup: '',
  });
  const { editable, checkListPopup } = state;

  const handleTaskEdit = () => {
    setState({
      ...state,
      editable: !editable,
    });
  };

  const onCancelEdit = e => {
    e.preventDefault();
    setState({
      ...state,
      editable: false,
    });
  };

  const onChange = (value, listId, taskId) => {
    tasks.map(task => {
      if (data.id === task.id) {
        task.checklist.map(list => {
          if (list.id === listId) {
            list.checkListTask.map(item => {
              if (item.id === taskId) item.checked = value;
              return item;
            });
          }
          return list;
        });
      }
      return task;
    });
    dispatch(ToAddTask(tasks));
  };

  const onCheckListItemDelete = (listId, taskId) => {
    const confirm = window.confirm('Are you sure to delete this?');
    if (confirm) {
      tasks.map(task => {
        if (data.id === task.id) {
          task.checklist.map(list => {
            if (list.id === listId) {
              const afterDeleteData = list.checkListTask.filter(item => item.id !== taskId);
              list.checkListTask = afterDeleteData;
            }
            return list;
          });
        }
        return task;
      });
      dispatch(ToAddTask(tasks));
    }
    return false;
  };

  const onCheckListItemAdd = (listId, checkListTask) => {
    const arrayData = [];
    const checkItem = document.querySelector(`input[name="checkListAddInputValue"]`).value;
    checkListTask.map(item => {
      return arrayData.push(item.id);
    });
    const max = checkListTask.length ? Math.max(...arrayData) : 0;
    tasks.map(task => {
      if (data.id === task.id) {
        task.checklist.map(list => {
          if (list.id === listId) {
            list.checkListTask = [
              ...checkListTask,
              {
                id: `${max + 1}`,
                label: checkItem,
                checked: false,
              },
            ];
          }
          return list;
        });
      }
      return task;
    });
    dispatch(ToAddTask(tasks));
    setState({
      ...state,
      checkListPopup: '',
    });
  };

  const onCheckListSubmit = (id, boardId, checkList) => {
    const arrayData = [];
    const checkItem = document.querySelector(`input[name="checkListInputValue"]`).value;
    checkList.map(item => {
      return arrayData.push(item.id);
    });
    const max = checkList.length ? Math.max(...arrayData) : 0;
    tasks.map(item => {
      if (item.id === id && item.boardId === boardId) {
        return (item.checklist = [...checkList, { id: `${max + 1}`, label: checkItem, checkListTask: [] }]);
      }
      return item;
    });
    dispatch(ToAddTask(tasks));
    setState({
      ...state,
      editable: false,
    });
  };

  const onCheckListDelete = (id, boardId, checkList, delId, event) => {
    event.preventDefault();
    const confirm = window.confirm('Are you sure to delete this?');
    if (confirm) {
      tasks.map(item => {
        if (item.id === id && item.boardId === boardId) {
          return (item.checklist = checkList.filter(listItem => listItem.id !== delId));
        }
        return item;
      });
      dispatch(ToAddTask(tasks));
    }
    return false;
  };

  const onShowChecklistAddPopup = id => {
    setState({
      ...state,
      checkListPopup: id,
    });
  };

  const onHideChecklistAddPopup = () => {
    setState({
      ...state,
      checkListPopup: '',
    });
  };

  return (
    <Modal
      title={
        <>
          <h4>{data.title}</h4> <span className="sub-text">in list Active Project</span>
        </>
      }
      wrapClassName="sDash_task-details"
      visible={modalVisible}
      footer={null}
      onCancel={handleCancel}
    >
      <div className="sDash_task-details-modal">
        <div className="sDash_task-details-modal__description">
          <span className="sDash_task-details__label">Description</span>
          <textarea name="task-details-label" placeholder="Add a more detailed description…" />
        </div>
      </div>

      <ChecklistWrap>
        <div className="sDash_checklist-block">
          <div className="addChecklist-wrap">
            <Button onClick={handleTaskEdit} className="btn-checklist" type="primary">
              <FeatherIcon icon="check-square" size={14} />
              Add Checklist
            </Button>
            {!editable ? null : (
              <div className="addChecklist-form">
                <Input
                  name="checkListInputValue"
                  className="add-checklist"
                  placeholder="Checklist Title"
                  onPressEnter={() => onCheckListSubmit(data.id, data.boardId, checklist)}
                />
                <div className="addChecklist-form-action">
                  <Button
                    onClick={() => onCheckListSubmit(data.id, data.boardId, checklist)}
                    className="btn-add"
                    size="small"
                    type="primary"
                  >
                    Add
                  </Button>
                  <Link onClick={onCancelEdit} to="#">
                    <FeatherIcon icon="x" size={18} />
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="sDash_checklist-row">
            {checklist.map((item, i) => {
              const checkedLength = item.checkListTask.filter(checked => checked.checked === true);
              return (
                <div className="sDash_checklist-item" key={i}>
                  <div className="sDash_checklist-item__top">
                    <h4 className="sDash_checklist-item__title">{item.label} </h4>
                    <Button
                      onClick={event => onCheckListDelete(data.id, data.boardId, checklist, item.id, event)}
                      className="btn-delete"
                      type="light"
                    >
                      Delete
                    </Button>
                  </div>
                  <div className="sDash_checklist__progress">
                    {item.checkListTask.length ? (
                      <Progress percent={Math.round((100 * checkedLength.length) / item.checkListTask.length)} />
                    ) : null}
                  </div>
                  <div className="sDash_checklist-tasks-wrap">
                    <ul className="sDash_checklist-tasks">
                      {item.checkListTask.map((task, i) => {
                        return (
                          <li className="sDash_checklist-tasks__single" key={i}>
                            <Checkbox checked={task.checked} onChange={value => onChange(value, item.id, task.id)}>
                              <span className="sDash_task-label">{task.label}</span>
                            </Checkbox>
                            <Dropdown
                              content={
                                <>
                                  <Link onClick={() => onCheckListItemDelete(item.id, task.id)} to="#">
                                    <span>Delete List</span>
                                  </Link>
                                </>
                              }
                              action={['click']}
                              className="wide-dropdwon kanbanCard-more"
                            >
                              <Link to="#" className="btn-more">
                                <FeatherIcon icon="more-horizontal" size={14} />
                              </Link>
                            </Dropdown>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="addChecklistTask-wrap">
                      {checkListPopup !== `cp-${item.id}` ? (
                        <Button
                          onClick={() => onShowChecklistAddPopup(`cp-${item.id}`)}
                          className="add-item"
                          type="light"
                        >
                          Add an Item
                        </Button>
                      ) : (
                        <div className="addChecklistTask-form">
                          <Input
                            name="checkListAddInputValue"
                            className="add-checklistTask"
                            placeholder="Checklist Title"
                            onPressEnter={() => onCheckListItemAdd(item.id, item.checkListTask)}
                          />
                          <div className="addChecklistTask-form-action">
                            <Button
                              onClick={() => onCheckListItemAdd(item.id, item.checkListTask)}
                              className="btn-add"
                              size="small"
                              type="primary"
                            >
                              Add
                            </Button>
                            <Link onClick={onHideChecklistAddPopup} to="#">
                              <FeatherIcon icon="x" size={18} />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ChecklistWrap>
    </Modal>
  );
};

UpdateTask.propTypes = {
  data: propTypes.object,
  modalVisible: propTypes.bool,
  handleCancel: propTypes.func,
};

export default UpdateTask;
