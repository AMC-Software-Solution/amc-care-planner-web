import React, { lazy, Suspense } from 'react';
import { Row, Col, Spin } from 'antd';
import { Switch, Route, NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { AddUser } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const Info = lazy(() => import('./overview/info'));
const Work = lazy(() => import('./overview/work'));
const Social = lazy(() => import('./overview/Social'));

const AddNew = ({ match }) => {
  return (
    <>
      <PageHeader ghost title="Add User" />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <AddUser>
              <Cards
                title={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <NavLink to={`${match.path}/info`}>
                          <FeatherIcon icon="user" size={14} />
                          Personal Info
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={`${match.path}/work`}>
                          <FeatherIcon icon="briefcase" size={14} />
                          Work Info
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={`${match.path}/social`}>
                          <FeatherIcon icon="share-2" size={14} />
                          Social
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                }
              >
                <Switch>
                  <Suspense
                    fallback={
                      <div className="spin">
                        <Spin />
                      </div>
                    }
                  >
                    <Route exact path={`${match.path}/info`} component={Info} />
                    <Route path={`${match.path}/work`} component={Work} />
                    <Route path={`${match.path}/social`} component={Social} />
                  </Suspense>
                </Switch>
              </Cards>
            </AddUser>
          </Col>
        </Row>
      </Main>
    </>
  );
};

AddNew.propTypes = {
  match: propTypes.object,
};

export default AddNew;
