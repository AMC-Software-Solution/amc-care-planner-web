import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Table, Form, Input } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { Action, ContactPageheaderStyle } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper, CardToolbox, BasicFormWrapper } from '../styled';
import Heading from '../../components/heading/heading';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AddUser, UserTableStyleWrapper } from '../pages/style';
import { onStarUpdate, contactDeleteData, contactSearchData, contactAddData } from '../../redux/contact/actionCreator';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Modal } from '../../components/modals/antd-modals';

const ContactTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => {
    return {
      users: state.Contact.data,
    };
  });
  const [form] = Form.useForm();

  const [state, setState] = useState({
    selectedRowKeys: 0,
    selectedRows: 0,
    visible: true,
    editVisible: false,
    modalType: 'primary',
    url: null,
    update: {},
  });

  const { update } = state;

  const handleSearch = searchText => {
    dispatch(contactSearchData(searchText));
  };

  const onHandleDelete = id => {
    const value = users.filter(item => item.id !== id);
    dispatch(contactDeleteData(value));
  };

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const showEditModal = data => {
    setState({
      ...state,
      editVisible: true,
      update: data,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
      editVisible: false,
    });
  };

  const handleOk = values => {
    onCancel();
    const arrayData = [];
    users.map(data => {
      return arrayData.push(data.id);
    });
    const max = Math.max(...arrayData);
    dispatch(
      contactAddData([
        ...users,
        {
          ...values,
          id: max + 1,
          time: new Date().getTime(),
          img: 'static/img/users/6.png',
          live: false,
          stared: false,
        },
      ]),
    );
    form.resetFields();
  };

  const handleEditOk = values => {
    onCancel();
    const updateUsers = users;

    updateUsers.map(user => {
      if (user.id === update.id) {
        const updateUser = user;
        updateUser.id = update.id;
        updateUser.name = values.name;
        updateUser.email = values.email;
        updateUser.phone = values.phone;
        updateUser.designation = values.designation;
        updateUser.company = values.company;
        updateUser.time = update.time;
        updateUser.img = update.img;
        updateUser.stared = update.stared;
      }
      return true;
    });
    dispatch(contactAddData(updateUsers));
    form.resetFields();
  };

  const handleCancel = () => {
    onCancel();
  };

  const usersTableData = [];

  users
    .sort((a, b) => {
      return b.time - a.time;
    })
    .map(user => {
      const { id, name, designation, img, stared, email, phone, company } = user;

      return usersTableData.push({
        key: id,
        user: (
          <div className="user-info">
            <figure>
              <img style={{ width: '40px' }} src={require(`../../${img}`)} alt="" />
            </figure>
            <figcaption>
              <Heading className="user-name" as="h6">
                {name}
              </Heading>
              <span className="user-designation">San Francisco, CA</span>
            </figcaption>
          </div>
        ),
        email,
        company,
        position: designation,
        phone,
        action: (
          <Action className="table-actions">
            <Button
              onClick={() => dispatch(onStarUpdate(users, id))}
              className="btn-icon"
              type="primary"
              to="#"
              shape="circle"
            >
              <FeatherIcon className={stared ? 'active' : 'deactivate'} icon="star" size={16} />
            </Button>
            <Dropdown
              content={
                <>
                  <Link onClick={() => showEditModal(user, id)} to="#">
                    <span>Edit</span>
                  </Link>
                  <Link onClick={() => onHandleDelete(id)} to="#">
                    <span>Delete</span>
                  </Link>
                </>
              }
              action={['click']}
            >
              <Button className="btn-icon" type="info" to="#" shape="circle">
                <FeatherIcon icon="more-vertical" size={16} />
              </Button>
            </Dropdown>
          </Action>
        ),
      });
    });

  const usersTableColumns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
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
    <>
      <CardToolbox>
        <ContactPageheaderStyle>
          <PageHeader
            ghost
            title="Contacts"
            subTitle={
              <>
                <AutoComplete
                  onSearch={handleSearch}
                  // dataSource={notData}
                  placeholder="Search by Name"
                  width="100%"
                  patterns
                />
              </>
            }
            buttons={[
              <Button onClick={showModal} className="btn-add_new" size="default" type="primary" key="1">
                <Link to="#">+ Add New</Link>
              </Button>,
            ]}
          />
        </ContactPageheaderStyle>
      </CardToolbox>

      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <UserTableStyleWrapper>
                <div className="contact-table">
                  <TableWrapper className="table-responsive">
                    <Table
                      rowSelection={rowSelection}
                      dataSource={usersTableData}
                      columns={usersTableColumns}
                      pagination={{
                        defaultPageSize: 7,
                        total: usersTableData.length,
                        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                      }}
                    />
                  </TableWrapper>
                </div>
              </UserTableStyleWrapper>
            </Cards>
          </Col>
        </Row>
        <Modal
          type={state.modalType}
          title="Contact Information"
          visible={state.visible}
          footer={null}
          onCancel={handleCancel}
        >
          <div className="project-modal">
            <AddUser>
              <BasicFormWrapper>
                <Form form={form} name="contact" onFinish={handleOk}>
                  <Form.Item label="Name" name="name">
                    <Input placeholder="Input Name" />
                  </Form.Item>

                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[{ message: 'Please input your email!', type: 'email' }]}
                  >
                    <Input placeholder="name@example.com" />
                  </Form.Item>

                  <Form.Item name="phone" label="Phone Number">
                    <Input placeholder="+440 2546 5236" />
                  </Form.Item>

                  <Form.Item name="designation" label="Position">
                    <Input placeholder="Input Position" />
                  </Form.Item>

                  <Form.Item name="company" label="Company Name">
                    <Input placeholder="Company Name" />
                  </Form.Item>

                  <Button htmlType="submit" size="default" type="primary" key="submit">
                    Add New Contact
                  </Button>
                </Form>
              </BasicFormWrapper>
            </AddUser>
          </div>
        </Modal>
        <Modal
          type={state.modalType}
          title="Contact Information"
          visible={state.editVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <div className="project-modal">
            <AddUser>
              <BasicFormWrapper>
                <Form form={form} name="contactEdit" onFinish={handleEditOk}>
                  <Form.Item initialValue={update.name} label="Name" name="name">
                    <Input placeholder="Input Name" />
                  </Form.Item>

                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[{ message: 'Please input your email!', type: 'email' }]}
                    initialValue={update.email}
                  >
                    <Input placeholder="name@example.com" />
                  </Form.Item>

                  <Form.Item initialValue={update.phone} name="phone" label="Phone Number">
                    <Input placeholder="+440 2546 5236" />
                  </Form.Item>

                  <Form.Item initialValue={update.designation} name="designation" label="Position">
                    <Input placeholder="Input Position" />
                  </Form.Item>

                  <Form.Item initialValue={update.company} name="company" label="Company Name">
                    <Input placeholder="Company Name" />
                  </Form.Item>

                  <Button htmlType="submit" size="default" type="primary" key="submit">
                    Add New Contact
                  </Button>
                </Form>
              </BasicFormWrapper>
            </AddUser>
          </div>
        </Modal>
      </Main>
    </>
  );
};

export default ContactTable;
