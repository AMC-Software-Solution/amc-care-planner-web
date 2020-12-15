import React from 'react';
import FeatherIcon from 'feather-icons-react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { UserBioBox } from './style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';

const UserBio = () => {
  return (
    <UserBioBox>
      <Cards headless>
        <article className="user-info">
          <h5 className="user-info__title">User Bio</h5>
          <p>
            Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse
            sed orci neque ac sed aliquet risus faucibus in pretium molestie nisl tempor quis odio habitant.
          </p>
        </article>
        <address className="user-info">
          <h5 className="user-info__title">Contact Info</h5>
          <ul className="user-info__contact">
            <li>
              <FeatherIcon icon="mail" size={14} /> <span>Clayton@example.com</span>
            </li>
            <li>
              <FeatherIcon icon="phone" size={14} /> <span>+44 (0161) 347 8854</span>
            </li>
            <li>
              <FeatherIcon icon="globe" size={14} /> <span>www.example.com</span>
            </li>
          </ul>
        </address>
        <div className="user-info">
          <h5 className="user-info__title">Skills</h5>
          <div className="user-info__skills">
            <Button type="light" outlined className="btn-outlined">
              UI/UX
            </Button>
            <Button type="light" outlined className="btn-outlined">
              Branding
            </Button>
            <Button type="light" outlined className="btn-outlined">
              product design
            </Button>
            <Button type="light" outlined className="btn-outlined">
              web design
            </Button>
            <Button type="light" outlined className="btn-outlined">
              Application
            </Button>
          </div>
        </div>
        <div className="user-info">
          <h5 className="user-info__title">Social Profiles</h5>
          <div className="card__social">
            <Link className="btn-icon facebook" to="#">
              <FontAwesome name="facebook" />
            </Link>
            <Link className="btn-icon twitter" to="#">
              <FontAwesome name="twitter" />
            </Link>
            <Link className="btn-icon dribble" to="#">
              <FontAwesome name="dribbble" />
            </Link>
            <Link className="btn-icon instagram" to="#">
              <FontAwesome name="instagram" />
            </Link>
          </div>
        </div>
      </Cards>
    </UserBioBox>
  );
};

export default UserBio;
