import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';

const Login = lazy(() => import('../layout/overview/SignIn'));
const SignUp = lazy(() => import('../layout/overview/Signup'));
const ForgotPass = lazy(() => import('../layout/overview/ForgotPassword'));

const NotFound = () => {
  return <Redirect to="/" />;
};

const FrontendRoutes = () => {
  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <Route exact path="/forgotPassword" component={ForgotPass} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/" component={Login} />
        <Route exact path="*" component={NotFound} />
      </Suspense>
    </Switch>
  );
};

export default AuthLayout(FrontendRoutes);
