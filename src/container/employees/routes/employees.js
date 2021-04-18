import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const EmployeeProfileContainer = lazy(() => import('../employee/EmployeeProfileContainer'));
const Appraisals = lazy(() => import('../appraisal/Appraisals'));
const EmployeeMeetings = lazy(() => import('../meeting/EmployeeMeetings'));
const IdExpiry = lazy(() => import('../id-expiry/IdExpiry'));
const LeaveRequests = lazy(() => import('../leave-request/LeaveRequests'));
const Rotas = lazy(() => import('../rotas/Rotas'));
const SpotCheck = lazy(() => import('../spot-check/SpotCheck'));
const Supervisions = lazy(() => import('../supervision/Supervisions'));
const Timesheets = lazy(() => import('../timesheet/Timesheets'));
const EmployeeListTable = lazy(() => import('../employee/EmployeeListTable'));

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
