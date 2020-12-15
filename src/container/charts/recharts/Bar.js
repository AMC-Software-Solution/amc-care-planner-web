import React, { useLayoutEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Main } from '../../styled';
import rechartdata from '../../../demoData/recharts.json';

const { data, positiveAndNegative } = rechartdata;

const ReChartBar = () => {
  const [state, setState] = useState({
    responsive: 0,
  });
  const { responsive } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const element = document.querySelector('.recharts-wrapper');
      const width =
        element !== null
          ? element.closest('.ant-card-body').clientWidth
          : document.querySelector('.ant-card-body').clientWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <PageHeader title="Recharts Bar Chart" />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="TINY BAR CHART" size="large" more={false}>
              <BarChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={data}
                margin={{
                  top: 20,
                  right: window.innerWidth <= 375 ? 30 : 40,
                  left: window.innerWidth <= 375 ? -18 : 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#5F63F2" />
                <Bar dataKey="pv" fill="#82ca9d" />
                <Bar dataKey="amt" fill="#2F63F250" />
              </BarChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="STACKED BAR CHART" size="large" more={false}>
              <BarChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={data}
                margin={{
                  top: 20,
                  right: window.innerWidth <= 375 ? 30 : 40,
                  left: window.innerWidth <= 375 ? -18 : 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
              </BarChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="MIX BAR CHART" size="large" more={false}>
              <BarChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={data}
                margin={{
                  top: 20,
                  right: window.innerWidth <= 375 ? 30 : 40,
                  left: window.innerWidth <= 375 ? -18 : 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                <Bar dataKey="uv" fill="#ffc658" />
              </BarChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="POSITIVE AND NEGATIVE BAR CHART" size="large" more={false}>
              <BarChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={positiveAndNegative}
                margin={{
                  top: 20,
                  right: window.innerWidth <= 375 ? 30 : 40,
                  left: window.innerWidth <= 375 ? -18 : 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="BAR CHART STACKED BY SIGN" size="large" more={false}>
              <BarChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={positiveAndNegative}
                margin={{
                  top: 20,
                  right: window.innerWidth <= 375 ? 30 : 40,
                  left: window.innerWidth <= 375 ? -18 : 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
                <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
              </BarChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="BIAXIAL BAR CHART" size="large" more={false}>
              <BarChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={data}
                margin={{
                  top: 20,
                  right: window.innerWidth <= 375 ? 30 : 40,
                  left: window.innerWidth <= 375 ? -18 : 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ReChartBar;
