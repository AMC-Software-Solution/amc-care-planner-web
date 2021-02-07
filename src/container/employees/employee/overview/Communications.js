import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { EmployeeTableStyleWrapper } from '../style';
import { CardToolbox, TableWrapper } from '../../../styled';

import { PageHeader } from '../../../../components/page-headers/page-headers';
import { AutoComplete } from '../../../../components/autoComplete/autoComplete';

import { Button } from '../../../../components/buttons/buttons';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { getAllCommunications } from '../../../../redux/communications/actionCreator';

const CommunicationListTable = () => {
  const { employeeId } = useParams();
  const dispatch = useDispatch();
  const { searchData, communications } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      communications: state.communications.data,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    selectedRowKeys: 0,
    selectedRows: 0,
  });

  useEffect(() => {
    dispatch(getAllCommunications(employeeId));
  }, [dispatch, employeeId]);

  const { notData } = state;

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const communicationsTableData = [];
  if (communications) {
    communications.map(communication => {
      const {
       

        id	,
        clientId	,
        note	,
        communicatedByEmployeeCode	,
        communicatedById	,
        communicationDate	,
        communicationType	,
        createdDate	,
        hasExtraData	,
        lastUpdatedDate	,
        serviceUserId	,
        serviceUserServiceUserCode	,

        attachment	,
        attachmentContentType	,
        attachmentUrl	,
      } = communication;
      return communicationsTableData.push({
        key: id,
       

      id	,
      clientId	,
      note	,
      communicatedByEmployeeCode	,
      communicatedById	,
      communicationDate	,
      communicationType	,
      createdDate	,
      hasExtraData	,
      lastUpdatedDate	,
      serviceUserId	,
      serviceUserServiceUserCode	,
      attachment	,
      attachmentContentType	,
      attachmentUrl	,
        action: (
          <div className="table-actions">
            <>
              <Button className="btn-icon" type="primary" shape="circle">
                <Link to={`/admin/communications/communication/communicationProfile/${id}`}>
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

  const communicationsTableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Client ID',
      dataIndex: 'clientId',
      key: 'clientId',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },

    {
      title: 'Communicated By EmployeeCode',
      dataIndex: 'communicatedByEmployeeCode',
      key: 'communicatedByEmployeeCode',
    },
    {
      title: 'Communicated By ID',
      dataIndex: 'communicatedById',
      key: 'communicatedById',
    },
    {
      title: 'Communication Date',
      dataIndex: 'communicationDate',
      key: 'communicationDate',
    },
    {
      title: 'Communication Type',
      dataIndex: 'communicationType',
      key: 'communicationType',
    },

    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },

    {
      title: 'HasExtra Data',
      dataIndex: 'hasExtraData',
      key: 'hasExtraData',
    },

    {
      title: 'Last Updated Date',
      dataIndex: 'lastUpdatedDate',
      key: 'lastUpdatedDate',
    },
    
    {
      title: 'Service UserId',
      dataIndex: 'serviceUserId',
      key: 'serviceUserId',
    },

    {
      title: 'ServiceUser Service User Code',
      dataIndex: 'serviceUserServiceUserCode',
      key: 'serviceUserServiceUserCode',
    },

    {
      title: 'Attachment',
      dataIndex: 'attachment',
      key: 'attachment',
    },

    {
      title: 'Attachment Content Type',
      dataIndex: 'attachmentContentType',
      key: 'attachmentContentType',
    },

    {
      title: 'Attachment Url',
      dataIndex: 'attachmentUrl',
      key: 'attachmentUrl',
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
      disabled: record.name === 'Disabled Communication', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <CardToolbox>
        <PageHeader
          ghost
          title="Your Communications"
          subTitle={
            <>
              <span className="title-counter">{communicationsTableData.length} Your Communications</span>
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
              dataSource={communicationsTableData}
              columns={communicationsTableColumns}
              pagination={{
                defaultPageSize: 5,
                total: communicationsTableData.length,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              }}
            />
          </TableWrapper>
        </EmployeeTableStyleWrapper>
      </Cards>
    </>
  );
};

export default CommunicationListTable;










// import React from 'react';
// import { Row } from 'antd';
// import FeatherIcon from 'feather-icons-react';
// import { PageHeader } from '../../../../components/page-headers/page-headers';
// import { Button } from '../../../../components/buttons/buttons';
// import { Main } from '../../../styled';
// import { ExportButtonPageHeader } from '../../../../components/buttons/export-button/export-button';
// import { CalendarButtonPageHeader } from '../../../../components/buttons/calendar-button/calendar-button';

// const Communications = () => {
//   return (
//     <>
//       <PageHeader
//         ghost
//         title="Communications"
//         buttons={[
//           <div key="1" className="page-header-actions">
//             <CalendarButtonPageHeader />
//             <ExportButtonPageHeader />
//             <Button size="small" type="primary">
//               <FeatherIcon icon="plus" size={14} />
//               Add New
//             </Button>
//           </div>,
//         ]}
//       />
//       <Main>
//         <Row justify="center" gutter={25}>
//           <div>WELCOME!</div>
//         </Row>
//       </Main>
//     </>
//   );
// };

// export default Communications;