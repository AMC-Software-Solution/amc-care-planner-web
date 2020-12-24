import React from 'react';
import FeatherIcon from 'feather-icons-react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { UserBioBox } from './style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';

const UserBio = ({ user }) => {
  const { id , title , firstName , middleInitial , lastName , preferredName , gender , employeeCode , email , nationalInsuranceNumber , employeeContractType , pinCode , transportMode, address , county , postCode , dateOfBirth ,  photo, photoContentType, photoUrl , acruedHolidayHours , lastUpdatedDate , clientId , userId , userLogin , nationalityId ,nationalityCountryName } = user;

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
              <FeatherIcon icon="map-pin" size={14} /> <span> {address} {county} {postCode}</span>
            </li>
          </ul>
        </address>
        {/*
        <article className="user-info">
          <h5 className="user-info__title">User Bio</h5>
          <p>
            Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse
            sed orci neque ac sed aliquet risus faucibus in pretium molestie nisl tempor quis odio habitant.
          </p>
        </article>
        
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
        */}
      </Cards>
    </UserBioBox>
  );
};

export default UserBio;
