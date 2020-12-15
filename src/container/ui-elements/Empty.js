import React from 'react';
import { Row, Col, Empty } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const EmptyData = () => {
  return (
    <>
      <PageHeader 
        ghost 
        title="Empty" 
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
            <Cards title="Basic" caption="The simplest use of Empty">
              <Empty />
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Chose image" caption="The simplest use of Empty">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Customize" caption="The simplest use of Empty">
              <Empty
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                imageStyle={{
                  height: 60,
                }}
                description={
                  <span>
                    Customize <a href="#API">Description</a>
                  </span>
                }
              >
                <Button size="small" type="primary">Create Now</Button>
              </Empty>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default EmptyData;
