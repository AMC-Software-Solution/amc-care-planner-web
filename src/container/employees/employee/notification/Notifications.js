
import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { EmployeeTableStyleWrapper } from '../style';
import { CardToolbox, TableWrapper } from '../../../styled';

import { PageHeader } from '../../../../components/page-headers/page-headers';
import { AutoComplete } from '../../../../components/autoComplete/autoComplete';

import { Button } from '../../../../components/buttons/buttons';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const Notifications = ({notifications}) => {
  const notificationsTableData = [];
  if (notifications) {
    notifications.map(notification => {
      const {
        id,
        clientId,
        title,
        body,
        notificationDate,
        senderId,
        recieverId,
        createdDate,
        hasExtraData,
        lastUpdatedDate,
        

        
      } = notification;
      return notificationsTableData.push({
        key: id,

        id,
        clientId,
        title,
        body,
        notificationDate,
        senderId,
        recieverId,
        createdDate,
        hasExtraData,
        lastUpdatedDate,
        action: (
          <div className="table-actions">
            <>
              <Button className="btn-icon" type="primary" shape="circle">
                <Link to={`/admin/communications/communication/communicationProfile/${id}`}>
                  <FeatherIcon icon="eye" size={16} />
                </Link>
              </Button>
              <Button className="btn-icon" type="info" to="#" shape="circle">
                <FeatherIcon icon="edit" size={16} />
              </Button>
              <Button className="btn-icon" type="danger" to="#" shape="circle">
                <FeatherIcon icon="trash-2" size={16} />
              </Button>
            </>
          </div>
        ),
      });
    });
  }

  const notificationsTableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Client ID',
      dataIndex: 'clientId',
      key: 'clientId',
    },
    {
      title: 'body',
      dataIndex: 'body',
      key: 'body',
    },

    {
      title: 'notification Date',
      dataIndex: 'notificationDate',
      key: 'notificationDate',
    },
    {
      title: 'sender Id',
      dataIndex: 'senderId',
      key: 'senderId',
    },
    {
      title: 'reciever Id', 
      dataIndex: 'recieverId',
      key: 'recieverId',
    },
    {
     
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },

    {
      title: 'HasExtra Data',
      dataIndex: 'hasExtraData',
      key: 'hasExtraData',
    },

    {
      title: 'Last Updated Date',
      dataIndex: 'lastUpdatedDate',
      key: 'lastUpdatedDate',
    },
  ];

  const rowSelection = {
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled Communication', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <CardToolbox>
        <PageHeader
          ghost
          title="Your Notifications"
          subTitle={
            <>
              <span className="title-counter">{notificationsTableData.length} Your Notifications</span>
              <AutoComplete placeholder="Search by Name" width="100%" patterns />
              <Button size="small" type="primary">
                <FeatherIcon icon="plus" size={14} />
                Create New Notifications
              </Button>
          
            </>
          }
        />
      </CardToolbox>
      <Cards headless>
        <EmployeeTableStyleWrapper>
          <TableWrapper className="table-responsive">
            <Table
              rowSelection={rowSelection}
              dataSource={notificationsTableData}
              columns={notificationsTableColumns}
              pagination={{
                defaultPageSize: 5,
                total: notificationsTableData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
            />
          </TableWrapper>
        </EmployeeTableStyleWrapper>
      </Cards>
    </>
  );
};

export default Notifications;
