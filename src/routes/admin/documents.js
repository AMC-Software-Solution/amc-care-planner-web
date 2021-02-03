import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Documents = lazy(() => import('../../container/document-manager/Documents'));

const DocumentManagerRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/documents`} component={Documents} />
    </Switch>
  );
};

export default DocumentManagerRoutes;
