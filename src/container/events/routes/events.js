import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Accidents = lazy(() => import('../accident/Accidents'));
const Compliance = lazy(() => import('../compliance/Compliance'));
const Compliments = lazy(() => import('../compliment/Compliments'));
const MedicationErrors = lazy(() => import('../medication-error/MedicationErrors'));
const MissedVisits = lazy(() => import('../missed-visit/MissedVisits'));
const Safeguarding = lazy(() => import('../safeguarding/Safeguarding'));

const EventsRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/accidents`} component={Accidents} />
      <Route path={`${path}/compliance`} component={Compliance} />
      <Route path={`${path}/compliments`} component={Compliments} />
      <Route path={`${path}/medication-errors`} component={MedicationErrors} />
      <Route path={`${path}/missed-visits`} component={MissedVisits} />
      <Route path={`${path}/safeguarding`} component={Safeguarding} />
    </Switch>
  );
};

export default EventsRoutes;
