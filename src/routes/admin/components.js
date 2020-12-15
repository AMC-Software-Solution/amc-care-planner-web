import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Button = lazy(() => import('../../container/ui-elements/Button'));
const Alerts = lazy(() => import('../../container/ui-elements/Alerts'));
const Modals = lazy(() => import('../../container/ui-elements/Modals'));
const Cards = lazy(() => import('../../container/ui-elements/Cards'));
const Grid = lazy(() => import('../../container/ui-elements/Grid'));
const Tabs = lazy(() => import('../../container/ui-elements/Tabs'));
const Breadcrumb = lazy(() => import('../../container/ui-elements/Breadcrumb'));
const Pagination = lazy(() => import('../../container/ui-elements/Pagination'));
const PageHeader = lazy(() => import('../../container/ui-elements/PageHeaders'));
const Steps = lazy(() => import('../../container/ui-elements/Steps'));
const Comments = lazy(() => import('../../container/ui-elements/Comments'));
const Empty = lazy(() => import('../../container/ui-elements/Empty'));
const Statistic = lazy(() => import('../../container/ui-elements/Statistic'));
const Rate = lazy(() => import('../../container/ui-elements/Rate'));
const Slider = lazy(() => import('../../container/ui-elements/Slider'));
const Progress = lazy(() => import('../../container/ui-elements/Progress'));
const Tags = lazy(() => import('../../container/ui-elements/Tags'));
const Dropdown = lazy(() => import('../../container/ui-elements/Dropdown'));
const Popover = lazy(() => import('../../container/ui-elements/Popover'));
const Timeline = lazy(() => import('../../container/ui-elements/Timeline'));
const Drawer = lazy(() => import('../../container/ui-elements/Drawer'));
const Notification = lazy(() => import('../../container/ui-elements/Notification'));
const Result = lazy(() => import('../../container/ui-elements/Result'));
const Spiner = lazy(() => import('../../container/ui-elements/Spin'));
const Carousel = lazy(() => import('../../container/ui-elements/Carousel'));
const Collapse = lazy(() => import('../../container/ui-elements/Collapse'));
const Avatar = lazy(() => import('../../container/ui-elements/Avata'));
const Badge = lazy(() => import('../../container/ui-elements/Badge'));
const AutoComplete = lazy(() => import('../../container/ui-elements/AutoComplete'));
const Checkbox = lazy(() => import('../../container/ui-elements/Checkbox'));
const Cascader = lazy(() => import('../../container/ui-elements/Cascader'));
const DatePicker = lazy(() => import('../../container/ui-elements/DatePicker'));
const Radio = lazy(() => import('../../container/ui-elements/Radio'));
const Switches = lazy(() => import('../../container/ui-elements/Switch'));
const Selects = lazy(() => import('../../container/ui-elements/Select'));
const TimePicker = lazy(() => import('../../container/ui-elements/Timepicker'));
const TreeSelect = lazy(() => import('../../container/ui-elements/TreeSelect'));
const Calendar = lazy(() => import('../../container/ui-elements/Calender'));
const Form = lazy(() => import('../../container/ui-elements/Form'));
const Skeleton = lazy(() => import('../../container/ui-elements/Skeleton'));
const List = lazy(() => import('../../container/ui-elements/List'));
const Input = lazy(() => import('../../container/ui-elements/Inputs'));
const Message = lazy(() => import('../../container/ui-elements/Messages'));
const Confirme = lazy(() => import('../../container/ui-elements/PopConfirme'));
const Menu = lazy(() => import('../../container/ui-elements/Menu'));
const Upload = lazy(() => import('../../container/ui-elements/Upload'));
const DragDrop = lazy(() => import('../../container/ui-elements/DragAndDrop'));
const DashboardBase = lazy(() => import('../../container/dashboard/DashboardBase'));

const ComponentRoute = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/button`} component={Button} />
      <Route path={`${path}/alerts`} component={Alerts} />
      <Route path={`${path}/modals`} component={Modals} />
      <Route path={`${path}/cards`} component={Cards} />
      <Route path={`${path}/grid`} component={Grid} />
      <Route path={`${path}/tabs`} component={Tabs} />
      <Route path={`${path}/breadcrumb`} component={Breadcrumb} />
      <Route path={`${path}/list`} component={List} />
      <Route path={`${path}/pagination`} component={Pagination} />
      <Route path={`${path}/page-headers`} component={PageHeader} />
      <Route path={`${path}/steps`} component={Steps} />
      <Route path={`${path}/comments`} component={Comments} />
      <Route path={`${path}/empty`} component={Empty} />
      <Route path={`${path}/statistic`} component={Statistic} />
      <Route path={`${path}/rate`} component={Rate} />
      <Route path={`${path}/slider`} component={Slider} />
      <Route path={`${path}/progress`} component={Progress} />
      <Route path={`${path}/tags`} component={Tags} />
      <Route path={`${path}/dropdown`} component={Dropdown} />
      <Route path={`${path}/popover`} component={Popover} />
      <Route path={`${path}/timeline`} component={Timeline} />
      <Route path={`${path}/drawer`} component={Drawer} />
      <Route path={`${path}/notification`} component={Notification} />
      <Route path={`${path}/result`} component={Result} />
      <Route path={`${path}/spiner`} component={Spiner} />
      <Route path={`${path}/carousel`} component={Carousel} />
      <Route path={`${path}/collapse`} component={Collapse} />
      <Route path={`${path}/avatar`} component={Avatar} />
      <Route path={`${path}/badge`} component={Badge} />
      <Route path={`${path}/auto-complete`} component={AutoComplete} />
      <Route path={`${path}/checkbox`} component={Checkbox} />
      <Route path={`${path}/cascader`} component={Cascader} />
      <Route path={`${path}/date-picker`} component={DatePicker} />
      <Route path={`${path}/radio`} component={Radio} />
      <Route path={`${path}/switch`} component={Switches} />
      <Route path={`${path}/select`} component={Selects} />
      <Route path={`${path}/timePicker`} component={TimePicker} />
      <Route path={`${path}/tree-select`} component={TreeSelect} />
      <Route path={`${path}/calendar`} component={Calendar} />
      <Route path={`${path}/form`} component={Form} />
      <Route path={`${path}/skeleton`} component={Skeleton} />
      <Route path={`${path}/input`} component={Input} />
      <Route path={`${path}/message`} component={Message} />
      <Route path={`${path}/confirm`} component={Confirme} />
      <Route path={`${path}/menu`} component={Menu} />
      <Route path={`${path}/upload`} component={Upload} />
      <Route path={`${path}/drag`} component={DragDrop} />
      <Route exact path={`${path}/base`} component={DashboardBase} />
    </Switch>
  );
};

export default ComponentRoute;
