import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const EmployeeListTable = lazy(() => import('../../container/employees/employee/overview/EmployeeListTable'));
const EmployeeProfileContainer = lazy(() => import('../../container/employees/employee/EmployeeProfileContainer'));
const Appraisals = lazy(() => import('../../container/employees/Appraisals'));
const CarePlan = lazy(() => import('../../container/employees/CarePlan'));
const EmployeeMeetings = lazy(() => import('../../container/employees/EmployeeMeetings'));
const IdExpiry = lazy(() => import('../../container/employees/IdExpiry'));
const LeaveRequests = lazy(() => import('../../container/employees/LeaveRequests'));
const QualityAssurance = lazy(() => import('../../container/employees/QualityAssurance'));
const RiskAssessment = lazy(() => import('../../container/employees/RiskAssessment'));
const Rotas = lazy(() => import('../../container/employees/Rotas'));
const SpotCheck = lazy(() => import('../../container/employees/SpotCheck'));
const Supervisions = lazy(() => import('../../container/employees/Supervisions'));
const Timesheets = lazy(() => import('../../container/employees/Timesheets'));
const UserList = lazy(() => import('../../container/employees/UserList'));

const EmployeesRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/view/list`} component={EmployeeListTable} />
      <Route path={`${path}/employeeProfile/:id`} component={EmployeeProfileContainer} />
      <Route path={`${path}/care-plan`} component={CarePlan} />
      <Route path={`${path}/rotas`} component={Rotas} />
      <Route path={`${path}/appraisals`} component={Appraisals} />
      <Route path={`${path}/spot-check`} component={SpotCheck} />
      <Route path={`${path}/employee-meetings`} component={EmployeeMeetings} />
      <Route path={`${path}/supervisions`} component={Supervisions} />
      <Route path={`${path}/id-expiry`} component={IdExpiry} />
      <Route path={`${path}/timesheets`} component={Timesheets} />
      <Route path={`${path}/leave-requests`} component={LeaveRequests} />
      <Route path={`${path}/user-list`} component={UserList} />
      <Route path={`${path}/quality-assurance`} component={QualityAssurance} />
      <Route path={`${path}/risk-assessment`} component={RiskAssessment} />
    </Switch>
  );
};

export default EmployeesRoutes;
