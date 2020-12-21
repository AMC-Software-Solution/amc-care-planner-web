import React, { lazy, useState, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Select } from 'antd';
import { Switch, NavLink, Route, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import CreateEmployee from './overview/CreateEmployee';
import { EmployeeHeader, EmployeeSorting } from './style';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { filterEmployeeByGender, sortingEmployeeByCountry } from '../../redux/employees/actionCreator';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';

const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

const Employee = ({ match }) => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.headerSearchData);
  const { path } = match;
  const [state, setState] = useState({
    notData: searchData,
    visible: false,
    categoryActive: 'all',
  });

  const { notData, visible } = state;
  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const onSorting = selectedItems => {
    dispatch(sortingEmployeeByCountry(selectedItems));
  };

  const onChangeCategory = value => {
    setState({
      ...state,
      country: value,
    });
    dispatch(filterEmployeeByGender(value));
  };

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  return (
    <>
      <EmployeeHeader>
        <PageHeader
          ghost
          title="Employee"
          subTitle={<>12 Running Employees</>}
          buttons={[
            <Button onClick={showModal} key="1" type="primary" size="default">
              <FeatherIcon icon="plus" size={16} /> Create Employees
            </Button>,
          ]}
        />
      </EmployeeHeader>
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <EmployeeSorting>
              <div className="employee-sort-bar">
                <div className="employee-sort-nav">
                  <nav>
                    <ul>
                      <li className={state.categoryActive === 'all' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('all')} to="#">
                          All
                        </Link>
                      </li>
                      <li className={state.categoryActive === 'progress' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('progress')} to="#">
                          In Progress
                        </Link>
                      </li>
                      <li className={state.categoryActive === 'complete' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('complete')} to="#">
                          Complete
                        </Link>
                      </li>
                      <li className={state.categoryActive === 'late' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('late')} to="#">
                          Late
                        </Link>
                      </li>
                      <li className={state.categoryActive === 'early' ? 'active' : 'deactivate'}>
                        <Link onClick={() => onChangeCategory('early')} to="#">
                          Early
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="employee-sort-search">
                  <AutoComplete onSearch={handleSearch} dataSource={notData} placeholder="Search employees" patterns />
                </div>
                <div className="employee-sort-group">
                  <div className="sort-group">
                    <span>Sort By:</span>
                    <Select onChange={onSorting} defaultValue="category">
                      <Select.Option value="category">Employee Category</Select.Option>
                      <Select.Option value="rate">Top Rated</Select.Option>
                      <Select.Option value="popular">Popular</Select.Option>
                      <Select.Option value="time">Newest</Select.Option>
                      <Select.Option value="price">Price</Select.Option>
                    </Select>
                    <div className="layout-style">
                      <NavLink to={`${path}/grid`}>
                        <FeatherIcon icon="grid" size={16} />
                      </NavLink>
                      <NavLink to={`${path}/list`}>
                        <FeatherIcon icon="list" size={16} />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </EmployeeSorting>
            <div>
              <Switch>
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Route path={path} component={Grid} exact />
                  <Route path={`${path}/grid`} component={Grid} />
                  <Route path={`${path}/list`} component={List} />
                </Suspense>
              </Switch>
            </div>
          </Col>
        </Row>
        <CreateEmployee onCancel={onCancel} visible={visible} />
      </Main>
    </>
  );
};

Employee.propTypes = {
  match: propTypes.object,
};

export default Employee;
