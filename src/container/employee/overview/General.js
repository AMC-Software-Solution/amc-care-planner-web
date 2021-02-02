import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Branch from './Branches';
import { getSingleBranch } from '../../../redux/branch/actionCreator';

const General = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { branch } = useSelector(state => {
    return {
      branch: state.branch.data,
    };
  });

  useEffect(() => {
    dispatch(getSingleBranch(id));
  }, [dispatch, id]);

  return (
    <Row gutter={25}>
      <Col md={24}>{branch != null ? <Branch branch={branch} /> : <div>Loading...</div>}</Col>
    </Row>
  );
};

export default General;
