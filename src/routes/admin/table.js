import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Basic = lazy(() => import('../../container/table/Table'));
const DataTable = lazy(() => import('../../container/table/DataTable'));

const TableRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/basic`} component={Basic} />
      <Route path={`${path}/dataTable`} component={DataTable} />
    </Switch>
  );
};

export default TableRoute;
