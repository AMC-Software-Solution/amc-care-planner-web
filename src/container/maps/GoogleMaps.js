import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { GoogleMaps } from '../../components/maps/google-maps';
import mapData from '../../config/map/google-maps-styles';

const { mapOneStyles, mapStyleDark, mapTwoStyles, mapThreeStyles } = mapData;

const GoogleMap = () => {
  return (
    <>
      <PageHeader title="Google Maps" />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="Google Map Basic" size="large">
              <GoogleMaps latitude="55.797897" longitude="-1.077641" />
            </Cards>
          </Col>

          <Col md={12} xs={24}>
            <Cards title="Google Map Style Light" size="large">
              <GoogleMaps mapStyles={mapOneStyles} />
            </Cards>
          </Col>

          <Col md={12} xs={24}>
            <Cards title="Google Map Style Dark" size="large">
              <GoogleMaps mapStyles={mapStyleDark} />
            </Cards>
          </Col>

          <Col md={12} xs={24}>
            <Cards title="Google Map Style Theme Color" size="large">
              <GoogleMaps zoom={2} mapStyles={mapThreeStyles} />
            </Cards>
          </Col>

          <Col md={12} xs={24}>
            <Cards title="Google Map Style Color" size="large">
              <GoogleMaps mapStyles={mapTwoStyles} />
            </Cards>
          </Col>

          <Col md={12} xs={24}>
            <Cards title="Google Map Style Color" size="large">
              <GoogleMaps
                mapStyles={mapTwoStyles}
                zoom={4}
                place={[
                  {
                    id: 1,
                    latitude: '50.797897',
                    longitude: '-1.077641',
                  },
                  {
                    id: 2,
                    latitude: '49.797897',
                    longitude: '-25.9389312',
                  },
                  {
                    id: 3,
                    latitude: '50.2577799',
                    longitude: '-5.077641',
                  },
                ]}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default GoogleMap;
