import React, { Suspense } from 'react';
import { Skeleton, Table } from 'antd';
import { Cards } from '../../../components/cards/frame/cards-frame';

const Branch = branch => {
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

  const dataSource = [branch].map(value => {
    const { id, name, address, telephone, lastUpdatedDate, clientId, clientClientName } = value;
    const dataSourceRow = {
      key: id,
      id,
      name,
      address,
      clientID: clientId,
      clientName: clientClientName,
      telephoneNumber: telephone,
      lastUpdated: lastUpdatedDate,
    };
    return dataSourceRow;
  });

  return (
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
  );
};

export default Branch;
