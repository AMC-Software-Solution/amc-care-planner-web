import React, { useState } from 'react';
import { Row, Col, Pagination } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Paginations = () => {
  const [state, setstate] = useState({
    current: 0,
    pageSize: 0,
    page: 0,
  });
  const onShowSizeChange = (current, pageSize) => {
    setstate({ ...state, current, pageSize });
  };

  const onChange = pageNumber => {
    setstate({ ...state, pageNumber });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Paginations"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Basic" caption="The simplest use of Pagination">
              <Pagination defaultCurrent={1} total={50} />
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="More Pages" caption="The simplest use of Pagination">
              <Pagination defaultCurrent={1} total={500} />
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Page size" caption="The simplest use of Pagination">
              <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Quick Jumper" caption="The simplest use of Pagination">
              <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Paginations;
