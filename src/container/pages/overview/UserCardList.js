import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserCard } from '../style';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';

const UserCardList = ({ user }) => {
  const { name, designation, img, content } = user;
  return (
    <UserCard>
      <div className="card user-card theme-list">
        <Cards headless>
          <figure>
            <img src={require(`../../../${img}`)} alt="" />

            <figcaption>
              <div className="card__content">
                <Heading className="card__name" as="h6">
                  <Link to="#">{name}</Link>
                </Heading>
                <p className="card__designation">{designation}</p>
                <p className="card-text">{content}</p>
                <p className="card-info">
                  <span className="user-meta">
                    <strong>$25/</strong>hr
                  </span>
                  <span className="user-meta">
                    <strong>$88K</strong> earned
                  </span>
                </p>
              </div>

              <div className="card__actions">
                <Button size="default" type="white">
                  View Profile
                </Button>
                <Button size="default" type="white">
                  Message
                </Button>
              </div>
            </figcaption>
          </figure>
        </Cards>
      </div>
    </UserCard>
  );
};

UserCardList.propTypes = {
  user: PropTypes.object,
};

export default UserCardList;
