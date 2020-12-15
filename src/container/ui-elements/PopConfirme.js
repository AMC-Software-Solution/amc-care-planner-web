import React from 'react';
import { Row, Col, message, Popconfirm } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Confirme = () => {
  const rtl = useSelector(state => state.ChangeLayoutMode.rtlData);
  const confirm = () => {
    message.success('Click on Yes');
  };

  const cancel = () => {
    message.error('Click on No');
  };

  const text = 'Are you sure to delete this task?';
  const onConfirm = () => {
    message.info('Clicked on Yes.');
  };

  return (
    <>
      <PageHeader
        ghost
        title="Popconfirm"
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
          <Col xl={12} lg={8} xs={24}>
            <Cards title="Basic">
              <Popconfirm
                title="Are you sure delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Link to="#">Delete</Link>
              </Popconfirm>
            </Cards>
          </Col>
          <Col xl={12} lg={16} xs={24}>
            <Cards title="Placement">
              <div className="demo placement-confirm">
                <div
                  className="pop-confirm pop-confirm-top"
                  style={{ [!rtl ? 'marginLeft' : 'marginRight']: 90, whiteSpace: 'nowrap' }}
                >
                  <Popconfirm placement="topLeft" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="white" outlined>
                      TL
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="top" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="white" outlined>
                      Top
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="topRight" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="white" outlined>
                      TR
                    </Button>
                  </Popconfirm>
                </div>
                <div className="pop-confirm pop-confirm-left" style={{ width: 90, float: [!rtl ? 'left' : 'right'] }}>
                  <Popconfirm placement="leftTop" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="white" outlined>
                      LT
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="left" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="white" outlined>
                      Left
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="leftBottom" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="white" outlined>
                      LB
                    </Button>
                  </Popconfirm>
                </div>
                <div
                  className="pop-confirm pop-confirm-right"
                  style={{ width: 90, [!rtl ? 'marginLeft' : 'marginRight']: 390 }}
                >
                  <Popconfirm placement="rightTop" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="white" outlined>
                      RT
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="right" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="white" outlined>
                      Right
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="rightBottom" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="white" outlined>
                      RB
                    </Button>
                  </Popconfirm>
                </div>
                <div
                  className="pop-confirm pop-confirm-bottom"
                  style={{ [!rtl ? 'marginLeft' : 'marginRight']: 100, clear: 'both', whiteSpace: 'nowrap' }}
                >
                  <Popconfirm placement="bottomLeft" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="white" outlined>
                      BL
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="bottom" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="white" outlined>
                      Bottom
                    </Button>
                  </Popconfirm>
                  <Popconfirm placement="bottomRight" title={text} onConfirm={onConfirm} okText="Yes" cancelText="No">
                    <Button size="default" type="white" outlined>
                      BR
                    </Button>
                  </Popconfirm>
                </div>
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Confirme;
