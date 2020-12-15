import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import {
  ChartjsBarChart,
  ChartjsHorizontalChart,
  ChartjsStackedChart,
  ChartjsLineChart,
  ChartjsAreaChart,
  ChartjsBarChartTransparent,
  ChartjsDonutChart,
  ChartjsPieChart,
} from '../../components/charts/chartjs';

const ChartJs = () => {
  return (
    <>
      <PageHeader title="Chart Js" />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="Bar Chart" size="large">
              <ChartjsBarChart className="foo" style={{ marginBottom: '20px' }} />
            </Cards>

            <Cards title="Stacked Chart" size="large">
              <ChartjsStackedChart />
            </Cards>

            <Cards title="Area Chart" size="large">
              <ChartjsAreaChart />
            </Cards>

            <Cards title="Donut Chart" size="large">
              <ChartjsDonutChart />
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Horizontal Chart" size="large">
              <ChartjsHorizontalChart />
            </Cards>

            <Cards title="Line Chart" size="large">
              <ChartjsLineChart />
            </Cards>

            <Cards title="Transparent Chart" size="large">
              <ChartjsBarChartTransparent />
            </Cards>

            <Cards title="Pie Chart" size="large">
              <ChartjsPieChart />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ChartJs;
