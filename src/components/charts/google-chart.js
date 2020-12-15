/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Chart } from 'react-google-charts';
import PropTypes from 'prop-types';

const GoogleBasicBarChart = props => {
  const { width, height, data, title, chartArea } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        chartArea: { width: chartArea },
        hAxis: {
          title: 'Total',
          minValue: 0,
        },
        vAxis: {
          title: 'City',
        },
      }}
      // For tests
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

GoogleBasicBarChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array,
  title: PropTypes.string.isRequired,
  chartArea: PropTypes.string.isRequired,
};

const GoogleMaterialBarChart = props => {
  const { width, height, data, title, subtitle } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        chart: {
          title,
          subtitle,
        },
      }}
      // For tests
      rootProps={{ 'data-testid': '2' }}
    />
  );
};

GoogleMaterialBarChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const GoogleStackedChart = props => {
  const { width, height, data, title, chartArea } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        chartArea: { width: chartArea },
        isStacked: true,
        hAxis: {
          title: 'Total',
          minValue: 0,
        },
        vAxis: {
          title: 'City',
        },
      }}
      // For tests
      rootProps={{ 'data-testid': '3' }}
    />
  );
};

GoogleStackedChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  chartArea: PropTypes.string.isRequired,
};

const GoogleCustomColorChart = props => {
  const { width, height, data, title, chartArea, colors } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        chartArea: { width: chartArea },
        colors,
        hAxis: {
          title: 'Total',
          minValue: 0,
        },
        vAxis: {
          title: 'City',
        },
      }}
      // For tests
      rootProps={{ 'data-testid': '4' }}
    />
  );
};

GoogleCustomColorChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  chartArea: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
};

const GoogleComboChart = props => {
  const { width, height, data, title, chartArea, colors } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="ComboChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        chartArea: { width: chartArea },
        colors,
        seriesType: 'bars',
        series: { 5: { type: 'line' } },
      }}
      // For tests
      rootProps={{ 'data-testid': '5' }}
    />
  );
};

GoogleComboChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  chartArea: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
};

const GoogleLineChart = props => {
  const { width, height, data } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        hAxis: {
          title: 'Time',
        },
        vAxis: {
          title: 'Popularity',
        },
      }}
      // For tests
      rootProps={{ 'data-testid': '6' }}
    />
  );
};

GoogleLineChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

const GoogleMultiLineChart = props => {
  const { width, height, data } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        hAxis: {
          title: 'Time',
        },
        vAxis: {
          title: 'Popularity',
        },
        series: {
          0: { curveType: 'function' },
          1: { curveType: 'function' },
        },
      }}
      // For tests
      rootProps={{ 'data-testid': '7' }}
    />
  );
};

GoogleMultiLineChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

const GoogleOrgChart = props => {
  const { width, height, data, chartArea } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="OrgChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        chartArea: { width: chartArea },
        allowHtml: true,
      }}
      // For tests
      rootProps={{ 'data-testid': '8' }}
    />
  );
};

GoogleOrgChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  chartArea: PropTypes.string.isRequired,
};

const GoogleBasicPieChart = props => {
  const { width, height, data, chartArea, title } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        chartArea: { width: chartArea },
      }}
      // For tests
      rootProps={{ 'data-testid': '9' }}
    />
  );
};

GoogleBasicPieChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  chartArea: PropTypes.string.isRequired,
};

const Google3dPieChart = props => {
  const { width, height, data, chartArea, title } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        chartArea: { width: chartArea },
        is3D: true,
      }}
      // For tests
      rootProps={{ 'data-testid': '9' }}
    />
  );
};

Google3dPieChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  chartArea: PropTypes.string.isRequired,
};

export {
  Google3dPieChart,
  GoogleBasicPieChart,
  GoogleOrgChart,
  GoogleMultiLineChart,
  GoogleLineChart,
  GoogleComboChart,
  GoogleCustomColorChart,
  GoogleStackedChart,
  GoogleMaterialBarChart,
  GoogleBasicBarChart,
};
