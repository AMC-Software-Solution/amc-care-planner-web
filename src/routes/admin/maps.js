import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const GoogleMaps = lazy(() => import('../../container/maps/GoogleMaps'));
const Osm = lazy(() => import('../../container/maps/Leaflet'));
const Vector = lazy(() => import('../../container/maps/Vector'));

const MapRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/google`} component={GoogleMaps} />
      <Route exact path={`${path}/leaflet`} component={Osm} />
      <Route exact path={`${path}/vector`} component={Vector} />
    </Switch>
  );
};

export default MapRoutes;
