import React, { useState, useLayoutEffect } from 'react';
import { Row, Col } from 'antd';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Main } from '../../styled';
import rechartdata from '../../../demoData/recharts.json';

const { data01, data02 } = rechartdata;

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

renderActiveShape.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  midAngle: PropTypes.number.isRequired,
  innerRadius: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired,
  startAngle: PropTypes.number.isRequired,
  endAngle: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  payload: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

const ReChartPie = () => {
  const [state, setState] = useState({
    activeIndex: 0,
    responsive: 0,
  });

  const { responsive, activeIndex } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const element = document.querySelector('.recharts-wrapper');
      const width =
        element !== null
          ? element.closest('.ant-card-body').clientWidth
          : document.querySelector('.ant-card-body').clientWidth;
      setState({ responsive: width, activeIndex });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [activeIndex]);

  const onPieEnter = (data, index) => {
    setState({
      ...state,
      activeIndex: index,
    });
  };

  // pie chart with customize label
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  renderCustomizedLabel.propTypes = {
    cx: PropTypes.number.isRequired,
    cy: PropTypes.number.isRequired,
    midAngle: PropTypes.number.isRequired,
    innerRadius: PropTypes.number.isRequired,
    outerRadius: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  };
  return (
    <>
      <PageHeader title="Recharts Pie Chart" />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="TWO LEVEL PIE CHART" size="large">
              <PieChart
                width={responsive - (5 * responsive) / 100}
                height={responsive >= 375 ? responsive / 2 : responsive / 1.2}
              >
                <Pie
                  data={data01}
                  dataKey="value"
                  cx={responsive / 2 - 30}
                  cy={responsive <= 375 ? responsive / 2 - 30 : responsive / 4}
                  outerRadius={56}
                  fill="#8884d8"
                />
                <Pie
                  data={data02}
                  dataKey="value"
                  cx={responsive / 2 - 30}
                  cy={responsive <= 375 ? responsive / 2 - 30 : responsive / 4}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="STRAIGHT ANGLE PIE CHART" size="large">
              <PieChart
                width={responsive - (5 * responsive) / 100}
                height={responsive >= 375 ? responsive / 2 : responsive / 1.2}
              >
                <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={data01}
                  cx={responsive / 2 - 30}
                  cy={responsive <= 375 ? responsive / 2 : responsive / 4}
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
              </PieChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="CUSTOM ACTIVE SHAPE PIE CHART" size="large">
              <PieChart
                width={responsive - (5 * responsive) / 100}
                height={responsive >= 375 ? responsive / 2 : responsive / 1.2}
              >
                <Pie
                  activeIndex={state.activeIndex}
                  activeShape={renderActiveShape}
                  data={data01}
                  cx={responsive / 2 - 30}
                  cy={responsive <= 375 ? responsive / 2 - 30 : responsive / 4}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                />
              </PieChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="PIE CHART WITH CUSTOMIZED LABEL" size="large">
              <PieChart
                width={responsive - (5 * responsive) / 100}
                height={responsive >= 375 ? responsive / 2 : responsive / 1.2}
              >
                <Pie
                  data={data01}
                  cx={responsive / 2 - 30}
                  cy={responsive <= 375 ? responsive / 2 - 30 : responsive / 4}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data01.map((entry, index) => {
                    return <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />;
                  })}
                </Pie>
              </PieChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="TWO SIMPLE PIE CHART" size="large">
              <PieChart
                width={responsive - (5 * responsive) / 100}
                height={responsive >= 375 ? responsive / 2 : responsive / 1.2}
              >
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx={responsive / 2 - 30}
                  cy={responsive <= 375 ? responsive / 2 - 30 : responsive / 4}
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="PIE CHART WITH PADDING ANGLE" size="large">
              <PieChart
                width={responsive - (5 * responsive) / 100}
                height={responsive >= 375 ? responsive / 2 : responsive / 1.2}
                onMouseEnter={onPieEnter}
              >
                <Pie
                  data={data01}
                  cx={responsive / 2 - 30}
                  cy={responsive <= 375 ? responsive / 2 - 30 : responsive / 4}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data01.map((entry, index) => (
                    <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ReChartPie;
