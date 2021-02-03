import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Accidents = lazy(() => import('../../container/events/Accidents'));
const Compliance = lazy(() => import('../../container/events/Compliance'));
const Compliments = lazy(() => import('../../container/events/Compliments'));
const MedicationErrors = lazy(() => import('../../container/events/MedicationErrors'));
const MissedVisits = lazy(() => import('../../container/events/MissedVisits'));
const Safeguarding = lazy(() => import('../../container/events/Safeguarding'));

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
