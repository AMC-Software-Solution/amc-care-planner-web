import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Cards } from '../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../components/maps/google-maps';

import { getSingleEmployeeLocation } from '../../redux/employeeLocation/actionCreator';

const EmployeeLocationMap = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { employeeLocation } = useSelector(state => {
    return {
      employeeLocation: state.employeeLocation.data,
    };
  });

  useEffect(() => {
    dispatch(getSingleEmployeeLocation(id));
  });
  return (
    <Cards headless>
      {employeeLocation != null ? (
        <GoogleMaps latitude={employeeLocation.latitude} longitude={employeeLocation.longitude} />
      ) : (
        <div>Employee Location not set yet</div>
      )}
    </Cards>
  );
};

export default EmployeeLocationMap;
