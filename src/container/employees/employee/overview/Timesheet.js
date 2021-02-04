import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { EmployeeTableStyleWrapper } from '../style';
import { CardToolbox, TableWrapper } from '../../../styled';

import { PageHeader } from '../../../../components/page-headers/page-headers';
import { AutoComplete } from '../../../../components/autoComplete/autoComplete';

import { Button } from '../../../../components/buttons/buttons';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { getAllTimesheets } from '../../../../redux/timesheet/actionCreator';

const TimesheetListTable = () => {
  const { employeeId } = useParams();
  const dispatch = useDispatch();
  const { searchData, timesheets } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      timesheets: state.timesheets.data,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    selectedRowKeys: 0,
    selectedRows: 0,
  });

  useEffect(() => {
    dispatch(getAllTimesheets(employeeId));
  }, [dispatch, employeeId]);

  const { notData } = state;

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const timesheetsTableData = [];
  if (timesheets) {
    timesheets.map(timesheet => {
      const {
        id,
        description,
        taskId,
        taskTaskName,
        timesheetDate,
        startTime,
        endTime,
        breakStartTime,
        breakEndTime,
        hoursWorked,
        careProviderEmployeeCode,
        serviceUserServiceUserCode,
        clientId,
        createdDate,
        note,
        hasExtraData,
        lastUpdatedDate,
      } = timesheet;
      return timesheetsTableData.push({
        key: id,
        id,
        description,
        taskId,
        taskTaskName,
        timesheetDate,
        startTime,
        endTime,
        breakStartTime,
        breakEndTime,
        hoursWorked,
        careProviderEmployeeCode,
        serviceUserServiceUserCode,
        clientId,
        createdDate,
        note,
        hasExtraData,
        lastUpdatedDate,
        action: (
          <div className="table-actions">
            <>
              <Button className="btn-icon" type="primary" shape="circle">
                <Link to={`/admin/timesheets/timesheet/timesheetProfile/${id}`}>
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

  const timesheetsTableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Task ID',
      dataIndex: 'taskId',
      key: 'taskId',
    },
    {
      title: 'Task Name',
      dataIndex: 'taskTaskName',
      key: 'taskTaskName',
    },
    {
      title: 'Timesheet Date',
      dataIndex: 'timesheetDate',
      key: 'timesheetDate',
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
      title: 'Break Start Time',
      dataIndex: 'breakStartTime',
      key: 'breakStartTime',
    },

    {
      title: 'Break End Time',
      dataIndex: 'breakEndTime',
      key: 'breakEndTime',
    },
    {
      title: 'Hours Worked',
      dataIndex: 'hoursWorked',
      key: 'hoursWorked',
    },
    {
      title: 'Care Provider Employee Code',
      dataIndex: 'careProviderEmployeeCode',
      key: 'careProviderEmployeeCode',
    },
    
    {
      title: 'Service User Code',
      dataIndex: 'serviceUserServiceUserCode',
      key: 'serviceUserServiceUserCode',
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
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },
    {
      title: 'Has Extra Data',
      dataIndex: 'hasExtraData',
      key: 'hasExtraData',
    },

    {
      title: 'Last Updated Date',
      dataIndex: 'lastUpdatedDate',
      key: 'lastUpdatedDate',
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
      disabled: record.name === 'Disabled Timesheet', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <CardToolbox>
        <PageHeader
          ghost
          title="Your Timesheets"
          subTitle={
            <>
              <span className="title-counter">{timesheetsTableData.length} Your Timesheets</span>
              <AutoComplete
                onSearch={handleSearch}
                dataSource={notData}
                placeholder="Search by Name"
                width="100%"
                patterns
              />
            </>
          }
        />
      </CardToolbox>
      <Cards headless>
        <EmployeeTableStyleWrapper>
          <TableWrapper className="table-responsive">
            <Table
              rowSelection={rowSelection}
              dataSource={timesheetsTableData}
              columns={timesheetsTableColumns}
              pagination={{
                defaultPageSize: 5,
                total: timesheetsTableData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
            />
          </TableWrapper>
        </EmployeeTableStyleWrapper>
      </Cards>
    </>
  );
};

export default TimesheetListTable;
