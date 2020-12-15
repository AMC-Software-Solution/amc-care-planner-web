import React, { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { ChangePasswordWrapper } from './style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../../styled';
import Heading from '../../../../components/heading/heading';

const Password = () => {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    values: null,
  });

  const handleSubmit = values => {
    setState({ ...state, values });
  };
  const handleCancel = e => {
    e.preventDefault();
    form.resetFields();
  };

  return (
    <ChangePasswordWrapper>
      <Cards
        title={
          <div className="setting-card-title">
            <Heading as="h4">Password Settings</Heading>
            <span>Change or reset your account password</span>
          </div>
        }
      >
        <Row justify="center">
          <Col lg={12} sm={20} xs={24}>
            <BasicFormWrapper>
              <Form form={form} name="changePassword" onFinish={handleSubmit}>
                <Form.Item name="old" label="Old Password">
                  <Input />
                </Form.Item>
                <Form.Item name="new" label="New Password">
                  <Input.Password />
                </Form.Item>
                <p className="input-message">Minimum 6 characters</p>
                <Form.Item>
                  <div className="setting-form-actions">
                    <Button htmlType="submit" type="primary">
                      Change Password
                    </Button>
                    &nbsp; &nbsp;
                    <Button size="default" onClick={handleCancel} type="light">
                      Cancel
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </BasicFormWrapper>
          </Col>
        </Row>
      </Cards>
    </ChangePasswordWrapper>
  );
};

export default Password;
