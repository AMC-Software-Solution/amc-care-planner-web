import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { LadingPages } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';

import { landingPageFilterData, landingPageGetData } from '../../../../redux/chartContent/actionCreator';

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

const landingColumns = [
  {
    title: 'Landing Pages',
    dataIndex: 'pages',
    key: 'pages',
  },
  {
    title: 'Sessions',
    dataIndex: 'sessions',
    key: 'sessions',
  },
  {
    title: 'Bounce Rate',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'CTR',
    dataIndex: 'ctr',
    key: 'ctr',
  },
  {
    title: 'Goal Conv. Rate',
    dataIndex: 'percentage',
    key: 'percentage',
  },
];

const TopLandingPages = () => {
  const dispatch = useDispatch();
  const { landingState } = useSelector(state => {
    return {
      landingState: state.chartContent.landingPageData,
      lpIsLoading: state.chartContent.lpLoading,
    };
  });

  const [state, setState] = useState({
    landing: 'year',
  });

  useEffect(() => {
    if (landingPageGetData) {
      dispatch(landingPageGetData());
    }
  }, [dispatch]);

  const landingData = landingState !== null && [
    {
      key: '1',
      pages: (
        <Link to="#" className="page-title">
          Homepage
        </Link>
      ),
      sessions: landingState.direct.sessions,
      rate: `${landingState.direct.rate}%`,
      ctr: landingState.direct.goals,
      percentage: `${landingState.direct.percent}%`,
    },
    {
      key: '2',
      pages: (
        <Link to="#" className="page-title">
          Our Service
        </Link>
      ),
      sessions: landingState.email.sessions,
      rate: `${landingState.email.rate}%`,
      ctr: landingState.email.goals,
      percentage: `${landingState.email.percent}%`,
    },
    {
      key: '3',
      pages: (
        <Link to="#" className="page-title">
          List of Products
        </Link>
      ),
      sessions: landingState.search.sessions,
      rate: `${landingState.search.rate}%`,
      ctr: landingState.search.goals,
      percentage: `${landingState.search.percent}%`,
    },
    {
      key: '4',
      pages: (
        <Link to="#" className="page-title">
          Contact us
        </Link>
      ),
      sessions: landingState.media.sessions,
      rate: `${landingState.media.rate}%`,
      ctr: landingState.media.goals,
      percentage: `${landingState.media.percent}%`,
    },
    {
      key: '5',
      pages: (
        <Link to="#" className="page-title">
          Products
        </Link>
      ),
      sessions: landingState.other.sessions,
      rate: `${landingState.other.rate}%`,
      ctr: landingState.other.goals,
      percentage: `${landingState.other.percent}%`,
    },
  ];

  const handleActiveChangeLanding = value => {
    setState({
      ...state,
      landing: value,
    });
    dispatch(landingPageFilterData(value));
  };

  return (
    <div className="full-width-table">
      <Cards
        isbutton={
          <div className="card-nav">
            <ul>
              <li className={state.landing === 'week' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeLanding('week')} to="#">
                  Week
                </Link>
              </li>
              <li className={state.landing === 'month' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeLanding('month')} to="#">
                  Month
                </Link>
              </li>
              <li className={state.landing === 'year' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeLanding('year')} to="#">
                  Year
                </Link>
              </li>
            </ul>
          </div>
        }
        title="Top Landing Pages"
        size="large"
        more={moreContent}
      >
        <LadingPages>
          <div className="table-bordered table-responsive">
            <Table columns={landingColumns} dataSource={landingData} pagination={false} />
          </div>
        </LadingPages>
      </Cards>
    </div>
  );
};

export default TopLandingPages;
