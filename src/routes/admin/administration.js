import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const AccessLogs = lazy(() => import('../../container/administration/AccessLogs'));
const Company = lazy(() => import('../../container/administration/Company'));
const GeneralSettings = lazy(() => import('../../container/administration/GeneralSettings'));
const Security = lazy(() => import('../../container/administration/Security'));
const ServiceOrders = lazy(() => import('../../container/administration/ServiceOrders'));

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
