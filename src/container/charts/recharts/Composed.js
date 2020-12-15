import React, { useLayoutEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Main } from '../../styled';
import rechartdata from '../../../demoData/recharts.json';

const { data } = rechartdata;

const ReChartComposed = () => {
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
      <PageHeader title="Recharts Composed Chart" />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="LINE BAR AREA COMPOSED CHART" size="large">
              <ComposedChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={data}
                margin={{
                  top: 20,
                  right: window.innerWidth <= 375 ? 34 : 40,
                  left: window.innerWidth <= 375 ? -16 : 0,
                  bottom: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="VERTICAL COMPOSED CHART" size="large">
              <ComposedChart
                layout="vertical"
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={data}
                margin={{
                  top: 20,
                  right: window.innerWidth <= 375 ? 34 : 40,
                  left: window.innerWidth <= 375 ? -16 : 0,
                  bottom: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="SAME DATA COMPOSED CHART" size="large">
              <ComposedChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={data}
                margin={{
                  top: 20,
                  right: window.innerWidth <= 375 ? 34 : 40,
                  left: window.innerWidth <= 375 ? -16 : 0,
                  bottom: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="COMPOSED CHART WITH AXIS LABELS" size="large">
              <ComposedChart
                width={responsive - (5 * responsive) / 100}
                height={responsive / 2}
                data={data}
                margin={{
                  top: 20,
                  right: window.innerWidth <= 375 ? 34 : 40,
                  left: window.innerWidth <= 375 ? -16 : 0,
                  bottom: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} />
                <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ReChartComposed;
