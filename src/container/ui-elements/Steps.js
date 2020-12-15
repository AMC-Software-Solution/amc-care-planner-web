import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { UserOutlined, SolutionOutlined, CreditCardOutlined, SmileOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Popover } from '../../components/popup/popup';
import { Steps, Step } from '../../components/steps/steps';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const customDot = (dot, { status, index }) => (
  <Popover
    placement="bottomLeft"
    content={
      <span className="span">
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const Stepess = () => {
  const [state, setState] = useState({
    current: 0,
    next: 0,
    prev: 0,
  });

  const { current } = state;

  const onChange = currentValue => {
    setState({ currentValue });
  };

  const next = currentValue => {
    setState({ ...state, next: currentValue });
  };

  const prev = currentValue => {
    setState({ ...state, prev: currentValue });
  };

  return (
    <>
      <PageHeader
        title="Steps"
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
            <Cards title="Basic Step" caption="The simplest use of Steps">
              <Steps size="small" current={1}>
                <Step title="Finished" />
                <Step title="In Progress" />
                <Step title="Waiting" />
              </Steps>
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="With Icon" caption="The simplest use of Steps">
              <Steps>
                <Step status="finish" title="Login" icon={<UserOutlined />} />
                <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
                <Step status="process" title="Pay" icon={<CreditCardOutlined />} />
                <Step status="wait" title="Done" icon={<SmileOutlined />} />
              </Steps>
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Switch Step" caption="The simplest use of Steps">
              <Steps
                isswitch
                steps={[
                  {
                    title: 'First',
                    content: 'First-content',
                  },
                  {
                    title: 'Second',
                    content: 'Second-content',
                  },

                  {
                    title: 'Last',
                    content: 'Last-content',
                  },
                ]}
                onNext={next}
                onPrev={prev}
              />
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Vertical mini version" caption="The simplest use of Steps">
              <Steps direction="vertical" size="small" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Error Status" caption="The simplest use of Steps">
              <Steps current={1} status="error">
                <Step title="Finished" description="This is a description" />
                <Step title="In Process" description="This is a description" />
                <Step title="Waiting" description="This is a description" />
              </Steps>
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Custom dot style" caption="The simplest use of Steps">
              <Steps current={1} progressDot={customDot}>
                <Step title="Finished" description="You can hover on the dot." />
                <Step title="In Progress" description="You can hover on the dot." />
                <Step title="Waiting" description="You can hover on the dot." />
                <Step title="Waiting" description="You can hover on the dot." />
              </Steps>
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Clickable" caption="The simplest use of Steps">
              <Steps current={current} onChange={onChange}>
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
              </Steps>

              <Divider />

              <Steps current={current} onChange={onChange} direction="vertical">
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
              </Steps>
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Navigation Steps" caption="The simplest use of Steps">
              <Steps navigation onChange={onChange}>
                <Step status="finish" title="Step 1" />
                <Step status="process" title="Step 2" />
                <Step status="wait" title="Step 3" />
              </Steps>
              <Steps navigation onChange={onChange}>
                <Step status="finish" title="finish 1" />
                <Step status="finish" title="finish 2" />
                <Step status="process" title="current process" />
                <Step status="wait" title="wait" disabled />
              </Steps>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Stepess;
