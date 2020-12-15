import React from 'react';
import { Row, Col, message, Tooltip } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { EllipsisOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { DropdownStyle, DropdownIconStyleWrapper } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Dropdowns = () => {
  function handleButtonClick() {
    message.info('Click on left button.');
  }

  return (
    <DropdownStyle>
      <PageHeader
        ghost
        title="Dropdown"
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
          <Col md={12} xs={24}>
            <Cards title="Basic Dropdown" caption="The simplest use of Steps">
              <Dropdown placement="bottomLeft">
                <Link to="#">Hover me</Link>
              </Dropdown>
            </Cards>
            <Cards title="Event menu " caption="The simplest use of Dropdown">
              <Dropdown action={['hover']} placement="bottomLeft">
                <Link to="#">hover me </Link>
              </Dropdown>
              <Dropdown action={['click']} placement="bottomCenter">
                <Link to="#">click </Link>
              </Dropdown>
              <Dropdown action={['contextMenu']} placement="bottomRight">
                <Link to="#">context</Link>
              </Dropdown>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Placement" caption="The simplest use of Dropdown">
              <Dropdown placement="bottomLeft">
                <Button className="btn-outlined" size="small" outlined type="light">
                  Bottom Left
                </Button>
              </Dropdown>
              <Dropdown placement="bottomCenter">
                <Button className="btn-outlined" size="small" outlined type="light">
                  Bottom Center
                </Button>
              </Dropdown>
              <Dropdown placement="bottomRight">
                <Button className="btn-outlined" size="small" outlined type="light">
                  Bottom Right
                </Button>
              </Dropdown>
              <br />
              <Dropdown placement="topLeft">
                <Button className="btn-outlined" size="small" outlined type="light">
                  Top Left
                </Button>
              </Dropdown>
              <Dropdown placement="topCenter">
                <Button className="btn-outlined" size="small" outlined type="light">
                  Top Center
                </Button>
              </Dropdown>
              <Dropdown placement="topRight">
                <Button className="btn-outlined" size="small" outlined type="light">
                  Top Right
                </Button>
              </Dropdown>
            </Cards>
            <Cards title="Button with dropdown menu" caption="The simplest use of Dropdown">
              <DropdownIconStyleWrapper>
                <Button onClick={handleButtonClick} className="btn-outlined" size="default" outlined type="light">
                  Bottom Left Click
                  <Dropdown placement="bottomLeft" action={['hover']}>
                    <EllipsisOutlined />
                  </Dropdown>
                </Button>

                <Button className="btn-outlined" outlined type="light">
                  Bottom Right hover
                  <Dropdown placement="bottomRight" title="with title">
                    <UserOutlined />
                  </Dropdown>
                </Button>
                <Button className="btn-outlined" outlined type="light">
                  Top Left hover
                  <Dropdown placement="topLeft">
                    <EllipsisOutlined />
                  </Dropdown>
                </Button>
                <Button className="btn-outlined" outlined type="light">
                  Top Right hover
                  <Dropdown placement="topRight">
                    <EllipsisOutlined />
                  </Dropdown>
                </Button>
                <Button className="btn-outlined" outlined type="error">
                  <Tooltip title="tooltip" key="leftButton">
                    Tooltip
                  </Tooltip>
                  <Dropdown placement="bottomLeft" size="small">
                    <EllipsisOutlined />
                  </Dropdown>
                </Button>
                <Button className="btn-outlined" outlined type="warning">
                  Warning
                  <Dropdown placement="bottomLeft" size="small">
                    <EllipsisOutlined />
                  </Dropdown>
                </Button>
                <Button className="btn-outlined" outlined type="light">
                  Info
                  <Dropdown placement="bottomLeft" size="small">
                    <DownOutlined />
                  </Dropdown>
                </Button>
              </DropdownIconStyleWrapper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </DropdownStyle>
  );
};

export default Dropdowns;
