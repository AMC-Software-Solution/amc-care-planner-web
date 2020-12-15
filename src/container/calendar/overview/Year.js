import React, { useState, useLayoutEffect } from 'react';
import { Calendar, Select } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import AddNewEvent from './AddNewEvent';
import { BlockViewCalendarWrapper } from '../Style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { Modal } from '../../../components/modals/antd-modals';
import { eventVisible, addNewEvents } from '../../../redux/calendar/actionCreator';

const YearCalendar = () => {
  const dispatch = useDispatch();
  const { events, isVisible } = useSelector(state => {
    return {
      events: state.Calender.events,
      isVisible: state.Calender.eventVisible,
    };
  });
  const [state, setState] = useState({
    currentYear: new Date().getFullYear(),
    maxYear: 2025,
    minYear: 2018,
    defaultValue: moment().format('YYYY-MM-DD'),
  });
  const { currentYear, maxYear, minYear, defaultValue } = state;

  useLayoutEffect(() => {
    const calenderDom = document.querySelectorAll('.ant-picker-calendar-date-content');
    calenderDom.forEach(element => {
      element.addEventListener('click', () => {
        dispatch(eventVisible(true));
      });
    });
  }, [defaultValue, dispatch]);

  const onIncrement = () => {
    return (
      currentYear < maxYear &&
      setState({
        ...state,
        currentYear: currentYear + 1,
      })
    );
  };

  const onDecrement = () => {
    return (
      currentYear > minYear &&
      setState({
        ...state,
        currentYear: currentYear - 1,
      })
    );
  };

  const option = [];
  for (let i = minYear; i <= maxYear; i += 1) {
    option.push(
      <Select.Option key={i} value={i}>
        {i}
      </Select.Option>,
    );
  }

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
            <Select
              className="year-select"
              onChange={value => setState({ ...state, currentYear: value })}
              defaultValue={currentYear}
              value={currentYear}
              style={{ width: '100px' }}
            >
              {option}
            </Select>
            <Button className="btn-navigate" onClick={onIncrement} type="white" outlined>
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
      <BlockViewCalendarWrapper className="table-responsive">
        <Calendar
          headerRender={() => {
            return <></>;
          }}
          mode="year"
          // monthCellRender={monthCellRender}
        />
      </BlockViewCalendarWrapper>
    </Cards>
  );
};

export default YearCalendar;
