import React from 'react';
import { Row, Col, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { LoadingOutlined } from '@ant-design/icons';
import { SpinerWraperStyle } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} />;

const Spiner = () => {
  return (
    <>
      <PageHeader
        title="Spin"
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
          <Col sm={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of Spin">
              <Spin />
            </Cards>
          </Col>
          <Col sm={12} xs={24}>
            <Cards title="Size" caption="The simplest use of Spin">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Cards>
          </Col>
          <Col sm={12} xs={24}>
            <Cards title="Inside a container" caption="The simplest use of Spin">
              <SpinerWraperStyle>
                <Spin />
              </SpinerWraperStyle>
            </Cards>
          </Col>
          <Col sm={12} xs={24}>
            <Cards title="Custom Indicator" caption="The simplest use of Spin">
              <SpinerWraperStyle>
                <Spin indicator={antIcon} />
              </SpinerWraperStyle>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Spiner;
