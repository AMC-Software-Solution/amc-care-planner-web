import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const EmployeesDashboard = lazy(() => import('../employees/EmployeesDashboard'));
const EventsDashboard = lazy(() => import('../event/EventsDashboard'));
const FinanceDashboard = lazy(() => import('../finance/FinanceDashboard'));
const ServiceUserDashboard = lazy(() => import('../service-user/ServiceUserDashboard'));
const Reports = lazy(() => import('../report/ReportsDashboard'));
const Tasks = lazy(() => import('../task/TasksDashboard'));

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
