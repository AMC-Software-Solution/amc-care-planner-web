import React, { useState } from 'react';
import { Row, Col, Badge, Switch } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ClockCircleOutlined, BellOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {
  BadgeWraperStyle,
  BadgeStandAloneStyle,
  BadgeOverflowStyle,
  BadgeRedStyle,
  BadgeDynamicStyle,
} from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BtnGroup, Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

const Badges = () => {
  const [state, setState] = useState({
    count: 5,
    show: true,
  });

  const increase = () => {
    const count = state.count + 1;
    setState({ ...state, count });
  };

  const decline = () => {
    let count = state.count - 1;
    if (count < 0) {
      count = 0;
    }
    setState({ ...state, count });
  };

  const onChange = show => {
    setState({ ...state, show });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Badge"
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
            <Cards title="Basic">
              <BadgeWraperStyle>
                <Badge count={5}>
                  <NavLink to="#" className="head-example" />
                </Badge>
                <Badge count={0} showZero>
                  <NavLink to="#" className="head-example" />
                </Badge>
                <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
                  <NavLink to="#" className="head-example" />
                </Badge>
              </BadgeWraperStyle>
            </Cards>

            <Cards title="Overflow Count">
              <BadgeWraperStyle>
                <BadgeOverflowStyle>
                  <Badge count={99}>
                    <NavLink to="#" className="head-example" />
                  </Badge>
                  <Badge count={100}>
                    <NavLink to="#" className="head-example" />
                  </Badge>
                  <Badge count={99} overflowCount={10}>
                    <NavLink to="#" className="head-example" />
                  </Badge>
                  <Badge count={1000} overflowCount={999}>
                    <NavLink to="#" className="head-example" />
                  </Badge>
                </BadgeOverflowStyle>
              </BadgeWraperStyle>
            </Cards>

            <Cards title="Clickable">
              <BadgeWraperStyle>
                <Link to="#">
                  <Badge count={5}>
                    <span className="head-example" />
                  </Badge>
                </Link>
              </BadgeWraperStyle>
            </Cards>

            <Cards title="Status">
              <BadgeWraperStyle>
                <div style={{ marginBottom: 10 }}>
                  {colors.map(color => (
                    <Badge key={color} color={color} />
                  ))}
                </div>
                <div>
                  {colors.map(color => (
                    <div key={color}>
                      <Badge color={color} text={color} />
                    </div>
                  ))}
                </div>
              </BadgeWraperStyle>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Standalone">
              <BadgeWraperStyle>
                <BadgeStandAloneStyle>
                  <Badge count={25} />
                  <Badge
                    count={4}
                    style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
                  />
                  <Badge count={109} style={{ backgroundColor: '#20C997' }} />
                </BadgeStandAloneStyle>
              </BadgeWraperStyle>
            </Cards>

            <Cards title="Red badge">
              <BadgeWraperStyle>
                <BadgeRedStyle>
                  <Badge dot>
                    <BellOutlined />
                  </Badge>
                  <Badge count={0} dot>
                    <BellOutlined />
                  </Badge>
                  <Badge dot>
                    <Link to="#">Link something</Link>
                  </Badge>
                </BadgeRedStyle>
              </BadgeWraperStyle>
            </Cards>

            <Cards title="Dynamic">
              <BadgeWraperStyle>
                <BadgeDynamicStyle>
                  <div className="badge-dynamic" style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Badge count={state.count}>
                      <Link to="#" className="head-example" />
                    </Badge>
                    <BtnGroup>
                      <Button onClick={decline}>
                        <MinusOutlined />
                      </Button>
                      <Button onClick={increase}>
                        <PlusOutlined />
                      </Button>
                    </BtnGroup>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '10' }}>
                    <Badge dot={state.show}>
                      <Link to="#" className="head-example" />
                    </Badge>
                    <Switch onChange={onChange} checked={state.show} />
                  </div>
                </BadgeDynamicStyle>
              </BadgeWraperStyle>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Badges;
