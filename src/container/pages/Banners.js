import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  Banner7,
  BannerCarousel,
  BannerLong,
  BannerCard,
  BannerCard2,
  BannerCta,
  BannerCta2,
} from '../../components/banners/Banners';

const Banners = () => {
  return (
    <>
      <PageHeader
        title="Banners"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xxl={6} xl={12} lg={12} sm={24} xs={24}>
            <Banner1 />
          </Col>
          <Col xxl={6} xl={12} lg={12} sm={24} xs={24}>
            <Banner2 />
          </Col>
          <Col xxl={6} xl={12} lg={12} sm={24} xs={24}>
            <Banner3 />
          </Col>
          <Col xxl={6} xl={12} lg={12} sm={24} xs={24}>
            <Banner4 />
          </Col>
          <Col xxl={8} xl={12} lg={12} xs={24}>
            <Banner5 />
          </Col>
          <Col xxl={8} xl={12} lg={12} xs={24}>
            <Banner6 />
          </Col>
          <Col xxl={8} xs={24}>
            <Banner7 />
          </Col>
          <Col xxl={4} lg={12} sm={24} xs={24}>
            <BannerCarousel />
          </Col>
          <Col xxl={4} lg={12} xs={24}>
            <BannerLong />
          </Col>
          <Col xxl={8} md={12} xs={24}>
            <BannerCard />
          </Col>
          <Col xxl={8} md={12} xs={24}>
            <BannerCard2 />
          </Col>
          <Col xxl={12} xs={24}>
            <BannerCta />
          </Col>
          <Col xxl={12} xs={24}>
            <BannerCta2 />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Banners;
