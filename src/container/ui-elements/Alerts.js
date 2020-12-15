import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, AlertList } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Alert from '../../components/alerts/alerts';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Alerts = () => {
  return (
    <>
      <PageHeader
        title="Alerts"
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
          <Col md={12} xs={24}>
            <Cards title="Basic" size="large">
              <AlertList>
                <div className="alert-empty-message">
                  <Alert message="" description="Success Text" type="success" />
                </div>
              </AlertList>
            </Cards>
            <Cards title="Closable" size="large">
              <AlertList>
                <div className="alert-empty-message">
                  <Alert
                    closable
                    message=""
                    description="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                    type="warning"
                  />
                </div>
                <Alert
                  closable
                  message="Error Text"
                  description="Error Text Error Text Warning TextW Error Text Error Text Error TextError Text"
                  type="error"
                />
              </AlertList>
            </Cards>
            <Cards title="Icon" size="large">
              <AlertList>
                <div className="alert-empty-message">
                  <Alert
                    showIcon
                    icon={<FeatherIcon icon="layers" size={15} />}
                    message=""
                    description="Success Tips"
                    type="success"
                  />
                  <Alert
                    showIcon
                    icon={<FeatherIcon icon="layers" size={15} />}
                    message=""
                    description="Informational Notes"
                    type="info"
                  />
                  <Alert
                    showIcon
                    icon={<FeatherIcon icon="layers" size={15} />}
                    message=""
                    description="Warning"
                    type="warning"
                  />
                  <Alert
                    showIcon
                    icon={<FeatherIcon icon="layers" size={15} />}
                    message=""
                    description="Error"
                    type="error"
                  />
                </div>
                <Alert
                  showIcon
                  icon={<FeatherIcon icon="layers" size={15} />}
                  message="Success Tips"
                  description="Detailed description and advice about successful copywriting."
                  type="success"
                />
                <Alert
                  showIcon
                  icon={<FeatherIcon icon="layers" size={15} />}
                  message="Informational Notes"
                  description="Additional description and information about copywriting."
                  type="info"
                />
                <Alert
                  showIcon
                  icon={<FeatherIcon icon="layers" size={15} />}
                  message="Warning"
                  description="This is a warning notice about copywriting."
                  type="warning"
                />
                <Alert
                  showIcon
                  icon={<FeatherIcon icon="layers" size={15} />}
                  message="Error"
                  description="This is an error message about copywriting."
                  type="error"
                />
              </AlertList>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="More Types" size="large">
              <AlertList>
                <div className="alert-empty-message">
                  <Alert message="" description="Success Text" type="success" />
                  <Alert message="" description="Info Text" type="info" />
                  <Alert message="" description="Warning Text" type="warning" />
                  <Alert message="" description="Error Text" type="error" />
                </div>
              </AlertList>
            </Cards>
            <Cards title="Description" size="large">
              <AlertList>
                <Alert
                  message="Success Text"
                  description="Success Description Success Description Success Description"
                  type="success"
                />
                <Alert
                  message="Info Text"
                  description="Info Description Info Description Info Description Info Description"
                  type="info"
                />
                <Alert
                  message="Warning Text"
                  description="Warning Description Warning Description Warning Description Warning Description"
                  type="warning"
                />
                <Alert
                  message="Error Text"
                  description="Error Description Error Description Error Description Error Description"
                  type="error"
                />
              </AlertList>
            </Cards>
            <Cards title="Customized Close Text" size="large">
              <AlertList>
                <div className="alert-empty-message">
                  <Alert closeText="Close Now" closable message="" description="Info Text" type="info" />
                </div>
              </AlertList>
            </Cards>
            <Cards title="Smoothly Unmount" size="large">
              <AlertList>
                <div className="alert-empty-message">
                  <Alert closable message="" description="Alert Message Text" type="success" />
                </div>
              </AlertList>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Alerts;
