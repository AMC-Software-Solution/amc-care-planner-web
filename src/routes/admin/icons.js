import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Feathers = lazy(() => import('../../container/icons/FeatherIcons'));
const Fa = lazy(() => import('../../container/icons/FaIcons'));
const AntdIcons = lazy(() => import('../../container/icons/AntdIcons'));

const IconsRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/feathers`} component={Feathers} />
      <Route path={`${path}/font-awesome`} component={Fa} />
      <Route path={`${path}/antd`} component={AntdIcons} />
    </Switch>
  );
};

export default IconsRoute;
