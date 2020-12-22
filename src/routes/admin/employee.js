import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

/*const Employee = lazy(() => import('../../container/employee/Employee')); */
const EmployeeDetails = lazy(() => import('../../container/employee/EmployeeDetails'));
const EmployeeCreate = lazy(() => import('../../container/employee/EmployeeCreate'));
//const DataTable = lazy(() => import('../../container/employee/EmployeeListDataTable'));
import DataTable from '../../container/employee/EmployeeListDataTable';

const EmployeeRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/employeeDetails/:id`} component={EmployeeDetails} />
      <Route path={`${path}/view`} component={DataTable} />
      <Route path={`${path}/create`} component={EmployeeCreate} />
    </Switch>
  ); 
};

export default EmployeeRoutes;
