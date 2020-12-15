import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Col, Row } from 'antd';
import Heading from '../../../components/heading/heading';
import { ActivitiesWrapper } from '../style';

const Activities = () => {
  return (
    <ActivitiesWrapper>
      <div className="activity-block">
        <Row gutter={15}>
          <Col xxl={3} lg={5} md={4} sm={5} xs={24}>
            <div className="activity-dateMeta">
              <Heading as="h4">22</Heading>
              <span className="activity-month">December</span>
            </div>
          </Col>
          <Col xxl={21} lg={19} md={20} sm={19} xs={24}>
            <div className="activity-single d-flex">
              <div className="activity-single__figure">
                <span className="activity-icon bg-secondary">
                  <FeatherIcon icon="plus" size="12" />
                </span>
                <img style={{ width: '30px' }} src={require('../../../static/img/users/1.png')} alt="" />
              </div>
              <div className="activity-single__content">
                <Heading className="activity-title" as="h5">
                  Mumtahin <span>add new task</span> Dashboard Project
                </Heading>
                <p className="activity-timeMeta">3:30 PM</p>
              </div>
            </div>
            {/* End of .activity-single */}
            <div className="activity-single d-flex">
              <div className="activity-single__figure">
                <span className="activity-icon bg-primary">
                  <FeatherIcon icon="code" size="12" />
                </span>
                <img style={{ width: '30px' }} src={require('../../../static/img/users/1.png')} alt="" />
              </div>
              <div className="activity-single__content">
                <Heading className="activity-title" as="h5">
                  Mike Greene<span>pushed commit</span>#652364
                </Heading>
                <p className="activity-timeMeta">3:30 PM</p>
              </div>
            </div>
            {/* End of .activity-single */}
            <div className="activity-single d-flex">
              <div className="activity-single__figure">
                <span className="activity-icon bg-success">
                  <FeatherIcon icon="plus" size="12" />
                </span>
                <img style={{ width: '30px' }} src={require('../../../static/img/users/1.png')} alt="" />
              </div>
              <div className="activity-single__content">
                <Heading className="activity-title" as="h5">
                  Tomlinson<span>completed task</span>Invoice template
                </Heading>
                <p className="activity-timeMeta">3:30 PM</p>
              </div>
            </div>
            {/* End of .activity-single */}
          </Col>
        </Row>
      </div>
      {/* End of .activity-block */}
      <div className="activity-block">
        <Row gutter={15}>
          <Col xxl={3} lg={5} md={4} sm={5} xs={24}>
            <div className="activity-dateMeta">
              <Heading as="h4">22</Heading>
              <span className="activity-month">December</span>
            </div>
          </Col>
          <Col xxl={21} lg={19} md={20} sm={19} xs={24}>
            <div className="activity-single d-flex">
              <div className="activity-single__figure">
                <span className="activity-icon bg-secondary">
                  <FeatherIcon icon="user-plus" size="12" />
                </span>
                <img style={{ width: '30px' }} src={require('../../../static/img/users/1.png')} alt="" />
              </div>
              <div className="activity-single__content">
                <Heading className="activity-title" as="h5">
                  Mumtahin <span>add new task</span> Dashboard Project
                </Heading>
                <p className="activity-timeMeta">3:30 PM</p>
              </div>
            </div>
            {/* End of .activity-single */}
            <div className="activity-single d-flex">
              <div className="activity-single__figure">
                <span className="activity-icon bg-primary">
                  <FeatherIcon icon="code" size="12" />
                </span>
                <img style={{ width: '30px' }} src={require('../../../static/img/users/1.png')} alt="" />
              </div>
              <div className="activity-single__content">
                <Heading className="activity-title" as="h5">
                  Mike Greene<span>pushed commit</span>#652364
                </Heading>
                <p className="activity-timeMeta">3:30 PM</p>
              </div>
            </div>
            {/* End of .activity-single */}
            <div className="activity-single d-flex">
              <div className="activity-single__figure">
                <span className="activity-icon bg-success">
                  <FeatherIcon icon="upload" size="12" />
                </span>
                <img style={{ width: '30px' }} src={require('../../../static/img/users/1.png')} alt="" />
              </div>
              <div className="activity-single__content">
                <Heading className="activity-title" as="h5">
                  Tomlinson<span>completed task</span>Invoice template
                </Heading>
                <p className="activity-timeMeta">3:30 PM</p>
              </div>
            </div>
            {/* End of .activity-single */}
          </Col>
        </Row>
      </div>
      {/* End of .activity-block */}
    </ActivitiesWrapper>
  );
};

export default Activities;
