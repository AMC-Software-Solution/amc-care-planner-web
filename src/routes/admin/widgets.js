import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Charts = lazy(() => import('../../container/widgets/Charts'));
const Carts = lazy(() => import('../../container/widgets/Cards'));
const Mixed = lazy(() => import('../../container/widgets/Mix'));

const WidgetsRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>      
      <Route path={`${path}/chart`} component={Charts} />
      <Route path={`${path}/card`} component={Carts} />
      <Route path={`${path}/mixed`} component={Mixed} />
    </Switch>
  );
};

export default WidgetsRoute;
