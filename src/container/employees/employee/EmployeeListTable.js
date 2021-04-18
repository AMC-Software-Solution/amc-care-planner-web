import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { EmployeeTableStyleWrapper } from './style';
import { CardToolbox, TableWrapper } from '../../styled';

import { PageHeader } from '../../../components/page-headers/page-headers';
import { AutoComplete } from '../../../components/autoComplete/autoComplete';

import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { getAllEmployees } from '../redux/actionCreator';

const EmployeeListTable = () => {
  const dispatch = useDispatch();
  const { searchData, employees } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      employees: state.employees.data,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    selectedRowKeys: 0,
    selectedRows: 0,
  });

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  const { notData } = state;

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const employeesTableData = [];
  if (employees) {
    employees.map(employee => {
      const {
        id,
        firstName,
        middleInitial,
        lastName,
        preferredName,
        gender,
        employeeCode,
        email,
        nationalInsuranceNumber,
        employeeContractType,
        pinCode,
        transportMode,
        address,
        postCode,
        dateOfBirth,
        photoUrl,
        acruedHolidayHours,
        lastUpdatedDate,
        clientId,
        userId,
        nationalityCountryName,
      } = employee;
      return employeesTableData.push({
        key: id,
        id,
        employee: (
          <div className="user-info">
            <figure>
              <img style={{ width: '50px' }} src={photoUrl} alt="" />
            </figure>
            <figcaption>
              <Heading className="user-magac" as="h6">
                {firstName} {middleInitial} {lastName}
              </Heading>
              <span className="user-designation">
                {address} {postCode}
              </span>
            </figcaption>
          </div>
        ),
        preferredName,
        gender,
        email,
        nationalInsuranceNumber,
        dateOfBirth,
        employeeCode,
        employeeContractType,
        pinCode,
        transportMode,
        acruedHolidayHours,
        clientId,
        userId,
        nationality: nationalityCountryName,
        lastUpdatedDate,
        action: (
          <div className="table-actions">
            <>
              <Button className="btn-icon" type="primary" shape="circle">
                <Link to={`/admin/employees/employee/tabs/employee-profile/${id}`}>
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

  const employeesTableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Employee',
      dataIndex: 'employee',
      key: 'employee',
    },
    {
      title: 'PreferredName',
      dataIndex: 'preferredName',
      key: 'preferredName',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'National Insurance Number',
      dataIndex: 'nationalInsuranceNumber',
      key: 'nationalInsuranceNumber',
    },

    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
    },

    {
      title: 'Employee Code',
      dataIndex: 'employeeCode',
      key: 'employeeCode',
    },

    {
      title: 'Employee Contract Type',
      dataIndex: 'employeeContractType',
      key: 'employeeContractType',
    },
    {
      title: 'PIN Code',
      dataIndex: 'pinCode',
      key: 'pinCode',
    },

    {
      title: 'Transport Mode',
      dataIndex: 'transportMode',
      key: 'transportMode',
    },

    {
      title: 'Acrued Holiday Hours',
      dataIndex: 'acruedHolidayHours',
      key: 'acruedHolidayHours',
    },

    {
      title: 'Client ID',
      dataIndex: 'clientId',
      key: 'clientId',
    },

    {
      title: 'User Id',
      dataIndex: 'userId',
      key: 'userId',
    },

    {
      title: 'Nationality',
      dataIndex: 'nationality',
      key: 'nationality',
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
      disabled: record.name === 'Disabled Employee', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <CardToolbox>
        <PageHeader
          ghost
          title="Employee List Data Table"
          subTitle={
            <>
              <span className="title-counter">{employeesTableData.length} Employees</span>
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
              dataSource={employeesTableData}
              columns={employeesTableColumns}
              pagination={{
                defaultPageSize: 5,
                total: employeesTableData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
            />
          </TableWrapper>
        </EmployeeTableStyleWrapper>
      </Cards>
    </>
  );
};

export default EmployeeListTable;
