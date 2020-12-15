import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const DailyOverview = lazy(() => import('./overview/performance/DailyOverview'));
const WebsitePerformance = lazy(() => import('./overview/performance/WebsitePerformance'));
const TrafficChannel = lazy(() => import('./overview/performance/TrafficChannel'));
const SessionsByDevice = lazy(() => import('./overview/performance/SessionsByDevice'));
const TopLandingPages = lazy(() => import('./overview/performance/TopLandingPages'));
const SessionsbyRegion = lazy(() => import('./overview/performance/SessionsbyRegion'));

const Performance = () => {
  return (
    <>
      <PageHeader
        ghost
        title="Website Performance Dashboard"
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
        <Row justify="center" gutter={25}>
          <Col xxl={8} xl={10} lg={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <DailyOverview />
            </Suspense>
          </Col>
          <Col xxl={16} xl={14} lg={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <WebsitePerformance />
            </Suspense>
          </Col>
          <Col xxl={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TrafficChannel />
            </Suspense>
          </Col>
          <Col xxl={8} xl={8} md={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SessionsByDevice />
            </Suspense>
          </Col>
          <Col xxl={12} xl={16} md={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TopLandingPages />
            </Suspense>
          </Col>
          <Col xxl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SessionsbyRegion />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Performance;
