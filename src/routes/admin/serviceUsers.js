import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const CarePlan = lazy(() => import('../../container/service-users/CarePlan'));
const QualityAssurance = lazy(() => import('../../container/service-users/QualityAssurance'));
const RiskAssessment = lazy(() => import('../../container/service-users/RiskAssessment'));
const ServiceUsersListTable = lazy(() => import('../../container/service-users/service-user/ServiceUserListTable'));

const ServiceUserRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/care-plan`} component={CarePlan} />
      <Route path={`${path}/service-users-list`} component={ServiceUsersListTable} />
      <Route path={`${path}/quality-assurance`} component={QualityAssurance} />
      <Route path={`${path}/risk-assessment`} component={RiskAssessment} />
    </Switch>
  );
};

export default ServiceUserRoutes;
