import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { SalesGrowthWrap } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { ChartjsBarChartTransparent } from '../../../../components/charts/chartjs';

const moreContent = (
  <>
    <Link to="#">
      <FeatherIcon size={16} icon="printer" />
      <span>Printer</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={16} icon="book-open" />
      <span>PDF</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={16} icon="file-text" />
      <span>Google Sheets</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={16} icon="x" />
      <span>Excel (XLSX)</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={16} icon="file" />
      <span>CSV</span>
    </Link>
  </>
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        barPercentage: 1,
        gridLines: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
    ],
  },
};

const SalesGrowth = () => {
  return (
    <SalesGrowthWrap>
      <Cards more={moreContent} title="Monthly Sales Growth">
        <Row>
          <Col xs={24}>
            <div className="growth-list d-flex justify-content-between">
              <div className="growth-list__item">
                <h2>70%</h2>
                <p>Progress</p>
              </div>
              <div className="growth-list__item">
                <h2>20%</h2>
                <p>Target</p>
              </div>
            </div>
            <div className="growth-chart-wrap">
              <ChartjsBarChartTransparent
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                datasets={[
                  {
                    data: [20, 60, 50, 45, 50, 60, 70, 60, 65, 75, 70, 80],
                    backgroundColor: '#5F63F250',
                    hoverBackgroundColor: '#5F63F2',
                    maxBarThickness: 10,
                    barThickness: 12,
                    label: 'Orders',
                  },
                ]}
                options={chartOptions}
                height={180}
              />
            </div>
          </Col>
        </Row>
      </Cards>
    </SalesGrowthWrap>
  );
};

export default SalesGrowth;
