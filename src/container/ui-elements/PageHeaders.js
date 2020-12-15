import React from 'react';
import { Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Main, PageHeaderWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Button } from '../../components/buttons/buttons';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const PageHeaders = () => {
  return (
    <>
      <PageHeader
        ghost
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <PlusOutlined />
              Add New
            </Button>
          </div>,
        ]}
        title="Page Headers"
      />
      <Main>
        <Row gutter={25}>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Basic header" caption="The simplest use of Page header">
              <PageHeaderWrapper>
                <PageHeader bgColor="#fff" title="Title" subTitle="This is a subtitle" />
              </PageHeaderWrapper>
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Custom header" caption="The simplest use of Page header">
              <PageHeader ghost title="Title" subTitle="This is a subtitle" />
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Custom header" caption="The simplest use of Page header">
              <PageHeader
                ghost
                title="Title"
                subTitle="This is a subtitle"
                buttons={[
                  <div key="1" className="page-header-actions">
                    <CalendarButtonPageHeader />
                    <ExportButtonPageHeader />
                    <ShareButtonPageHeader />
                    <Button size="small" type="primary">
                      <PlusOutlined />
                      Add New
                    </Button>
                  </div>,
                ]}
              />
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Breadcrumb header" caption="The simplest use of Breadcrumb header">
              <PageHeaderWrapper>
                <PageHeader bgColor="#fff" title="Title" subTitle="This is a subtitle" routes={routes} />
              </PageHeaderWrapper>
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Extra content header" caption="The simplest use of Extra content header">
              <PageHeaderWrapper>
                <PageHeader
                  bgColor="#fff"
                  ghost
                  buttons={[
                    <Button size="small" type="default" key="3">
                      Operation
                    </Button>,
                    <Button size="small" type="default" key="2">
                      Operation
                    </Button>,
                    <Button size="small" type="primary" key="1">
                      Primary
                    </Button>,
                  ]}
                  title="Title"
                  subTitle="This is a subtitle"
                  routes={routes}
                />
              </PageHeaderWrapper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default PageHeaders;
