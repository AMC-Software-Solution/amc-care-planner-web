import React from 'react';
import { Row, Col, Timeline } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { TimeLinePointerIconWrap, TimelineNormalWrap, TimelineBoxWrap } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import {
  SwRocket,
  SwShieldCheck,
  SwPenTool,
  SwNotification,
  SwUsers,
  SwLayers,
  SwPicture,
  SwClock,
  SwEllipse,
} from '../../components/utilities/icons';

const Timelines = () => {
  return (
    <>
      <PageHeader
        title="Timelines"
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
          <Col lg={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of Timelines">
              <TimeLinePointerIconWrap>
                <Timeline>
                  <Timeline.Item className="primary" dot={<SwRocket size={20} color="#5F63F2" />}>
                    <h3>02:30 PM</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="info" dot={<SwShieldCheck size={20} color="#2C99FF" />}>
                    <h3>02:30 PM</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="warning" dot={<SwPenTool size={24} color="#fa8b0c" />}>
                    <h3>02:30 PM</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="pink" dot={<SwNotification size={17} color="#FF69A5" />}>
                    <h3>02:30 PM</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="success" dot={<SwUsers size={21} color="#20c997" />}>
                    <h3>02:30 PM</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="danger" dot={<SwLayers size={21} color="#ff4d4f" />}>
                    <h3>02:30 PM</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="primary" dot={<SwPicture size={21} color="#5f63f2" />}>
                    <h3>02:30 PM</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                  <Timeline.Item className="pink" dot={<SwClock size={21} color="#ff69a5" />}>
                    <h3>02:30 PM</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span className="tags">HTML,CSS,VueJS</span>
                  </Timeline.Item>
                </Timeline>
              </TimeLinePointerIconWrap>
            </Cards>
            <Cards title="Basic" caption="The simplest use of Timelines">
              <TimelineNormalWrap>
                <Timeline>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
              </TimelineNormalWrap>
            </Cards>
            <TimelineNormalWrap>
              <Cards title="Alternate" caption="The simplest use of Timelines">
                <Timeline mode="alternate">
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </Timeline.Item>
                  <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    Technical testing 2015-09-01
                  </Timeline.Item>
                </Timeline>
              </Cards>
            </TimelineNormalWrap>
            <TimelineNormalWrap>
              <Cards title="Custom" caption="The simplest use of Timelines">
                <Timeline>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="red">
                    Technical testing 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
              </Cards>
            </TimelineNormalWrap>
          </Col>
          <Col lg={12} xs={24}>
            <TimelineNormalWrap>
              <Cards title="Timeline 1" caption="The simplest use of Timelines">
                <Timeline>
                  <Timeline.Item className="active" dot={<SwEllipse size={10} color="#ADB4D2" />}>
                    <div className="timeline-content-inner align-center-v justify-content-between">
                      <div className="timeline-content-text">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      </div>
                      <span className="timeline-content-time">6:00 am</span>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item dot={<SwEllipse size={10} color="#5F63F2" />}>
                    <div className="timeline-content-inner align-center-v justify-content-between">
                      <div className="timeline-content-text">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      </div>
                      <span className="timeline-content-time">1 hrs</span>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item dot={<SwEllipse size={10} color="#2C99FF" />}>
                    <div className="timeline-content-inner align-center-v justify-content-between">
                      <div className="timeline-content-text">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      </div>
                      <span className="timeline-content-time">2 days</span>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item dot={<SwEllipse size={10} color="#20C997" />}>
                    <div className="timeline-content-inner align-center-v justify-content-between">
                      <div className="timeline-content-text">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      </div>
                      <span className="timeline-content-time">3 weeks</span>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item dot={<SwEllipse size={10} color="#FA8B0C" />}>
                    <div className="timeline-content-inner align-center-v justify-content-between">
                      <div className="timeline-content-text">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                      </div>
                      <span className="timeline-content-time">2 months</span>
                    </div>
                  </Timeline.Item>
                </Timeline>
              </Cards>
            </TimelineNormalWrap>

            <TimelineBoxWrap>
              <Cards title="Timeline 2" caption="The simplest use of Timelines">
                <Timeline mode="alternate">
                  <Timeline.Item dot={<SwEllipse size={10} color="#ADB4D2" />}>
                    <h2>10:00 AM</h2>
                    <div className="content-box">
                      <p>
                        Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the,
                      </p>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item dot={<SwEllipse size={10} color="#5F63F2" />}>
                    <h2>10:00 AM</h2>
                    <div className="content-box">
                      <p>
                        Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the,
                      </p>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item dot={<SwEllipse size={10} color="#2C99FF" />}>
                    <h2>10:00 AM</h2>
                    <div className="content-box">
                      <p>
                        Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the,
                      </p>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item dot={<SwEllipse size={10} color="#20C997" />}>
                    <h2>10:00 AM</h2>
                    <div className="content-box">
                      <p>
                        Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the,
                      </p>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item dot={<SwEllipse size={10} color="#FA8B0C" />}>
                    <h2>10:00 AM</h2>
                    <div className="content-box">
                      <p>
                        Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the,
                      </p>
                    </div>
                  </Timeline.Item>
                </Timeline>
              </Cards>
            </TimelineBoxWrap>
            <TimelineNormalWrap>
              <Cards title="Color" caption="The simplest use of Timelines">
                <Timeline>
                  <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item color="red">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                  </Timeline.Item>
                  <Timeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </Timeline.Item>
                  <Timeline.Item color="gray">
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </Timeline.Item>
                  <Timeline.Item color="gray">
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </Timeline.Item>
                </Timeline>
              </Cards>
            </TimelineNormalWrap>

            <TimelineNormalWrap>
              <Cards title="Right alternate" caption="The simplest use of Timelines">
                <Timeline mode="right">
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="red">
                    Technical testing 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
              </Cards>
            </TimelineNormalWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Timelines;
