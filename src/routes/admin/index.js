import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Dashboard from './dashboard';
import Administration from './administration';
import Pages from './pages';
import Users from './users';
import Features from './features';
import Gallery from './gallery';
import withAdminLayout from '../../layout/withAdminLayout';

const Calendars = lazy(() => import('../../container/Calendar'));

const Inbox = lazy(() => import('../../container/email/Email'));
const Contact = lazy(() => import('../../container/contact/Contact'));
const ContactGrid = lazy(() => import('../../container/contact/ContactGrid'));
const ContactAddNew = lazy(() => import('../../container/contact/AddNew'));
const Calendar = lazy(() => import('../../container/calendar/Calendar'));
const FileManager = lazy(() => import('../../container/fileManager/FileManager'));

const Employees = lazy(() => import('./employees'));

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
        <Route path={`${path}`} component={Pages} />
        <Route path={`${path}`} component={Features} />
        <Route path={`${path}/users`} component={Users} />
        <Route path={`${path}/gallery`} component={Gallery} />
        <Route path={`${path}/employees`} component={Employees} />
        <Route path={`${path}/calendar`} component={Calendars} />
        <Route path={`${path}/app/fileManager`} component={FileManager} />
        <Route path={`${path}/email/:page`} component={Inbox} />
        <Route path={`${path}/contact/list`} component={Contact} />
        <Route path={`${path}/contact/grid`} component={ContactGrid} />
        <Route path={`${path}/contact/addNew`} component={ContactAddNew} />
        <Route path={`${path}/app/calendar`} component={Calendar} />
      </Suspense>
    </Switch>
  );
};

export default withAdminLayout(Admin);
