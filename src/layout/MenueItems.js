import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';

const { SubMenu } = Menu;

const MenuItems = ({ darkMode, toggleCollapsed, topMenu }) => {
  const { path } = useRouteMatch();

  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = keys => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = item => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >
      {/* Dashboards */}
      <SubMenu key="dashboard" icon={!topMenu && <FeatherIcon icon="compass" />} title="Dashboards">
        <Menu.Item key="home">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Employees Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key="serviceUsers">
          <NavLink onClick={toggleCollapsed} to={`${path}/service-users`}>
            Service Users Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key="tasks">
          <NavLink onClick={toggleCollapsed} to={`${path}/tasks`}>
            Tasks Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key="events">
          <NavLink onClick={toggleCollapsed} to={`${path}/events`}>
            Events Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key="finance">
          <NavLink onClick={toggleCollapsed} to={`${path}/finance`}>
            Finance Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key="reports">
          <NavLink onClick={toggleCollapsed} to={`${path}/reports`}>
            Reports
          </NavLink>
        </Menu.Item>
      </SubMenu>
      {/* Administration */}
      <SubMenu key="Administration" icon={!topMenu && <FeatherIcon icon="command" />} title="Administration">
        <Menu.Item key="generalsettings">
          <NavLink onClick={toggleCollapsed} to={`${path}/general-settings`}>
            General Settings
          </NavLink>
        </Menu.Item>
        <Menu.Item key="serviceOrders">
          <NavLink onClick={toggleCollapsed} to={`${path}/service-orders`}>
            Service Orders
          </NavLink>
        </Menu.Item>
        <Menu.Item key="company">
          <NavLink onClick={toggleCollapsed} to={`${path}/company`}>
            Company
          </NavLink>
        </Menu.Item>
        <Menu.Item key="security">
          <NavLink onClick={toggleCollapsed} to={`${path}/security`}>
            Security
          </NavLink>
        </Menu.Item>
        <Menu.Item key="accessLogs">
          <NavLink onClick={toggleCollapsed} to={`${path}/access-logs`}>
            Access Logs
          </NavLink>
        </Menu.Item>
      </SubMenu>
      {/* Employees */}
      {!topMenu && <p className="sidebar-nav-title">Operations</p>}
      <SubMenu key="Employees" icon={!topMenu && <FeatherIcon icon="users" />} title="Employees">
        <Menu.Item key="dataTable">
          <NavLink onClick={toggleCollapsed} to={`${path}/employees/employee/view/list`}>
            Employee list
          </NavLink>
        </Menu.Item>
        <Menu.Item key="supervisions">
          <NavLink onClick={toggleCollapsed} to={`${path}/employees/supervisions`}>
            Supervisions
          </NavLink>
        </Menu.Item>
        <Menu.Item key="spotchecks">
          <NavLink onClick={toggleCollapsed} to={`${path}/employees/spot-check`}>
            Spot-check
          </NavLink>
        </Menu.Item>
        <Menu.Item key="appraisals">
          <NavLink onClick={toggleCollapsed} to={`${path}/employees/appraisals`}>
            Appraisals
          </NavLink>
        </Menu.Item>
        <Menu.Item key="idexpiry">
          <NavLink onClick={toggleCollapsed} to={`${path}/employees/id-expiry`}>
            ID Expiry
          </NavLink>
        </Menu.Item>
        <Menu.Item key="employeemeetings">
          <NavLink onClick={toggleCollapsed} to={`${path}/employees/employee-meetings`}>
            Employee Meetings
          </NavLink>
        </Menu.Item>
        <Menu.Item key="rotas">
          <NavLink onClick={toggleCollapsed} to={`${path}/employees/Rotas`}>
            Rotas
          </NavLink>
        </Menu.Item>
        <Menu.Item key="leaverequests">
          <NavLink onClick={toggleCollapsed} to={`${path}/employees/leave-requests`}>
            Leave Requests
          </NavLink>
        </Menu.Item>
        <Menu.Item key="timesheets">
          <NavLink onClick={toggleCollapsed} to={`${path}/employees/timesheets`}>
            Timesheets
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="serviceusers" icon={!topMenu && <FeatherIcon icon="users" />} title="Service Users">
        <Menu.Item key="userlist">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/list`}>
            User list
          </NavLink>
        </Menu.Item>
        <Menu.Item key="careplan">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/grid`}>
            Care Plan
          </NavLink>
        </Menu.Item>
        <Menu.Item key="riskassessment">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/list`}>
            Risk Assessment
          </NavLink>
        </Menu.Item>
        <Menu.Item key="qualityassurance">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/grid-style`}>
            Quality Assurance
          </NavLink>
        </Menu.Item>
      </SubMenu>
      {/* Tasks */}
      <SubMenu key="tasks" icon={!topMenu && <FeatherIcon icon="check-circle" />} title="Tasks">
        <Menu.Item key="tasklist">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/grid`}>
            Task list
          </NavLink>
        </Menu.Item>
        <Menu.Item key="newtask">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/list`}>
            New Task
          </NavLink>
        </Menu.Item>
      </SubMenu>
      {/* Events */}
      <SubMenu key="events" icon={!topMenu && <FeatherIcon icon="activity" />} title="Events">
        <Menu.Item key="accidents">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/grid`}>
            Accidents
          </NavLink>
        </Menu.Item>
        <Menu.Item key="safeguarding">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/list`}>
            Safeguarding
          </NavLink>
        </Menu.Item>
        <Menu.Item key="missedvisits">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/list`}>
            Missed Visits
          </NavLink>
        </Menu.Item>
        <Menu.Item key="medicationerror">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/addNew`}>
            Medication Errors
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Compliance">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/addNew`}>
            Compliance
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Compliance">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/addNew`}>
            Compliments
          </NavLink>
        </Menu.Item>
      </SubMenu>
      {/* Finance */}
      <SubMenu key="finance" icon={!topMenu && <FeatherIcon icon="shopping-bag" />} title="Finance">
        <Menu.Item key="funders">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/grid`}>
            Funders
          </NavLink>
        </Menu.Item>
        <Menu.Item key="invoice">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/list`}>
            Invoice
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="file" />} key="fileManager">
        <NavLink onClick={toggleCollapsed} to={`${path}/app/fileManager`}>
          Documents
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
