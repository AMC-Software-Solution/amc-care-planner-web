import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { MixedCardWrap } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import SocialMediaOverview from '../dashboard/overview/index/SocialMediaOverview';
import CardGroup from '../dashboard/overview/business/CardGroup';
import DailyOverview from '../dashboard/overview/performance/DailyOverview';
import SalesByLocation from '../dashboard/overview/ecommerce/SalesByLocation';
import Ordersummary from '../ecommerce/overview/Ordersummary';

const WidgetsCard = () => {
  return (
    <>
      <PageHeader
        title="Widgets Mixed"
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
        <MixedCardWrap>
          <Row gutter={25}>
            <Col md={8} xs={24}>
              <Cards headless>
                <Ordersummary subtotal={1200} />
              </Cards>
            </Col>
            <Col xxl={16} xl={24}>
              <CardGroup />
            </Col>
            <Col xxl={8} xs={24}>
              <SocialMediaOverview />
            </Col>

            <Col xxl={8} md={12} xs={24}>
              <SalesByLocation />
            </Col>

            <Col xxl={8} md={12} xs={24}>
              <DailyOverview />
            </Col>
          </Row>
        </MixedCardWrap>
      </Main>
    </>
  );
};

export default WidgetsCard;
