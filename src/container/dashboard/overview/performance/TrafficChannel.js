import React, { useState, useEffect } from 'react';
import { Progress, Table } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { TrafficTableWrapper } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { trafficChanelGetData, trafficChanelFilterData } from '../../../../redux/chartContent/actionCreator';

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

const locationColumns = [
  {
    title: 'Channel',
    dataIndex: 'channel',
    key: 'channel',
  },
  {
    title: 'Sessions',
    dataIndex: 'sessions',
    key: 'sessions',
  },
  {
    title: 'Goal Conv. Rate',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Goals Completions',
    dataIndex: 'completions',
    key: 'completions',
  },
  {
    title: 'Percentage of Traffic (%)',
    dataIndex: 'percentage',
    key: 'percentage',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
];

const TrafficChannel = () => {
  const dispatch = useDispatch();
  const { trafficState } = useSelector(state => {
    return {
      trafficState: state.chartContent.trafficChanelData,
    };
  });

  const [state, setState] = useState({
    traffic: 'year',
  });

  useEffect(() => {
    if (trafficChanelGetData) {
      dispatch(trafficChanelGetData());
    }
  }, [dispatch]);

  const locationData = trafficState !== null && [
    {
      key: '1',
      channel: 'Direct',
      sessions: trafficState.direct.sessions,
      rate: `${trafficState.direct.rate}%`,
      completions: trafficState.direct.goals,
      percentage: (
        <Progress
          percent={trafficState.direct.percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className="progress-dt progress-primary"
        />
      ),
      value: `${trafficState.direct.value}%`,
    },
    {
      key: '2',
      channel: 'Email',
      sessions: trafficState.email.sessions,
      rate: `${trafficState.email.rate}%`,
      completions: trafficState.email.goals,
      percentage: (
        <Progress
          percent={trafficState.email.percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className="progress-et progress-secondary"
        />
      ),
      value: `${trafficState.email.value}%`,
    },
    {
      key: '3',
      channel: 'Organic Search',
      sessions: trafficState.search.sessions,
      rate: `${trafficState.search.rate}%`,
      completions: trafficState.search.goals,
      percentage: (
        <Progress
          percent={trafficState.search.percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className="progress-ost progress-success"
        />
      ),
      value: `${trafficState.search.value}%`,
    },
    {
      key: '4',
      channel: 'Referral',
      sessions: trafficState.referral.sessions,
      rate: `${trafficState.referral.rate}%`,
      completions: trafficState.referral.goals,
      percentage: (
        <Progress
          percent={trafficState.referral.percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className="progress-rt progress-info"
        />
      ),
      value: `${trafficState.referral.value}%`,
    },
    {
      key: '5',
      channel: 'Social Media',
      sessions: trafficState.media.sessions,
      rate: `${trafficState.media.rate}%`,
      completions: trafficState.media.goals,
      percentage: (
        <Progress
          percent={trafficState.media.percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className="progress-smt progress-warning"
        />
      ),
      value: `${trafficState.media.value}%`,
    },
    {
      key: '6',
      channel: 'Other',
      sessions: trafficState.other.sessions,
      rate: `${trafficState.other.rate}%`,
      completions: trafficState.other.goals,
      percentage: (
        <Progress
          percent={trafficState.other.percent}
          strokeWidth={5}
          status="active"
          showInfo={false}
          className="progress-ot progress-danger"
        />
      ),
      value: `${trafficState.other.value}%`,
    },
  ];

  const handleActiveChangeTraffic = value => {
    setState({
      ...state,
      traffic: value,
    });
    dispatch(trafficChanelFilterData(value));
  };

  return (
    <div className="full-width-table">
      <Cards
        isbutton={
          <div className="card-nav">
            <ul>
              <li className={state.traffic === 'week' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeTraffic('week')} to="#">
                  Week
                </Link>
              </li>
              <li className={state.traffic === 'month' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeTraffic('month')} to="#">
                  Month
                </Link>
              </li>
              <li className={state.traffic === 'year' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeTraffic('year')} to="#">
                  Year
                </Link>
              </li>
            </ul>
          </div>
        }
        title="Traffic Channels"
        size="large"
        more={moreContent}
      >
        <TrafficTableWrapper>
          <div className="table-bordered table-responsive">
            <Table columns={locationColumns} dataSource={locationData} pagination={false} />
          </div>
        </TrafficTableWrapper>
      </Cards>
    </div>
  );
};

export default TrafficChannel;
