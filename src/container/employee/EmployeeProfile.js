import React, { lazy, Suspense, useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { NavLink, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SettingWrapper } from './overview/style';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

import { getSingleEmployee } from '../../redux/employees/actionCreator';

const UserCards = lazy(() => import('../pages/overview/UserCard'));
const General = lazy(() => import('./overview/General'));
const Timeline = lazy(() => import('./overview/Timeline'));
const Activity = lazy(() => import('./overview/Activity'));

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
  }, []);

  return (
    <>
      <Main>
        <Row>
          <Col>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton avatar active paragraph={{ rows: 3 }} />
                </Cards>
              }
            >
              {employee ? <UserCards user={{ user: employee }} /> : <div />}
            </Suspense>
          </Col>
        </Row>
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
                        <NavLink to={`${path}/general`}>General</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/tasks`}>Tasks</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/locations`}>Location</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/holidays`}>Holidays</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/documents`}>Documents</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/timesheet`}>Timesheet</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/communications`}>Communications</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/notifications`}>Notifications</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/accesslogs`}>Access Logs</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/devices`}>Devices</NavLink>
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
                  <Route exact path={`${path}/general`} component={General} />
                  <Route path={`${path}/tasks`} component={Timeline} />
                  <Route path={`${path}/locations`} component={Activity} />

                  <Route exact path={`${path}/holidays`} component={General} />
                  <Route path={`${path}/documents`} component={Timeline} />
                  <Route path={`${path}/timesheet`} component={Activity} />

                  <Route exact path={`${path}/communications`} component={General} />
                  <Route path={`${path}/notifications`} component={Timeline} />
                  <Route path={`${path}/accesslogs`} component={Activity} />

                  <Route path={`${path}/devices`} component={Activity} />
                </Suspense>
              </Switch>
            </SettingWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
};

// EmployeeProfile.propTypes = {
//   match: propTypes.object,
// };

export default EmployeeProfile;
