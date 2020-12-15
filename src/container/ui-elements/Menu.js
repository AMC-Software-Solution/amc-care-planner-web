import React, { useState } from 'react';
import { Row, Col, Menu } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const { SubMenu } = Menu;
const Menus = () => {
  const [state, setState] = useState({
    current: 'mail',
  });

  const handleClick = e => {
    setState({
      current: e.key,
    });
  };

  const onVerticleHandleClick = () => {
    // console.log('click ', e);
  };

  return (
    <>
      <PageHeader
        ghost
        title="Menu"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Top Navigation">
              <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                  Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                  Navigation Two
                </Menu.Item>
                <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
                  <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                  <Link to="#" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                  </Link>
                </Menu.Item>
              </Menu>
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Vertical Menu">
              <Menu onClick={onVerticleHandleClick} style={{ width: 256 }} mode="vertical">
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                  <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <AppstoreOutlined />
                      <span>Navigation Two</span>
                    </span>
                  }
                >
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </Menu>
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Current Sub Menu">
              <Menu
                onClick={onVerticleHandleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <MailOutlined />
                      <span>Navigation One</span>
                    </span>
                  }
                >
                  <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <AppstoreOutlined />
                      <span>Navigation Two</span>
                    </span>
                  }
                >
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <SettingOutlined />
                      <span>Navigation Three</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </Menu>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Menus;
