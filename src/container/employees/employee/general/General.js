import React from 'react';
import { Row, Col } from 'antd';
import propTypes from 'prop-types';
import Branch from '../branch/Branches';

const General = ({ branch }) => {
  return (
    <Row gutter={25}>
      <Col md={24}>{branch != null ? <Branch branch={branch} /> : <div>Loading...</div>}</Col>
    </Row>
  );
};

General.propTypes = {
  branch: propTypes.object,
};

export default General;
