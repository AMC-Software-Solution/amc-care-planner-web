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

const Communication = ({communications}) => {
  const communicationsTableData = [];
  if (communications) {
    communications.map(communication => {
      const {
        id,
        clientId,
        note,
        communicatedByEmployeeCode,
        communicatedById,
        communicationDate,
        communicationType,
        createdDate,
        hasExtraData,
        lastUpdatedDate,
        serviceUserId,
        serviceUserServiceUserCode,

        attachment,
        attachmentContentType,
        attachmentUrl,
      } = communication;
      return communicationsTableData.push({
        key: id,

        id,
        clientId,
        note,
        communicatedByEmployeeCode,
        communicatedById,
        communicationDate,
        communicationType,
        createdDate,
        hasExtraData,
        lastUpdatedDate,
        serviceUserId,
        serviceUserServiceUserCode,
        attachment,
        attachmentContentType,
        attachmentUrl,
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

  const communicationsTableColumns = [
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
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },

    {
      title: 'Communicated By EmployeeCode',
      dataIndex: 'communicatedByEmployeeCode',
      key: 'communicatedByEmployeeCode',
    },
    {
      title: 'Communicated By ID',
      dataIndex: 'communicatedById',
      key: 'communicatedById',
    },
    {
      title: 'Communication Date',
      dataIndex: 'communicationDate',
      key: 'communicationDate',
    },
    {
      title: 'Communication Type',
      dataIndex: 'communicationType',
      key: 'communicationType',
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

    {
      title: 'Service UserId',
      dataIndex: 'serviceUserId',
      key: 'serviceUserId',
    },

    {
      title: 'ServiceUser Service User Code',
      dataIndex: 'serviceUserServiceUserCode',
      key: 'serviceUserServiceUserCode',
    },

    {
      title: 'Attachment',
      dataIndex: 'attachment',
      key: 'attachment',
    },

    {
      title: 'Attachment Content Type',
      dataIndex: 'attachmentContentType',
      key: 'attachmentContentType',
    },

    {
      title: 'Attachment Url',
      dataIndex: 'attachmentUrl',
      key: 'attachmentUrl',
    },

    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
      fixed: 'right',
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
          title="Your Communications"
          subTitle={
            <>
              <span className="title-counter">{communicationsTableData.length} Your Communications</span>
              <AutoComplete placeholder="Search by Name" width="100%" patterns />
            </>
          }
        />
      </CardToolbox>
      <Cards headless>
        <EmployeeTableStyleWrapper>
          <TableWrapper className="table-responsive">
            <Table
              rowSelection={rowSelection}
              dataSource={communicationsTableData}
              columns={communicationsTableColumns}
              pagination={{
                defaultPageSize: 5,
                total: communicationsTableData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
            />
          </TableWrapper>
        </EmployeeTableStyleWrapper>
      </Cards>
    </>
  );
};

export default Communication;
