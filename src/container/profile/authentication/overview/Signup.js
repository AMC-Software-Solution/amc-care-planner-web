import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
import { AuthWrapper } from './style';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import Heading from '../../../../components/heading/heading';

const SignUp = () => {
  const [state, setState] = useState({
    values: null,
    checked: null,
  });
  const handleSubmit = values => {
    setState({ ...state, values });
  };

  const onChange = checked => {
    setState({ ...state, checked });
  };

  return (
    <AuthWrapper>
      <p className="auth-notice">
        Already have an account? <NavLink to="/">Sign In</NavLink>
      </p>
      <div className="auth-contents">
        <Form name="register" onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">
            Sign Up to <span className="color-secondary">Admin</span>
          </Heading>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your Full name!' }]}>
            <Input placeholder="Full name" />
          </Form.Item>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Address"
            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
          >
            <Input placeholder="name@example.com" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <div className="auth-form-action">
            <Checkbox onChange={onChange}>
              Creating an account means you’re okay with our Terms of Service and Privacy Policy
            </Checkbox>
          </div>
          <Form.Item>
            <Button className="btn-create" htmlType="submit" type="primary" size="large">
              Create Account
            </Button>
          </Form.Item>
          <p className="form-divider">
            <span>Or</span>
          </p>
          <ul className="social-login signin-social">
            <li>
              <a className="google-signup" href="/">
                <img src={require('../../../../static/img/google.png')} alt="" />
                <span>Sign up with Google</span>
              </a>
            </li>
            <li>
              <a className="facebook-sign" href="/">
                <FacebookOutlined />
              </a>
            </li>
            <li>
              <a className="twitter-sign" href="/">
                <TwitterOutlined />
              </a>
            </li>
          </ul>
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default SignUp;
