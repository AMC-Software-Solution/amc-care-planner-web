import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Col, Row, DatePicker } from 'antd';
import propTypes from 'prop-types';
import { Button } from '../../../components/buttons/buttons';
import { Modal } from '../../../components/modals/antd-modals';
import { CheckboxGroup } from '../../../components/checkbox/checkbox';
import { BasicFormWrapper } from '../../styled';

const { Option } = Select;
const dateFormat = 'MM/DD/YYYY';

const CreateProject = ({ visible, onCancel }) => {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    visible,
    modalType: 'primary',
    checked: [],
  });

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        visible,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [visible]);

  const handleOk = () => {
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };

  const options = [
    {
      label: 'Privet',
      value: 'privet',
    },
    {
      label: 'Team',
      value: 'team',
    },
    {
      label: 'Public',
      value: 'public',
    },
  ];

  return (
    <Modal
      type={state.modalType}
      title="Create Project"
      visible={state.visible}
      footer={[
        <div key="1" className="project-modal-footer">
          <Button size="default" type="primary" key="submit" onClick={handleOk}>
            Add New Project
          </Button>
          <Button size="default" type="white" key="back" outlined onClick={handleCancel}>
            Cancel
          </Button>
        </div>,
      ]}
      onCancel={handleCancel}
    >
      <div className="project-modal">
        <BasicFormWrapper>
          <Form form={form} name="createProject" onFinish={handleOk}>
            <Form.Item name="project" label="">
              <Input placeholder="Project Name" />
            </Form.Item>
            <Form.Item name="category" initialValue="" label="">
              <Select style={{ width: '100%' }}>
                <Option value="">Project Category</Option>
                <Option value="one">Project One</Option>
                <Option value="two">Project Two</Option>
              </Select>
            </Form.Item>
            <Form.Item name="description" label="">
              <Input.TextArea rows={4} placeholder="Project Description" />
            </Form.Item>
            <Form.Item name="pricacy" initialValue={['team']} label="Project Privacy">
              <CheckboxGroup options={options} />
            </Form.Item>
            <Form.Item name="members" label="Project Members">
              <Input placeholder="Search Members" />
            </Form.Item>
            <div className="projects-members mb-30">
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/1.png`)} alt="" />
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/2.png`)} alt="" />
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/3.png`)} alt="" />
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/4.png`)} alt="" />
              <img style={{ width: '35px' }} src={require(`../../../static/img/users/5.png`)} alt="" />
            </div>
            <Row gutter={15}>
              <Col md={12}>
                <Form.Item name="start" label="Start Date">
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
              <Col md={12}>
                <Form.Item name="end" label="End Date">
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </BasicFormWrapper>
      </div>
    </Modal>
  );
};

CreateProject.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
};

export default CreateProject;
