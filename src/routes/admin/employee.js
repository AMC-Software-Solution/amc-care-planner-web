import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import EmployeeProfile from '../../container/employee/EmployeeProfile';
import EmployeeListDataTable from '../../container/employee/EmployeeListDataTable';

const EmployeeRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/employeeProfile/:id`} component={EmployeeProfile} />
      <Route path={`${path}/view`} component={EmployeeListDataTable} />
    </Switch>
  );
};

export default EmployeeRoutes;
