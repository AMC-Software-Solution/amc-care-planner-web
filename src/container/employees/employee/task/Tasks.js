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

const Task = ({tasks}) => {
  const tasksTableData = [];
  if (tasks) {
    tasks.map(task => {
      const {
        id,
        taskName,
        description,
        dateOfTask,
        startTime,
        endTime,
        status,
        createdDate,
        lastUpdatedDate,
        clientId,
        hasExtraData,
        serviceUserId,
        assignedToId,
        assignedToEmployeeCode,
        serviceOrderId,
        serviceOrderTitle,
        createdById,
        createdByEmployeeCode,
        allocatedById,
        allocatedByEmployeeCode,
      } = task;
      return tasksTableData.push({
        key: id,
        id,
        taskName,
        description,
        dateOfTask,
        startTime,
        endTime,
        status,
        createdDate,
        lastUpdatedDate,
        clientId,
        hasExtraData,
        serviceUserId,
        assignedToId,
        assignedToEmployeeCode,
        serviceOrderId,
        serviceOrderTitle,
        createdById,
        createdByEmployeeCode,
        allocatedById,
        allocatedByEmployeeCode,
        action: (
          <div className="table-actions">
            <>
              <Button className="btn-icon" type="primary" shape="circle">
                <Link to={`/admin/tasks/task/taskProfile/${id}`}>
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

  const tasksTableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Task Date',
      dataIndex: 'taskDate',
      key: 'taskDate',
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      key: 'endTime',
    },

    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },

    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },

    {
      title: 'Last Updated Date',
      dataIndex: 'lastUpdatedDate',
      key: 'lastUpdatedDate',
    },
    {
      title: 'Client ID',
      dataIndex: 'clientId',
      key: 'clientId',
    },

    {
      title: 'Has Extra Data',
      dataIndex: 'hasExtraData',
      key: 'hasExtraData',
    },

    {
      title: 'Service User Id',
      dataIndex: 'serviceUserId',
      key: 'serviceUserId',
    },

    {
      title: 'Assigned To ID',
      dataIndex: 'assignedToId',
      key: 'assignedToId',
    },

    {
      title: 'Assigned To Employee Code',
      dataIndex: 'assignedToEmployeeCode',
      key: 'assignedToEmployeeCode',
    },

    {
      title: 'Service Order Title',
      dataIndex: 'serviceOrderTitle',
      key: 'serviceOrderTitle',
    },

    {
      title: 'Created By Employee Code',
      dataIndex: 'createdByEmployeeCode',
      key: 'createdByEmployeeCode',
    },
    {
      title: 'Allocated By Employee Code',
      dataIndex: 'allocatedByEmployeeCode',
      key: 'allocatedByEmployeeCode',
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
          title="Your Tasks"
          subTitle={
            <>
              <span className="title-counter">{tasksTableData.length} Your Tasks</span>
              <AutoComplete placeholder="Search by Name" width="100%" patterns />
              <Button size="small" type="primary">
                <FeatherIcon icon="plus" size={14} />
                Create New Tasks
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
              dataSource={tasksTableData}
              columns={tasksTableColumns}
              pagination={{
                defaultPageSize: 5,
                total: tasksTableData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
            />
          </TableWrapper>
        </EmployeeTableStyleWrapper>
      </Cards>
    </>
  );
};

export default Task;
