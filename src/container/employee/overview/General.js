import React, { useEffect } from 'react';
import { Row, Col, Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProductGeneralTable } from './style';
import Branches from './Branches';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';
import { CardBarChart2, EChartCard, PerformanceChartWrapper } from '../../dashboard/style';
import { ChartjsBarChartTransparent, ChartjsAreaChart } from '../../../components/charts/chartjs';
import { performanceGetData } from '../../../redux/chartContent/actionCreator';
import { getAllBranches } from '../../../redux/branch/actionCreator';
import { chartLinearGradient, customTooltips } from '../../../components/utilities/utilities';
import { getSingleEmployeeLocation } from '../../../redux/employeeLocation/actionCreator';

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

const moreContent = (
  <>
    <NavLink to="#">
      <FeatherIcon size={16} icon="printer" />
      <span>Printer</span>
    </NavLink>
    <NavLink to="#">
      <FeatherIcon size={16} icon="book-open" />
      <span>PDF</span>
    </NavLink>
    <NavLink to="#">
      <FeatherIcon size={16} icon="file-text" />
      <span>Google Sheets</span>
    </NavLink>
    <NavLink to="#">
      <FeatherIcon size={16} icon="x" />
      <span>Excel (XLSX)</span>
    </NavLink>
    <NavLink to="#">
      <FeatherIcon size={16} icon="file" />
      <span>CSV</span>
    </NavLink>
  </>
);

const General = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { performanceState, branches, employeeLocation } = useSelector(state => {
    return {
      performanceState: state.chartContent.performanceData,
      branches: state.branches.data,
      employeeLocation: state.employeeLocation.data,
    };
  });

  useEffect(() => {
    if (performanceGetData) {
      dispatch(performanceGetData());
      dispatch(getAllBranches());
      dispatch(getSingleEmployeeLocation(id));
    }
  }, [dispatch]);

  const dataSource = [
    {
      key: '1',
      name: 'Samsung Galaxy S8 256GB',
      price: '$280',
      sold: 126,
      revenue: '$38,536',
    },
    {
      key: '2',
      name: 'Half Sleeve Shirt',
      price: '$25',
      sold: 80,
      revenue: '$38,536',
    },
    {
      key: '3',
      name: 'Marco Shoes',
      price: '$32',
      sold: 58,
      revenue: '$38,536',
    },
    {
      key: '4',
      name: '15" Mackbook Pro        ',
      price: '$950',
      sold: 36,
      revenue: '$38,536',
    },
    {
      key: '5',
      name: 'Apple iPhone X',
      price: '$985',
      sold: 24,
      revenue: '$38,536',
    },
  ];

  const columns = [
    {
      title: 'Products Name',
      dataIndex: 'name',
      key: 'name',
      className: 'p_name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      className: 'p_price',
    },
    {
      title: 'Sold',
      dataIndex: 'sold',
      key: 'sold',
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
    },
  ];

  const performanceDatasets = performanceState !== null && [
    {
      data: performanceState.users[1],
      borderColor: '#593196',
      borderWidth: 4,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('performance'), 300, {
          start: '#59319630',
          end: '#ffffff05',
        }),
      label: 'Revenue',
      pointStyle: 'circle',
      pointRadius: '0',
      hoverRadius: '9',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#593196',
      hoverBorderWidth: 5,
    },
  ];
 
  return (
  
    <Row gutter={25}>
      <Col xs={24}>
        
         { (branches != null) ?
            <Branches branches={branches} /> : <div></div>
          
         }
        
      
      </Col>
      {/* <Col xxl={8} lg={12} md={24} sm={12} xs={24}>
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
                    hoverBackgroundColor: '#593196',
                    label: 'Orders',
                  },
                ]}
                options={chartOptions}
              />
            </div>
          </EChartCard>
        </Cards>
      </Col> 
      <Col xxl={8} lg={12} md={24} sm={12} xs={24}>
        
      { (employeeLocation != null) ?
            
            <Cards headless>
            <div className="card__content">
                          <p className="card__designation">
                            Latitude: <b>{employeeLocation.latitude}</b>
                          </p>
                          <p className="card__designation">
                            Longitude : <b>{employeeLocation.longitude}</b>
                          </p>
                          <p className="card__designation">
                            Updated Date : <b>{employeeLocation.lastUpdatedDate}</b>
                          </p>
                        </div>
                      
            </Cards>
            : <div></div>
          
      }
        
        
      
      </Col>
      */}
      <Col xxl={8} lg={12} md={24} sm={12} xs={24}>
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
      <Col xs={24}>
        <PerformanceChartWrapper>
          {performanceState !== null && (
            <Cards more={moreContent} title="General Statistics" size="default">
              <div className="performance-lineChart">
                <ChartjsAreaChart
                  id="performance"
                  labels={performanceState.labels}
                  datasets={performanceDatasets}
                  options={{
                    maintainAspectRatio: true,
                    elements: {
                      z: 9999,
                    },
                    legend: {
                      display: false,
                    },
                    hover: {
                      mode: 'index',
                      intersect: false,
                    },
                    tooltips: {
                      mode: 'label',
                      intersect: false,
                      backgroundColor: '#ffffff',
                      position: 'average',
                      enabled: false,
                      custom: customTooltips,
                      callbacks: {
                        title() {
                          return 'General Statistics';
                        },
                        label(t, d) {
                          const { yLabel, datasetIndex } = t;
                          return `<span class="chart-data">${yLabel}k</span> <span class="data-label">${d.datasets[datasetIndex].label}</span>`;
                        },
                      },
                    },
                    scales: {
                      yAxes: [
                        {
                          gridLines: {
                            color: '#e5e9f2',
                            borderDash: [3, 3],
                            zeroLineColor: '#e5e9f2',
                            zeroLineWidth: 1,
                            zeroLineBorderDash: [3, 3],
                          },
                          ticks: {
                            beginAtZero: true,
                            fontSize: 13,
                            fontColor: '#182b49',
                            max: 80,
                            stepSize: 20,
                            callback(label) {
                              return `${label}k`;
                            },
                          },
                        },
                      ],
                      xAxes: [
                        {
                          gridLines: {
                            display: true,
                            zeroLineWidth: 2,
                            zeroLineColor: 'transparent',
                            color: 'transparent',
                            z: 1,
                            tickMarkLength: 0,
                          },
                          ticks: {
                            padding: 10,
                          },
                        },
                      ],
                    },
                  }}
                  height={window.innerWidth <= 575 ? 200 : 86}
                />
              </div>
            </Cards>
          )}
        </PerformanceChartWrapper>
      </Col>
      <Col xs={24}>
        <ProductGeneralTable>
          <Cards more={moreContent} title="My Products" size="default">
            <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
          </Cards>
        </ProductGeneralTable>
      </Col>
    </Row>
  );
};

export default General;
