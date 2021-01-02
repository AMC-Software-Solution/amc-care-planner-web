import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import { UserCard } from '../../pages/style';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';

const Branches = ({branches}) => {
  if (branches) {
  branches.map(branch => {
    const {id,name,address,telephone,lastUpdatedDate,clientId,clientIdName} = branch;
  return (
    <UserCard>
      <div className="card user-card">
        <Row gutter="10">
          <Col>
            <Cards headless>
              {/*
              <figure>
                <img src={photoUrl} alt="" style={{ borderRadius: `${5}px` }} />
              </figure>
              */}
              <figcaption>
                <div className="card__content">
                  <Heading className="card__name" as="h6">
                    <Link to="#">
                      {id} {name} {address} {telephone}
                    </Link>
                  </Heading>
                  <p className="card__designation">
                    Client Name: <b>{clientIdName}</b>
                  </p>
                  <p className="card__designation">
                    Branch ID : <b>{id}</b>
                  </p>
                </div>
              </figcaption>
            </Cards>
          </Col>
        </Row>
      </div>
    </UserCard>
  );
});
  } else {
    return (<div></div>);
  }
};

export default Branches;
