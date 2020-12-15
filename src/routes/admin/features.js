import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Tables = lazy(() => import('./table'));
const Forms = lazy(() => import('../../container/forms/Forms'));
const Editors = lazy(() => import('../../container/pages/Editor'));
const Banners = lazy(() => import('../../container/pages/Banners'));
const Components = lazy(() => import('./components'));
const Maps = lazy(() => import('./maps'));
const Icons = lazy(() => import('./icons'));
const Charts = lazy(() => import('./charts'));
const Testimonials = lazy(() => import('../../container/pages/Testimonials'));

const FeaturesRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/editor`} component={Editors} />
      <Route path={`${path}/banners`} component={Banners} />
      <Route path={`${path}/components`} component={Components} />
      <Route path={`${path}/maps`} component={Maps} />
      <Route path={`${path}/icons`} component={Icons} />
      <Route path={`${path}/charts`} component={Charts} />
      <Route path={`${path}/tables`} component={Tables} />
      <Route path={`${path}/forms`} component={Forms} />
      <Route path={`${path}/testimonials`} component={Testimonials} />
    </Switch>
  );
};

export default FeaturesRoute;
