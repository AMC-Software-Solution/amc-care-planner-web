import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const TaskList = lazy(() => import('../../container/tasks/TaskList'));
const NewTask = lazy(() => import('../../container/tasks/NewTask'));

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
