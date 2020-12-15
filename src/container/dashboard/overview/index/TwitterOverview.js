import React, { useState, useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LineChartWrapper, ChartContainer } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { ChartjsLineChart } from '../../../../components/charts/chartjs';
import { twitterOverviewGetData, twitterOverviewFilterData } from '../../../../redux/chartContent/actionCreator';
import { customTooltips } from '../../../../components/utilities/utilities';

const TwitterOverview = () => {
  const dispatch = useDispatch();
  const { twitterOverviewState, twIsLoading } = useSelector(state => {
    return {
      twitterOverviewState: state.chartContent.twitterOverviewData,
      twIsLoading: state.chartContent.twLoading,
    };
  });

  const [state, setState] = useState({
    youtubeSubscribeTabActive: 'year',
    twitterOverviewTabActive: 'month',
    instagramOverviewTabActive: 'month',
    linkdinOverviewTabActive: 'month',
  });

  useEffect(() => {
    if (twitterOverviewGetData) {
      dispatch(twitterOverviewGetData());
    }
  }, [dispatch]);

  const chartOptions = {
    tooltips: {
      yAlign: 'bottom',
      xAlign: 'center',
      mode: 'nearest',
      position: 'nearest',
      intersect: false,
      enabled: false,
      custom: customTooltips,
      callbacks: {
        labelColor(tooltipItem, chart) {
          return {
            backgroundColor: '#20C997',
          };
        },
      },
    },
    hover: {
      mode: 'nearest',
      intersect: false,
    },
    layout: {
      padding: {
        left: '0',
        right: 8,
        top: 15,
        bottom: -10,
      },
    },
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
      },
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
            color: '#e5e9f2',
            borderDash: [8, 4],
            zeroLineColor: 'transparent',
            beginAtZero: true,
          },
          ticks: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
            color: '#e5e9f2',
            borderDash: [8, 4],
            zeroLineColor: 'transparent',
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  const handleActiveChangeTwitter = value => {
    setState({
      ...state,
      twitterOverviewTabActive: value,
    });
    return dispatch(twitterOverviewFilterData(value));
  };

  const lineChartPointStyle = {
    borderColor: '#C6D0DC',
    borderWidth: 2,
    fill: false,
    pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    pointBackgroundColor: [
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      'transparent',
      '#20C997',
    ],
    pointHoverBackgroundColor: '#20C997',
    pointHoverRadius: 6,
    pointBorderColor: 'transparent',
  };

  return (
    <LineChartWrapper>
      {twitterOverviewState !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.twitterOverviewTabActive === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeTwitter('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.twitterOverviewTabActive === 'month' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeTwitter('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={state.twitterOverviewTabActive === 'year' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeTwitter('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Twitter Overview"
          size="large"
        >
          {twIsLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <div className="overview-container">
              <Row className="line-chart-row">
                <Col xxl={10} xs={24}>
                  <div className="growth-downward">
                    <p>Tweets</p>
                    <Heading as="h4">
                      {twitterOverviewState.twist.data}
                      <sub>
                        <FeatherIcon icon="arrow-down" size={14} />
                        25%
                      </sub>
                    </Heading>
                  </div>
                </Col>
                <Col xxl={14} xs={24}>
                  <div className="border-linechart">
                    <ChartContainer className="parentContainer">
                      <ChartjsLineChart
                        height={55}
                        datasets={[
                          {
                            data: twitterOverviewState.twist.chartValue,
                            ...lineChartPointStyle,
                          },
                        ]}
                        options={chartOptions}
                      />
                    </ChartContainer>
                  </div>
                </Col>
              </Row>
              <Row className="line-chart-row">
                <Col xxl={10} xs={24}>
                  <div className="growth-upward">
                    <p>Tweet impressions</p>
                    <Heading as="h4">
                      {twitterOverviewState.impressions.data}
                      <sub>
                        <FeatherIcon icon="arrow-up" size={14} />
                        108%
                      </sub>
                    </Heading>
                  </div>
                </Col>
                <Col xxl={14} xs={24}>
                  <div className="border-linechart">
                    <ChartContainer className="parentContainer">
                      <ChartjsLineChart
                        height={55}
                        datasets={[
                          {
                            data: twitterOverviewState.impressions.chartValue,
                            ...lineChartPointStyle,
                          },
                        ]}
                        options={chartOptions}
                      />
                    </ChartContainer>
                  </div>
                </Col>
              </Row>
              <Row className="line-chart-row">
                <Col xxl={10} xs={24}>
                  <div className="growth-downward">
                    <p>Retweets</p>
                    <Heading as="h4">
                      {twitterOverviewState.retweets.data}
                      <sub>
                        <FeatherIcon icon="arrow-down" size={14} />
                        30%
                      </sub>
                    </Heading>
                  </div>
                </Col>
                <Col xxl={14} xs={24}>
                  <div className="border-linechart">
                    <ChartContainer className="parentContainer">
                      <ChartjsLineChart
                        height={55}
                        datasets={[
                          {
                            data: twitterOverviewState.retweets.chartValue,
                            ...lineChartPointStyle,
                          },
                        ]}
                        options={chartOptions}
                      />
                    </ChartContainer>
                  </div>
                </Col>
              </Row>
              <Row className="line-chart-row">
                <Col xxl={10} xs={24}>
                  <div className="growth-upward">
                    <p>Engagement rate</p>
                    <Heading as="h4">
                      {twitterOverviewState.rate.data}
                      <sub>
                        <FeatherIcon icon="arrow-up" size={14} />
                        34%
                      </sub>
                    </Heading>
                  </div>
                </Col>
                <Col xxl={14} xs={24}>
                  <div className="border-linechart">
                    <ChartContainer className="parentContainer">
                      <ChartjsLineChart
                        height={55}
                        datasets={[
                          {
                            data: twitterOverviewState.rate.chartValue,
                            ...lineChartPointStyle,
                          },
                        ]}
                        options={chartOptions}
                      />
                    </ChartContainer>
                  </div>
                </Col>
              </Row>
              <Row className="line-chart-row">
                <Col xxl={10} xs={24}>
                  <div className="growth-upward">
                    <p>New followers</p>
                    <Heading as="h4">
                      {twitterOverviewState.followers.data}
                      <sub>
                        <FeatherIcon icon="arrow-up" size={14} />
                        27%
                      </sub>
                    </Heading>
                  </div>
                </Col>
                <Col xxl={14} xs={24}>
                  <div className="border-linechart">
                    <ChartContainer className="parentContainer">
                      <ChartjsLineChart
                        height={55}
                        datasets={[
                          {
                            data: twitterOverviewState.followers.chartValue,
                            ...lineChartPointStyle,
                          },
                        ]}
                        options={chartOptions}
                      />
                    </ChartContainer>
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </Cards>
      )}
    </LineChartWrapper>
  );
};

export default TwitterOverview;
