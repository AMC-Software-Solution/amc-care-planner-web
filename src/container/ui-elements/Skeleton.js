import React from 'react';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Skeletons = () => {
  return (
    <>
      <PageHeader
        ghost
        title="Skeleton"
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
          <Col md={12} sm={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of Skeleton">
              <Skeleton />
            </Cards>
            <Cards title="Active Animation" caption="The simplest use of Skeleton">
              <Skeleton active avatar paragraph={{ rows: 4 }} />
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Complex combination" caption="The simplest use of Skeleton">
              <Skeleton avatar paragraph={{ rows: 4 }} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Skeletons;
