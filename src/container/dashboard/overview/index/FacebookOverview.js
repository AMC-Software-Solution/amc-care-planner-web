import React, { useEffect } from 'react';
import { Row, Col, Radio, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { Focard, CardGroup } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { ChartjsAreaChart } from '../../../../components/charts/chartjs';
import { forcastOverviewGetData, forcastOverviewFilterData } from '../../../../redux/chartContent/actionCreator';
import { chartLinearGradient } from '../../../../components/utilities/utilities';

const FacebookOverview = () => {
  const dispatch = useDispatch();
  const { forcastOverviewState, foIsLoading } = useSelector(state => {
    return {
      forcastOverviewState: state.chartContent.forcastData,
      foIsLoading: state.chartContent.foLoading,
    };
  });

  useEffect(() => {
    if (forcastOverviewGetData) {
      dispatch(forcastOverviewGetData());
    }
  }, [dispatch]);

  const forcastOverview = e => {
    dispatch(forcastOverviewFilterData(e.target.value));
  };

  return (
    <CardGroup>
      <div className="forcast-overview">
        {forcastOverviewState !== null && (
          <Cards
            isbutton={
              <div className="card-radio">
                <Radio.Group onChange={forcastOverview} defaultValue="today">
                  <Radio.Button value="today">Today</Radio.Button>
                  <Radio.Button value="week">Week</Radio.Button>
                  <Radio.Button value="month">Month</Radio.Button>
                  <Radio.Button value="year">Year</Radio.Button>
                </Radio.Group>
              </div>
            }
            title="Facebook Overview"
            size="large"
          >
            {foIsLoading ? (
              <div className="sd-spin">
                <Spin />
              </div>
            ) : (
              <Row gutter={25}>
                <Col xl={12} md={24}>
                  <Row className="focard-wrapper focard-divider">
                    <Col md={12} sm={12} xs={24}>
                      <Focard>
                        <div className="focard-details growth-upward">
                          <Heading as="h1">{forcastOverviewState.Engaged}</Heading>
                          <p className="subtitle">Engaged Users</p>
                          <p className="focard-status">
                            <span className="focard-status__percentage">
                              <FeatherIcon icon="trending-up" />
                              25%
                            </span>
                            <span> 20,641 (prev)</span>
                          </p>
                        </div>
                        <div className="focard-chart">
                          <ChartjsAreaChart
                            id="engaged"
                            labels={forcastOverviewState.EnLabels}
                            datasets={[
                              {
                                data: forcastOverviewState.EnData,
                                borderColor: '#20C997',
                                borderWidth: 3,
                                fill: true,
                                backgroundColor: () =>
                                  chartLinearGradient(document.getElementById('engaged'), 165, {
                                    start: '#20C99710',
                                    end: '#20C99701',
                                  }),
                                pointHoverRadius: 0,
                                pointHoverBorderColor: 'transparent',
                              },
                            ]}
                            height={window.innerWidth <= 1199 ? 100 : 165}
                          />
                        </div>
                      </Focard>
                    </Col>
                    <Col md={12} sm={12} xs={24}>
                      <Focard>
                        <div className="focard-details growth-upward">
                          <Heading as="h1">{forcastOverviewState.Impressions}</Heading>
                          <p className="subtitle">Page Impressions</p>
                          <p className="focard-status">
                            <span className="focard-status__percentage">
                              <FeatherIcon icon="trending-up" />
                              14%
                            </span>
                            <span> 20,641 (prev)</span>
                          </p>
                        </div>
                        <div className="focard-chart">
                          <ChartjsAreaChart
                            id="impression"
                            labels={forcastOverviewState.ImLabels}
                            datasets={[
                              {
                                data: forcastOverviewState.ImData,
                                borderColor: '#FF69A5',
                                borderWidth: 3,
                                fill: true,
                                backgroundColor: () =>
                                  chartLinearGradient(document.getElementById('impression'), 165, {
                                    start: '#FF69A510',
                                    end: '#FF69A501',
                                  }),
                                pointHoverRadius: 0,
                                pointHoverBorderColor: 'transparent',
                              },
                            ]}
                            height={window.innerWidth <= 1199 ? 100 : 165}
                          />
                        </div>
                      </Focard>
                    </Col>
                  </Row>
                </Col>
                <Col xl={12} xs={24}>
                  <Row className="focard-wrapper">
                    <Col md={12} sm={12}>
                      <Focard>
                        <div className="focard-details growth-downward">
                          <Heading as="h1">{forcastOverviewState.Like}</Heading>
                          <p className="subtitle">Total Page Likes</p>
                          <p className="focard-status">
                            <span className="focard-status__percentage">
                              <FeatherIcon icon="trending-down" />
                              12%
                            </span>
                            <span> 20,641 (prev)</span>
                          </p>
                        </div>
                        <div className="focard-chart">
                          <ChartjsAreaChart
                            labels={forcastOverviewState.LiLabels}
                            id="likes"
                            datasets={[
                              {
                                data: forcastOverviewState.LiData,
                                borderColor: '#5F63F2',
                                borderWidth: 3,
                                fill: true,

                                backgroundColor: () =>
                                  chartLinearGradient(document.getElementById('likes'), 165, {
                                    start: '#5F63F210',
                                    end: '#5F63F201',
                                  }),
                                pointHoverRadius: 0,
                                pointHoverBorderColor: 'transparent',
                              },
                            ]}
                            height={window.innerWidth <= 1199 ? 100 : 165}
                          />
                        </div>
                      </Focard>
                    </Col>
                    <Col md={12} sm={12} xs={24}>
                      <Focard>
                        <div className="focard-details growth-upward">
                          <Heading as="h1">{forcastOverviewState.Impressions2}</Heading>
                          <p className="subtitle">Page Impressions</p>
                          <p className="focard-status">
                            <span className="focard-status__percentage">
                              <FeatherIcon icon="trending-up" />
                              14%
                            </span>
                            <span> 20,641 (prev)</span>
                          </p>
                        </div>
                        <div className="focard-chart">
                          <ChartjsAreaChart
                            labels={forcastOverviewState.ImLabels2}
                            id="impression2"
                            datasets={[
                              {
                                data: forcastOverviewState.ImData2,
                                borderColor: '#FA8B0C',
                                borderWidth: 3,
                                fill: true,
                                backgroundColor: () =>
                                  chartLinearGradient(document.getElementById('impression2'), 165, {
                                    start: '#FA8B0C10',
                                    end: '#FA8B0C01',
                                  }),
                                pointHoverRadius: 0,
                                pointHoverBorderColor: 'transparent',
                              },
                            ]}
                            height={window.innerWidth <= 1199 ? 100 : 165}
                          />
                        </div>
                      </Focard>
                    </Col>
                  </Row>
                </Col>
              </Row>
            )}
          </Cards>
        )}
      </div>
    </CardGroup>
  );
};

export default FacebookOverview;
