import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const TaskList = lazy(() => import('../task-list/TaskList'));
const NewTask = lazy(() => import('../new-task/NewTask'));

const TasksRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/task-list`} component={TaskList} />
      <Route path={`${path}/new-task`} component={NewTask} />
    </Switch>
  );
};

export default TasksRoutes;
