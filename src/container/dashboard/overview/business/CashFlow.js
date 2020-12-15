import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardBarChart } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { ChartjsBarChartTransparent } from '../../../../components/charts/chartjs';

import { cashFlowGetData, cashFlowFilterData } from '../../../../redux/chartContent/actionCreator';

const CashFlow = () => {
  const dispatch = useDispatch();
  const { cashFlowState, cfIsLoading } = useSelector(state => {
    return {
      cashFlowState: state.chartContent.cashFlowData,
      cfIsLoading: state.chartContent.cfLoading,
    };
  });
  const [state, setState] = useState({
    cashFlowActive: 'year',
  });

  useEffect(() => {
    if (cashFlowGetData) {
      dispatch(cashFlowGetData());
    }
  }, [dispatch]);

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

  const handleActiveChangeCash = value => {
    setState({
      ...state,
      cashFlowActive: value,
    });
    dispatch(cashFlowFilterData(value));
  };

  const cashFlowDataset = cashFlowState !== null && [
    {
      data: cashFlowState.dataIn,
      backgroundColor: '#20C99770',
      hoverBackgroundColor: '#20C997',
      label: 'Cash in',
      maxBarThickness: 10,
      barThickness: 12,
    },
    {
      data: cashFlowState.dataOut,
      backgroundColor: '#FF4D4F70',
      hoverBackgroundColor: '#FF4D4F',
      label: 'Cash out',
      maxBarThickness: 10,
      barThickness: 12,
    },
  ];

  return (
    <>
      {cashFlowState !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.cashFlowActive === 'week' ? 'active' : 'regular'}>
                  <Link onClick={() => handleActiveChangeCash('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.cashFlowActive === 'month' ? 'active' : 'regular'}>
                  <Link onClick={() => handleActiveChangeCash('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={state.cashFlowActive === 'year' ? 'active' : 'regular'}>
                  <Link onClick={() => handleActiveChangeCash('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          title={
            <div>
              Cash Flow <span>Nov 23, 2019 - Nov 29, 2019</span>
            </div>
          }
          size="large"
          more={moreContent}
        >
          {cfIsLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <CardBarChart>
              <div className="card-bar-top d-flex flex-grid">
                <div className="flex-grid-child">
                  <p>Current Balance</p>
                  <Heading as="h3" className="color-primary">
                    ${cashFlowState.current}
                  </Heading>
                </div>
                <div className="flex-grid-child">
                  <p>Cash In</p>
                  <Heading as="h3">${cashFlowState.in}</Heading>
                </div>
                <div className="flex-grid-child">
                  <p>Cash Out</p>
                  <Heading as="h3">${cashFlowState.out}</Heading>
                </div>
              </div>
              <ChartjsBarChartTransparent
                labels={cashFlowState.labels}
                datasets={cashFlowDataset}
                height={106}
                options={{
                  maintainAspectRatio: true,
                  responsive: true,
                  layout: {
                    padding: {
                      top: 20,
                    },
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
                          fontSize: 12,
                          fontColor: '#182b49',
                          max: Math.max(...cashFlowState.dataIn),
                          stepSize: Math.floor(Math.max(...cashFlowState.dataIn) / 5),
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
                          zeroLineColor: '#fff',
                          color: 'transparent',
                          z: 1,
                        },
                        ticks: {
                          beginAtZero: true,
                          fontSize: 12,
                          fontColor: '#182b49',
                        },
                      },
                    ],
                  },
                }}
              />
              <ul className="chart-dataIndicator">
                {cashFlowDataset &&
                  cashFlowDataset.map((item, key) => {
                    return (
                      <li key={key + 1} style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <span
                          style={{
                            width: '10px',
                            height: '10px',
                            display: 'flex',
                            backgroundColor: item.hoverBackgroundColor,
                            borderRadius: '50%',
                            margin: '0px 6.5px',
                          }}
                        />
                        {item.label}
                      </li>
                    );
                  })}
              </ul>
            </CardBarChart>
          )}
        </Cards>
      )}
    </>
  );
};

export default CashFlow;
