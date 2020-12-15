import React, { useState, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Pagination, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link, Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import { UsercardWrapper, UserCarrdTop } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const User = lazy(() => import('./overview/UserCard'));
const UserCardStyle = lazy(() => import('./overview/UserCardStyle'));
const UserCardList = lazy(() => import('./overview/UserCardList'));
const UserCardGroup = lazy(() => import('./overview/UserCardGroup'));

const Users = () => {
  const { searchData, users, userGroup } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      users: state.users,
      userGroup: state.userGroup,
    };
  });

  const { path } = useRouteMatch();

  const [state, setState] = useState({
    notData: searchData,
    current: 0,
    pageSize: 0,
    page: 0,
  });

  const { notData } = state;

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onChange = page => {
    setState({ ...state, page });
  };

  return (
    <>
      <CardToolbox>
        <UserCarrdTop>
          <PageHeader
            ghost
            title="Users Card"
            subTitle={
              <>
                <span className="title-counter">274 Users </span>
                <AutoComplete
                  onSearch={handleSearch}
                  dataSource={notData}
                  placeholder="Search by Name"
                  width="100%"
                  patterns
                />
              </>
            }
            buttons={[
              <Button className="btn-add_new" size="default" type="primary" key="1">
                <Link to="/admin/pages/add-user/info">
                  <FeatherIcon icon="plus" size={14} /> Add New User
                </Link>
              </Button>,
              <NavLink className="action-btn" key="2" to={`${path}/grid`}>
                <FeatherIcon icon="grid" size={14} />
              </NavLink>,
              <NavLink className="action-btn" key="3" to={`${path}/list`}>
                <FeatherIcon icon="list" size={14} />
              </NavLink>,
              <NavLink className="action-btn" key="4" to={`${path}/grid-style`}>
                <FeatherIcon icon="maximize" size={14} />
              </NavLink>,
              <NavLink className="action-btn" key="5" to={`${path}/grid-group`}>
                <FeatherIcon icon="users" size={14} />
              </NavLink>,
            ]}
          />
        </UserCarrdTop>
      </CardToolbox>
      <Main>
        <UsercardWrapper>
          <Row gutter={25}>
            <Switch>
              <Route
                path={`${path}/grid`}
                component={() => {
                  return users.map(user => {
                    const { id } = user;

                    return (
                      <Col key={id} xxl={6} xl={8} sm={12} xs={24}>
                        <Suspense
                          fallback={
                            <Cards headless>
                              <Skeleton avatar active />
                            </Cards>
                          }
                        >
                          <User user={user} />
                        </Suspense>
                      </Col>
                    );
                  });
                }}
              />
              <Route
                path={`${path}/list`}
                component={() => {
                  return users.map(user => {
                    const { id } = user;

                    return (
                      <Col key={id} xxl={12} xl={12} sm={24} xs={24}>
                        <Suspense
                          fallback={
                            <Cards headless>
                              <Skeleton avatar active />
                            </Cards>
                          }
                        >
                          <UserCardList user={user} />
                        </Suspense>
                      </Col>
                    );
                  });
                }}
              />
              <Route
                path={`${path}/grid-group`}
                component={() => {
                  return userGroup.map(user => {
                    const { id } = user;

                    return (
                      <Col key={id} xxl={8} md={12} sm={24} xs={24}>
                        <Suspense
                          fallback={
                            <Cards headless>
                              <Skeleton avatar active />
                            </Cards>
                          }
                        >
                          <UserCardGroup user={user} />
                        </Suspense>
                      </Col>
                    );
                  });
                }}
              />
              <Route
                path={`${path}/grid-style`}
                component={() => {
                  return users.map(user => {
                    const { id } = user;

                    return (
                      <Col key={id} xxl={6} xl={8} sm={12} xs={24}>
                        <Suspense
                          fallback={
                            <Cards headless>
                              <Skeleton avatar active />
                            </Cards>
                          }
                        >
                          <UserCardStyle user={user} />
                        </Suspense>
                      </Col>
                    );
                  });
                }}
              />
            </Switch>

            <Col xs={24}>
              <div className="user-card-pagination">
                <Pagination
                  onChange={onChange}
                  showSizeChanger
                  onShowSizeChange={onShowSizeChange}
                  defaultCurrent={6}
                  total={500}
                />
              </div>
            </Col>
          </Row>
        </UsercardWrapper>
      </Main>
    </>
  );
};

export default Users;
