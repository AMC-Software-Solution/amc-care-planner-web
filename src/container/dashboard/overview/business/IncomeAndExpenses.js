import React, { useState, useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ExList, IncomeExpenseWrapper } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { ChartjsBarChartTransparent } from '../../../../components/charts/chartjs';
import { incomeGetData, incomeFilterData } from '../../../../redux/chartContent/actionCreator';

const IncomeAndExpenses = () => {
  const dispatch = useDispatch();
  const { incomeState, isIcLoading } = useSelector(state => {
    return {
      incomeState: state.chartContent.incomeData,
      isIcLoading: state.chartContent.icLoading,
    };
  });
  const [state, setState] = useState({
    incomeFlowActive: 'year',
  });

  useEffect(() => {
    if (incomeGetData) {
      dispatch(incomeGetData());
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

  const handleActiveChangeIncome = value => {
    setState({
      ...state,
      incomeFlowActive: value,
    });
    dispatch(incomeFilterData(value));
  };

  const incomeDataset = incomeState !== null && [
    {
      data: incomeState.total[1],
      backgroundColor: '#59319650',
      hoverBackgroundColor: '#593196',
      label: 'Total Income',
    },
    {
      data: incomeState.sale[1],
      backgroundColor: '#FF69A550',
      hoverBackgroundColor: '#FF69A5',
      label: 'Cost of goods sold',
    },
    {
      data: incomeState.expense[1],
      backgroundColor: '#FA8B0C40',
      hoverBackgroundColor: '#FA8B0C',
      label: 'Total expenses',
    },
    {
      data: incomeState.profit[1],
      backgroundColor: '#20C99740',
      hoverBackgroundColor: '#20C997',
      label: 'Net profit',
    },
  ];
  return (
    <IncomeExpenseWrapper>
      {incomeState !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.incomeFlowActive === 'week' ? 'active' : 'regular'}>
                  <Link onClick={() => handleActiveChangeIncome('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.incomeFlowActive === 'month' ? 'active' : 'regular'}>
                  <Link onClick={() => handleActiveChangeIncome('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={state.incomeFlowActive === 'year' ? 'active' : 'regular'}>
                  <Link onClick={() => handleActiveChangeIncome('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          title={
            <div>
              Income And Expenses <span>Nov 23, 2019 - Nov 29, 2019</span>
            </div>
          }
          size="large"
          more={moreContent}
        >
          {isIcLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <Row gutter="25">
              <Col xxl={6} sm={24}>
                <ExList>
                  <div>
                    <p>Total income</p>
                    <Heading as="h1">
                      <span>${incomeState.total[0]}</span>
                      <sub>
                        <span>
                          <FeatherIcon icon="arrow-up" /> 37%
                        </span>
                        Since last month
                      </sub>
                    </Heading>
                  </div>
                  <div>
                    <p>Total expenses</p>
                    <Heading as="h1">
                      <span>${incomeState.sale[0]}</span>
                      <sub className="growth-downward">
                        <span>
                          <FeatherIcon icon="arrow-down" /> 25%
                        </span>
                        Since last month
                      </sub>
                    </Heading>
                  </div>
                  <div>
                    <p>Cost of goods sold</p>
                    <Heading as="h1">
                      <span>${incomeState.expense[0]}</span>
                      <sub>
                        <span>
                          <FeatherIcon icon="arrow-up" /> 25%
                        </span>
                        Since last month
                      </sub>
                    </Heading>
                  </div>
                  <div>
                    <p>Net profit</p>
                    <Heading as="h1">
                      <span>${incomeState.profit[0]}</span>
                      <sub>
                        <span>
                          <FeatherIcon icon="arrow-up" /> 25%
                        </span>
                        Since last month
                      </sub>
                    </Heading>
                  </div>
                </ExList>
              </Col>
              <Col xxl={18} xs={24}>
                <ChartjsBarChartTransparent
                  labels={incomeState.labels}
                  datasets={incomeDataset}
                  height={88}
                  options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    legend: {
                      display: false,
                      position: 'bottom',
                      labels: {
                        boxWidth: 6,
                        display: true,
                        usePointStyle: true,
                      },
                      align: 'start',
                    },
                    layout: {
                      padding: {
                        left: '0',
                        right: 0,
                        top: 0,
                        bottom: '0',
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
                            max: Math.max(...incomeState.sale[1]),
                            stepSize: Math.max(...incomeState.sale[1]) / 5,
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
                          barPercentage: 0.6,
                          ticks: {
                            beginAtZero: true,
                            fontSize: 13,
                            fontColor: '#182b49',
                          },
                        },
                      ],
                    },
                  }}
                />
                <ul className="chart-dataIndicator">
                  {incomeDataset &&
                    incomeDataset.map((item, index) => {
                      return (
                        <li key={index + 1} style={{ display: 'inline-flex', alignItems: 'center' }}>
                          <span
                            style={{
                              width: '10px',
                              height: '10px',
                              display: 'flex',
                              backgroundColor: item.hoverBackgroundColor,
                              borderRadius: '50%',
                              margin: '0px 5px',
                            }}
                          />
                          {item.label}
                        </li>
                      );
                    })}
                </ul>
              </Col>
            </Row>
          )}
        </Cards>
      )}
    </IncomeExpenseWrapper>
  );
};

export default IncomeAndExpenses;
