import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { GoogleMaps } from '../../components/maps/google-maps';
import {  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleEmployeeLocation } from '../../redux/employeeLocation/actionCreator';


const EmployeeLocationMap = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {employeeLocation } = useSelector(state => {
    return {
      employeeLocation: state.employeeLocation.data,
    };
  });

  useEffect(() => { 
      dispatch(getSingleEmployeeLocation(id));
  }, [dispatch]);
  return (
    <>
      <PageHeader title="Employee Location" />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="Employee Last Recorded Location" size="large">
            { (employeeLocation != null) ?
              <GoogleMaps latitude={employeeLocation.latitude} longitude={employeeLocation.longitude} />
             : <div>Employee Location not set yet</div>} 
              </Cards>
          </Col>

        </Row>
      </Main>
    </>
  );
};

export default EmployeeLocationMap;
