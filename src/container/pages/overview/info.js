import React, { useState } from 'react';
import { Row, Col, Form, Input, Upload, Select } from 'antd';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { BasicFormWrapper } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import Heading from '../../../components/heading/heading';

const { Option } = Select;
const Info = () => {
  const [state, setState] = useState({
    values: '',
  });
  const [form] = Form.useForm();
  const handleSubmit = values => {
    setState({ ...state, values });
  };

  return (
    <Row justify="center">
      <Col xl={10} md={16} xs={24}>
        <div className="user-info-form">
          <BasicFormWrapper>
            <Form style={{ width: '100%' }} form={form} name="info" onFinish={handleSubmit}>
              <Heading className="form-title" as="h4">
                Personal Information
              </Heading>

              <figure className="photo-upload align-center-v">
                <img src={require('../../../static/img/avatar/profileImage.png')} alt="" />
                <figcaption>
                  <Upload>
                    <Link className="btn-upload" to="#">
                      <FeatherIcon icon="camera" size={16} />
                    </Link>
                  </Upload>
                  <div className="info">
                    <Heading as="h4">Profile Photo</Heading>
                  </div>
                </figcaption>
              </figure>

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

              <Form.Item name="country" initialValue="" label="Country">
                <Select style={{ width: '100%' }}>
                  <Option value="">Please Select</Option>
                  <Option value="bangladesh">Bangladesh</Option>
                  <Option value="india">India</Option>
                  <Option value="pakistan">Pakistan</Option>
                </Select>
              </Form.Item>

              <Form.Item initialValue="" name="city" label="City">
                <Select style={{ width: '100%' }}>
                  <Option value="">Please Select</Option>
                  <Option value="dhaka">Dhaka</Option>
                  <Option value="khulna">Khulna</Option>
                  <Option value="barisal">Barisal</Option>
                </Select>
              </Form.Item>

              <Form.Item name="website" label="Website">
                <Input placeholder="www.example.com" />
              </Form.Item>

              <Form.Item>
                <div className="add-user-bottom text-right">
                  <Button
                    className="ant-btn ant-btn-light"
                    onClick={() => {
                      return form.resetFields();
                    }}
                  >
                    Reset
                  </Button>
                  <Button htmlType="submit" type="primary">
                    <Link to="work">Save & Next</Link>
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </BasicFormWrapper>
        </div>
      </Col>
    </Row>
  );
};

export default Info;
