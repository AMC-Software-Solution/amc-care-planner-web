import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import EmployeeListTable from '../employees/overview/EmployeeTable';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import Heading from '../../components/heading/heading';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';

const EmployeeList = () => {
  const { searchData, employees } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      employees: state.employees,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    selectedRowKeys: 0,
    selectedRows: 0,
  });

  const { notData } = state;

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

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

  return (
    <>
      <CardToolbox>
        <PageHeader
          ghost
          title="Employees List"
          subTitle={
            <>
              <span className="title-counter">274 Employees </span>
              <AutoComplete
                onSearch={handleSearch}
                dataSource={notData}
                placeholder="Search by Name"
                width="100%"
                patterns
              />
            </>
          }
          buttons={[
            <Button className="btn-add_new" size="default" type="primary" key="1">
              <Link to="/admin/users/add-user/info">+ Add New User</Link>
            </Button>,
          ]}
        />
      </CardToolbox>

      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <EmployeeListTable />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default EmployeeList;
