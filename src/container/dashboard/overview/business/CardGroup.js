import React from 'react';
import { Row, Col, Progress } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Focard, RatioCard } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { ChartjsAreaChart } from '../../../../components/charts/chartjs';

import { chartLinearGradient } from '../../../../components/utilities/utilities';

const CardGroup = () => {
  return (
    <Row gutter={25}>
      <Col md={12}>
        <Focard>
          <div className="forcast-card-box">
            <Cards headless title="Net Profit">
              <div className="focard-details growth-downward">
                <Heading as="h1">$25.3k</Heading>
                <p className="focard-status">
                  <span className="focard-status__percentage">
                    <FeatherIcon icon="arrow-down" /> 25%
                  </span>
                  <span>Since last month</span>
                </p>
              </div>
              <ChartjsAreaChart
                id="netProfit"
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                datasets={[
                  {
                    data: [30, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                    borderColor: '#5F63F2',
                    borderWidth: 3,
                    fill: true,
                    pointHoverBackgroundColor: '#5F63F2',
                    pointHoverBorderWidth: 0,
                    pointHoverBorderColor: 'transparent',
                    backgroundColor: () =>
                      chartLinearGradient(document.getElementById('netProfit'), 80, {
                        start: '#5F63F212',
                        end: '#5F63F202',
                      }),
                  },
                ]}
                height={80}
              />
            </Cards>
          </div>
        </Focard>
      </Col>
      <Col md={12}>
        <Focard>
          <div className="forcast-card-box">
            <Cards headless title="Gross Profit">
              <div className="focard-details growth-upward">
                <Heading as="h1">$82.24k</Heading>
                <p className="focard-status">
                  <span className="focard-status__percentage">
                    <FeatherIcon icon="arrow-up" /> 25%
                  </span>
                  <span>Since last month</span>
                </p>
              </div>
              <ChartjsAreaChart
                id="grossProfit"
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                datasets={[
                  {
                    data: [30, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                    borderColor: '#20C997',
                    borderWidth: 3,
                    fill: true,
                    pointHoverBackgroundColor: '#20c997',
                    pointHoverBorderWidth: 0,
                    pointHoverBorderColor: 'transparent',
                    backgroundColor: () =>
                      chartLinearGradient(document.getElementById('grossProfit'), 80, {
                        start: '#20C99712',
                        end: '#20C99702',
                      }),
                  },
                ]}
                height={80}
              />
            </Cards>
          </div>
        </Focard>
      </Col>
      <Col md={12} sm={12} xs={24}>
        <RatioCard>
          <Cards headless title="Quick Ratio">
            <div className="ratio-content">
              <Heading as="h1">1.8</Heading>
              <Progress percent={80} className="progress-success" />
              <p>
                <strong>1 or higher</strong> quick ratio target
              </p>
            </div>
          </Cards>
        </RatioCard>
      </Col>
      <Col md={12} sm={12} xs={24}>
        <RatioCard>
          <Cards headless title="Current Ratio">
            <div className="ratio-content">
              <Heading as="h1">2.4</Heading>
              <Progress percent={72} status="warning" />
              <p>
                <strong>3 or higher</strong> current ratio target
              </p>
            </div>
          </Cards>
        </RatioCard>
      </Col>
    </Row>
  );
};

export default CardGroup;
