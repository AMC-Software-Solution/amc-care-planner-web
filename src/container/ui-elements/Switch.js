import React from 'react';
import { Row, Col, Switch } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Switches = () => {
  return (
    <>
      <PageHeader
        title="Switch"
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
            <Cards title="Basic" caption="The simplest use of Switch">
              <Switch defaultChecked />
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Size" caption="The simplest use of Switch">
              <Switch defaultChecked style={{ marginRight: 20 }} />
              <Switch defaultChecked size="small" />
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Text and Icon" caption="The simplest use of Switch">
              <div>
                <Switch checkedChildren="a" unCheckedChildren="b" defaultChecked />
                <br />
                <Switch checkedChildren="1" unCheckedChildren="0" />
                <br />
                <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
                <Switch defaultChecked />
              </div>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Loading" caption="The simplest use of Switch">
              <div>
                <Switch loading defaultChecked />
                <br />
                <Switch size="small" loading />
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Switches;
