import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Funders = lazy(() => import('../funder/Funders'));
const Invoice = lazy(() => import('../invoice/Invoice'));

const FinanceRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/funders`} component={Funders} />
      <Route path={`${path}/invoice`} component={Invoice} />
    </Switch>
  );
};

export default FinanceRoutes;
