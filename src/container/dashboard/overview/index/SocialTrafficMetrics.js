import React, { useEffect } from 'react';
import { Radio, Table } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardGroup } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { socialTrafficGetData, socialTrafficFilterData } from '../../../../redux/chartContent/actionCreator';

const SocialTrafficMetrics = () => {
  const dispatch = useDispatch();
  const { socialTrafficState } = useSelector(state => {
    return {
      socialTrafficState: state.chartContent.socialTrafficData,
      soIsLoading: state.chartContent.soLoading,
    };
  });

  useEffect(() => {
    if (socialTrafficGetData) {
      dispatch(socialTrafficGetData());
    }
  }, [dispatch]);

  const moreContent = (
    <>
      <NavLink to="#">
        <span>2 years</span>
      </NavLink>
      <NavLink to="#">
        <span>3 years</span>
      </NavLink>
      <NavLink to="#">
        <span>4 years</span>
      </NavLink>
    </>
  );

  const trafficTableColumns = [
    {
      dataIndex: 'network',
      key: 'network',
    },
    {
      title: 'Acquisition',
      dataIndex: 'users',
      key: 'users',
    },
    {
      dataIndex: 'newUsers',
      key: 'newUsers',
    },
    {
      dataIndex: 'sessions',
      key: 'sessions',
    },
    {
      title: 'Behavior',
      dataIndex: 'bounceRate',
      key: 'bounceRate',
    },
    {
      dataIndex: 'pages',
      key: 'pages',
    },
    {
      dataIndex: 'avg',
      key: 'avg',
    },
  ];

  const { facebook, twitter, youtube, linkdin, pinterest, google } = socialTrafficState !== null && socialTrafficState;

  const trafficTableData =
    socialTrafficState !== null
      ? [
          {
            key: '1',
            network: <span className="traffic-title">Social Network</span>,
            users: <span className="traffic-title">Users</span>,
            newUsers: <span className="traffic-title">New Users</span>,
            sessions: <span className="traffic-title">Sessions</span>,
            bounceRate: <span className="traffic-title">Bounce Rate</span>,
            pages: <span className="traffic-title">Pages / Session</span>,
            avg: <span className="traffic-title">Avg. Session Duration</span>,
          },
          {
            key: '2',
            network: (
              <Link to="#">
                <span className="social-name">Facebook</span>
              </Link>
            ),
            users: facebook.users,
            newUsers: facebook.newUsers,
            sessions: facebook.session,
            bounceRate: facebook.bounceRate,
            pages: facebook.pagesSession,
            avg: facebook.avg,
          },
          {
            key: '3',
            network: (
              <Link to="#">
                <span className="social-name">Twitter</span>
              </Link>
            ),
            users: twitter.users,
            newUsers: twitter.newUsers,
            sessions: twitter.session,
            bounceRate: twitter.bounceRate,
            pages: twitter.pagesSession,
            avg: twitter.avg,
          },
          {
            key: '4',
            network: (
              <Link to="#">
                <span className="social-name">Linkdin</span>
              </Link>
            ),
            users: linkdin.users,
            newUsers: linkdin.newUsers,
            sessions: linkdin.session,
            bounceRate: linkdin.bounceRate,
            pages: linkdin.pagesSession,
            avg: linkdin.avg,
          },
          {
            key: '5',
            network: (
              <Link to="#">
                <span className="social-name">Youtube</span>
              </Link>
            ),
            users: youtube.users,
            newUsers: youtube.newUsers,
            sessions: youtube.session,
            bounceRate: youtube.bounceRate,
            pages: youtube.pagesSession,
            avg: youtube.avg,
          },
          {
            key: '6',
            network: (
              <Link to="#">
                <span className="social-name">Pinterest</span>
              </Link>
            ),
            users: pinterest.users,
            newUsers: pinterest.newUsers,
            sessions: pinterest.session,
            bounceRate: pinterest.bounceRate,
            pages: pinterest.pagesSession,
            avg: pinterest.avg,
          },
          {
            key: '7',
            network: (
              <Link to="#">
                <span className="social-name">Google+</span>
              </Link>
            ),
            users: google.users,
            newUsers: google.newUsers,
            sessions: google.session,
            bounceRate: google.bounceRate,
            pages: google.pagesSession,
            avg: google.avg,
          },
        ]
      : [];

  const socialTraffic = e => {
    dispatch(socialTrafficFilterData(e.target.value));
  };

  return (
    <CardGroup>
      <div className="full-width-table">
        <Cards
          isbutton={
            <div className="card-radio">
              <Radio.Group onChange={socialTraffic} defaultValue="today">
                <Radio.Button value="today">Today</Radio.Button>
                <Radio.Button value="week">Week</Radio.Button>
                <Radio.Button value="month">Month</Radio.Button>
                <Radio.Button value="year">Year</Radio.Button>
              </Radio.Group>
            </div>
          }
          title="Social Traffic Metrics"
          size="large"
          more={moreContent}
        >
          <div className="traffic-table table-responsive">
            <Table columns={trafficTableColumns} dataSource={trafficTableData} pagination={false} />
          </div>
        </Cards>
      </div>
    </CardGroup>
  );
};

export default SocialTrafficMetrics;
