import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardBarChart } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { ChartjsBarChartTransparent } from '../../../../components/charts/chartjs';

import { youtubeSubscribeFilterData, youtubeSubscribeGetData } from '../../../../redux/chartContent/actionCreator';

const YoutubeSubscribers = () => {
  const dispatch = useDispatch();
  const { youtubeSubscribeState, yuIsLoading } = useSelector(state => {
    return {
      youtubeSubscribeState: state.chartContent.youtubeSubscribeData,
      yuIsLoading: state.chartContent.yuLoading,
    };
  });

  const [state, setState] = useState({
    youtubeSubscribeTabActive: 'year',
  });

  useEffect(() => {
    if (youtubeSubscribeGetData) {
      dispatch(youtubeSubscribeGetData());
    }
  }, [dispatch]);

  const youtubeSubscribeDatasets = youtubeSubscribeState !== null && [
    {
      data: youtubeSubscribeState.gained,
      backgroundColor: '#5F63F280',
      hoverBackgroundColor: '#5F63F2',
      label: 'Gained',
      maxBarThickness: 10,
      barThickness: 12,
    },
    {
      data: youtubeSubscribeState.lost,
      backgroundColor: '#FF4D4F80',
      hoverBackgroundColor: '#FF4D4F',
      label: 'Lost',
      maxBarThickness: 10,
      barThickness: 12,
    },
  ];

  const handleActiveChangeYoutube = value => {
    setState({
      ...state,
      youtubeSubscribeTabActive: value,
    });
    dispatch(youtubeSubscribeFilterData(value));
  };

  return (
    <>
      {youtubeSubscribeState !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.youtubeSubscribeTabActive === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeYoutube('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.youtubeSubscribeTabActive === 'month' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeYoutube('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={state.youtubeSubscribeTabActive === 'year' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeYoutube('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Youtube Subscribers"
          size="large"
        >
          {yuIsLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <CardBarChart>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div className="card-bar-top">
                  <p>Subscribers</p>
                  <Heading as="h3">
                    {youtubeSubscribeState.Subscribe}
                    <sub>
                      <FeatherIcon icon="arrow-up" size={14} />
                      {youtubeSubscribeState.percent}%
                    </sub>
                  </Heading>
                </div>
                <ul>
                  {youtubeSubscribeDatasets &&
                    youtubeSubscribeDatasets.map((item, key) => {
                      return (
                        <li key={key + 1} className="custom-label">
                          <span
                            style={{
                              backgroundColor: item.hoverBackgroundColor,
                            }}
                          />
                          {item.label}
                        </li>
                      );
                    })}
                </ul>
              </div>

              <ChartjsBarChartTransparent
                labels={youtubeSubscribeState.labels}
                datasets={youtubeSubscribeDatasets}
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
                    position: 'top',
                    align: 'end',
                    labels: {
                      boxWidth: 6,
                      display: true,
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
                          max: Math.max(...youtubeSubscribeState.gained),
                          stepSize: Math.max(...youtubeSubscribeState.gained) / 5,
                          display: true,
                          min: 0,
                          padding: 10,
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
                          min: 0,
                        },
                      },
                    ],
                  },
                }}
              />
            </CardBarChart>
          )}
        </Cards>
      )}
    </>
  );
};

export default YoutubeSubscribers;
