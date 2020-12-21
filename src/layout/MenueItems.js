import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import versions from '../demoData/changelog.json';

const { SubMenu } = Menu;

const MenuItems = ({ darkMode, toggleCollapsed, topMenu, events }) => {
  const { path } = useRouteMatch();

  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const { onRtlChange, onLtrChange, modeChangeDark, modeChangeLight, modeChangeTopNav, modeChangeSideNav } = events;
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
      // // eslint-disable-next-line no-nested-ternary
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
      <SubMenu key="dashboard" icon={!topMenu && <FeatherIcon icon="home" />} title="Dashboards">
        <Menu.Item key="home">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Employees Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key="business">
          <NavLink onClick={toggleCollapsed} to={`${path}/business`}>
            Service Users Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key="performance">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Tasks Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key="eco">
          <NavLink onClick={toggleCollapsed} to={`${path}/eco`}>
            Events Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key="crm">
          <NavLink onClick={toggleCollapsed} to={`${path}/crm`}>
            Finance Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key="sales">
          <NavLink onClick={toggleCollapsed} to={`${path}/sales`}>
            Reports
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="layout" icon={!topMenu && <FeatherIcon icon="layout" />} title="Administration">
        <Menu.Item key="generalsettings">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              modeChangeLight();
            }}
            to="#"
          >
            General Settings
          </NavLink>
        </Menu.Item>
        <Menu.Item key="serviceorders">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              modeChangeDark();
            }}
            to="#"
          >
            Service Orders
          </NavLink>
        </Menu.Item>
        <Menu.Item key="company">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              modeChangeDark();
            }}
            to="#"
          >
            Company
          </NavLink>
        </Menu.Item>
        <Menu.Item key="security">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              modeChangeDark();
            }}
            to="#"
          >
            Security
          </NavLink>
        </Menu.Item>
        <Menu.Item key="topMenu">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              modeChangeTopNav();
            }}
            to="#"
          >
            Access Logs
          </NavLink>
        </Menu.Item>
        {/*
        <Menu.Item key="sideMenu">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              modeChangeSideNav();
            }}
            to="#"
          >
            Side Menu
          </NavLink>
        </Menu.Item>
        <Menu.Item key="rtl">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              onRtlChange();
            }}
            to="#"
          >
            RTL
          </NavLink>
        </Menu.Item>
        <Menu.Item key="ltr">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              onLtrChange();
            }}
            to="#"
          >
            LTR
          </NavLink>
        </Menu.Item>
          */}
      </SubMenu>
      {/*
      <Menu.Item icon={!topMenu && <FeatherIcon icon="activity" />} key="changelog">
        <NavLink onClick={toggleCollapsed} to={`${path}/changelog`}>
          Changelog
          <span className="badge badge-primary menuItem">{versions[0].version}</span>
        </NavLink>
      </Menu.Item>
      */}
      {!topMenu && <p className="sidebar-nav-title">Operations</p>}
      <SubMenu key="email" icon={!topMenu && <FeatherIcon icon="mail" />} title="Employees">
      <Menu.Item key="dataTable">
          <NavLink onClick={toggleCollapsed} to={`${path}/employees/employeelist`}>
            Employee list
          </NavLink>
        </Menu.Item>
        <Menu.Item key="supervisions">
          <NavLink onClick={toggleCollapsed} to={`${path}/email/single/1585118055048`}>
            Supervisions
          </NavLink>
        </Menu.Item>
        <Menu.Item key="spotchecks">
          <NavLink onClick={toggleCollapsed} to={`${path}/email/single/1585118055048`}>
            Spot-check
          </NavLink>
        </Menu.Item>
        <Menu.Item key="appraisals">
          <NavLink onClick={toggleCollapsed} to={`${path}/email/single/1585118055048`}>
            Appraisals
          </NavLink>
        </Menu.Item>
        <Menu.Item key="idexpiry">
          <NavLink onClick={toggleCollapsed} to={`${path}/email/single/1585118055048`}>
            ID Expiry
          </NavLink>
        </Menu.Item>
        <Menu.Item key="employeemeetings">
          <NavLink onClick={toggleCollapsed} to={`${path}/email/single/1585118055048`}>
            Employee Meetings
          </NavLink>
        </Menu.Item>
        <Menu.Item key="rotas">
          <NavLink onClick={toggleCollapsed} to={`${path}/email/single/1585118055048`}>
            Rotas
          </NavLink>
        </Menu.Item>
        <Menu.Item key="leaverequests">
          <NavLink onClick={toggleCollapsed} to={`${path}/email/single/1585118055048`}>
            Leave Requests
          </NavLink>
        </Menu.Item>
        <Menu.Item key="timesheets">
          <NavLink onClick={toggleCollapsed} to={`${path}/email/single/1585118055048`}>
            Timesheets
          </NavLink>
        </Menu.Item>
      </SubMenu>
      {/*
      <Menu.Item icon={!topMenu && <FeatherIcon icon="message-square" />} key="chat">
        <NavLink onClick={toggleCollapsed} to={`${path}/main/chat/private/rofiq@gmail.com`}>
          Chat
        </NavLink>
      </Menu.Item>
      <SubMenu key="ecommerce" icon={!topMenu && <FeatherIcon icon="shopping-cart" />} title="eCommerce">
        <Menu.Item key="products">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/products`}>
            Products
          </NavLink>
        </Menu.Item>
        <Menu.Item key="productDetails">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/productDetails/1`}>
            Product detail
          </NavLink>
        </Menu.Item>

        <Menu.Item key="add-product">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/add-product`}>
            Product Add
          </NavLink>
        </Menu.Item>

        <Menu.Item key="edit-product">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/edit-product`}>
            Product Edit
          </NavLink>
        </Menu.Item>
        <Menu.Item key="cart">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/cart`}>
            Cart
          </NavLink>
        </Menu.Item>
        <Menu.Item key="orders">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/orders`}>
            Orders
          </NavLink>
        </Menu.Item>
        <Menu.Item key="sellers">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/sellers`}>
            Sellers
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Invoice">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/Invoice`}>
            Invoices
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="profile" icon={!topMenu && <FeatherIcon icon="aperture" />} title="Social App">
        <Menu.Item key="myProfile">
          <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/overview`}>
            My Profile
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="project" icon={!topMenu && <FeatherIcon icon="target" />} title="Project">
        <Menu.Item key="view">
          <NavLink onClick={toggleCollapsed} to={`${path}/project/view/grid`}>
            Project Grid
          </NavLink>
        </Menu.Item>
        <Menu.Item key="views">
          <NavLink onClick={toggleCollapsed} to={`${path}/project/view/list`}>
            Project List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="ProjectCreate">
          <NavLink onClick={toggleCollapsed} to={`${path}/project/create`}>
            Create Project
          </NavLink>
        </Menu.Item>
        <Menu.Item key="projectDetails">
          <NavLink onClick={toggleCollapsed} to={`${path}/project/projectDetails/1`}>
            Project Details
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item icon={!topMenu && <FeatherIcon icon="calendar" />} key="calendar">
        <NavLink onClick={toggleCollapsed} to={`${path}/app/calendar/month`}>
          Calendar
        </NavLink>
      </Menu.Item>
      */}
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
       { /*
        <Menu.Item key="grid-group">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/grid-group`}>
            Users Group
          </NavLink>
        </Menu.Item>
        <Menu.Item key="addUser">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/add-user/info`}>
            Add User
          </NavLink>
        </Menu.Item>
        <Menu.Item key="dataTable">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/dataTable`}>
            Users Table
          </NavLink>
        </Menu.Item>
        */}
      </SubMenu>
      <SubMenu key="tasks" icon={!topMenu && <FeatherIcon icon="user-plus" />} title="Tasks">
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
        {/*
        <Menu.Item key="addNew">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/addNew`}>
            Contact Create
          </NavLink>
        </Menu.Item>
        */}
      </SubMenu>
      <SubMenu key="events" icon={!topMenu && <FeatherIcon icon="user-plus" />} title="Events">
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

      <SubMenu key="finance" icon={!topMenu && <FeatherIcon icon="user-plus" />} title="Finance">
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
{/*
      <Menu.Item icon={!topMenu && <FeatherIcon icon="file-text" />} key="note">
        <NavLink onClick={toggleCollapsed} to={`${path}/app/note/all`}>
          Note
        </NavLink>
      </Menu.Item>

      <Menu.Item icon={!topMenu && <FeatherIcon icon="check-square" />} key="to-do">
        <NavLink onClick={toggleCollapsed} to={`${path}/app/to-do/`}>
          To Do
        </NavLink>
      </Menu.Item>
*/}
      <Menu.Item icon={!topMenu && <FeatherIcon icon="file" />} key="fileManager">
        <NavLink onClick={toggleCollapsed} to={`${path}/app/fileManager`}>
          Documents
        </NavLink>
      </Menu.Item> 
{/*
      {!topMenu && <p className="sidebar-nav-title">Features</p>}
    

      <SubMenu key="components" icon={!topMenu && <FeatherIcon icon="layers" />} title="UI Elements">
        <Menu.Item key="alerts">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/alerts`}>
            Alerts
          </NavLink>
        </Menu.Item>
        <Menu.Item key="auto-complete">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/auto-complete`}>
            AutoComplete
          </NavLink>
        </Menu.Item>
        <Menu.Item key="avatar">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/avatar`}>
            Avatar
          </NavLink>
        </Menu.Item>
        <Menu.Item key="badge">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/badge`}>
            Badge
          </NavLink>
        </Menu.Item>
        <Menu.Item key="breadcrumb">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/breadcrumb`}>
            Breadcrumb
          </NavLink>
        </Menu.Item>
        <Menu.Item key="button">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/button`}>
            Button
          </NavLink>
        </Menu.Item>
        <Menu.Item key="calendar">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/calendar`}>
            Calendar
          </NavLink>
        </Menu.Item>
        <Menu.Item key="cards">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/cards`}>
            Cards
          </NavLink>
        </Menu.Item>
        <Menu.Item key="carousel">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/carousel`}>
            Carousel
          </NavLink>
        </Menu.Item>
        <Menu.Item key="cascader">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/cascader`}>
            Cascader
          </NavLink>
        </Menu.Item>
        <Menu.Item key="checkbox">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/checkbox`}>
            Checkbox
          </NavLink>
        </Menu.Item>
        <Menu.Item key="collapse">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/collapse`}>
            Collapse
          </NavLink>
        </Menu.Item>
        <Menu.Item key="comments">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/comments`}>
            Comments
          </NavLink>
        </Menu.Item>
        <Menu.Item key="base">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/base`}>
            Dashboard Base
          </NavLink>
        </Menu.Item>
        <Menu.Item key="date-picker">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/date-picker`}>
            DatePicker
          </NavLink>
        </Menu.Item>
        <Menu.Item key="drag">
          <NavLink to="/admin/components/drag">Drag & Drop</NavLink>
        </Menu.Item>
        <Menu.Item key="drawer">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/drawer`}>
            Drawer
          </NavLink>
        </Menu.Item>
        <Menu.Item key="dropdown">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/dropdown`}>
            Dropdown
          </NavLink>
        </Menu.Item>
        <Menu.Item key="empty">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/empty`}>
            Empty
          </NavLink>
        </Menu.Item>
        <Menu.Item key="form">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/form`}>
            Form
          </NavLink>
        </Menu.Item>
        <Menu.Item key="grid">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/grid`}>
            Grid
          </NavLink>
        </Menu.Item>
        <Menu.Item key="input">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/input`}>
            Input
          </NavLink>
        </Menu.Item>
        <Menu.Item key="list">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/list`}>
            List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="menu">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/menu`}>
            Menu
          </NavLink>
        </Menu.Item>
        <Menu.Item key="message">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/message`}>
            Message
          </NavLink>
        </Menu.Item>
        <Menu.Item key="modals">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/modals`}>
            Modals
          </NavLink>
        </Menu.Item>
        <Menu.Item key="notification">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/notification`}>
            Notification
          </NavLink>
        </Menu.Item>
        <Menu.Item key="page-headers">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/page-headers`}>
            Page Headers
          </NavLink>
        </Menu.Item>
        <Menu.Item key="pagination">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/pagination`}>
            Paginations
          </NavLink>
        </Menu.Item>
        <Menu.Item key="confirme">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/confirm`}>
            Popconfirme
          </NavLink>
        </Menu.Item>
        <Menu.Item key="popover">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/popover`}>
            Popover
          </NavLink>
        </Menu.Item>
        <Menu.Item key="progress">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/progress`}>
            Progress
          </NavLink>
        </Menu.Item>
        <Menu.Item key="radio">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/radio`}>
            Radio
          </NavLink>
        </Menu.Item>
        <Menu.Item key="rate">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/rate`}>
            Rate
          </NavLink>
        </Menu.Item>
        <Menu.Item key="result">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/result`}>
            Result
          </NavLink>
        </Menu.Item>
        <Menu.Item key="select">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/select`}>
            Select
          </NavLink>
        </Menu.Item>
        <Menu.Item key="skeleton">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/skeleton`}>
            Skeleton
          </NavLink>
        </Menu.Item>
        <Menu.Item key="slider">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/slider`}>
            Slider
          </NavLink>
        </Menu.Item>
        <Menu.Item key="spiner">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/spiner`}>
            Spiner
          </NavLink>
        </Menu.Item>
        <Menu.Item key="statistic">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/statistic`}>
            Statistic
          </NavLink>
        </Menu.Item>
        <Menu.Item key="steps">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/steps`}>
            Steps
          </NavLink>
        </Menu.Item>
        <Menu.Item key="switch">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/switch`}>
            Switch
          </NavLink>
        </Menu.Item>
        <Menu.Item key="tabs">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/tabs`}>
            Tabs
          </NavLink>
        </Menu.Item>
        <Menu.Item key="tags">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/tags`}>
            Tags
          </NavLink>
        </Menu.Item>
        <Menu.Item key="timeline">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/timeline`}>
            Timeline
            <span className="badge badge-success">New</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="timepicker">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/timepicker`}>
            Timepicker
          </NavLink>
        </Menu.Item>
        <Menu.Item key="tree-select">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/tree-select`}>
            TreeSelect
          </NavLink>
        </Menu.Item>
        <Menu.Item key="upload">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/upload`}>
            Upload
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="charts" icon={!topMenu && <FeatherIcon icon="bar-chart-2" />} title="Charts">
        <Menu.Item key="chartjs">
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/chartjs`}>
            Chart Js
          </NavLink>
        </Menu.Item>
        <Menu.Item key="google-chart">
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/google-chart`}>
            Google Charts
          </NavLink>
        </Menu.Item>

        <SubMenu key="recharts" icon={!topMenu && <FeatherIcon icon="bar-chart" />} title="Recharts">
          <Menu.Item key="bar">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/bar`}>
              Bar Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="area">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/area`}>
              Area Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="composed">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/composed`}>
              Composed Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="line">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/line`}>
              Line Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="pie">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/pie`}>
              Pie Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="radar">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/radar`}>
              Radar Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="radial">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/radial`}>
              Radial Charts
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="peity">
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/peity`}>
            Peity Charts
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="disc" />} key="forms">
        <NavLink onClick={toggleCollapsed} to={`${path}/forms`}>
          Forms
        </NavLink>
      </Menu.Item>
      <SubMenu key="tables" icon={!topMenu && <FeatherIcon icon="cpu" />} title="Table">
        <Menu.Item key="basic">
          <NavLink onClick={toggleCollapsed} to={`${path}/tables/basic`}>
            Basic Table
          </NavLink>
        </Menu.Item>
        <Menu.Item key="dataTable">
          <NavLink onClick={toggleCollapsed} to={`${path}/tables/dataTable`}>
            Data Table
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="widgets" icon={!topMenu && <FeatherIcon icon="server" />} title="Widgets">
        <Menu.Item key="chart">
          <NavLink onClick={toggleCollapsed} to={`${path}/widgets/chart`}>
            Chart
          </NavLink>
        </Menu.Item>
        <Menu.Item key="card">
          <NavLink onClick={toggleCollapsed} to={`${path}/widgets/card`}>
            Card
          </NavLink>
        </Menu.Item>
        <Menu.Item key="mixed">
          <NavLink onClick={toggleCollapsed} to={`${path}/widgets/mixed`}>
            Mixed
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="wizards" icon={!topMenu && <FeatherIcon icon="square" />} title="Wizards">
        <Menu.Item key="one">
          <NavLink onClick={toggleCollapsed} to={`${path}/wizards/one`}>
            Wizard 1
          </NavLink>
        </Menu.Item>
        <Menu.Item key="two">
          <NavLink onClick={toggleCollapsed} to={`${path}/wizards/two`}>
            Wizard 2
          </NavLink>
        </Menu.Item>
        <Menu.Item key="three">
          <NavLink onClick={toggleCollapsed} to={`${path}/wizards/three`}>
            Wizard 3
          </NavLink>
        </Menu.Item>
        <Menu.Item key="four">
          <NavLink onClick={toggleCollapsed} to={`${path}/wizards/four`}>
            Wizard 4
          </NavLink>
        </Menu.Item>
        <Menu.Item key="five">
          <NavLink onClick={toggleCollapsed} to={`${path}/wizards/five`}>
            Wizard 5
          </NavLink>
        </Menu.Item>
        <Menu.Item key="six">
          <NavLink onClick={toggleCollapsed} to={`${path}/wizards/six`}>
            Wizard 6
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="icons" icon={!topMenu && <FeatherIcon icon="grid" />} title="Icons">
        <Menu.Item key="feathers">
          <NavLink onClick={toggleCollapsed} to={`${path}/icons/feathers`}>
            Feather icons (svg)
          </NavLink>
        </Menu.Item>
        <Menu.Item key="font-awesome">
          <NavLink onClick={toggleCollapsed} to={`${path}/icons/font-awesome`}>
            Font Awesome
          </NavLink>
        </Menu.Item>
        <Menu.Item key="antd">
          <NavLink onClick={toggleCollapsed} to={`${path}/icons/antd`}>
            Ant Design icons
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="edit" />} key="editor">
        <NavLink onClick={toggleCollapsed} to={`${path}/editor`}>
          Editor
        </NavLink>
      </Menu.Item>
      <SubMenu key="maps" icon={!topMenu && <FeatherIcon icon="map" />} title="Maps">
        <Menu.Item key="google">
          <NavLink onClick={toggleCollapsed} to={`${path}/maps/google`}>
            Google Maps
          </NavLink>
        </Menu.Item>
        <Menu.Item key="leaflet">
          <NavLink onClick={toggleCollapsed} to={`${path}/maps/leaflet`}>
            Leaflet Maps
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Vector">
          <NavLink onClick={toggleCollapsed} to={`${path}/maps/Vector`}>
            Simple Map
          </NavLink>
        </Menu.Item>
      </SubMenu>
      {!topMenu && <p className="sidebar-nav-title">Pages</p>}

      <Menu.Item icon={!topMenu && <FeatherIcon icon="settings" />} key="settings">
        <NavLink onClick={toggleCollapsed} to={`${path}/settings`}>
          Settings
        </NavLink>
      </Menu.Item>

      <SubMenu key="gallery" icon={!topMenu && <FeatherIcon icon="image" />} title="Gallery">
        <Menu.Item key="one">
          <NavLink onClick={toggleCollapsed} to={`${path}/gallery/one`}>
            Gallery 1
          </NavLink>
        </Menu.Item>
        <Menu.Item key="two">
          <NavLink onClick={toggleCollapsed} to={`${path}/gallery/two`}>
            Gallery 2
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="dollar-sign" />} key="pricing">
        <NavLink onClick={toggleCollapsed} to={`${path}/pricing`}>
          Pricing
        </NavLink>
      </Menu.Item>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="cast" />} key="banners">
        <NavLink onClick={toggleCollapsed} to={`${path}/banners`}>
          Banners
          <span className="badge badge-success">New</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="book-open" />} key="testimonials">
        <NavLink onClick={toggleCollapsed} to={`${path}/testimonials`}>
          Testimonials
          <span className="badge badge-success">New</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="help-circle" />} key="faq">
        <NavLink onClick={toggleCollapsed} to={`${path}/faq`}>
          FAQs
        </NavLink>
      </Menu.Item>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="search" />} key="search">
        <NavLink onClick={toggleCollapsed} to={`${path}/search`}>
          Search Results
        </NavLink>
      </Menu.Item>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="circle" />} key="starter">
        <NavLink onClick={toggleCollapsed} to={`${path}/starter`}>
          Blank Page
        </NavLink>
      </Menu.Item>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="airplay" />} key="maintenance">
        <NavLink onClick={toggleCollapsed} to={`${path}/maintenance`}>
          Maintenance
        </NavLink>
      </Menu.Item>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="info" />} key="404">
        <NavLink onClick={toggleCollapsed} to={`${path}/404`}>
          404
        </NavLink>
      </Menu.Item>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="clock" />} key="comingSoon">
        <NavLink onClick={toggleCollapsed} to={`${path}/comingSoon`}>
          Coming Soon
        </NavLink>
      </Menu.Item>
      */}
    </Menu>

  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
  events: propTypes.object,
};

export default MenuItems;
