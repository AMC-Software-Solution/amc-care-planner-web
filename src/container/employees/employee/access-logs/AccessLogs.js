
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

const AccessLogs = ({accessLogs}) => {
  const accessLogsTableData = [];
  if (accessLogs) {
    accessLogs.map(accessLog => {
      const {
        id,
        clientId,
        keySafeNumber,
        AccesDetails,
        createdDate,
        hasExtraData,
        lastUpdatedDate,
        

        
      } = accessLog;
      return accessLogsTableData.push({
        key: id,

        clientId,
        keySafeNumber,
        AccesDetails,
        createdDate,
        hasExtraData,
        lastUpdatedDate,
        action: (
          <div className="table-actions">
            <>
              <Button className="btn-icon" type="primary" shape="circle">
                <Link to={`/admin/accesLogs/accessLog/accessLogProfile/${id}`}>
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

  const accessLogsTableColumns = [
   
    {
      title: 'Client ID',
      dataIndex: 'clientId',
      key: 'clientId',
    },
    {
      title: 'key Safe Number',
      dataIndex: 'keySafeNumber',
      key: 'keySafeNumber',
    },

    {
      title: 'Acces Details',
      dataIndex: 'AccesDetails',
      key: 'AccesDetails',
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
      disabled: record.name === 'Disabled AccessLog', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <CardToolbox>
        <PageHeader
          ghost
          title="Your Access Log"
          subTitle={
            <>
              <span className="title-counter">{accessLogsTableData.length} Your AccessLogs</span>
              <AutoComplete placeholder="Search by Name" width="100%" patterns />
              <Button size="small" type="primary">
                <FeatherIcon icon="plus" size={14} />
                Create New Access Logs
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
              dataSource={accessLogsTableData}
              columns={accessLogsTableColumns}
              pagination={{
                defaultPageSize: 5,
                total: accessLogsTableData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
            />
          </TableWrapper>
        </EmployeeTableStyleWrapper>
      </Cards>
    </>
  );
};


export default AccessLogs;
