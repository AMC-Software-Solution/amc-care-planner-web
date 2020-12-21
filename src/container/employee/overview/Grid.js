import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Row, Col, Pagination, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { EmployeePagination } from '../style';

const GridCard = lazy(() => import('./GridCard'));

const Grid = () => {
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

  return (
    <Row gutter={25}>
      {employees.length ? (
        employees.map(value => {
          return (
            <Col key={value.id} xl={8} md={12} xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <GridCard value={value} />
              </Suspense>
            </Col>
          );
        })
      ) : (
        <Col md={24}>
          <Cards headless>
            <Heading>Data Not Found!</Heading>
          </Cards>
        </Col>
      )}
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

export default Grid;
