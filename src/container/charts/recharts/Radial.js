import React, { useLayoutEffect, useState } from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Main } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const style = {
  top: 0,
  right: '20%',
  lineHeight: '24px',
};
const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50-59',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: '60+',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

const ReChartRadial = () => {
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
  const height = responsive >= 797 ? responsive / 3 : responsive / 1.5;
  const width = responsive - (5 * responsive) / 100;

  return (
    <>
      <PageHeader
        title="Recharts Radial Chart"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
        ghost
      />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <Cards title="SIMPLE RADIAL BAR CHART" size="large">
              <RadialBarChart
                width={width}
                height={height}
                cx={responsive >= 1200 ? responsive / 2.2 : responsive / 3}
                cy={responsive >= 797 ? responsive / 2 - height : responsive / 2 - height / 3 + 15}
                innerRadius={responsive >= 797 ? 20 : 10}
                outerRadius={responsive >= 797 ? 140 : 90}
                barSize={10}
                data={data}
              >
                <RadialBar
                  minAngle={15}
                  label={{ position: 'insideStart', fill: '#fff' }}
                  background
                  clockWise
                  dataKey="uv"
                />
                <Legend
                  iconSize={10}
                  width={responsive / 9}
                  height={responsive / 9}
                  layout="vertical"
                  verticalAlign="middle"
                  wrapperStyle={style}
                />
              </RadialBarChart>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ReChartRadial;
