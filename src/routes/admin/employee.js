import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';


const DataTable = lazy(() => import('../../container/employees/EmployeeListDataTable'));

const EmployeeRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/employeelist`} component={EmployeeListDataTable} />
    </Switch>
  );
};

export default EmployeeRoute;
