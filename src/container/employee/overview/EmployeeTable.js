import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { EmployeeTableStyleWrapper } from '../style';
import { TableWrapper } from '../../styled';
import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import { Cards } from '../../../components/cards/frame/cards-frame';

const EmployeeListTable = () => {
  const { employees } = useSelector(state => {
    return {
      employees: state.employees.data,
    };
  });

  const employeesTableData = [];
  if (employees) {
    employees.map(employee => {
      const {
        id,
        title,
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
        county,
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
              <img style={{ width: '40px' }} src={photoUrl} alt="" />
            </figure>
            <figcaption>
              <Heading className="user-name" as="h6">
                {title} {firstName} {middleInitial} {lastName}
              </Heading>
              <span className="user-designation">
                {address} {county} {postCode}
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
                <Link to="/admin/employee/employeeProfile/1">
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
    },
  ];

  const rowSelection = {
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled Employee', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
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
  );
};

export default EmployeeListTable;
