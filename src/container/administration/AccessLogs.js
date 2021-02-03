import React from 'react';
import { Row } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const AccessLogs = () => {
  return (
    <>
      <PageHeader
        ghost
        title="Access Logs"
        buttons={[
          <div key="6" className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <Button size="small" key="4" type="primary">
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

export default AccessLogs;
