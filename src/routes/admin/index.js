import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Dashboard from './dashboard';
import Administration from './administration';
import Pages from './pages';
import Features from './features';
import withAdminLayout from '../../layout/withAdminLayout';

const Calendars = lazy(() => import('../../container/Calendar'));
const Calendar = lazy(() => import('../../container/calendar/Calendar'));

const Employees = lazy(() => import('./employees'));
const ServiceUser = lazy(() => import('./serviceUsers'));
const Tasks = lazy(() => import('./tasks'));
const Finance = lazy(() => import('./finance'));
const Documents = lazy(() => import('./documents'));
const Events = lazy(() => import('./events'));

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
