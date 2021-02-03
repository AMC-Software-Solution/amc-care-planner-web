import React from 'react';
import { Row } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Invoice = () => {
  return (
    <>
      <PageHeader
        ghost
        title="Invoice"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row justify="center" gutter={25}>
          <div>WELCOME!</div>
        </Row>
      </Main>
    </>
  );
};

export default Invoice;
