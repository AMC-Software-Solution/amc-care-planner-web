import React, { lazy, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Progress, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import propTypes from 'prop-types';
import { EmployeeDetailsWrapper, TaskLists } from './style';
import FileListCard from './overview/FileListCard';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { filterSinglePage } from '../../redux/employees/actionCreator';

const TaskList = lazy(() => import('./overview/TaskList'));
const Activities = lazy(() => import('./overview/Activities'));

const EmployeeDetails = ({ match }) => {
  const dispatch = useDispatch();
  const employee = useSelector(state => state.employee.data);

  useEffect(() => {
    if (!dispatch) {
      dispatch(filterSinglePage(parseInt(match.params.id, 10)));
    }
  }, [match.params.id, dispatch]);
  const { id , title , firstName , middleInitial , lastName , preferredName , gender , employeeCode , email , nationalInsuranceNumber , employeeContractType , pinCode , transportMode, address , county , postCode , dateOfBirth ,  photo, photoContentType, photoUrl , acruedHolidayHours , lastUpdatedDate , clientId , userId , userLogin , nationalityId ,nationalityCountryName } = employee[0];

  return (
    <EmployeeDetailsWrapper>
      <PageHeader
        ghost
        title={
          <div key="1" className="employee-header">
            <Heading as="h2">{title}</Heading>
            <Button type="primary" size="small">
              <FeatherIcon icon="plus" size="14" /> Create Employee
            </Button>
            <Button className="btn-markComplete" outlined type="white" size="small">
              <FeatherIcon icon="check" size="14" /> Mark as Complete
            </Button>
          </div>
        }
        buttons={[
          <div key="1" className="employee-action">
            <Link key={1} to="#" className="employee-edit">
              <FeatherIcon icon="edit-3" size={14} />
              Edit
            </Link>
            <Link key={2} to="#" className="employee-remove">
              <FeatherIcon icon="trash-2" size={14} />
              Remove
            </Link>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xxl={6} xl={8} xs={24}>
            <div className="employee-progress">
              <h3>Progress</h3>
              <Progress percent={65} strokeWidth={5} status="active" />
            </div>
            <Cards headless>
              <div className="state-single">
                <div className="color-primary">
                  <Link to="#">
                    <FeatherIcon icon="list" size={25} />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">47</Heading>
                  <p>Total Task</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-secondary">
                  <Link to="#">
                    <FeatherIcon icon="pie-chart" size={25} />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">34</Heading>
                  <p>Task Completed</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-success">
                  <Link to="#">
                    <FeatherIcon icon="layout" size={25} />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">£2,500</Heading>
                  <p>Total Earned</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-warning">
                  <Link to="#">
                    <FeatherIcon icon="clock" size={25} />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">50</Heading>
                  <p>Hours Worked</p>
                </div>
              </div>
            </Cards>
          </Col>
          <Col xxl={12} xl={16} xs={24}>
            <div className="about-employee-wrapper">
              <Cards title="About Employee">
                <div className="about-content">
                  <p>{content}</p>
                </div>
                <div className="about-employee">
                  <div>
                    <span>employee Owner</span>
                    <p>Peter Jackson</p>
                  </div>
                  <div>
                    <span>Budget</span>
                    <p>$56,700</p>
                  </div>
                  <div>
                    <span>Start Date</span>
                    <p className="color-primary">28 Dec 2019</p>
                  </div>
                  <div>
                    <span>Deadline</span>
                    <p className="color-danger">18 Mar 2020</p>
                  </div>
                </div>
              </Cards>
            </div>
          </Col>
          {/*
          <Col xxl={6} lg={9} xs={24}>
            <div className="employee-users-wrapper">
              <Cards
                title="Users"
                isbutton={
                  <Button className="btn-addUser" outlined type="white" size="small">
                    <FeatherIcon icon="user-plus" size={14} /> Add Users
                  </Button>
                }
              >
                <div className="employee-users">
                  <div className="porject-user-single">
                    <div>
                      <img src={require(`../../static/img/users/1.png`)} alt="" />
                    </div>
                    <div>
                      <Heading as="h5">Meyri Carles</Heading>
                      <p>Web Developer</p>
                    </div>
                  </div>
                  <div className="porject-user-single">
                    <div>
                      <img src={require(`../../static/img/users/3.png`)} alt="" />
                    </div>
                    <div>
                      <Heading as="h5">Tuhin Molla</Heading>
                      <p>Employee</p>
                    </div>
                  </div>
                  <div className="porject-user-single">
                    <div>
                      <img src={require(`../../static/img/users/9.jpg`)} alt="" />
                    </div>
                    <div>
                      <Heading as="h5">Billal Hossain</Heading>
                      <p>App Developer</p>
                    </div>
                  </div>
                  <div className="porject-user-single">
                    <div>
                      <img src={require(`../../static/img/users/4.png`)} alt="" />
                    </div>
                    <div>
                      <Heading as="h5">Khalid Hasan</Heading>
                      <p>App Developer</p>
                    </div>
                  </div>
                  <div className="porject-user-single">
                    <div>
                      <img src={require(`../../static/img/users/5.png`)} alt="" />
                    </div>
                    <div>
                      <Heading as="h5">Meyri Carles</Heading>
                      <p>Ui Designer</p>
                    </div>
                  </div>
                </div>
              </Cards>
            </div>
          </Col>
              */}
          <Col xxl={16} lg={15} xs={24}>
            <TaskLists>
              <Cards
                title={
                  <nav>
                    <NavLink to={`${match.url}/tasklist`}>Task List</NavLink>
                    &nbsp; &nbsp;
                    <NavLink to={`${match.url}/activities`}>Activities</NavLink>
                  </nav>
                }
              >
                <Switch>
                  <Suspense
                    fallback={
                      <div className="spin">
                        <Spin />
                      </div>
                    }
                  >
                    <Route exact path={match.url} component={TaskList} />
                    <Route path={`${match.url}/tasklist`} component={TaskList} />
                    <Route path={`${match.url}/activities`} component={Activities} />
                  </Suspense>
                </Switch>
              </Cards>
            </TaskLists>
          </Col>
          <Col xxl={8} xs={24}>
            <FileListCard />
          </Col>
        </Row>
      </Main>
    </EmployeeDetailsWrapper>
  );
};

EmployeeDetails.propTypes = {
  match: propTypes.object,
};

export default EmployeeDetails;
