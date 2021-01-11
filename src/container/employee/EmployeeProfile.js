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
const GoogleMapsSingleMap = lazy(() => import('../../container/maps/GoogleMapsSingleMap'));
const DocumentManager = lazy(() => import('../../container/fileManager/DocumentManager'));


const EmployeeProfile = () => {
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
              {employee ? <UserCards user={employee} /> : <div />}
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
                        <NavLink to={`${url}/general/${id}`}>General</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/tasks/${id}`}>Tasks</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/locations/${id}`}>Location</NavLink>
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
                  <Route path={`${path}/tasks/:id`} component={Timeline} />
                  <Route path={`${path}/locations/:id`} component={GoogleMapsSingleMap} />

                  <Route exact path={`${path}/holidays/:id`} component={General} />
                  <Route path={`${path}/documents/:id`} component={DocumentManager} />
                  <Route path={`${path}/timesheet/:id`} component={Activity} />

                  <Route exact path={`${path}/communications/:id`} component={General} />
                  <Route path={`${path}/notifications/:id`} component={Timeline} />
                  <Route path={`${path}/accesslogs/:id`} component={Activity} />

                  <Route path={`${path}/devices/:id`} component={Activity} />
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
