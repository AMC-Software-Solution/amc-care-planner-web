import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Employee = lazy(() => import('../../container/employee/Employee'));
const EmployeeDetails = lazy(() => import('../../container/employee/EmployeeDetails'));
const EmployeeCreate = lazy(() => import('../../container/employee/EmployeeCreate'));

const EmployeeRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/employeeDetails/:id`} component={EmployeeDetails} />
      <Route path={`${path}/view`} component={Employee} />
      <Route path={`${path}/create`} component={EmployeeCreate} />
    </Switch>
  ); 
};

export default EmployeeRoutes;
