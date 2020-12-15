import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Switch, Route } from 'react-router-dom';
import propTypes from 'prop-types';
import { SettingWrapper } from './overview/style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const Profile = lazy(() => import('./overview/Profile'));
const Account = lazy(() => import('./overview/Account'));
const Password = lazy(() => import('./overview/Passwoard'));
const SocialProfiles = lazy(() => import('./overview/SocialProfile'));
const Notification = lazy(() => import('./overview/Notification'));
const AuthorBox = lazy(() => import('./overview/ProfileAuthorBox'));
const CoverSection = lazy(() => import('../overview/CoverSection'));

const Settings = ({ match }) => {
  const { path } = match;

  return (
    <>
      <PageHeader
        ghost
        title="Profile Settings"
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
                  <Skeleton avatar />
                </Cards>
              }
            >
              <AuthorBox />
            </Suspense>
          </Col>
          <Col xxl={18} lg={16} md={14} xs={24}>
            <SettingWrapper>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton avatar />
                  </Cards>
                }
              >
                <CoverSection />
              </Suspense>
              <Switch>
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton paragraph={{ rows: 20 }} />
                    </Cards>
                  }
                >
                  <Route exact path={`${path}`} component={Profile} />
                  <Route exact path={`${path}/profile`} component={Profile} />
                  <Route exact path={`${path}/account`} component={Account} />
                  <Route exact path={`${path}/password`} component={Password} />
                  <Route exact path={`${path}/social`} component={SocialProfiles} />
                  <Route exact path={`${path}/notification`} component={Notification} />
                </Suspense>
              </Switch>
            </SettingWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
};

Settings.propTypes = {
  match: propTypes.object,
};

export default Settings;
