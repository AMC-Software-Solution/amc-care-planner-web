import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { UserTableStyleWrapper } from '../../pages/style';
import { TableWrapper } from '../../styled';
import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import { Cards } from '../../../components/cards/frame/cards-frame';

const EmployeeListTable = () => {
  const { employees } = useSelector(state => {
    return {
      employees: state.employees,
    };
  });

  const employeesTableData = [];

  employees.map(employee => {
    const { id, title, firstName, middleName, lastName, photoUrl } = employee;

    return employeesTableData.push({
      key: id,
      profilePhoto: (
        <div className="user-info">
          <figure>
            <img style={{ width: '40px' }} src={require(`../../../${photoUrl}`)} alt="" />
          </figure>
          <figcaption>
            <Heading className="user-name" as="h6">
              {firstName} {middleName} {lastname}
            </Heading>
            <span className="user-designation">San Francisco, CA</span>
          </figcaption>
        </div>
      ),
      title: "Mr.",
      firstName:"Ahmed",
      middleName: 'S',
      lastName: 'Dini',
      /*
      status: <span className={`status-text ${status}`}>{status}</span>,
      */
      action: (
        <div className="table-actions">
          <>
            <Button className="btn-icon" type="primary" to="#" shape="circle">
              <FeatherIcon icon="eye" size={16} />
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

  const employeesTableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Profile Photo',
      dataIndex: 'profilePhoto',
      key: 'profilePhoto',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Middle Name',
      dataIndex: 'middleName',
      key: 'middleName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
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
      <UserTableStyleWrapper>
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
      </UserTableStyleWrapper>
    </Cards>
  );
};

export default EmployeesListTable;
