import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const AccessLogs = lazy(() => import('../access-logs/AccessLogs'));
const Company = lazy(() => import('../company/Company'));
const GeneralSettings = lazy(() => import('../genaral-setting/GeneralSettings'));
const Security = lazy(() => import('../security/Security'));
const ServiceOrders = lazy(() => import('../service-orders/ServiceOrders'));

const AdministrationRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/general-settings`} component={GeneralSettings} />
      <Route exact path={`${path}/access-logs`} component={AccessLogs} />
      <Route exact path={`${path}/company`} component={Company} />
      <Route exact path={`${path}/security`} component={Security} />
      <Route exact path={`${path}/service-orders`} component={ServiceOrders} />
    </Switch>
  );
};

export default AdministrationRoutes;
