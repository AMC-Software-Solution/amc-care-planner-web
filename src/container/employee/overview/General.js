
import React, { lazy, Suspense, useEffect } from 'react';
import { Row, Col, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
const Branch = lazy(() => import('../../../container/employee/overview/Branches'));
import { getSingleBranch } from '../../../redux/branch/actionCreator';
import {  useParams } from 'react-router-dom';



const General = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { branch } = useSelector(state => {
    return {
      branch: state.branch.data,
    };
  });

  useEffect(() => {
    if (branch) {
      dispatch(getSingleBranch(id));
    }
  }, [dispatch,branch]);




  return (
    <Row gutter={25}>
  
      <Col xxl={8} lg={12} md={24} sm={12} xs={24}>
         {branch != null ? <Branch branch={branch} /> : <div>Employee branch is empty.</div>}
      </Col>
      <Col xs={24}>
        
      </Col>
      <Col xs={24}>

      </Col>
    </Row>
  );
};

export default General;
