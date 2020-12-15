import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { UserCard } from '../style';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';

const UserCards = ({ user }) => {
  const { name, designation, img } = user;
  return (
    <UserCard>
      <div className="card user-card">
        <Cards headless>
          <figure>
            <img src={require(`../../../${img}`)} alt="" />
          </figure>
          <figcaption>
            <div className="card__content">
              <Heading className="card__name" as="h6">
                <Link to="#">{name}</Link>
              </Heading>
              <p className="card__designation">{designation}</p>
            </div>

            <div className="card__actions">
              <Button size="default" type="white">
                <FeatherIcon icon="mail" size={14} />
                Message
              </Button>
              <Button size="default" type="white">
                <FeatherIcon icon="user-plus" size={14} />
                Following
              </Button>
            </div>
            <div className="card__info">
              <Row gutter={15}>
                <Col xs={8}>
                  <div className="info-single">
                    <Heading className="info-single__title" as="h2">
                      $72,572
                    </Heading>
                    <p>Total Revenue</p>
                  </div>
                </Col>
                <Col xs={8}>
                  <div className="info-single">
                    <Heading className="info-single__title" as="h2">
                      3,257
                    </Heading>
                    <p>Orders</p>
                  </div>
                </Col>
                <Col xs={8}>
                  <div className="info-single">
                    <Heading className="info-single__title" as="h2">
                      74
                    </Heading>
                    <p>Products</p>
                  </div>
                </Col>
              </Row>
            </div>
          </figcaption>
        </Cards>
      </div>
    </UserCard>
  );
};

UserCards.propTypes = {
  user: PropTypes.object,
};

export default UserCards;
