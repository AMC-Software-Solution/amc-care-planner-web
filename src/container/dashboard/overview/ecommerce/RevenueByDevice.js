import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import { RevenueChartWrapper } from '../../style';
import { ChartjsDonutChart2 } from '../../../../components/charts/chartjs';
import { deviceGetData, deviceFilterData } from '../../../../redux/chartContent/actionCreator';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const RevenueByDevice = () => {
  const dispatch = useDispatch();
  const { deviceState, dvIsLoading } = useSelector(state => {
    return {
      deviceState: state.chartContent.deviceData,
      dvIsLoading: state.chartContent.dvLoading,
    };
  });
  const [state, setState] = useState({
    device: 'year',
  });

  useEffect(() => {
    if (deviceGetData) {
      dispatch(deviceGetData());
    }
  }, [dispatch]);

  const handleActiveChangeDevice = value => {
    setState({
      ...state,
      device: value,
    });
    dispatch(deviceFilterData(value));
  };

  return (
    <RevenueChartWrapper>
      {deviceState !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.device === 'today' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeDevice('today')} to="#">
                    Today
                  </Link>
                </li>
                <li className={state.device === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeDevice('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.device === 'month' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeDevice('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={state.device === 'year' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeDevice('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Revenue By Device"
          size="large"
        >
          {dvIsLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <div className="revenue-doughnut">
              <ChartjsDonutChart2
                labels={['Desktop', 'Mobile', 'Tablets']}
                datasets={[
                  {
                    data: deviceState,
                    backgroundColor: ['#20C997', '#5F63F2', '#FA8B0C'],
                  },
                ]}
              />
            </div>
          )}
        </Cards>
      )}
    </RevenueChartWrapper>
  );
};

export default RevenueByDevice;
