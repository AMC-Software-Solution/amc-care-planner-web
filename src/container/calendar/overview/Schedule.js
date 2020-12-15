import React, { useState, useLayoutEffect, useRef } from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'antd';
import AddNewEvent from './AddNewEvent';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import './style.css';
import { eventVisible, addNewEvents } from '../../../redux/calendar/actionCreator';
import { Modal } from '../../../components/modals/antd-modals';

const ScheduleCalendar = () => {
  const dispatch = useDispatch();
  const { events, isVisible } = useSelector(state => {
    return {
      events: state.Calender.events,
      isVisible: state.Calender.eventVisible,
    };
  });
  const [state, setState] = useState({
    currentMonth: 0,
    defaultValue: moment().format('YYYY-MM-DD'),
  });

  const dataList = useRef();

  useLayoutEffect(() => {
    if (dataList.current.querySelector('tr') === null) {
      document.querySelector('.emptyData').style.display = 'flex';
    } else {
      document.querySelector('.emptyData').style.display = 'none';
    }
  });

  const { currentMonth, defaultValue } = state;

  const onIncrement = () => {
    return setState({
      ...state,
      currentMonth: currentMonth + 1,
    });
  };

  const onDecrement = () => {
    setState({
      ...state,
      currentMonth: currentMonth - 1,
    });
  };

  const handleCancel = () => {
    dispatch(eventVisible(false));
  };

  const addNew = event => {
    const arrayData = [];
    events.map(data => {
      return arrayData.push(data.id);
    });
    const max = Math.max(...arrayData);
    dispatch(addNewEvents([...events, { ...event, id: max + 1 }]));
    dispatch(eventVisible(false));
  };

  const uniqueDate = [];

  return (
    <Cards headless>
      <Modal
        className="addEvent-modal"
        footer={null}
        type="primary"
        title="Create Event"
        visible={isVisible}
        onCancel={handleCancel}
      >
        <AddNewEvent onHandleAddEvent={addNew} defaultValue={defaultValue} />
      </Modal>
      <div className="calendar-header">
        <div className="calendar-header__left">
          <Button className="btn-today" type="white" outlined>
            <NavLink to="./day">Today</NavLink>
          </Button>
          <div className="calender-head__navigation">
            <Button onClick={onDecrement} className="btn-navigate" type="white" outlined>
              <FeatherIcon icon="chevron-left" />
            </Button>
            <span className="date-label">
              {`${moment()
                .add(currentMonth, 'month')
                .format('MMM YYYY')} - ${moment()
                .add(currentMonth + 1, 'month')
                .format('MMM YYYY')}`}
            </span>
            <Button onClick={onIncrement} className="btn-navigate" type="white" outlined>
              <FeatherIcon icon="chevron-right" />
            </Button>
          </div>
        </div>
        <div className="calendar-header__right">
          <ul>
            <li>
              <NavLink to="./day">Day</NavLink>
            </li>
            <li>
              <NavLink to="./week">Week</NavLink>
            </li>
            <li>
              <NavLink to="./month">Month</NavLink>
            </li>
            <li>
              <NavLink to="./year">Year</NavLink>
            </li>
          </ul>
          <NavLink className="schedule-list" to="./schedule">
            <FeatherIcon icon="list" />
            Schedule
          </NavLink>
        </div>
      </div>
      <div className="emptyData">There is No Event Available</div>
      <table className="table-event schedule-event" width="100%">
        <tbody ref={dataList}>
          {events.map(event => {
            uniqueDate.push(event.date[0]);
            return false;
          })}
          {[...new Set(uniqueDate)].map((date, index) => {
            return (
              moment(date).format('MM') >=
                moment()
                  .add(currentMonth, 'month')
                  .format('MM') &&
              moment(date).format('MM') <=
                moment()
                  .add(currentMonth + 1, 'month')
                  .format('MM') && (
                <tr key={index + 1}>
                  <td className="schedule-time">
                    <span className="schedule-date">{moment(date).format('DD MMM')}</span>
                    <span className="schedule-date-name">{moment(date).format('ddd')}</span>
                  </td>
                  <td className="schedule-time-data">
                    {events
                      .filter(item => item.date[0] === date)
                      .map((item, ind) => (
                        <Row key={ind + 1}>
                          <Col xxl={6} xl={8} md={6} sm={10} xs={24}>
                            <span className={`bullet ${item.label}`} />
                            <span className="schedule-time">
                              {moment(item.time[0], 'h:mm a').format('h a')} -
                              {moment(item.time[0], 'h:mm a').format('h:mm a')}
                            </span>
                          </Col>
                          <Col xxl={18} xl={16} md={18} sm={14} xs={24}>
                            <span className="event-title">{item.title}</span>
                          </Col>
                        </Row>
                      ))}
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </Cards>
  );
};

export default ScheduleCalendar;
