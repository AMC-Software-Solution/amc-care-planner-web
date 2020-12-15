import React from 'react';
import { Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { ChartjsLineChart } from '../../../../components/charts/chartjs';

const AccountGroup = () => {
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

  return (
    <>
      <Col lg={12} md={12} sm={24} xs={24}>
        <div className="account-card">
          <Cards title="Account Receivable" more={moreContent}>
            <ChartjsLineChart
              labels={['Current', '1-30', '30-60', '60-90', '91+']}
              datasets={[
                {
                  data: [105, 145, 95, 149, 90],
                  borderColor: '#FA8B0C',
                  borderWidth: 3,
                  fill: false,
                  pointBackgroundColor: '#FA8B0C',
                  pointBorderColor: '#fff',
                  pointHoverBorderColor: '#fff',
                  pointBorderWidth: 2,
                  pointHoverBorderWidth: 3,
                  pointHoverRadius: 5,
                  z: 5,
                },
              ]}
              height={window.innerWidth <= 575 ? 230 : 100}
              options={{
                legend: {
                  display: false,
                },
                elements: {
                  point: {
                    radius: 5,
                    z: 5,
                  },
                },

                tooltips: {
                  mode: 'label',
                  intersect: false,
                  backgroundColor: '#ffffff',
                  position: 'average',
                  titleFontColor: '#5A5F7D',
                  titleFontSize: 13,
                  titleSpacing: 15,
                  bodyFontColor: '#868EAE',
                  bodyFontSize: 12,
                  borderColor: '#F1F2F6',
                  borderWidth: 2,
                  bodySpacing: 15,
                  xPadding: 15,
                  yPadding: 15,
                  z: 999999,
                  custom(tooltip) {
                    if (!tooltip) return;
                    // disable displaying the color box;
                    tooltip.displayColors = false;
                  },
                  callbacks: {
                    title() {
                      return `Account Receivable`;
                    },
                    label(t, d) {
                      const { yLabel, xLabel } = t;
                      return `${xLabel}: $${yLabel}k`;
                    },
                    labelColor(tooltipItem, chart) {
                      return {
                        backgroundColor: '#000',
                        borderColor: 'transparent',
                      };
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
                        max: 200,
                        stepSize: 50,
                        padding: 10,
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
                      },
                    },
                  ],
                },
              }}
            />
          </Cards>
        </div>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <div className="account-card">
          <Cards title="Account Payable" more={moreContent}>
            <ChartjsLineChart
              labels={['Current', '1-30', '30-60', '60-90', '91+']}
              datasets={[
                {
                  data: [80, 160, 105, 140, 107],
                  borderColor: '#2C99FF',
                  borderWidth: 3,
                  fill: false,
                  pointBackgroundColor: '#2C99FF',
                  pointBorderColor: '#fff',
                  pointHoverBorderColor: '#fff',
                  pointBorderWidth: 2,
                  pointHoverBorderWidth: 3,
                  pointHoverRadius: 5,
                  z: 5,
                },
              ]}
              height={window.innerWidth <= 575 ? 230 : 100}
              options={{
                legend: {
                  display: false,
                },
                elements: {
                  point: {
                    radius: 5,
                    z: 5,
                  },
                },

                tooltips: {
                  mode: 'label',
                  intersect: false,
                  backgroundColor: '#ffffff',
                  position: 'average',
                  titleFontColor: '#5A5F7D',
                  titleFontSize: 13,
                  titleSpacing: 15,
                  bodyFontColor: '#868EAE',
                  bodyFontSize: 12,
                  borderColor: '#F1F2F6',
                  borderWidth: 2,
                  bodySpacing: 15,
                  xPadding: 15,
                  yPadding: 15,
                  z: 999999,
                  // enabled: false,
                  // custom: customTooltips,
                  custom(tooltip) {
                    if (!tooltip) return;
                    tooltip.displayColors = false;
                  },
                  callbacks: {
                    title() {
                      return `Account Payable`;
                    },
                    label(t, d) {
                      const { yLabel, xLabel } = t;
                      return `${xLabel}: $${yLabel}k`;
                    },
                    labelColor(tooltipItem, chart) {
                      return {
                        backgroundColor: '#000',
                        borderColor: 'transparent',
                      };
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
                        max: 200,
                        stepSize: 50,
                        padding: 10,
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
                      },
                    },
                  ],
                },
              }}
            />
          </Cards>
        </div>
      </Col>
    </>
  );
};

export default AccountGroup;
