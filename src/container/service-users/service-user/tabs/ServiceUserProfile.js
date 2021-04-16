import React from 'react';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { EmployeeCards } from '../../../employees/employee/tabs/style';
import Heading from '../../../../components/heading/heading';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';

const ServiceUserProfile = ({ user }) => {
  const {
    id,
    title,
    firstName,
    middleName,
    lastName,
    preferredName,
    email,
    serviceUserCode,
    dateOfBirth,
    lastVisitDate,
    startDate,
    supportType,
    serviceUserCategory,
    vulnerability,
    servicePriority,
    source,
    firstLanguage,
    interpreterRequired,
    profilePhotoUrl,
    lastRecordedHeight,
    lastRecordedWeight,
    hasMedicalCondition,
    medicalConditionSummary,
  } = user;
  return (
    <EmployeeCards>
      <div className="card user-card">
        <Row gutter={6}>
          <Col span={6} style={{ display: 'flex' }}>
            <Cards headless>
              <figure>
                <img src={profilePhotoUrl} alt="employee" />
              </figure>
              <figcaption>
                <div className="card__content">
                  <Heading as="h6">
                    {title} {firstName} {middleName} {lastName}
                  </Heading>
                  <div className="card__actions">
                    <Button size="default" type="white">
                      <FeatherIcon icon="mail" size={14} />
                      Message
                    </Button>
                  </div>
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
                  Date Of Birth : <b>{dateOfBirth}</b>
                </p>
                <p className="card__designation">
                  Service User Code : <b>{serviceUserCode}</b>
                </p>
                <p className="card__designation">
                  Start Date : <b>{startDate}</b>
                </p>
                <p className="card__designation">
                  Support Type : <b>{supportType}</b>
                </p>
                <p className="card__designation">
                  Category :<b>{serviceUserCategory}</b>
                </p>
              </div>
            </Cards>
          </Col>
          <Col span={6} style={{ display: 'flex' }}>
            <Cards headless>
              <div className="card__content">
                <p className="card__designation">
                  Last Visit : <b>{lastVisitDate}</b>
                </p>
                <p className="card__designation">
                  Service Priority : <b>{servicePriority}</b>
                </p>
                <p className="card__designation">
                  Interpreter Required : <b>{interpreterRequired}</b>
                </p>
                <p className="card__designation">
                  Last Recorded Weight : <b>{lastRecordedWeight}</b>
                </p>
                <p className="card__designation">
                  User ID : <b>{id}</b>
                </p>
                <p className="card__designation">
                  Has Medical Condition : <b>{hasMedicalCondition}</b>
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
                  Source : <b>{source}</b>
                </p>

                <p className="card__designation">
                  Language : <b>{firstLanguage}</b>
                </p>

                <p className="card__designation">
                  Vulnerability Code : <b>{vulnerability}</b>
                </p>

                <p className="card__designation">
                  Last Recorded Height : <b>{lastRecordedHeight}</b>
                </p>

                <p className="card__designation">
                  Medical Condition Summary : <b>{medicalConditionSummary}</b>
                </p>
              </div>
            </Cards>
          </Col>
        </Row>
      </div>
    </EmployeeCards>
  );
};

ServiceUserProfile.propTypes = {
  user: PropTypes.object,
};

export default ServiceUserProfile;
