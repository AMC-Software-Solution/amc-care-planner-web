import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import { RevenueWrapper } from '../../style';
import { ChartjsAreaChart } from '../../../../components/charts/chartjs';
import { customTooltips, chartLinearGradient } from '../../../../components/utilities/utilities';
import { performanceFilterData, performanceGetData } from '../../../../redux/chartContent/actionCreator';
import { Cards } from '../../../../components/cards/frame/cards-frame';

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
const TotalRevenue = ({ title }) => {
  const dispatch = useDispatch();
  const { performanceState, preIsLoading } = useSelector(state => {
    return {
      performanceState: state.chartContent.performanceData,
      preIsLoading: state.chartContent.perLoading,
    };
  });

  const [state, setState] = useState({
    revenue: 'year',
  });

  useEffect(() => {
    if (performanceGetData) {
      dispatch(performanceGetData());
    }
  }, [dispatch]);

  const handleActiveChangeRevenue = value => {
    setState({
      ...state,
      revenue: value,
    });
    return dispatch(performanceFilterData(value));
  };

  const performanceDatasets = performanceState !== null && [
    {
      data: performanceState.users[1],
      borderColor: '#5F63F2',
      borderWidth: 4,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('performance'), 300, {
          start: '#5F63F230',
          end: '#ffffff05',
        }),
      label: 'Current period',
      pointStyle: 'circle',
      pointRadius: '0',
      hoverRadius: '9',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#5F63F2',
      hoverBorderWidth: 5,
      amount: '$7,596',
      amountClass: 'current-amount',
    },
    {
      data: performanceState.users[2],
      borderColor: '#C6D0DC',
      borderWidth: 2,
      fill: false,
      backgroundColor: '#00173750',
      label: 'Previous period',
      borderDash: [3, 3],
      pointRadius: '0',
      hoverRadius: '0',
      amount: '$3,258',
      amountClass: 'prev-amount',
    },
  ];

  return (
    <RevenueWrapper>
      {performanceState !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.revenue === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeRevenue('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.revenue === 'month' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeRevenue('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={state.revenue === 'year' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeRevenue('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          more={moreContent}
          title={title}
          size="large"
        >
          {preIsLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <div className="performance-lineChart">
              <ul>
                {performanceDatasets &&
                  performanceDatasets.map((item, key) => {
                    return (
                      <li key={key + 1} className="custom-label">
                        <strong className={item.amountClass}>{item.amount}</strong>
                        <div>
                          <span
                            style={{
                              backgroundColor: item.borderColor,
                            }}
                          />
                          {item.label}
                        </div>
                      </li>
                    );
                  })}
              </ul>

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
                    position: 'bottom',
                    align: 'start',
                    labels: {
                      boxWidth: 6,
                      display: false,
                      usePointStyle: true,
                    },
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
                        return `Total Revenue`;
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
                          suggestedMin: 50,
                          suggestedMax: 80,
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
                height={window.innerWidth <= 575 ? 200 : 82}
              />
            </div>
          )}
        </Cards>
      )}
    </RevenueWrapper>
  );
};

TotalRevenue.defaultProps = {
  title: 'Total Revenue',
};

TotalRevenue.propTypes = {
  title: PropTypes.string,
};

export default TotalRevenue;
