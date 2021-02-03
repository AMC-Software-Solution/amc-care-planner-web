import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import EmployeeListTable from './overview/EmployeeListTable';
import { Main } from '../../styled';
import { getAllEmployees } from '../../../redux/employees/actionCreator';

const EmployeeListContainer = () => {
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

  return (
    <Main>
      <Row gutter={15}>
        <Col md={24}>
          <EmployeeListTable employees={employees} handleSearch={handleSearch} notData={notData} />
        </Col>
      </Row>
    </Main>
  );
};

export default EmployeeListContainer;
