import React from 'react';
import { Row, Col, Table } from 'antd';
import DragAndDropTable from './DragTable';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import SocialTrafficMetrics from '../dashboard/overview/index/SocialTrafficMetrics';
import TrafficChannel from '../dashboard/overview/performance/TrafficChannel';
import TopLandingPages from '../dashboard/overview/performance/TopLandingPages';
import TopSellingProduct from '../dashboard/overview/ecommerce/TopSellingProduct';
import RevenueGenerated from '../dashboard/overview/ecommerce/RevenueGenerated';

const Tables = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <>
      <PageHeader ghost title="Table" />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards title="Basic Usage">
              <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
            </Cards>
          </Col>
          <Col xs={24}>
            <SocialTrafficMetrics />
          </Col>
          <Col xs={24}>
            <TrafficChannel />
          </Col>
          <Col xs={24}>
            <TopLandingPages />
          </Col>
          <Col xs={12}>
            <TopSellingProduct />
          </Col>
          <Col xs={12}>
            <RevenueGenerated />
          </Col>
          <Col xs={24}>
            <DragAndDropTable />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Tables;
