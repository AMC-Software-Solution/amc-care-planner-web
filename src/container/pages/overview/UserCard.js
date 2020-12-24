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
  const { id , title , firstName , middleInitial , lastName , preferredName , gender , employeeCode , email , nationalInsuranceNumber , employeeContractType , pinCode , transportMode, address , county , postCode , dateOfBirth ,  photo, photoContentType, photoUrl , acruedHolidayHours , lastUpdatedDate , clientId , userId , userLogin , nationalityId ,nationalityCountryName } = user;
  return (
    <UserCard>
      <div className="card user-card">
        <Cards headless>
          <figure>
            <img src={photoUrl} alt="" />
          </figure>
          <figcaption>
            <div className="card__content">
              <Heading className="card__name"  as="h6">
                <Link to="#">{title} {firstName} {middleInitial} {lastName}</Link>
              </Heading>
              <p className="card__designation">Preferred Name: <b>{preferredName}</b></p>
              <p className="card__designation">Employee ID : <b>{id}</b></p>
              <p className="card__designation">Gender : <b>{gender}</b></p>
              <p className="card__designation">Date of Birth : <b>{dateOfBirth}</b></p>
              <p className="card__designation">National Insurance #:<b>{nationalInsuranceNumber}</b></p>
              <p className="card__designation">Contract Type :  <b>{employeeContractType}</b></p>
              <p className="card__designation">PIN Code : <b>{pinCode}</b></p>
              <p className="card__designation">Transport Mode : <b>{transportMode}</b></p>
              <p className="card__designation">Acrued Holiday Hours : <b>{acruedHolidayHours}</b></p>
              <p className="card__designation">Client ID : <b>{clientId}</b></p>
              <p className="card__designation">User ID : <b>{userId}</b></p>
              <p className="card__designation">Joining Date : <b>{lastUpdatedDate}</b></p>
            </div>

            <div className="card__actions">
              <Button size="default" type="white">
                <FeatherIcon icon="mail" size={14} />
                Message
              </Button>
              <Button size="default" type="white">
                <FeatherIcon icon="smile" size={14} />
                Favourite
              </Button>
            </div>
            {/*
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
            */}
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
