import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const CarePlan = lazy(() => import('../care-plan/CarePlan'));
const ServiceUserProfileContainer = lazy(() => import('../service-user/ServiceUserProfileContainer'));
const QualityAssurance = lazy(() => import('../quality-assurance/QualityAssurance'));
const RiskAssessment = lazy(() => import('../risk-assessment/RiskAssessment'));
const ServiceUsersListTable = lazy(() => import('../service-user/ServiceUserListTable'));

const ServiceUserRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/service-user/profile/:id`} component={ServiceUserProfileContainer} />
      <Route path={`${path}/care-plan`} component={CarePlan} />
      <Route path={`${path}/service-user/view/list`} component={ServiceUsersListTable} />
      <Route path={`${path}/quality-assurance`} component={QualityAssurance} />
      <Route path={`${path}/risk-assessment`} component={RiskAssessment} />
    </Switch>
  );
};

export default ServiceUserRoutes;
