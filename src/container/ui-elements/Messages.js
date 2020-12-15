import React from 'react';
import { Row, Col, message, Space } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, MessageStyleWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Messages = () => {
  const info = () => {
    message.info('This is a normal message');
  };

  const success = () => {
    message.success('This is a success message');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const warning = () => {
    message.warning('This is a warning message');
  };

  const customSuccess = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
  };

  const loadingSuccess = () => {
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };

  return (
    <>
      <PageHeader
        ghost
        title="Message"
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
          <Col md={12} sm={24} xs={24}>
            <Cards title="Basic">
              <MessageStyleWrapper>
                <Button type="primary" size="large" raised onClick={info}>
                  Display normal message
                </Button>
              </MessageStyleWrapper>
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Customize">
              <MessageStyleWrapper>
                <Button className="btn-outlined" type="light" outlined size="large" onClick={customSuccess}>
                  Customized display duration
                </Button>
              </MessageStyleWrapper>
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Other types of message">
              <Space>
                <div className="message-button-list">
                  <Button className="btn-outlined" type="light" outlined size="large" onClick={success}>
                    Success
                  </Button>
                  <Button className="btn-outlined" type="light" outlined size="large" onClick={error}>
                    Error
                  </Button>
                  <Button className="btn-outlined" type="light" outlined size="large" onClick={warning}>
                    Warning
                  </Button>
                </div>
              </Space>
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Loading">
              <MessageStyleWrapper>
                <Button className="btn-outlined" type="light" outlined size="large" onClick={loadingSuccess}>
                  Display a loading indicator
                </Button>
              </MessageStyleWrapper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Messages;
