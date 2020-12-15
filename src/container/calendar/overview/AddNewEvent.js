import React, { useState, useEffect } from 'react';
import { Col, Row, DatePicker, Form, Input, Radio, Select } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import { AddEventWrap } from '../Style';
import { BasicFormWrapper } from '../../styled';
import { Button } from '../../../components/buttons/buttons';

const dateFormat = 'YYYY/MM/DD';
const { Option } = Select;

const AddNewEvent = ({ defaultValue, onHandleAddEvent }) => {
  const [state, setState] = useState({
    startDate: defaultValue,
    endDate: defaultValue,
    startTime: '',
    endTime: '',
  });

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  useEffect(() => {
    if (defaultValue) {
      setState({
        startDate: defaultValue,
        endDate: defaultValue,
      });
    }
  }, [defaultValue]);

  const [form] = Form.useForm();
  const handleSubmit = values => {
    onHandleAddEvent({
      title: values.title,
      description: values.description,
      date: [moment(state.startDate).format('MM/DD/YYYY'), moment(state.endDate).format('MM/DD/YYYY')],
      time: [state.startTime.format('HH:mm a'), state.endTime.format('HH:mm a')],
      type: values.type,
      label: values.label,
    });
    form.resetFields();
  };
  const onChangeStart = (date, dateString) => {
    setState({ ...state, startDate: dateString });
  };
  const onChangeEnd = (date, dateString) => {
    setState({ ...state, endDate: dateString });
  };

  const onChangeStartTime = time => {
    setState({ ...state, startTime: time });
  };
  const onChangeEndTime = time => {
    setState({ ...state, endTime: time });
  };

  return (
    <BasicFormWrapper>
      <AddEventWrap>
        <Form style={{ width: '100%' }} form={form} name="addNewEvent" onFinish={handleSubmit}>
          <Form.Item {...formItemLayout} label="Title" name="title">
            <Input placeholder="Weekly report meeting" />
          </Form.Item>

          <Form.Item {...formItemLayout} initialValue="event" name="type" label="Event Type">
            <Radio.Group>
              <Radio value="event">Event</Radio>
              <Radio value="reminder">Reminder</Radio>
              <Radio value="task">Task</Radio>
            </Radio.Group>
          </Form.Item>
          <div className="ant-form-item">
            <Row>
              <Col sm={4} xs={24}>
                <span className="label">Start:</span>
              </Col>
              <Col sm={20} xs={24}>
                <div className="date-time-picker d-flex">
                  <DatePicker
                    onChange={onChangeStart}
                    value={moment(state.startDate, dateFormat)}
                    defaultValue={moment(state.startDate, dateFormat)}
                  />
                  <DatePicker onChange={onChangeStartTime} picker="time" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="ant-form-item">
            <Row>
              <Col sm={4} xs={24}>
                <span className="label">End:</span>
              </Col>
              <Col sm={20} xs={24}>
                <div className="date-time-picker d-flex">
                  <DatePicker
                    onChange={onChangeEnd}
                    value={moment(state.endDate, dateFormat)}
                    defaultValue={moment(state.endDate, dateFormat)}
                  />
                  <DatePicker onChange={onChangeEndTime} picker="time" />
                </div>
              </Col>
            </Row>
          </div>

          <Form.Item {...formItemLayout} className="event-desc" name="description" label="Description">
            <Input.TextArea placeholder="Write Your Description" />
          </Form.Item>

          <Form.Item {...formItemLayout} name="label" initialValue="primary" label="Label">
            <Select style={{ width: '100%' }}>
              <Option value="primary">
                <span className="bullet primary" />
                Primary
              </Option>
              <Option value="secondary">
                <span className="bullet secondary" />
                Secondary
              </Option>
              <Option value="success">
                <span className="bullet success" />
                success
              </Option>
              <Option value="warning">
                <span className="bullet warning" />
                Warning
              </Option>
              <Option value="info">
                <span className="bullet info" />
                Info
              </Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <div className="add-event-footer text-right">
              <Button
                className="ant-btn ant-btn-white"
                onClick={() => {
                  return form.resetFields();
                }}
              >
                Reset
              </Button>
              <Button htmlType="submit" className="btn-save" type="primary">
                Save
              </Button>
            </div>
          </Form.Item>
        </Form>
      </AddEventWrap>
    </BasicFormWrapper>
  );
};

AddNewEvent.propTypes = {
  defaultValue: PropTypes.string,
  onHandleAddEvent: PropTypes.func,
};

export default AddNewEvent;
