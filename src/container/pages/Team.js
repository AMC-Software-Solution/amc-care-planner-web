import React, { lazy, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const Team = () => {
  const { searchData, team } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      team: state.team.data,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
  });

  const { notData } = state;
  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const actions = (
    <>
      <Link to="#">
        <FeatherIcon size={14} icon="eye" />
        <span>View</span>
      </Link>
      <Link to="#">
        <FeatherIcon size={14} icon="edit" />
        <span>Edit</span>
      </Link>
      <Link to="#">
        <FeatherIcon size={14} icon="trash-2" />
        <span>Delete</span>
      </Link>
    </>
  );

  return (
    <>
      <CardToolbox>
        <PageHeader
          backIcon={false}
          title="Team Members"
          subTitle={
            <>
              <span className="title-counter">274 Users</span>
              <AutoComplete
                onSearch={handleSearch}
                dataSource={notData}
                width="100%"
                placeholder="Search by Name"
                patterns
              />
            </>
          }
          buttons={[
            <Button className="btn-add_new" size="default" key="1" type="primary">
              <FeatherIcon icon="plus" size={14} /> Add New Member
            </Button>,
          ]}
        />
      </CardToolbox>

      <Main>
        <Row gutter={25}>
          {team.map(user => {
            const TeamCard = lazy(() => import('./overview/TeamCard'));
            const { id } = user;
            return (
              <Col key={id} xxl={6} lg={8} sm={12} xs={24}>
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton avatar active />
                    </Cards>
                  }
                >
                  <TeamCard actions={actions} user={user} />
                </Suspense>
              </Col>
            );
          })}
        </Row>
      </Main>
    </>
  );
};

export default Team;
