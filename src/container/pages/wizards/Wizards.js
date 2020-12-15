import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { WizardBlock } from './Style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const WizardsOne = lazy(() => import('./overview/WizardsOne'));
const WizardsTwo = lazy(() => import('./overview/WizardsTwo'));
const WizardsThree = lazy(() => import('./overview/WizardsThree'));
const WizardsFour = lazy(() => import('./overview/WizardsFour'));
const WizardsFive = lazy(() => import('./overview/WizardsFive'));
const WizardsSix = lazy(() => import('./overview/WizardsSix'));

const Wizards = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <PageHeader
        title="Wizards"
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
          <Col sm={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton paragraph={{ rows: 20 }} active />
                </Cards>
              }
            >
              <Switch>
                <WizardBlock>
                  <Cards headless>
                    <Row justify="center">
                      <Col xxl={20} xs={24}>
                        <Route exact path={`${path}/one`} component={WizardsOne} />
                        <Route path={`${path}/two`} component={WizardsTwo} />
                        <Route path={`${path}/three`} component={WizardsThree} />
                        <Route path={`${path}/four`} component={WizardsFour} />
                        <Route path={`${path}/five`} component={WizardsFive} />
                        <Route path={`${path}/six`} component={WizardsSix} />
                      </Col>
                    </Row>
                  </Cards>
                </WizardBlock>
              </Switch>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Wizards;
