import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Pages from './pages';
import Features from './features';
import Administration from '../../container/administration/routes/administration';
import Dashboard from '../../container/dashboard/routes/dashboard';
import withAdminLayout from '../../layout/withAdminLayout';

const Calendars = lazy(() => import('../../container/Calendar'));
const Calendar = lazy(() => import('../../container/calendar/Calendar'));

const Employees = lazy(() => import('../../container/employees/routes/employees'));
const ServiceUser = lazy(() => import('../../container/service-users/routes/serviceUsers'));
const Tasks = lazy(() => import('../../container/tasks/routes/tasks'));
const Finance = lazy(() => import('../../container/finance/routes/finance'));
const Documents = lazy(() => import('../../container/document/routes/documents'));
const Events = lazy(() => import('../../container/events/routes/events'));

const Admin = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <Route path={path} component={Dashboard} />
        <Route path={path} component={Administration} />

        <Route path={`${path}/employees`} component={Employees} />
        <Route path={`${path}/service-users`} component={ServiceUser} />
        <Route path={`${path}/tasks`} component={Tasks} />
        <Route path={`${path}/finance`} component={Finance} />
        <Route path={`${path}/document-manager`} component={Documents} />
        <Route path={`${path}/events`} component={Events} />

        <Route path={`${path}`} component={Pages} />
        <Route path={`${path}`} component={Features} />
        <Route path={`${path}/calendar`} component={Calendars} />
        <Route path={`${path}/app/calendar`} component={Calendar} />
      </Suspense>
    </Switch>
  );
};

export default withAdminLayout(Admin);
