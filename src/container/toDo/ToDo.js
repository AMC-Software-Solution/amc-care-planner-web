import React, { useState } from 'react';
import { Row, Col, Table, Input, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import PropTypes from 'prop-types';
import { Span, TodoStyleWrapper } from './style';
import { Main, TableWrapper, BasicFormWrapper } from '../styled';
import { Modal } from '../../components/modals/antd-modals';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { ToDoAddData, ToDoDeleteData, onStarUpdate } from '../../redux/todo/actionCreator';

const DragHandle = sortableHandle(() => (
  <FeatherIcon size={16} style={{ cursor: 'pointer', color: '#999' }} icon="move" />
));

const ToDo = () => {
  const todoData = useSelector(state => state.Todo.data);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    inputData: '',
    selectedRowKeys: [],
  });
  const { selectedRowKeys, inputData } = state;

  const columns = [
    {
      title: '',
      dataIndex: 'item',
    },
    {
      title: '',
      dataIndex: 'action',
      width: 120,
    },
  ];

  const onHandleDelete = key => {
    const data = todoData.filter(item => item.key !== key);
    dispatch(ToDoDeleteData(data));
  };

  const dataSource = [];

  if (todoData !== null) {
    todoData.map((item, index) => {
      return dataSource.push({
        key: index + 1,
        index,
        item: (
          <Span className={selectedRowKeys.includes(index) ? 'todo-title active' : 'todo-title inactive'}>
            {item.item}
          </Span>
        ),
        action: (
          <div className="todos-action">
            <DragHandle />
            <Link
              className={item.favorite ? 'star active' : 'star'}
              onClick={() => dispatch(onStarUpdate(todoData, item.key))}
              to="#"
            >
              <FeatherIcon icon="star" style={{ color: item.favorite ? 'gold' : '#888' }} size={16} />
            </Link>
            <Link onClick={() => onHandleDelete(item.key)} to="#">
              <FeatherIcon icon="trash-2" size={16} />
            </Link>
          </div>
        ),
      });
    });
  }
  const [form] = Form.useForm();

  const onSelectChange = selectedRowKey => {
    setState({ ...state, selectedRowKeys: selectedRowKey });
  };

  const rowSelection = {
    onChange: onSelectChange,
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  const SortableItem = sortableElement(props => <tr {...props} />);
  const SortableContainer = sortableContainer(props => <tbody {...props} />);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(todoData), oldIndex, newIndex).filter(el => !!el);
      return dispatch(ToDoAddData(newData));
    }
    return true;
  };

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  DraggableBodyRow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };

  const DraggableContainer = props => (
    <SortableContainer useDragHandle helperClass="row-dragging" onSortEnd={onSortEnd} {...props} />
  );

  const onInputChange = e => {
    setState({
      ...state,
      inputData: e.target.value,
    });
  };

  const onSubmitHandler = () => {
    const arrayData = [];
    todoData.map(data => {
      return arrayData.push(data.key);
    });
    const max = Math.max(...arrayData);
    if (inputData !== '') {
      dispatch(
        ToDoAddData([
          ...todoData,
          {
            key: max + 1,
            item: inputData,
            time: new Date().getTime(),
            favorite: false,
          },
        ]),
      );
      setState({
        ...state,
        inputData: '',
        visible: false,
      });
    } else {
      alert('Please Give a Task Title...');
    }
  };

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      <PageHeader
        ghost
        title="To Do"
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
        <Row gutter={30}>
          <Col md={24}>
            <TodoStyleWrapper>
              <Cards title="Task Lists">
                <TableWrapper className="table-responsive">
                  <Table
                    rowSelection={{
                      type: 'checkbox',
                      ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                    rowKey="index"
                    components={{
                      body: {
                        wrapper: DraggableContainer,
                        row: DraggableBodyRow,
                      },
                    }}
                  />
                </TableWrapper>
                <div className="new-todo-wrap">
                  <Button onClick={showModal} className="btn-toDoAdd" transparented type="primary" size="large">
                    + Add New Task
                  </Button>
                </div>
              </Cards>
            </TodoStyleWrapper>
          </Col>
          {/* <Col md={12}>
            <Cards title="Task Lists" />
          </Col> */}
        </Row>
        <Modal
          type={state.modalType}
          title="Add New Todo"
          visible={state.visible}
          footer={null}
          onCancel={handleCancel}
        >
          <div className="todo-modal">
            <BasicFormWrapper>
              <Form className="adTodo-form" name="todoAdd" form={form} onFinish={onSubmitHandler}>
                <Input value={inputData} onChange={onInputChange} placeholder="Input Item Name......." />
                <br />
                <br />

                <Button onClick={showModal} htmlType="submit" className="btn-adTodo" type="primary" size="large">
                  Add New
                </Button>
              </Form>
            </BasicFormWrapper>
          </div>
        </Modal>
      </Main>
    </>
  );
};

ToDo.propTypes = {
  // match: PropTypes.shape(PropTypes.object),
};
export default ToDo;
