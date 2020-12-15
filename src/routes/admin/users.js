import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Users = lazy(() => import('../../container/pages/Users'));
const AddUser = lazy(() => import('../../container/pages/AddUsers'));
const DataTable = lazy(() => import('../../container/pages/UserListDataTable'));
const Team = lazy(() => import('../../container/pages/Team'));

const PagesRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/add-user`} component={AddUser} />
      <Route path={`${path}/dataTable`} component={DataTable} />
      <Route path={`${path}/team`} component={Team} />
      <Route path={`${path}`} component={Users} />
    </Switch>
  );
};

export default PagesRoute;
