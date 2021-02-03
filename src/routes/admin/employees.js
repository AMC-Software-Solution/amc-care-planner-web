import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const EmployeeProfileContainer = lazy(() => import('../../container/employees/employee/EmployeeProfileContainer'));
const Appraisals = lazy(() => import('../../container/employees/Appraisals'));
const EmployeeMeetings = lazy(() => import('../../container/employees/EmployeeMeetings'));
const IdExpiry = lazy(() => import('../../container/employees/IdExpiry'));
const LeaveRequests = lazy(() => import('../../container/employees/LeaveRequests'));
const Rotas = lazy(() => import('../../container/employees/Rotas'));
const SpotCheck = lazy(() => import('../../container/employees/SpotCheck'));
const Supervisions = lazy(() => import('../../container/employees/Supervisions'));
const Timesheets = lazy(() => import('../../container/employees/Timesheets'));
const EmployeeListTable = lazy(() => import('../../container/employees/employee/EmployeeListTable'));

const EmployeesRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/employee/view/list`} component={EmployeeListTable} />
      <Route path={`${path}/employee/employeeProfile/:id`} component={EmployeeProfileContainer} />
      <Route path={`${path}/rotas`} component={Rotas} />
      <Route path={`${path}/appraisals`} component={Appraisals} />
      <Route path={`${path}/spot-check`} component={SpotCheck} />
      <Route path={`${path}/employee-meetings`} component={EmployeeMeetings} />
      <Route path={`${path}/supervisions`} component={Supervisions} />
      <Route path={`${path}/id-expiry`} component={IdExpiry} />
      <Route path={`${path}/timesheets`} component={Timesheets} />
      <Route path={`${path}/leave-requests`} component={LeaveRequests} />
    </Switch>
  );
};

export default EmployeesRoutes;
