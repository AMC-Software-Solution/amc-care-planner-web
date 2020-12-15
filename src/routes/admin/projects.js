import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Project = lazy(() => import('../../container/project/Project'));
const ProjectDetails = lazy(() => import('../../container/project/ProjectDetails'));
const ProjectCreate = lazy(() => import('../../container/project/ProjectCreate'));

const ProjectRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/projectDetails/:id`} component={ProjectDetails} />
      <Route path={`${path}/view`} component={Project} />
      <Route path={`${path}/create`} component={ProjectCreate} />
    </Switch>
  );
};

export default ProjectRoutes;
