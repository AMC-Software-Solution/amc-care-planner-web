import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const CarePlan = lazy(() => import('../../container/service-users/CarePlan'));
const QualityAssurance = lazy(() => import('../../container/service-users/QualityAssurance'));
const RiskAssessment = lazy(() => import('../../container/service-users/RiskAssessment'));
const UserList = lazy(() => import('../../container/service-users/UserList'));

const ServiceUserRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/care-plan`} component={CarePlan} />
      <Route path={`${path}/user-list`} component={UserList} />
      <Route path={`${path}/quality-assurance`} component={QualityAssurance} />
      <Route path={`${path}/risk-assessment`} component={RiskAssessment} />
    </Switch>
  );
};

export default ServiceUserRoutes;
