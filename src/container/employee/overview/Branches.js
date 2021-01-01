import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { UserCard } from '../../../container/pages/style';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';



const Branches = () => {
  const { employee } = useSelector(state => {
    return {
        employee: state.employee.data,
    };
  });
  const { id , title , firstName , middleInitial , lastName , preferredName , gender , employeeCode , email , nationalInsuranceNumber , employeeContractType , pinCode , transportMode, address , county , postCode , dateOfBirth ,  photo, photoContentType, photoUrl , acruedHolidayHours , lastUpdatedDate , clientId , userId , userLogin , nationalityId ,nationalityCountryName } = employee;

 
  return (
    <UserCard>
    <div className="card user-card" >
    <Row gutter="10" > 
         <Col>
              <Cards headless>
                <figure>
                  <img  src={photoUrl} alt=""  style={{borderRadius: 5 + 'px'}}/>
                </figure>
                <figcaption>
                  <div className="card__content">
                    <Heading className="card__name"  as="h6">
                      <Link to="#">{title} {firstName} {middleInitial} {lastName}</Link>
                    </Heading>
                    <p className="card__designation">Preferred Name: <b>{preferredName}</b></p>
                    <p className="card__designation">Employee ID : <b>{id}</b></p>
                  </div>
                </figcaption>
              </Cards>
         </Col>
       </Row>  
       </div>
       </UserCard>
  );

};
export default Branches;
