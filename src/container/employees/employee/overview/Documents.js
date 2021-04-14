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

const Document = ({ documents }) => {
  const documentsTableData = [];
  if (documents) {
    documents.map(document => {
      const {
        id,
        approvedByEmployeeCode,
        clientId,
        createdDate,
        approvedById,
        documentFile,
        documentFileContentType,
        documentFileUrl,
        documentName,
        documentNumber,
        documentStatus,
        expiryDate,
        hasExtraData,
        issuedDate,
        lastUpdatedDate,
        note,
        ownerId,
        ownerServiceUserCode,
        uploadedDate,
      } = document;
      return documentsTableData.push({
        key: id,
        id,
        approvedByEmployeeCode,
        clientId,
        createdDate,
        approvedById,
        documentFile,
        documentFileContentType,
        documentFileUrl,
        documentName,
        documentNumber,
        documentStatus,
        expiryDate,
        hasExtraData,
        issuedDate,
        lastUpdatedDate,
        note,
        ownerId,
        ownerServiceUserCode,
        uploadedDate,

        action: (
          <div className="table-actions">
            <>
              <Button className="btn-icon" type="primary" shape="circle">
                <Link to={`/admin/documents/document/documentrofile/${id}`}>
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

  const documentsTableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Approved By EmployeeCode',
      dataIndex: 'approvedByEmployeeCode',
      key: 'approvedByEmployeeCode',
    },
    {
      title: 'Client ID',
      dataIndex: 'clientId',
      key: 'clientId',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },
    {
      title: 'Approved By ID',
      dataIndex: 'approvedById',
      key: 'approvedById',
    },

    {
      title: 'Document File',
      dataIndex: 'documentFile',
      key: 'documentFile',
    },
    {
      title: 'Document File ContentType',
      dataIndex: 'documentFileContentType',
      key: 'documentFileContentType',
    },

    {
      title: 'Document File Url',
      dataIndex: 'documentFileUrl',
      key: 'documentFileUrl',
    },

    {
      title: 'Document Name',
      dataIndex: 'documentName',
      key: 'documentName',
    },
    {
      title: 'Document Number',
      dataIndex: 'documentNumber',
      key: 'documentNumber',
    },
    {
      title: 'Document Status',
      dataIndex: 'documentStatus',
      key: 'documentStatus',
    },

    {
      title: 'Expiry Date',
      dataIndex: 'expiryDate',
      key: 'expiryDate',
    },

    {
      title: 'Has Extra Data',
      dataIndex: 'hasExtraData',
      key: 'hasExtraData',
    },

    {
      title: 'Issued Date',
      dataIndex: 'issuedDate',
      key: 'issuedDate',
    },

    {
      title: 'Last Updated Date',
      dataIndex: 'lastUpdatedDate',
      key: 'lastUpdatedDate',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },

    {
      title: 'Owner ID',
      dataIndex: 'ownerId	',
      key: 'ownerId	',
    },

    {
      title: 'Owner Service UserCode',
      dataIndex: 'ownerServiceUserCode	',
      key: 'ownerServiceUserCode	',
    },

    {
      title: 'Uploaded Date',
      dataIndex: 'uploadedDate	',
      key: 'uploadedDate	',
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
      disabled: record.name === 'Disabled Task', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <CardToolbox>
        <PageHeader
          ghost
          title="Your Documents"
          subTitle={
            <>
              <span className="title-counter">{documentsTableData.length} Your Documents</span>
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
              dataSource={documentsTableData}
              columns={documentsTableColumns}
              pagination={{
                defaultPageSize: 5,
                total: documentsTableData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
            />
          </TableWrapper>
        </EmployeeTableStyleWrapper>
      </Cards>
    </>
  );
};

export default Document;
