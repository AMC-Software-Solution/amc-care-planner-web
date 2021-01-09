import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { GoogleMaps } from '../../components/maps/google-maps';
import mapData from '../../config/map/google-maps-styles';

const { mapOneStyles, mapStyleDark, mapTwoStyles, mapThreeStyles } = mapData;

const GoogleMapsSingleMap = () => {
  return (
    <>
      <PageHeader title="Employee Location" />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="Employee Last Recorded Location" size="large">
              <GoogleMaps latitude="2.048466" longitude="45.327380" />
            </Cards>
          </Col>

        </Row>
      </Main>
    </>
  );
};

export default GoogleMapsSingleMap;
