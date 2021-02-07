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
import { getAllHolidays } from '../../../../redux/ holidays/actionCreator';




const HolidayListTable = () => {
  const { employeeId } = useParams();
  const dispatch = useDispatch();
  const { searchData, holidays } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      holidays: state.holidays.data,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    selectedRowKeys: 0,
    selectedRows: 0,
  });

  useEffect(() => {
    dispatch(getAllHolidays(employeeId));
  }, [dispatch, employeeId]);

  const { notData } = state;

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const holidaysTableData = [];
  if (holidays) {
                holidays.map(holiday => {
                          const {
                            id,
                            description	,
                            employeeHolidayType	,
                            employeeId	,
                            employeeEmployeeCode	,
                            createdDate	,
                            startDate,
                            endDate	,
                            approvedDate	,
                            clientId	,
                            hasExtraData	,
                            lastUpdatedDate	,
                            note	,
                            rejectionReason	,
                            holidayStatus	,
                            requestedDate	,
                            approvedById	,
                            approvedByEmployeeCode	,
                          } = holiday;
                          return holidaysTableData.push({
                            key: id,
                            id,
                        description	,
                        employeeHolidayType	,
                        employeeId	,
                        employeeEmployeeCode	,
                        createdDate	,
                        startDate,
                        endDate	,
                        approvedDate	,
                        clientId	,
                        hasExtraData	,
                        lastUpdatedDate	,
                        note	,
                        rejectionReason	,
                        holidayStatus	,
                        requestedDate	,
                        approvedById	,
                        approvedByEmployeeCode	,

                        
                                action: (
                                  <div className="table-actions">
                                    <>
                                      <Button className="btn-icon" type="primary" shape="circle">
                                        <Link to={`/admin/holidays/holiday/holidayrofile/${id}`}>
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

  const holidaysTableColumns = [
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
      title: 'Employee ID',
      dataIndex: 'employeeId',
      key: 'employeeId',
    },
    {
      title: 'Employee Holiday Type',
      dataIndex: 'employeeHolidayType',
      key: 'employeeHolidayType',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },
    
    {
      title: 'Employee Code',
      dataIndex: 'employeeEmployeeCode',
      key: 'employeeEmployeeCode',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },

    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },

    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Approved Date',
      dataIndex: 'approvedDate',
      key: 'approvedDate',
    },
    {
      title: 'Approved By ID',
      dataIndex: 'approvedById',
      key: 'approvedById',
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
      title: 'Last Updated Date',
      dataIndex: 'lastUpdatedDate',
      key: 'lastUpdatedDate',
    },

   

    {
      title: 'Rejection Reason',
      dataIndex: 'rejectionReason',
      key: 'rejectionReason',
    },

    {
      title: 'Holiday Status',
      dataIndex: 'holidayStatus',
      key: 'holidayStatus',
    },
    {
      title: 'Requested Date',
      dataIndex: 'requestedDate',
      key: 'requestedDate',
    },
    
    {
      title: 'ApprovedBy Employee Code',
      dataIndex: 'approvedByEmployeeCode',
      key: 'approvedByEmployeeCode',
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
          title="Your Holidays"
          subTitle={
            <>
              <span className="title-counter">{holidaysTableData.length} Your Holidays</span>
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
              dataSource={holidaysTableData}
              columns={holidaysTableColumns}
              pagination={{
                defaultPageSize: 5,
                total: holidaysTableData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
            />
          </TableWrapper>
        </EmployeeTableStyleWrapper>
      </Cards>
    </>
  );
};

export default HolidayListTable;
