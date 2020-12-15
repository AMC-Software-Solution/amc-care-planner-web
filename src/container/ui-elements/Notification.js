import React from 'react';
import { Row, Col, notification, Divider } from 'antd';
import FeatherIcon from 'feather-icons-react';
import {
  SmileOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, NotificationListWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Notifications = () => {
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        // console.log('Notification Clicked!');
      },
    });
  };

  const openNotification2 = () => {
    const args = {
      message: 'Notification Title',
      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      duration: 0,
    };
    notification.open(args);
  };

  const close = () => {
    // console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
  };

  const openNotification3 = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    });
  };

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  const openNotificationCustomIcon = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  const openNotificationCustomStyle = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      style: {
        width: 600,
        marginLeft: 335 - 600,
      },
    });
  };

  const openNotificationPlacement = placement => {
    notification.info({
      message: `Notification ${placement}`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Notifications"
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
        <Row gutter={15}>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of Notification">
              <Button type="primary" size="small" onClick={openNotification}>
                Open the notification box
              </Button>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards
              title="Duration after which the notification box is closed"
              caption="The simplest use of Notification"
            >
              <Button type="primary" size="small" onClick={openNotification2}>
                Open the notification box
              </Button>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Custom close button" caption="The simplest use of Notification">
              <Button type="primary" size="small" onClick={openNotification3}>
                Open the notification box
              </Button>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Notification with icon" caption="The simplest use of Notification">
              <NotificationListWrapper>
                <Button type="success" size="small" onClick={() => openNotificationWithIcon('success')}>
                  Success
                </Button>
                <Button type="info" size="small" onClick={() => openNotificationWithIcon('info')}>
                  Info
                </Button>
                <Button type="warning" size="small" onClick={() => openNotificationWithIcon('warning')}>
                  Warning
                </Button>
                <Button type="error" size="small" onClick={() => openNotificationWithIcon('error')}>
                  Error
                </Button>
              </NotificationListWrapper>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Notification with custom icon" caption="The simplest use of Notification">
              <Button type="primary" size="small" onClick={openNotificationCustomIcon}>
                Open the notification box
              </Button>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Notification with custom Style" caption="The simplest use of Notification">
              <Button type="primary" size="small" onClick={openNotificationCustomStyle}>
                Open the notification box
              </Button>
              ,
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Notification with placement" caption="The simplest use of Notification">
              <NotificationListWrapper>
                <Button type="primary" size="small" onClick={() => openNotificationPlacement('topLeft')}>
                  <RadiusUpleftOutlined />
                  topLeft
                </Button>
                <Button type="primary" size="small" onClick={() => openNotificationPlacement('topRight')}>
                  <RadiusUprightOutlined />
                  topRight
                </Button>
                <Divider />
                <Button type="primary" size="small" onClick={() => openNotificationPlacement('bottomLeft')}>
                  <RadiusBottomleftOutlined />
                  bottomLeft
                </Button>
                <Button type="primary" size="small" onClick={() => openNotificationPlacement('bottomRight')}>
                  <RadiusBottomrightOutlined />
                  bottomRight
                </Button>
              </NotificationListWrapper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Notifications;
