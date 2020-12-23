import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Progress, Pagination, Tag } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { EmployeePagination, EmployeeListTitle, EmployeeListAssignees, EmployeeList } from '../style';
import { Dropdown } from '../../../components/dropdown/dropdown';

const EmployeeLists = () => {
  const employee = useSelector(state => state.employees.data);
  const [state, setState] = useState({
    employees: employee,
    current: 0,
    pageSize: 0,
  });
  const { employees } = state;

  useEffect(() => {
    if (employee) {
      setState({
        employees: employee,
      });
    }
  }, [employee]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  const dataSource = [];

  if (employees.length)
    employees.map(value => {
      const { id, title, status, category, percentage } = value;
      return dataSource.push({
        key: id,
        employee: (
          <EmployeeListTitle>
            <Heading as="h4">
              <Link to={`/admin/employee/employeeProfile/${id}`}>{title}</Link>
            </Heading>

            <p>{category}</p>
          </EmployeeListTitle>
        ),
        startDate: <span className="date-started">26 Dec 2019</span>,
        deadline: <span className="date-finished">18 Mar 2020</span>,
        assigned: (
          <EmployeeListAssignees>
            <ul>
              <li>
                <img src={require(`../../../static/img/users/1.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/2.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/3.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/4.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/5.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/6.png`)} alt="" />
              </li>
              <li>
                <img src={require(`../../../static/img/users/7.png`)} alt="" />
              </li>
            </ul>
          </EmployeeListAssignees>
        ),
        status: <Tag className={status}>{status}</Tag>,
        completion: (
          <div className="employee-list-progress">
            <Progress percent={status === 'complete' ? 100 : percentage} strokeWidth={5} className="progress-primary" />
            <p>12/15 Task Completed</p>
          </div>
        ),
        action: (
          <Dropdown
            className="wide-dropdwon"
            content={
              <>
                <Link to="#">View</Link>
                <Link to="#">Edit</Link>
                <Link to="#">Delete</Link>
              </>
            }
          >
            <Link to="#">
              <FeatherIcon icon="more-horizontal" size={18} />
            </Link>
          </Dropdown>
        ),
      });
    });

  const columns = [
    {
      title: 'Employee',
      dataIndex: 'employee',
      key: 'employee',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: 'Assigned To',
      dataIndex: 'assigned',
      key: 'assigned',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Completion',
      dataIndex: 'completion',
      key: 'completion',
    },

    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  return (
    <Row gutter={25}>
      <Col xs={24}>
        <Cards headless>
          <EmployeeList>
            <div className="table-responsive">
              <Table pagination={false} dataSource={dataSource} columns={columns} />
            </div>
          </EmployeeList>
        </Cards>
      </Col>
      <Col xs={24} className="pb-30">
        <EmployeePagination>
          {employees.length ? (
            <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={40}
            />
          ) : null}
        </EmployeePagination>
      </Col>
    </Row>
  );
};

export default EmployeeLists;
