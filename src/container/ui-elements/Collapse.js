import React, { useState } from 'react';
import { Row, Col, Collapse } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { RightOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const { Panel } = Collapse;
const Collapses = () => {
  const [state, setstate] = useState({
    key: 0,
  });
  const callback = key => {
    setstate({ ...state, key });
  };

  const customPanelStyle = {
    background: '#F8F9FB',
    borderRadius: 3,
    marginBottom: 20,
    border: 0,
    overflow: 'hidden',
  };

  return (
    <>
      <PageHeader
        title="Collapse"
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
          <Col md={12}>
            <Cards title="Basic">
              <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 3" key="3" disabled>
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Cards>
            <Cards title="Nested Panel">
              <Collapse onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                  <Collapse defaultActiveKey="1">
                    <Panel header="This is panel nest panel" key="1">
                      <p>
                        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
                        as a welcome guest in many households across the world.
                      </p>
                    </Panel>
                  </Collapse>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Cards>
            <Cards title="No arrow">
              <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel showArrow={false} header="This is panel header 2" key="2">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Accordion">
              <Collapse defaultActiveKey={['1']} accordion>
                <Panel header="This is panel header 1" key="1">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Cards>
            <Cards title="Borderless">
              <Collapse defaultActiveKey={['1']} bordered={false}>
                <Panel header="This is panel header 1" key="1">
                  <p style={{ paddingLeft: '24px' }}>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p style={{ paddingLeft: '24px' }}>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p style={{ paddingLeft: '24px' }}>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Cards>
            <Cards title="Custom Panel">
              <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : 0} />}
                style={{ background: '#fff' }}
              >
                <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
                <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    welcome guest in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Collapses;
