import React from 'react';
import { Row, Col } from 'antd';
import Branch from './Branches';

const General = ({branch}) => {
  return (
    <Row gutter={25}>
      <Col md={24}>{branch != null ? <Branch branch={branch} /> : <div>Loading...</div>}</Col>
    </Row>
  );
};

export default General;
