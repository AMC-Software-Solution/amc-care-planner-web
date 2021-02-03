import React from 'react';
import { Row, Col } from 'antd';
import { Aside, Content } from './overview/style';

const AuthLayout = WraperContent => {
  return () => {
    return (
      <Row>
        <Col xxl={8} xl={9} lg={12} md={8} xs={24}>
          <Aside style={{ background: '#593196' }}>
            <div className="auth-side-content">
              <Content />
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
