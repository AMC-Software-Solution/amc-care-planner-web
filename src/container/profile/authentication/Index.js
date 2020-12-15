import React from 'react';
import { Row, Col } from 'antd';
import { Aside, Content } from './overview/style';
import Heading from '../../../components/heading/heading';

const AuthLayout = WraperContent => {
  return () => {
    return (
      <Row>
        <Col xxl={8} xl={9} lg={12} md={8} xs={24}>
          <Aside>
            <div className="auth-side-content">
              <img src={require('../../../static/img/auth/topShape.png')} alt="" className="topShape" />
              <img src={require('../../../static/img/auth/bottomShape.png')} alt="" className="bottomShape" />
              <Content>
                <img style={{ width: '150px' }} src={require('../../../static/img/Logo_Dark.svg')} alt="" />
                <br />
                <br />
                <Heading as="h1">
                  StrikingDash React <br />
                  Web Application
                </Heading>
                <img
                  className="auth-content-figure"
                  src={require('../../../static/img/auth/Illustration.png')}
                  alt=""
                />
              </Content>
            </div>
          </Aside>
        </Col>

        <Col xxl={16} xl={15} lg={12} md={16} xs={24}>
          <WraperContent />
        </Col>
      </Row>
    );
  };
};

export default AuthLayout;
