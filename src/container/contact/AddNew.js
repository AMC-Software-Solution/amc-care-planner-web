import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { ContactPageheaderStyle } from './style';
import ContactCard from './overview/ContactCard';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox, BasicFormWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AddUser } from '../pages/style';
import { contactSearchData, contactAddData } from '../../redux/contact/actionCreator';
import { Modal } from '../../components/modals/antd-modals';

const AddNew = () => {
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

  return (
    <>
      <CardToolbox>
        <ContactPageheaderStyle>
          <PageHeader
            ghost
            title="Contacts"
            subTitle={
              <>
                <AutoComplete onSearch={handleSearch} placeholder="Search by Name" width="100%" patterns />
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
        <Row gutter={25}>
          {users.map(user => {
            return (
              <Col key={user.id} md={6}>
                <Cards headless>
                  <ContactCard showEditModal={showEditModal} user={user} />
                </Cards>
              </Col>
            );
          })}
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

export default AddNew;
