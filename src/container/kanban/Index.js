/* eslint-disable no-param-reassign */
import React, { useState, useCallback, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Input, Form } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Scrollbars } from 'react-custom-scrollbars';
import propTypes from 'prop-types';
import { KanvanBoardWrap, BackShadow } from './style';
import KanbanBoardItem from './overview/KanbanBoardItem';
import UpdateTask from './overview/UpdateTask';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Dropdown } from '../../components/dropdown/dropdown';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { ToAddBoard, ToAddTask, ToDeleteTask } from '../../redux/kanban/actionCreator';

const BoardTitleUpdate = ({ boardTitle, boardId, onBlur }) => {
  const [value, setValue] = useState(boardTitle);

  const onChangeHandler = e => {
    setValue(e.target.value);
  };

  return (
    <Input
      name={`titile-edit${boardId}`}
      className="title-edit"
      placeholder="Enter Title"
      onChange={onChangeHandler}
      onBlur={() => onBlur(boardId)}
      onPressEnter={() => onBlur(boardId)}
      value={value}
    />
  );
};

BoardTitleUpdate.propTypes = {
  boardTitle: propTypes.string,
  boardId: propTypes.string,
  onBlur: propTypes.func,
};

/* 
  @Todo Remove unnecessary Code and variable
*/

