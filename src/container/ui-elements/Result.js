import React from 'react';
import { Row, Col, Result, Button, Typography } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { CloseCircleOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const { Paragraph, Text } = Typography;
const Results = () => {
  return (
    <>
      <PageHeader
        title="Results"
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
            <Cards title="Success" caption="The simplest use of Results">
              <Result
                status="success"
                title="Successfully Purchased Cloud Server ECS!"
                subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                style={{ padding: 0 }}
                extra={[
                  <Button type="primary" key="console">
                    Go Console
                  </Button>,
                  <Button key="buy">Buy Again</Button>,
                ]}
              />
            </Cards>
            <Cards title="Warning" caption="The simplest use of Results">
              <Result
                status="warning"
                title="There are some problems with your operation."
                style={{ padding: 0 }}
                extra={
                  <Button type="primary" key="console">
                    Go Console
                  </Button>
                }
              />
            </Cards>
            <Cards title="404" caption="The simplest use of Results">
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                style={{ padding: 0 }}
                extra={<Button type="primary">Back Home</Button>}
              />
            </Cards>
            <Cards title="Error" caption="The simplest use of Results">
              <Result
                status="error"
                title="Submission Failed"
                subTitle="Please check and modify the following information before resubmitting."
                style={{ padding: 0 }}
                extra={[
                  <Button type="primary" key="console">
                    Go Console
                  </Button>,
                  <Button key="buy">Buy Again</Button>,
                ]}
              >
                <div className="desc">
                  <Paragraph>
                    <Text
                      strong
                      style={{
                        fontSize: 16,
                      }}
                    >
                      The content you submitted has the following error:
                    </Text>
                  </Paragraph>
                  <Paragraph>
                    <CloseCircleOutlined style={{ color: 'red' }} /> Your account has been frozen
                    <NavLink to="#">Thaw immediately &gt;</NavLink>
                  </Paragraph>
                  <Paragraph>
                    <CloseCircleOutlined style={{ color: 'red' }} /> Your account is not yet eligible to apply{' '}
                    <NavLink to="#">Apply Unlock &gt;</NavLink>
                  </Paragraph>
                </div>
              </Result>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Info" caption="The simplest use of Results">
              <Result
                title="Your operation has been executed"
                style={{ padding: 0 }}
                extra={
                  <Button type="primary" key="console">
                    Go Console
                  </Button>
                }
              />
            </Cards>
            <Cards title="403" caption="The simplest use of Results">
              <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                style={{ padding: 0 }}
                extra={<Button type="primary">Back Home</Button>}
              />
            </Cards>
            <Cards title="500" caption="The simplest use of Results">
              <Result
                status="500"
                title="500"
                subTitle="Sorry, the server is wrong."
                style={{ padding: 0 }}
                extra={<Button type="primary">Back Home</Button>}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Results;
