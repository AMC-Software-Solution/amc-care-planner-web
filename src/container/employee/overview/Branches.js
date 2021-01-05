import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Cards } from '../../../components/cards/frame/cards-frame';
import PropTypes from 'prop-types';
import { Row, Col, Pagination, Skeleton, Table } from 'antd';
import Heading from '../../../components/heading/heading';
const Branch = ({ branches }) => {
  const columns = [
    {
      title: 'Branch ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Branch Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Client ID',
      dataIndex: 'clientID',
      key: 'clientID',
    },
    {
      title: 'Client Name',
      dataIndex: 'clientName',
      key: 'clientName',
    },
    {
      title: 'Telephone Number',
      dataIndex: 'telephoneNumber',
      key: 'telephoneNumber',
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastUpdated',
      key: 'lastUpdated',
    },
  ];

  const dataSource = branches.map(value => {
      const { id, name, address, telephone, lastUpdatedDate, clientId, clientClientName } = value;
      const dataSourceRow = 
        {
          key: id,
          id,
          name,
          address,
          clientID: clientId,
          clientName: clientClientName,
          telephoneNumber: telephone,
          lastUpdated: lastUpdatedDate,
        }
      ;
      return dataSourceRow;
     
    });


  return (
    <Row gutter={25}>
    <Col xs={24}>
      <Suspense
        fallback={
          <Cards headless>
            <Skeleton active />
          </Cards>
        }
      >
        <div className="card user-card">
          <Cards title="Branches">
            <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
          </Cards>
        </div>
      </Suspense>
    </Col>
    </Row>
  );

};

Branch.propTypes = {
  branches: PropTypes.object,
};

export default Branch;

{
  /* <div className="card__content">
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
                    </div> */
}
