import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { SettingWrapper } from './overview/style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';


import { useSelector, useDispatch } from 'react-redux';

const UserCards = lazy(() => import('../pages/overview/UserCard'));
const CoverSection = lazy(() => import('./overview/CoverSection'));
const UserBio = lazy(() => import('./overview/UserBio'));
const Overview = lazy(() => import('./overview/Overview'));
const Timeline = lazy(() => import('./overview/Timeline'));
const Activity = lazy(() => import('./overview/Activity'));
import { getSingleEmployee } from '../../redux/employees/actionCreator';

const EmployeeProfile = () => {
  const { id } = useParams();
  const { path } = useRouteMatch();

  const dispatch = useDispatch();
  const { employee } = useSelector(state => {
    return {
      employee: state.employee.data,
    };
  });

  useEffect(() => {
    dispatch(getSingleEmployee(id));
},[]);

  return (
    <>
      <PageHeader
        ghost
        title="Employee Profile"
        height="20px"
      />

      <Main>
        <Row gutter={25}>
          <Col xxl={6} lg={8} md={10} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton avatar active paragraph={{ rows: 3 }} />
                </Cards>
              }
            > 
              
              { employee ? 
               <UserCards user={employee} /> : <div></div>
              }
            
     
     
           
            </Suspense>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active paragraph={{ rows: 10 }} />
                </Cards>
              }
            >
               { employee ? 
               <UserBio  user={employee} /> : <div></div>
              }
             
            </Suspense>
          </Col>
          <Col xxl={18} lg={16} md={14} xs={24}>
            <SettingWrapper>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <div className="coverWrapper">
                  <nav className="profileTab-menu">
                    <ul>
                      <li>
                        <NavLink to={`${path}/overview`}>Overview</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/timeline`}>Timeline</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/activity`}>Activity</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Suspense>
              <Switch>
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active paragraph={{ rows: 10 }} />
                    </Cards>
                  }
                >
                  <Route exact path={`${path}/overview`} component={Overview} />
                  <Route path={`${path}/timeline`} component={Timeline} />
                  <Route path={`${path}/activity`} component={Activity} />
                </Suspense>
              </Switch>
            </SettingWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
};

EmployeeProfile.propTypes = {
  // match: propTypes.object,
};

export default EmployeeProfile;
