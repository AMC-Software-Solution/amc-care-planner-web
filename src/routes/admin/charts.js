import React, { lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const ChartJs = lazy(() => import('../../container/charts/ChartJs'));
const GoogleChart = lazy(() => import('../../container/charts/GoogleCharts'));
const Peity = lazy(() => import('../../container/charts/Peity'));
const RechartsBarChart = lazy(() => import('../../container/charts/recharts/Bar'));
const RechartsAreaChart = lazy(() => import('../../container/charts/recharts/Area'));
const RechartsComposed = lazy(() => import('../../container/charts/recharts/Composed'));
const RechartsLine = lazy(() => import('../../container/charts/recharts/Line'));
const RechartsPie = lazy(() => import('../../container/charts/recharts/Pie'));
const RechartsRadar = lazy(() => import('../../container/charts/recharts/Radar'));
const RechartsRadial = lazy(() => import('../../container/charts/recharts/Radial'));

const ChartRoute = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/chartjs`} component={ChartJs} />
      <Route path={`${path}/google-chart`} component={GoogleChart} />
      <Route path={`${path}/recharts/bar`} component={RechartsBarChart} />
      <Route path={`${path}/recharts/area`} component={RechartsAreaChart} />
      <Route path={`${path}/recharts/composed`} component={RechartsComposed} />
      <Route path={`${path}/recharts/line`} component={RechartsLine} />
      <Route path={`${path}/recharts/pie`} component={RechartsPie} />
      <Route path={`${path}/recharts/radar`} component={RechartsRadar} />
      <Route path={`${path}/recharts/radial`} component={RechartsRadial} />
      <Route path={`${path}/peity`} component={Peity} />
    </Switch>
  );
};

export default ChartRoute;
