import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const RightAside = lazy(() => import('../overview/RightAside'));
const ActivityContent = lazy(() => import('../overview/ActivityContent'));

const Activity = () => {
  return (
    <Row gutter={25}>
      <Col md={16} xs={24}>
        <Suspense
          fallback={
            <Cards headless>
              <Skeleton active paragraph={{ rows: 10 }} />
            </Cards>
          }
        >
          <ActivityContent />
        </Suspense>
      </Col>
      <Col md={8}>
        <Suspense
          fallback={
            <Cards headless>
              <Skeleton active paragraph={{ rows: 10 }} />
            </Cards>
          }
        >
          <RightAside />
        </Suspense>
      </Col>
    </Row>
  );
};

export default Activity;
