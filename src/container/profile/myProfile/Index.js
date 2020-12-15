import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import { SettingWrapper } from './overview/style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const UserCards = lazy(() => import('../../pages/overview/UserCard'));
const CoverSection = lazy(() => import('../overview/CoverSection'));
const UserBio = lazy(() => import('./overview/UserBio'));
const Overview = lazy(() => import('./overview/Overview'));
const Timeline = lazy(() => import('./overview/Timeline'));
const Activity = lazy(() => import('./overview/Activity'));

const MyProfile = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <PageHeader
        ghost
        title="My Profile"
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
          <Col xxl={6} lg={8} md={10} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton avatar active paragraph={{ rows: 3 }} />
                </Cards>
              }
            >
              <UserCards
                user={{ name: 'Duran Clyton', designation: 'UI/UX Designer', img: 'static/img/users/1.png' }}
              />
            </Suspense>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active paragraph={{ rows: 10 }} />
                </Cards>
              }
            >
              <UserBio />
            </Suspense>
          </Col>
          <Col xxl={18} lg={16} md={14} xs={24}>
            <SettingWrapper>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <div className="coverWrapper">
                  <CoverSection />
                  <nav className="profileTab-menu">
                    <ul>
                      <li>
                        <NavLink to={`${path}/overview`}>Overview</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/timeline`}>Timeline</NavLink>
                      </li>
                      <li>
                        <NavLink to={`${path}/activity`}>Activity</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Suspense>
              <Switch>
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active paragraph={{ rows: 10 }} />
                    </Cards>
                  }
                >
                  <Route exact path={`${path}/overview`} component={Overview} />
                  <Route path={`${path}/timeline`} component={Timeline} />
                  <Route path={`${path}/activity`} component={Activity} />
                </Suspense>
              </Switch>
            </SettingWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
};

MyProfile.propTypes = {
  // match: propTypes.object,
};

export default MyProfile;
