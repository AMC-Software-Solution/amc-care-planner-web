import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { DropdownStyle } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Popover } from '../../components/popup/popup';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Popovers = () => {
  return (
    <DropdownStyle>
      <PageHeader
        ghost
        title="Popovers"
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
          <Col md={12} sm={12} xs={24}>
            <Cards title="Basic Popover" caption="The simplest use of Popover">
              <Popover placement="bottomLeft">
                <NavLink to="#">hover me </NavLink>
              </Popover>
            </Cards>
            <Cards title="Event menu " caption="The simplest use of Popover">
              <Popover action="hover" placement="bottomLeft">
                <Button type="primary">hover</Button>
              </Popover>
              <Popover action="click" placement="bottom">
                <Button type="primary">click</Button>
              </Popover>
              <Popover action="contextMenu" placement="bottomRight">
                <Button type="primary">context</Button>
              </Popover>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Placement" caption="The simplest use of Popover">
              <Popover placement="bottomLeft">
                <Button type="primary">bottomLeft</Button>
              </Popover>
              <Popover placement="bottom">
                <Button type="primary">bottomCenter</Button>
              </Popover>
              <Popover placement="bottomRight">
                <Button type="primary">bottomRight</Button>
              </Popover>
              <br />
              <Popover placement="topLeft">
                <Button type="primary">topLeft</Button>
              </Popover>
              <Popover placement="top">
                <Button type="primary">topCenter</Button>
              </Popover>
              <Popover placement="topRight">
                <Button type="primary">topRight</Button>
              </Popover>
            </Cards>
          </Col>
        </Row>
      </Main>
    </DropdownStyle>
  );
};

export default Popovers;
