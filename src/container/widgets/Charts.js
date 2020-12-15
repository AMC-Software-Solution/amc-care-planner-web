import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { ChartjsBarChartTransparent } from '../../components/charts/chartjs';
import FacebookOverview from '../dashboard/overview/index/FacebookOverview';
import YoutubeSubscribers from '../dashboard/overview/index/YoutubeSubscribers';
import TwitterOverview from '../dashboard/overview/index/TwitterOverview';
import CashFlow from '../dashboard/overview/business/CashFlow';
import IncomeAndExpenses from '../dashboard/overview/business/IncomeAndExpenses';
import AccountGroup from '../dashboard/overview/business/AccountGroup';
import SessionsByDevice from '../dashboard/overview/performance/SessionsByDevice';
import { CardBarChart2, EChartCard } from '../dashboard/style';
import { CardChartStyle } from './Style';
import Heading from '../../components/heading/heading';
import TotalRevenue from '../dashboard/overview/ecommerce/TotalRevenue';
import RevenueByDevice from '../dashboard/overview/ecommerce/RevenueByDevice';

const chartOptions = {
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
          display: false,
        },
      },
    ],
  },
};

const Widgets = () => {
  return (
    <>
      <PageHeader
        title="Widgets Charts"
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
        <CardChartStyle>
          <Row gutter={25}>
            <Col xs={24}>
              <IncomeAndExpenses />
            </Col>
            <Col xs={24}>
              <FacebookOverview />
            </Col>
            <AccountGroup />
            <Col xl={12} xs={24}>
              <div className="cashflow-wrap">
                <CashFlow />
              </div>
            </Col>
            <Col xl={12} xs={24}>
              <TotalRevenue />
            </Col>
            <Col xl={8} xs={24}>
              <TwitterOverview />
            </Col>
            <Col xl={16} xs={24}>
              <Row gutter={25}>
                <Col md={12} sm={12} xs={24}>
                  <Cards headless>
                    <EChartCard>
                      <div className="card-chunk">
                        <CardBarChart2>
                          <Heading as="h1">7,461</Heading>
                          <span>Orders</span>
                          <p>
                            <span className="growth-upward">
                              <FeatherIcon icon="arrow-up" /> 25%
                            </span>
                            <span>Since last week</span>
                          </p>
                        </CardBarChart2>
                      </div>
                      <div className="card-chunk">
                        <ChartjsBarChartTransparent
                          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                          datasets={[
                            {
                              data: [20, 60, 50, 45, 50, 60, 70],
                              backgroundColor: '#EFEFFE',
                              hoverBackgroundColor: '#5F63F2',
                              label: 'Orders',
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </EChartCard>
                  </Cards>
                </Col>
                <Col md={12} sm={12} xs={24}>
                  <Cards headless>
                    <EChartCard>
                      <div className="card-chunk">
                        <CardBarChart2>
                          <Heading as="h1">$28,947</Heading>
                          <span>Revenue</span>
                          <p>
                            <span className="growth-downward">
                              <FeatherIcon icon="arrow-down" /> 25%
                            </span>
                            <span>Since last week</span>
                          </p>
                        </CardBarChart2>
                      </div>
                      <div className="card-chunk">
                        <ChartjsBarChartTransparent
                          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                          datasets={[
                            {
                              data: [20, 60, 50, 45, 50, 60, 70],
                              backgroundColor: '#FFF0F6',
                              hoverBackgroundColor: '#FF69A5',
                              label: 'Revenue',
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </EChartCard>
                  </Cards>
                </Col>
                <Col md={12} sm={12} xs={24}>
                  <Cards headless>
                    <EChartCard>
                      <div className="card-chunk">
                        <CardBarChart2>
                          <Heading as="h1">$3,241</Heading>
                          <span>Avg. order value</span>
                          <p>
                            <span className="growth-upward">
                              <FeatherIcon icon="arrow-up" /> 25%
                            </span>
                            <span>Since last week</span>
                          </p>
                        </CardBarChart2>
                      </div>
                      <div className="card-chunk">
                        <ChartjsBarChartTransparent
                          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                          datasets={[
                            {
                              data: [20, 60, 50, 45, 50, 60, 70],
                              backgroundColor: '#E8FAF4',
                              hoverBackgroundColor: '#20C997',
                              label: 'Avg Orders',
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </EChartCard>
                  </Cards>
                </Col>
                <Col md={12} sm={12} xs={24}>
                  <Cards headless>
                    <EChartCard>
                      <div className="card-chunk">
                        <CardBarChart2>
                          <Heading as="h1">45.2k</Heading>
                          <span>Unique visitors</span>
                          <p>
                            <span className="growth-upward">
                              <FeatherIcon icon="arrow-up" /> 25%
                            </span>
                            <span>Since last week</span>
                          </p>
                        </CardBarChart2>
                      </div>
                      <div className="card-chunk">
                        <ChartjsBarChartTransparent
                          labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                          datasets={[
                            {
                              data: [20, 60, 50, 45, 50, 60, 70],
                              backgroundColor: '#E9F5FF',
                              hoverBackgroundColor: '#2C99FF',
                              label: 'Visitors',
                            },
                          ]}
                          options={chartOptions}
                        />
                      </div>
                    </EChartCard>
                  </Cards>
                </Col>
              </Row>
            </Col>
            
            <Col xl={8} md={12} xs={24}>
              <SessionsByDevice />
            </Col>
            <Col xl={8} md={12} xs={24}>
              <RevenueByDevice />
            </Col>
            <Col xl={8} xs={24}>
              <div className="youtube-subscriber-wrap">
                <YoutubeSubscribers />
              </div>
            </Col>
          </Row>
        </CardChartStyle>
      </Main>
    </>
  );
};

export default Widgets;
