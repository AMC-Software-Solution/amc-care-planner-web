import React from 'react';
import { Row, Col, Statistic } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { LikeOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { Button } from '../../components/buttons/buttons';

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
const { Countdown } = Statistic;

const Statistics = () => {
  const onFinish = () => {
    // console.log('finished!');
  };

  return (
    <>
      <PageHeader
        ghost
        title="Statistics"
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
            <Cards title="Basic" caption="The simplest use of Statistic">
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Active Users" value={112893} />
                </Col>
                <Col span={12}>
                  <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                  <Button style={{ marginTop: 16, fontSize: 14 }} size="large" type="primary" raised>
                    Recharge
                  </Button>
                </Col>
              </Row>
            </Cards>
            <Cards title="In Card" caption="The simplest use of Statistic">
              <Row gutter={15}>
                <Col md={12}>
                  <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#20C997' }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Col>
                <Col md={12}>
                  <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#FF4D4F' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Unit" caption="The simplest use of Statistic">
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                </Col>
                <Col span={12}>
                  <Statistic title="Unmerged" value={93} suffix="/ 100" />
                </Col>
              </Row>
            </Cards>
            <Cards title="Countdown" caption="The simplest use of Statistic">
              <Row gutter={15}>
                <Col md={12}>
                  <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
                </Col>
                <Col md={12}>
                  <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Statistics;
