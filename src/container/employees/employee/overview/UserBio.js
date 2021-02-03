import React from 'react';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import { UserBioBox } from './style';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const UserBio = ({ user }) => {
  const { email, address, county, postCode } = user;

  return (
    <UserBioBox>
      <Cards headless>
        <address className="user-info">
          <h5 className="user-info__title">Contact Info</h5>
          <ul className="user-info__contact">
            <li>
              <FeatherIcon icon="mail" size={14} /> <span>{email}</span>
            </li>
            <li>
              <FeatherIcon icon="map-pin" size={14} />{' '}
              <span>
                {' '}
                {address} {county} {postCode}
              </span>
            </li>
          </ul>
        </address>
      </Cards>
    </UserBioBox>
  );
};
UserBio.propTypes = {
  user: PropTypes.object,
};
export default UserBio;
