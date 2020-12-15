import React, { useState } from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Modal, alertModal } from '../../components/modals/antd-modals';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const info = () => {
  alertModal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
};

const success = () => {
  alertModal.success({
    content: 'some messages...some messages...',
  });
};

const error = () => {
  alertModal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
};

const warning = () => {
  alertModal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
};

const selfDestroyed = () => {
  let secondsToGo = 5;
  const modal = alertModal.success({
    title: 'This is a notification message',
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });

  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
};

const showConfirm = () => {
  alertModal.confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => {});
    },
    onCancel() {},
  });
};

const Modals = () => {
  const [state, setState] = useState({ visible: false, modalType: 'primary', colorModal: false });

  const showModal = type => {
    setState({
      visible: true,
      modalType: type,
    });
  };

  const showColorModal = type => {
    setState({
      colorModal: true,
      modalType: type,
    });
  };

  const handleOk = () => {
    setState({
      visible: false,
      colorModal: false,
    });
  };

  const handleCancel = () => {
    setState({
      visible: false,
      colorModal: false,
    });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Modals"
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
        <Row gutter={15}>
          <Col md={12}>
            <Modal
              type={state.modalType}
              title="Basic Modal"
              visible={state.visible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            <Cards title="Default Modal" size="large" caption="Default Ant Design Modal">
              <p>
                When requiring users to interact with the application, but without jumping to a new page and
                interrupting the user&apos;s workflow, you can use Modal to create a new floating layer over the current
                page to get user feedback or display information. Additionally
              </p>
              <div className="modal-btns-wrap">
                <Button onClick={() => showModal('primary')} type="primary" style={{ margin: '5px' }}>
                  Primary
                </Button>
                <Button onClick={() => showModal('success')} type="success" style={{ margin: '5px' }}>
                  Success
                </Button>
                <Button onClick={() => showModal('danger')} type="danger" style={{ margin: '5px' }}>
                  Danger
                </Button>
                <Button onClick={() => showModal('warning')} type="warning" style={{ margin: '5px' }}>
                  Warning
                </Button>
              </div>
            </Cards>
          </Col>
          <Col md={12}>
            <Modal
              type={state.modalType}
              color
              title="Basic Modal"
              visible={state.colorModal}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            <Cards title="Color Modal" size="large" caption="Color Ant Design Modal">
              <p>
                When requiring users to interact with the application, but without jumping to a new page and
                interrupting the user&apos;s workflow, you can use Modal to create a new floating layer over the current
                page to get user feedback or display information. Additionally
              </p>
              <div className="modal-btns-wrap">
                <Button onClick={() => showColorModal('primary')} type="primary" style={{ margin: '5px' }}>
                  Primary
                </Button>
                <Button onClick={() => showColorModal('success')} type="success" style={{ margin: '5px' }}>
                  Success
                </Button>
                <Button onClick={() => showColorModal('danger')} type="danger" style={{ margin: '5px' }}>
                  Danger
                </Button>
                <Button onClick={() => showColorModal('warning')} type="warning" style={{ margin: '5px' }}>
                  Warning
                </Button>
              </div>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Information Modal" size="large" caption="Notification Ant Design Modal">
              <p>
                When requiring users to interact with the application, but without jumping to a new page and
                interrupting the user&apos;s workflow, you can use Modal to create a new floating layer over the current
                page to get user feedback or display information. Additionally
              </p>
              <div className="modal-btns-wrap">
                <Button onClick={success} type="success" style={{ margin: '5px' }}>
                  Success
                </Button>
                <Button onClick={error} type="error" style={{ margin: '5px' }}>
                  Error
                </Button>
                <Button onClick={warning} type="warning" style={{ margin: '5px' }}>
                  Warning
                </Button>
                <Button onClick={info} type="info" style={{ margin: '5px' }}>
                  Info
                </Button>
                <Button onClick={selfDestroyed} type="primary" style={{ margin: '5px' }}>
                  Modal Self Destroyed
                </Button>
                <Button onClick={showConfirm} type="primary" style={{ margin: '5px' }}>
                  Confirm
                </Button>
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Modals;
