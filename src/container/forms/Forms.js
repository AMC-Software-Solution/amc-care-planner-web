import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main, FormGroupWrapper } from '../styled';
import SignIn from '../profile/authentication/overview/SignIn';
import Signup from '../profile/authentication/overview/Signup';
import ForgotPassword from '../profile/authentication/overview/ForgotPassword';

const Forms = () => {
  return (
    <>
      <PageHeader ghost title="Forms" />
      <Main>
        <FormGroupWrapper>
          <Row gutter={15}>
            <Col xs={24}>
              <Cards title="Login Form">
                <SignIn />
              </Cards>
            </Col>
            <Col xs={24}>
              <Cards title="Register Form">
                <Signup />
              </Cards>
            </Col>
            <Col xs={24}>
              <Cards title="Forget Password">
                <ForgotPassword />
              </Cards>
            </Col>
          </Row>
        </FormGroupWrapper>
      </Main>
    </>
  );
};

export default Forms;