const Kanban = () => {
  const dispatch = useDispatch();
  const { rtl, boardData, tasks } = useSelector(state => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      boardData: state.KanbanBoard.boardData,
      tasks: state.KanbanBoard.taskData,
    };
  });

  const renderView = ({ style, ...props }) => {
    const customStyle = {
      marginRight: 'auto',
      [rtl ? 'marginLeft' : 'marginRight']: '-17px',
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  };

  renderView.propTypes = {
    style: propTypes.object,
  };

  const [addColumn, setAddColumn] = useState(false);

  const [state, setState] = useState({
    columnTitle: '',
    boardTitle: '',
    boardId: '',
    titleBoardId: '',
    checklistData: {
      id: 1,
      boardId: 1,
      checklist: [],
    },
    modalVisible: false,
    boardEditable: false,
    backShadow: false,
    taskId: '',
  });

  const [form] = Form.useForm();
  const KanbanColumn = ({ status, changeTaskStatus, children }) => {
    const ref = useRef(null);
    const [, drop] = useDrop({
      accept: 'card',
      drop(item) {
        changeTaskStatus(item.id, status);
      },
    });
    drop(ref);
    return (
      <div className="sDash_kanban-board-item" ref={ref}>
        <Scrollbars
          autoHide
          autoHideTimeout={500}
          autoHideDuration={200}
          renderView={renderView}
          className="sDash_kanban-board-item-scrolable"
        >
          {children}
        </Scrollbars>
      </div>
    );
  };

  KanbanColumn.propTypes = {
    status: propTypes.string,
    children: propTypes.array,
    changeTaskStatus: propTypes.func,
  };

  const KanbanItem = ({ id, children }) => {
    const ref = useRef(null);
    const [{ isDragging }, drag] = useDrag({
      item: { type: 'card', id },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(ref);
    return (
      <div className="sDash_kanvan-task__single" ref={ref} style={{ opacity }}>
        {children}
      </div>
    );
  };

  KanbanItem.propTypes = {
    id: propTypes.string,
    children: propTypes.object,
  };

  const changeTaskStatus = useCallback(
    (id, status) => {
      let task = tasks.find(item => item.id === id);
      const taskIndex = tasks.indexOf(task);
      task = { ...task, boardId: status };
      const newTasks = update(tasks, {
        [taskIndex]: { $set: task },
      });
      dispatch(ToAddTask(newTasks));
    },
    [tasks, dispatch],
  );

  const activeAddOption = e => {
    e.preventDefault();
    setAddColumn(true);
  };

  const diActiveAddOption = e => {
    e.preventDefault();
    setAddColumn(false);
  };

  const onColumnTitleChange = e => {
    setState({
      ...state,
      columnTitle: e.target.value,
    });
  };

  const { columnTitle, taskId, boardId, backShadow, checklistData, modalVisible, titleBoardId } = state;

  const addColumnHandler = () => {
    const arrayData = [];
    boardData.map(data => {
      return arrayData.push(data.boardId);
    });

    const max = Math.max(...arrayData);

    if (columnTitle !== '') {
      dispatch(
        ToAddBoard([
          ...boardData,
          {
            boardId: max + 1,
            title: columnTitle,
          },
        ]),
      );
      setState({
        ...state,
        columnTitle: '',
      });
      setAddColumn(false);
    } else {
      alert('Please Enter a Column Ttile');
    }
  };

  const deleteColumnHandler = id => {
    const afterDeleteData = boardData.filter(board => board.boardId !== id);
    const confirm = window.confirm('Are You sure to delete this?');
    if (confirm) {
      dispatch(ToAddBoard(afterDeleteData));
    }
    return false;
  };

  const addTaskHandler = id => {
    const arrayData = [];
    const taskItem = document.querySelector(`input[name="taskInput-${id}"]`).value;
    tasks.map(data => {
      return arrayData.push(data.id);
    });
    const max = Math.max(...arrayData);

    if (taskItem !== '') {
      dispatch(
        ToAddTask([
          ...tasks,
          {
            id: `${max + 1}`,
            boardId,
            title: taskItem,
            checklist: [],
          },
        ]),
      );
      setState({
        ...state,
        boardId: '',
      });
    } else {
      alert('Please Enter a Task Ttile');
    }
  };

  const handleOnAddTask = (e, id) => {
    e.preventDefault();
    setState({
      ...state,
      boardId: id,
    });
  };

  const handleOffAddTask = e => {
    e.preventDefault();
    setState({
      ...state,
      boardId: '',
    });
  };

  const showModal = dataList => {
    setState({
      ...state,
      modalVisible: !modalVisible,
      checklistData: dataList,
    });
  };

  const handleCancel = () => {
    setState({
      ...state,
      modalVisible: false,
    });
  };

  const onBoardEditable = (e, id, title) => {
    e.preventDefault();
    setState({
      ...state,
      boardEditable: true,
      boardTitle: title,
      titleBoardId: id,
    });
  };

  const onBoardEditableHide = id => {
    boardData.map(board => {
      if (board.boardId === id) {
        board.title = document.querySelector(`input[name="titile-edit${id}"]`).value;
      }
      return board;
    });
    dispatch(ToAddBoard(boardData));
    setState({
      ...state,
      boardEditable: false,
      titleBoardId: '',
    });
  };

  const onBoardTitleChange = event => {
    event.preventDefault();
    setState({
      ...state,
      boardTitle: event.target.value,
    });
  };

  const onBackShadow = id => {
    setState({
      ...state,
      backShadow: true,
      taskId: id,
    });
  };

  const onBackShadowHide = () => {
    setState({
      ...state,
      backShadow: false,
      taskId: '',
    });
  };

  const onTaskTitleUpdate = (value, id) => {
    tasks.map(task => {
      if (task.id === id) {
        task.title = value;
        setState({
          ...state,
          backShadow: false,
          taskId: '',
        });
      }
      return task;
    });
    dispatch(ToAddTask(tasks));
  };

  const onTaskTitleDelete = (e, id) => {
    e.preventDefault();
    const afterDeleteTask = tasks.filter(task => task.id !== id);
    setState({
      ...state,
      backShadow: false,
      taskId: '',
    });
    dispatch(ToDeleteTask(afterDeleteTask));
  };
  return (
    <>
      <PageHeader
        title="Tasks"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <KanvanBoardWrap>
              <Cards headless title="Employee Tasks">
                <DndProvider backend={HTML5Backend}>
                  <div className="sDash_kanban-board-list">
                    {boardData.map(board => {
                      return (
                        <KanbanColumn key={board.boardId} status={board.boardId} changeTaskStatus={changeTaskStatus}>
                          <div
                            className={
                              board.boardId === titleBoardId
                                ? 'sDash_kanban-board-item__header editable'
                                : 'sDash_kanban-board-item__header'
                            }
                          >
                            <h4 className="list-header-title">
                              <span>{board.title}</span>
                              <Dropdown
                                content={
                                  <>
                                    <Link onClick={e => onBoardEditable(e, board.boardId, board.title)} to="#">
                                      <span>Edit Card Title</span>
                                    </Link>
                                    <Link onClick={() => deleteColumnHandler(board.boardId)} to="#">
                                      <span>Delete Card</span>
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
                            </h4>
                            <BoardTitleUpdate
                              boardId={titleBoardId}
                              boardTitle={state.boardTitle}
                              onBoardTitleChange={onBoardTitleChange}
                              onBlur={onBoardEditableHide}
                            />
                          </div>
                          <div className="sDash_kanvan-task">
                            {tasks
                              .filter(item => item.boardId === board.boardId)
                              .map(item => {
                                return (
                                  <KanbanItem key={item.id} id={item.id}>
                                    <KanbanBoardItem
                                      taskId={taskId}
                                      onBackShadow={onBackShadow}
                                      onTaskTitleUpdate={onTaskTitleUpdate}
                                      onTaskTitleDelete={onTaskTitleDelete}
                                      showModal={showModal}
                                      data={item}
                                    />
                                  </KanbanItem>
                                );
                              })}
                          </div>

                          <div
                            className={
                              board.boardId === boardId ? 'sDash_addTask-control add-task-on' : 'sDash_addTask-control'
                            }
                          >
                            <Link to="#" className="btn-addTask" onClick={e => handleOnAddTask(e, board.boardId)}>
                              <FeatherIcon icon="plus" size={12} />
                              <span>Add Task</span>
                            </Link>

                            <div className="sDash_addTask-from">
                              <Input
                                name={`taskInput-${board.boardId}`}
                                className="sDash_addTask-input"
                                placeholder="Enter a Title"
                                onPressEnter={() => addTaskHandler(board.boardId)}
                              />
                              <div className="sDash_addTask-action">
                                <Button
                                  onClick={() => addTaskHandler(board.boardId)}
                                  className="add-column"
                                  htmlType="submit"
                                  size="small"
                                  type="primary"
                                >
                                  Add
                                </Button>
                                <Link to="#" onClick={handleOffAddTask}>
                                  <FeatherIcon icon="x" size={18} />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </KanbanColumn>
                      );
                    })}
                    <div className={addColumn ? 'btn-addColumn add-column-on' : 'btn-addColumn'}>
                      <div className="btn-addColumn-inner">
                        <Link to="#" className="btn-add" onClick={activeAddOption}>
                          <FeatherIcon icon="plus" size={12} />
                          <span>Add Column</span>
                        </Link>
                        <Form className="addColumn-form" name="columnAdd" form={form} onFinish={addColumnHandler}>
                          <div className="btn-addColumn-form">
                            <Input
                              value={columnTitle}
                              className="sDash-add-column-input"
                              onChange={onColumnTitleChange}
                              placeholder="Enter Column Title"
                            />
                            <div className="sDash_add-column-action">
                              <Button className="add-column" htmlType="submit" size="small" type="primary">
                                Add
                              </Button>
                              <Link to="#" onClick={diActiveAddOption}>
                                <FeatherIcon icon="x" size={18} />
                              </Link>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                </DndProvider>
              </Cards>
            </KanvanBoardWrap>
          </Col>
        </Row>
      </Main>
      <UpdateTask handleCancel={handleCancel} modalVisible={modalVisible} data={checklistData} />
      {backShadow ? <BackShadow onClick={onBackShadowHide} /> : null}
    </>
  );
};

export default Kanban;
