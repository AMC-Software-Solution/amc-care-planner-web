import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AuthWrapper } from './style';
import { login } from '../../../../redux/authentication/actionCreator';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import Heading from '../../../../components/heading/heading';

const SignIn = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.loading);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(login(username, password));
    // history.push('/admin');
  };

  const onChange = checked => {
    setState({ ...state, checked });
  };

  return (
    <AuthWrapper>
      {/** 
      <p className="auth-notice">
        Don&rsquo;t have an account? <NavLink to="/register">Sign up now</NavLink>
      </p>
      */}
      <div className="auth-contents" style={{ marginTop: '170px' }}>
        <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">
            Sign in to <span className="color-secondary">AMC Care Planner</span>
          </Heading>
          <Form.Item
            name="username"
            onChange={handleUsernameChange}
            rules={[{ message: 'Please input your  Email!', required: true }]}
            value={username}
            label="Email Address"
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" onChange={handlePasswordChange} label="Password" value={password}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <div className="auth-form-action">
            <Checkbox name="rememberMe" onChange={onChange}>
              Keep me logged in
            </Checkbox>
            <NavLink className="forgot-pass-link" to="/forgotPassword">
              Forgot password?
            </NavLink>
          </div>
          <Form.Item>
            <Button name="subButton" htmlType="submit" className="btn-signin" type="primary" size="large">
              {isLoading ? 'Loading...' : 'Sign In'}
            </Button>
          </Form.Item>
          {/** 
          <p className="form-divider">
            <span>Or</span>
          </p>
          <ul className="social-login">
            <li>
              <Link className="google-signup" to="#">
                <img src={require('../../../../static/img/google.png')} alt="" />
                <span>Sign in with Google</span>
              </Link>
            </li>
            <li>
              <Link className="facebook-sign" to="#">
                <FacebookOutlined />
              </Link>
            </li>
            <li>
              <Link className="twitter-sign" to="#">
                <TwitterOutlined />
              </Link>
            </li>
          </ul>
            */}
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
