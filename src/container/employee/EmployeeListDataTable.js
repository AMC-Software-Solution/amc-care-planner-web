
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import EmployeeListTable from './overview/EmployeeTable';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import Heading from '../../components/heading/heading';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { getAllEmployees } from '../../redux/employees/actionCreator';

const EmployeeList = () => {
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
    
  },[]);

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
    const { id , title , firstName , middleInitial , lastName , preferredName , gender , employeeCode , email , nationalInsuranceNumber , employeeContractType , pinCode , transportMode, address , county , postCode , dateOfBirth ,  photo, photoContentType, photoUrl , acruedHolidayHours , lastUpdatedDate , clientId , userId , userLogin , nationalityId ,nationalityCountryName } = employee;
    return employeesTableData.push({
      key: id,
      id: id,
      employee: (
        <div className="user-info">
          <figure>
            <img style={{ width: '40px' }} src={photoUrl} alt="" />
          </figure>
          <figcaption>
            <Heading className="user-name" as="h6">
              {title} {firstName} {middleInitial} {lastName}
            </Heading>
            <span className="user-designation">{address} {county} {postCode}</span>
          </figcaption>
        </div>
      ),
      preferredName: preferredName,
      gender:gender,
      email: email,
      nationalInsuranceNumber: nationalInsuranceNumber,
      dateOfBirth:dateOfBirth,
      employeeCode: employeeCode,
      employeeContractType: employeeContractType,
      pinCode:pinCode,
      transportMode:transportMode,
      acruedHolidayHours: acruedHolidayHours,
      clientId:clientId,
      userId:userId,
      nationality:nationalityCountryName,
      lastUpdatedDate:lastUpdatedDate,
      action: (
        <div className="table-actions">
          <>
            <Button className="btn-icon" type="primary" shape="circle">
               <Link to="/admin/employee/employeeProfile/1"><FeatherIcon icon="eye" size={16} /></Link>
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

  return (
    <>
      <CardToolbox>
        <PageHeader
          ghost
          title="Employee List Data Table"
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
              <Link to="/admin/employees/add-employee/info">+ Add New Employee</Link>
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
