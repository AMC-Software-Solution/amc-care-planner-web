import React, { useState } from 'react';
import { Row, Col, Form, Input, Select } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';
import { BasicFormWrapper, TagInput } from '../../../styled';
import Heading from '../../../../components/heading/heading';
import { Tag } from '../../../../components/tags/tags';

const { Option } = Select;
const Profile = () => {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    tags: ['UI/UX', 'Branding', 'Product Design', 'Web Design'],
    values: null,
  });

  const handleSubmit = values => {
    setState({ ...state, values: { ...values, tags: state.tags } });
  };

  const handleCancel = e => {
    e.preventDefault();
    form.resetFields();
  };

  const checked = checke => {
    setState({ tags: checke });
  };

  return (
    <Cards
      title={
        <div className="setting-card-title">
          <Heading as="h4">Edit Profile</Heading>
          <span>Set Up Your Personal Information</span>
        </div>
      }
    >
      <Row justify="center">
        <Col xl={12} lg={16} xs={24}>
          <BasicFormWrapper>
            <Form name="editProfile" onFinish={handleSubmit}>
              <Form.Item name="name" initialValue="Duran Clayton" label="Name">
                <Input />
              </Form.Item>
              <Form.Item name="phone" initialValue="01742920502" label="Phone Number">
                <Input />
              </Form.Item>
              <Form.Item name="country" initialValue="" label="Country">
                <Select style={{ width: '100%' }}>
                  <Option value="">Please Select</Option>
                  <Option value="bangladesh">Bangladesh</Option>
                  <Option value="india">India</Option>
                  <Option value="pakistan">Pakistan</Option>
                </Select>
              </Form.Item>
              <Form.Item name="city" initialValue="" label="City">
                <Select style={{ width: '100%' }}>
                  <Option value="">Please Select</Option>
                  <Option value="dhaka">Dhaka</Option>
                  <Option value="mymensingh">Mymensingh</Option>
                  <Option value="khulna">Khulna</Option>
                </Select>
              </Form.Item>
              <Form.Item name="company" initialValue="Example" label="Company Name">
                <Input />
              </Form.Item>
              <Form.Item name="website" initialValue="www.example.com" label="Website">
                <Input />
              </Form.Item>
              <Form.Item
                name="userBio"
                initialValue="Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestee."
                label="User Bio"
              >
                <Input.TextArea rows={3} />
              </Form.Item>
              <Form.Item name="skills" label="Skills">
                <TagInput>
                  <Tag animate onChange={checked} data={state.tags} />
                </TagInput>
              </Form.Item>
              <div className="setting-form-actions">
                <Button size="default" htmlType="submit" type="primary">
                  Update Profile
                </Button>
                &nbsp; &nbsp;
                <Button size="default" onClick={handleCancel} type="light">
                  Cancel
                </Button>
              </div>
            </Form>
          </BasicFormWrapper>
        </Col>
      </Row>
    </Cards>
  );
};

export default Profile;
