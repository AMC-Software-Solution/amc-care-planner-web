import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const EmployeesDashboard = lazy(() => import('../../container/dashboard/EmployeesDashboard'));
const EventsDashboard = lazy(() => import('../../container/dashboard/EventsDashboard'));
const FinanceDashboard = lazy(() => import('../../container/dashboard/FinanceDashboard'));
const ServiceUserDashboard = lazy(() => import('../../container/dashboard/ServiceUserDashboard'));
const Reports = lazy(() => import('../../container/dashboard/ReportsDashboard'));
const Tasks = lazy(() => import('../../container/dashboard/TasksDashboard'));

const DashboardRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={EmployeesDashboard} />
      <Route exact path={`${path}/events`} component={EventsDashboard} />
      <Route exact path={`${path}/finance`} component={FinanceDashboard} />
      <Route exact path={`${path}/service-users`} component={ServiceUserDashboard} />
      <Route exact path={`${path}/tasks`} component={Tasks} />
      <Route exact path={`${path}/reports`} component={Reports} />
    </Switch>
  );
};

export default DashboardRoutes;
