import React from 'react';
import { Form, Col, Row, Input, Select, DatePicker } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Drawer } from '../../components/drawer/drawer';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const { Option } = Select;
const Drawers = () => {
  return (
    <>
      <PageHeader
        ghost
        title="Drawer"
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
          <Col lg={12} xs={24}>
            <div className="atbd-drawer">
              <Cards title="Basic" caption="The simplest use of Drawer">
                <Drawer title="Basic Drawer" placement="right">
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Drawer>
              </Cards>
            </div>
          </Col>
          <Col lg={12} xs={24}>
            <div className="atbd-drawer">
              <Cards title="Custom placement" caption="The simplest use of Drawer">
                <div className="drawer-placement">
                  <Drawer customPlacement title="Basic Drawer">
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Drawer>
                </div>
              </Cards>
            </div>
          </Col>
          <Col lg={12} xs={24}>
            <Cards title="Render in current dom" caption="The simplest use of Drawer">
              <div
                style={{
                  height: 200,
                  overflow: 'hidden',
                  position: 'relative',
                  padding: 48,
                  textAlign: 'center',
                }}
              >
                <Drawer render title="Basic Drawer">
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Drawer>
              </div>
            </Cards>
          </Col>
          <Col lg={12} xs={24}>
            <div className="atbd-drawer">
              <Cards title="Submit form in drawer" caption="The simplest use of Drawer">
                <Drawer btnText="+ New account" title="Basic Drawer">
                  <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                      <Col lg={12} sm={24} xs={24}>
                        <Form.Item
                          name="name"
                          label="Name"
                          rules={[{ required: true, message: 'Please enter user name' }]}
                        >
                          <Input placeholder="Please enter user name" />
                        </Form.Item>
                      </Col>
                      <Col lg={12} sm={24} xs={24}>
                        <Form.Item name="url" label="Url" rules={[{ required: true, message: 'Please enter url' }]}>
                          <Input
                            style={{ width: '100%' }}
                            addonBefore="http://"
                            addonAfter=".com"
                            placeholder="Please enter url"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col lg={12} sm={24} xs={24}>
                        <Form.Item
                          name="owner"
                          label="Owner"
                          rules={[{ required: true, message: 'Please select an owner' }]}
                        >
                          <Select placeholder="Please select an owner">
                            <Option value="xiao">Xiaoxiao Fu</Option>
                            <Option value="mao">Maomao Zhou</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col lg={12} sm={24} xs={24}>
                        <Form.Item
                          name="type"
                          label="Type"
                          rules={[{ required: true, message: 'Please choose the type' }]}
                        >
                          <Select placeholder="Please choose the type">
                            <Option value="private">Private</Option>
                            <Option value="public">Public</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col lg={12} sm={24} xs={24}>
                        <Form.Item
                          name="approver"
                          label="Approver"
                          rules={[{ required: true, message: 'Please choose the approver' }]}
                        >
                          <Select placeholder="Please choose the approver">
                            <Option value="jack">Jack Ma</Option>
                            <Option value="tom">Tom Liu</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col lg={12} sm={24} xs={24}>
                        <Form.Item
                          name="dateTime"
                          label="DateTime"
                          rules={[{ required: true, message: 'Please choose the dateTime' }]}
                        >
                          <DatePicker.RangePicker
                            style={{ width: '100%' }}
                            getPopupContainer={trigger => trigger.parentNode}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col lg={24} sm={24} xs={24}>
                        <Form.Item
                          name="description"
                          label="Description"
                          rules={[
                            {
                              required: true,
                              message: 'please enter url description',
                            },
                          ]}
                        >
                          <Input.TextArea rows={4} placeholder="please enter url description" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Drawer>
              </Cards>
            </div>
          </Col>
          <Col lg={12} xs={24}>
            <div className="atbd-drawer">
              <Cards title="Multi Label Drawer" caption="The simplest use of Drawer">
                <Drawer
                  title="Basic Drawer"
                  childTitle="Lavel Two"
                  childDrawer={
                    <>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </>
                  }
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Drawer>
              </Cards>
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Drawers;
