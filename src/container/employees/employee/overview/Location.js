import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../../components/maps/google-maps';

const Location = ({employeeLocation}) => {
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

export default Location;
