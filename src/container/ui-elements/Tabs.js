import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Tab } from '../../components/tabs/tabs';
import { data, dataIcon, icon } from '../../demoData/tab-data.json';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Tabs = () => {
  return (
    <>
      <PageHeader
        title="Tabs"
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
          <Col md={12} xs={24}>
            <Tab data={data} icon="apple" />
          </Col>
          <Col md={12} xs={24}>
            <Tab data={data} color="default" />
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12} xs={24}>
            <Tab data={dataIcon} color="#5F63F2" />
          </Col>
          <Col md={12} xs={24}>
            <Tab data={icon} color="#5F63F2" />
          </Col>
        </Row>
        <Row gutter={15}>
          <Col md={12} xs={24}>
            <Tab data={dataIcon} color="#ffffff" />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Tabs;
