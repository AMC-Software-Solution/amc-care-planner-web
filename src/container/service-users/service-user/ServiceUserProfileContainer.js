import React, { lazy, Suspense, useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { NavLink, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SettingWrapper } from '../../employees/employee/profile/style';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';

import { getSingleServiceUser } from '../redux/actionCreator';

const EmployeeCard = lazy(() => import('./profile/ServiceUserProfile'));
const General = lazy(() => import('../service-user/general/General'));
const ServiceUserTask = lazy(() => import('../service-user/task/ServiceUserTask'));
const CarerServiceUserRelation = lazy(() => import('../service-user/carer-relation/CarerServiceUserRelation'));
const ServiceUserDocuments = lazy(() => import('../service-user/document/ServiceUserDocuments'));
const ServiceUserCommunication = lazy(() => import('../service-user/communication/ServiceUserCommunication'));
const ServiceUserEvents = lazy(() => import('../service-user/event/ServiceUserEvents'));
const ServiceUserInvoice = lazy(() => import('../service-user/invoice/ServiceUserInvoice'));
const ServiceUserLocation = lazy(() => import('../service-user/location/ServiceUserLocation'));
const ServiceUserTimesheet = lazy(() => import('../service-user/timesheet/ServiceUserTimesheet'));

const ServiceUserProfileContainer = () => {
  const { id } = useParams();
  const { path, url } = useRouteMatch();

  const dispatch = useDispatch();
  const { serviceUser } = useSelector(state => {
    return {
      serviceUser: state.serviceUser.data,
    };
  });

  useEffect(() => {
    dispatch(getSingleServiceUser(id));
  }, [dispatch, id]);

  return (
    <>
      <Main>
        {serviceUser ? <EmployeeCard user={serviceUser} /> : <div>Loading...</div>}
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
                        <NavLink to={`${url}/task/${id}`}>Tasks</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/location/${id}`}>Location</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/event/${id}`}>Events</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/document/${id}`}>Documents</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/timesheet/${id}`}>Timesheet</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/communication/${id}`}>Communications</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/invoice/${id}`}>Invoice</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${url}/carer-relation/${id}`}>Carer Relation</NavLink>
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
                  <Route path={`${path}/task/:employeeId`} component={ServiceUserTask} />

                  <Route path={`${path}/location/:id`} component={ServiceUserLocation} />
                  <Route path={`${path}/event/:employeeId`} component={ServiceUserEvents} />
                  <Route path={`${path}/invoice/:employeeId`} component={ServiceUserInvoice} />

                  <Route exact path={`${path}/carer-relation/:employeeId`} component={CarerServiceUserRelation} />
                  <Route path={`${path}/document/:employeeId`} component={ServiceUserDocuments} />
                  <Route path={`${path}/timesheet/:employeeId`} component={ServiceUserTimesheet} />
                  <Route exact path={`${path}/communication/:employeeId`} component={ServiceUserCommunication} />
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
