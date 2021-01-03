import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Cards } from '../../../components/cards/frame/cards-frame';
import PropTypes from 'prop-types';
import { Row, Col, Pagination, Skeleton } from 'antd';
import Heading from '../../../components/heading/heading';
const Branch = ({branches}) => {
  
 {/*
  return (
    <div className="card user-card">
      <Cards headless>
        <div className="card__content">
          <p className="card__designation">
            Name: <b>{name}</b>
          </p>
          <p className="card__designation">
            Branch ID : <b>{id}</b>
          </p>
          <p className="card__designation">
            Address : <b>{address}</b>
          </p>
          <p className="card__designation">
            Client ID : <b>{clientId}</b>
          </p>
          <p className="card__designation">
            Client Name : <b>{clientClientName}</b>
          </p>
          <p className="card__designation">
            Telephone Number : <b>{telephone}</b>
          </p>
          <p className="card__designation">
            Last Updated : <b>{lastUpdatedDate}</b>
          </p>
        </div>
      </Cards>
    </div>
  );*/}

  return (
    <Row gutter={25}>
      {branches.length ? (
        branches.map(value => {
          const { id, name, address, telephone, lastUpdatedDate, clientId, clientClientName } = value;
          return (
            <Col key={value.id} xl={8} md={12} xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
               <div className="card user-card">
      <Cards title="Branches">
        <div className="card__content">
          <p className="card__designation">
            Name: <b>{name}</b>
          </p>
          <p className="card__designation">
            Branch ID : <b>{id}</b>
          </p>
          <p className="card__designation">
            Address : <b>{address}</b>
          </p>
          <p className="card__designation">
            Client ID : <b>{clientId}</b>
          </p>
          <p className="card__designation">
            Client Name : <b>{clientClientName}</b>
          </p>
          <p className="card__designation">
            Telephone Number : <b>{telephone}</b>
          </p>
          <p className="card__designation">
            Last Updated : <b>{lastUpdatedDate}</b>
          </p>
        </div>
      </Cards>
    </div>

              </Suspense>
            </Col>
          );
        })
      ) : (
        <Col md={24}>
          <Cards headless>
            <Heading>Data Not Found!</Heading>
          </Cards>
        </Col>
      )}
    </Row>
  );


};

 Branch.propTypes = {
   branches: PropTypes.object,
 };

export default Branch;
