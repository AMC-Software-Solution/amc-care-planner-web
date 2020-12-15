import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserCard } from '../style';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';

const UserCardStyle = ({ user }) => {
  const { name, designation, img, cover } = user;
  return (
    <UserCard cover={cover}>
      <div className="card user-card theme-grid-2">
        <Cards headless>
          <figure>
            <div className="user-card__img">
              <img src={require(`../../../${img}`)} alt="" />
            </div>

            <figcaption>
              <div
                className="user-card__bg"
                style={{
                  height: '150px',
                  background: `url(${require(`../../../${cover}`)})`,
                }}
              />
              <div className="card__bottom">
                <div className="card__content">
                  <Heading className="card__name" as="h6">
                    <Link to="#">{name}</Link>
                  </Heading>
                  <p className="card__designation">{designation}</p>
                </div>

                <div className="card__actions">
                  <Button size="default" type="white">
                    <FeatherIcon icon="message-square" size={14} />
                    Chat
                  </Button>
                  <Button size="default" type="white">
                    View Profile
                  </Button>
                </div>
              </div>
            </figcaption>
          </figure>
        </Cards>
      </div>
    </UserCard>
  );
};

UserCardStyle.propTypes = {
  user: PropTypes.object,
};

export default UserCardStyle;
