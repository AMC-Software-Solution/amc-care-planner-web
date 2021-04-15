import React, { lazy, Suspense, useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { NavLink, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SettingWrapper } from './overview/style';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';

import { getSingleEmployee } from '../../../redux/employees/actionCreator';

const EmployeeCard = lazy(() => import('./overview/EmployeeProfile'));
const General = lazy(() => import('./overview/General'));
const Tasks = lazy(() => import('./overview/Tasks'));
const Holidays = lazy(() => import('./overview/Holidays'));
const Timesheet = lazy(() => import('./overview/Timesheet'));
const Notifications = lazy(() => import('./overview/Notifications'));
const AccessLogs = lazy(() => import('./overview/AccessLogs'));
const Communications = lazy(() => import('./overview/Communications'));
const Documents = lazy(() => import('./overview/Documents'));
const Location = lazy(() => import('./overview/Location'));
const Devices = lazy(() => import('./overview/Devices'));

const ServiceUserProfileContainer = () => {
  const { id } = useParams();
  const { path, url } = useRouteMatch();

  const dispatch = useDispatch();
  const { employee } = useSelector(state => {
    return {
      employee: state.employee.data,
    };
  });

  useEffect(() => {
    dispatch(getSingleEmployee(id));
  }, [dispatch, id]);

  return (
    <>
      <Main>
        {employee ? <EmployeeCard user={employee} /> : <div>Loading...</div>}
        <Row>
          <Col span={24}>
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
                        <NavLink to={`${url}/general/${id}`}>General</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/tasks/${id}`}>Tasks</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/location/${id}`}>Location</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/holidays/${id}`}>Holidays</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/documents/${id}`}>Documents</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/timesheet/${id}`}>Timesheet</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/communications/${id}`}>Communications</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/notifications/${id}`}>Notifications</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/accesslogs/${id}`}>Access Logs</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/devices/${id}`}>Devices</NavLink>
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
                  <Route exact path={`${path}/general/:id`} component={General} />
                  <Route path={`${path}/tasks/:employeeId`} component={Tasks} />
                  <Route path={`${path}/location/:id`} component={Location} />

                  <Route exact path={`${path}/holidays/:employeeId`} component={Holidays} />
                  <Route path={`${path}/documents/:employeeId`} component={Documents} />
                  <Route path={`${path}/timesheet/:employeeId`} component={Timesheet} />

                  <Route exact path={`${path}/communications/:employeeId`} component={Communications} />
                  <Route path={`${path}/notifications/:id`} component={Notifications} />
                  <Route path={`${path}/accesslogs/:id`} component={AccessLogs} />

                  <Route path={`${path}/devices/:id`} component={Devices} />
                </Suspense>
              </Switch>
            </SettingWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ServiceUserProfileContainer;
