import React from 'react';
import { Progress } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useSelector } from 'react-redux';
import { OverviewCard } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { Button } from '../../../../components/buttons/buttons';
import { Dropdown } from '../../../../components/dropdown/dropdown';

const DailyOverview = () => {
  const { rtl } = useSelector(state => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });

  return (
    <OverviewCard>
      <div className="d-flex align-items-center justify-content-between overview-head">
        <Heading as="h4">Daily Overview</Heading>
        <Dropdown>
          <Button>
            Export <FeatherIcon icon="chevron-down" size={14} />
          </Button>
        </Dropdown>
      </div>
      <div className="overview-box">
        <Cards headless>
          <div className="d-flex align-items-center justify-content-between">
            <div className="overview-box-single">
              <Heading as="h2" className="color-primary">
                5,461
              </Heading>
              <p>Users Today</p>
            </div>
            <div className="overview-box-single text-right">
              <Heading as="h2">8,085</Heading>
              <p>Expected Users</p>
            </div>
          </div>

          <Progress percent={70} showInfo={false} className="progress-primary" />

          <p>
            <span className="growth-upward">
              <FeatherIcon icon="arrow-up" size={14} />
              25% <span>Since yesterday</span>
            </span>
            <span className="overview-box-percentage" style={{ float: !rtl ? 'right' : 'left' }}>
              70%
            </span>
          </p>
        </Cards>
      </div>

      <div className="overview-box">
        <Cards headless>
          <div className="d-flex align-items-center justify-content-between">
            <div className="overview-box-single">
              <Heading as="h2" className="color-info">
                140
              </Heading>
              <p>Goals Today</p>
            </div>
            <div className="overview-box-single text-right">
              <Heading as="h2">120</Heading>
              <p>Expected Goals</p>
            </div>
          </div>
          <Progress percent={70} showInfo={false} />
          <p>
            <span className="growth-downward">
              <FeatherIcon icon="arrow-down" size={14} />
              25% <span>Since yesterday</span>
            </span>
            <span className="overview-box-percentage" style={{ float: !rtl ? 'right' : 'left' }}>
              70%
            </span>
          </p>
        </Cards>
      </div>
    </OverviewCard>
  );
};

export default DailyOverview;
