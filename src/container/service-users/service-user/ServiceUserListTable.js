import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { EmployeeTableStyleWrapper } from '../../employees/employee/style';
import { CardToolbox, TableWrapper } from '../../styled';

import { PageHeader } from '../../../components/page-headers/page-headers';
import { AutoComplete } from '../../../components/autoComplete/autoComplete';

import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { getAllServiceUsers } from '../redux/actionCreator';

const ServiceUserListTable = () => {
  const dispatch = useDispatch();
  const { searchData, serviceUsers } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      serviceUsers: state.serviceUsers.data,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    selectedRowKeys: 0,
    selectedRows: 0,
  });

  useEffect(() => {
    dispatch(getAllServiceUsers());
  }, [dispatch]);

  const { notData } = state;

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const serviceUsersTableData = [];
  if (serviceUsers) {
    serviceUsers.map(serviceUser => {
      const {
        id,
        firstName,
        middleName,
        lastName,
        preferredName,
        email,
        serviceUserCode,
        dateOfBirth,
        supportType,
        serviceUserCategory,
        vulnerability,
        source,
        firstLanguage,
        interpreterRequired,
        profilePhotoUrl,
        lastRecordedHeight,
        lastRecordedWeight,
        hasMedicalCondition,
        medicalConditionSummary,
      } = serviceUser;
      return serviceUsersTableData.push({
        key: id,
        id,
        serviceUser: (
          <div className="user-info">
            <figure>
              <img style={{ width: '50px' }} src={profilePhotoUrl} alt="" />
            </figure>
            <figcaption>
              <Heading className="user-magac" as="h6">
                {firstName} {middleName} {lastName}
              </Heading>
            </figcaption>
          </div>
        ),
        preferredName,
        email,
        dateOfBirth,
        serviceUserCode,
        supportType,
        serviceUserCategory,
        vulnerability,
        source,
        firstLanguage,
        interpreterRequired,
        lastRecordedHeight,
        lastRecordedWeight,
        hasMedicalCondition,
        medicalConditionSummary,
        action: (
          <div className="table-actions">
            <>
              <Button className="btn-icon" type="primary" shape="circle">
                <Link to={`/admin/service-users/service-user/profile/${id}`}>
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

  const serviceUsersTableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Service User Code',
      dataIndex: 'serviceUserCode',
      key: 'serviceUserCode',
    },
    {
      title: 'PreferredName',
      dataIndex: 'preferredName',
      key: 'preferredName',
    },
    {
      title: 'Support Type',
      dataIndex: 'supportType',
      key: 'supportType',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Service User Category',
      dataIndex: 'serviceUserCategory',
      key: 'serviceUserCategory',
    },

    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
    },

    {
      title: 'Service User Code',
      dataIndex: 'serviceUserCode',
      key: 'serviceUserCode',
    },

    {
      title: 'Interpreter Required',
      dataIndex: 'interpreterRequired',
      key: 'interpreterRequired',
    },
    {
      title: 'LastRecorded Height',
      dataIndex: 'lastRecordedHeight',
      key: 'lastRecordedHeight',
    },

    {
      title: 'Has Medical Condition',
      dataIndex: 'hasMedicalCondition',
      key: 'hasMedicalCondition',
    },

    {
      title: 'Medical Condition Summary',
      dataIndex: 'medicalConditionSummary',
      key: 'medicalConditionSummary',
    },

    {
      title: 'First Language',
      dataIndex: 'firstLanguage',
      key: 'firstLanguage',
    },

    {
      title: 'Vulnerability',
      dataIndex: 'vulnerability',
      key: 'vulnerability',
    },

    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
    },

    {
      title: 'Last Recorded Weight',
      dataIndex: 'lastRecordedWeight',
      key: 'lastRecordedWeight',
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
          title="Service-User List Data Table"
          subTitle={
            <>
              <span className="title-counter">{serviceUsersTableData.length} Employees</span>
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
              dataSource={serviceUsersTableData}
              columns={serviceUsersTableColumns}
              pagination={{
                defaultPageSize: 5,
                total: serviceUsersTableData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
            />
          </TableWrapper>
        </EmployeeTableStyleWrapper>
      </Cards>
    </>
  );
};

export default ServiceUserListTable;
