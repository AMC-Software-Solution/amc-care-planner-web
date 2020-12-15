import React, { useState } from 'react';
import { Col, DatePicker, Form, Input, Radio, Row, Select } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { AddEventWrap } from '../Style';
import { BasicFormWrapper } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import { updateCurrentEvent } from '../../../redux/calendar/actionCreator';

const dateFormat = 'YYYY/MM/DD';
const { Option } = Select;

const UpdateEvent = ({ data, onCancel }) => {
  const dispatch = useDispatch();
  const { events } = useSelector(state => {
    return {
      events: state.Calender.events,
    };
  });
  const { title, id, description, label, time, date, type } = data;

  const [state, setState] = useState({
    startDate: moment(date[0]).format('YYYY-MM-DD'),
    endDate: moment(date[1]).format('YYYY-MM-DD'),
    startTime: moment(time[0], 'HH:mm a'),
    endTime: moment(time[1], 'HH:mm a'),
  });

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  const [form] = Form.useForm();
  const handleSubmit = values => {
    dispatch(
      updateCurrentEvent(
        events,
        {
          title: values.title,
          id,
          description: values.description,
          date: [moment(state.startDate).format('MM/DD/YYYY'), moment(state.endDate).format('MM/DD/YYYY')],
          time: [state.startTime.format('hh:mm a'), state.endTime.format('hh:mm a')],
          type: values.type,
          label: values.label,
        },
        id,
      ),
    );
    onCancel();
  };
  const onChangeStart = (date, dateString) => {
    setState({ ...state, startDate: dateString });
  };
  const onChangeEnd = (date, dateString) => {
    setState({ ...state, endDate: dateString });
  };

  const onChangeStartTime = times => {
    setState({ ...state, startTime: times });
  };
  const onChangeEndTime = times => {
    setState({ ...state, endTime: times });
  };

  return (
    <BasicFormWrapper>
      <AddEventWrap>
        <Form style={{ width: '100%' }} form={form} name="addNewEvent" onFinish={handleSubmit}>
          <Form.Item {...formItemLayout} initialValue={title} label="Title" name="title">
            <Input placeholder="Write Your Event Title" />
          </Form.Item>

          <Form.Item {...formItemLayout} initialValue={type} name="type" label="Event Type">
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
                  <DatePicker onChange={onChangeStartTime} defaultValue={moment(time[0], 'HH:mm:ss')} picker="time" />
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
                  <DatePicker onChange={onChangeEndTime} defaultValue={moment(time[1], 'HH:mm:ss')} picker="time" />
                </div>
              </Col>
            </Row>
          </div>

          <Form.Item {...formItemLayout} initialValue={description} name="description" label="Description">
            <Input.TextArea placeholder="Write Your Description" />
          </Form.Item>

          <Form.Item {...formItemLayout} initialValue={label} name="label" label="Label">
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
              <Button htmlType="submit" type="primary">
                Update
              </Button>
            </div>
          </Form.Item>
        </Form>
      </AddEventWrap>
    </BasicFormWrapper>
  );
};

UpdateEvent.propTypes = {
  data: PropTypes.object,
  onCancel: PropTypes.func,
};

export default UpdateEvent;
