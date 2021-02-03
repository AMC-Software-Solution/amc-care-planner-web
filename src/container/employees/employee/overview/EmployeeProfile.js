import React from 'react';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { EmployeeCards } from './style';
import Heading from '../../../../components/heading/heading';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';

const EmployeeProfile = ({ user }) => {
  const {
    id,
    title,
    firstName,
    middleInitial,
    lastName,
    preferredName,
    gender,
    employeeCode,
    email,
    nationalInsuranceNumber,
    employeeContractType,
    pinCode,
    transportMode,
    address,
    county,
    postCode,
    dateOfBirth,
    photoUrl,
    acruedHolidayHours,
    lastUpdatedDate,
    clientId,
    userId,
  } = user;
  return (
    <EmployeeCards>
      <div className="card user-card">
        <Row gutter={6}>
          <Col span={6} style={{ display: 'flex' }}>
            <Cards headless>
              <figure>
                <img src={photoUrl} alt="employee" />
              </figure>
              <figcaption>
                <div className="card__content">
                  <Heading className="card__name" as="h6">
                    {/* <Link to={`/admin/employee/employeeProfile/${id}`}> */}
                    {title} {firstName} {middleInitial} {lastName}
                    {/* </Link> */}
                  </Heading>
                </div>
              </figcaption>
            </Cards>
          </Col>
          <Col span={6} style={{ display: 'flex' }}>
            <Cards headless>
              <div className="card__content">
                <p className="card__designation">
                  Preferred Name: <b>{preferredName}</b>
                </p>
                <p className="card__designation">
                  Employee ID : <b>{id}</b>
                </p>
                <p className="card__designation">
                  Employee Code : <b>{employeeCode}</b>
                </p>
                <p className="card__designation">
                  Gender : <b>{gender}</b>
                </p>
                <p className="card__designation">
                  Date of Birth : <b>{dateOfBirth}</b>
                </p>
                <p className="card__designation">
                  National Insurance :<b>{nationalInsuranceNumber}</b>
                </p>
                <p className="card__designation">
                  Contract Type : <b>{employeeContractType}</b>
                </p>
              </div>
            </Cards>
          </Col>
          <Col span={6} style={{ display: 'flex' }}>
            <Cards headless>
              <div className="card__content">
                <p className="card__designation">
                  PIN Code : <b>{pinCode}</b>
                </p>
                <p className="card__designation">
                  Transport Mode : <b>{transportMode}</b>
                </p>
                <p className="card__designation">
                  Acrued Holiday Hours : <b>{acruedHolidayHours}</b>
                </p>
                <p className="card__designation">
                  Client ID : <b>{clientId}</b>
                </p>
                <p className="card__designation">
                  User ID : <b>{userId}</b>
                </p>
                <p className="card__designation">
                  Joining Date : <b>{lastUpdatedDate}</b>
                </p>
              </div>
            </Cards>
          </Col>
          <Col span={6} style={{ display: 'flex' }}>
            <Cards headless>
              <div className="card__content">
                <p className="card__designation">
                  Email : <b>{email}</b>
                </p>
                <p className="card__designation">
                  Address : <b>{address}</b>
                </p>
                <p className="card__designation">
                  {' '}
                  <b>
                    {' '}
                    {county} {postCode}
                  </b>
                </p>
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
            </Cards>
          </Col>
        </Row>
      </div>
    </EmployeeCards>
  );
};

EmployeeProfile.propTypes = {
  user: PropTypes.object,
};

export default EmployeeProfile;
