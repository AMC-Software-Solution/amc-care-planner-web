import React, { useState } from 'react';
import { Row, Col, Form, Select, Input, InputNumber } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, BasicFormWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Cascader } from '../../components/cascader/cascader';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const { Option } = Select;
const { TextArea } = Input;

const Forms = () => {
  const [form] = Form.useForm();
  const [state, setstate] = useState({
    values: {},
    cascaderItem: [],
  });
  const handleSubmit = values => {
    setstate({ ...state, values });
  };

  const onChangeCascader = value => {
    setstate({ ...state, cascaderItem: value });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Form"
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
            <Cards title="Elements of Form" caption="The simplest use of Form">
              <BasicFormWrapper>
                <Form layout="vertical" form={form} name="basicforms" onFinish={handleSubmit}>
                  <Form.Item label="Username" name="username">
                    <Input placeholder="Username" />
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: 'Please input your age!', type: 'number' }]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item label="Website" name="website">
                    <Input placeholder="http://website.com" />
                  </Form.Item>
                  <Form.Item label="Textarea" name="textarea">
                    <TextArea />
                  </Form.Item>
                  <div className="form-item">
                    <label>Casecader</label>
                    <Cascader onChange={onChangeCascader} defaultValue={['zhejiang', 'hangzhou', 'xihu']} />
                  </div>

                  <Form.Item label="Select" name="Select">
                    <Select
                      showSearch
                      placeholder="Please Slelect"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="">Please Select</Option>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit" size="default" type="primary">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </BasicFormWrapper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Forms;
