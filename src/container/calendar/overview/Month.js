import React, { useState, useLayoutEffect, useRef } from 'react';
import { Calendar } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink } from 'react-router-dom';
import CalenDar from 'react-calendar';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import ProjectUpdate from './ProjectUpdate';
import AddNewEvent from './AddNewEvent';
import { BlockViewCalendarWrapper } from '../Style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { Dropdown } from '../../../components/dropdown/dropdown';
import './style.css';
import { calendarDeleteData, eventVisible, addNewEvents } from '../../../redux/calendar/actionCreator';
import { Modal } from '../../../components/modals/antd-modals';

const MonthCalendar = () => {
  const dispatch = useDispatch();
  const { events, isVisible } = useSelector(state => {
    return {
      events: state.Calender.events,
      isVisible: state.Calender.eventVisible,
    };
  });
  const [state, setState] = useState({
    date: new Date(),
    container: null,
    currentLabel: moment().format('MMMM YYYY'),
    width: 0,
    defaultValue: moment().format('YYYY-MM-DD'),
  });

  const { date, container, currentLabel, width, defaultValue } = state;
  const getInput = useRef();

  useLayoutEffect(() => {
    const button = document.querySelector(
      '.calendar-header__left .react-calendar__navigation .react-calendar__navigation__label',
    );
    const containers = document.querySelector('.calendar-header__left .react-calendar__viewContainer');
    const calenderDom = document.querySelectorAll('.ant-picker-calendar-date-content');
    calenderDom.forEach(element => {
      element.addEventListener('click', e => {
        if (e.target.classList[0] === 'ant-picker-calendar-date-content') {
          const getDate = moment(e.currentTarget.closest('td').getAttribute('title')).format('YYYY-MM-DD');
          setState({
            container: containers,
            date,
            currentLabel,
            width: getInput.current !== null && getInput.current.clientWidth,
            defaultValue: getDate,
          });

          dispatch(eventVisible(true));
        }
      });
    });
    button.addEventListener('click', () => containers.classList.add('show'));

    setState({
      container: containers,
      defaultValue,
      date,
      currentLabel,
      width: getInput.current !== null && getInput.current.clientWidth,
    });
  }, [date, currentLabel, defaultValue, dispatch]);

  const onChange = dt => setState({ ...state, date: dt, defautlValue: moment(dt).format('YYYY-MM-DD') });

  const onEventDelete = id => {
    const data = events.filter(item => item.id !== id);
    dispatch(calendarDeleteData(data));
  };

  function getListData(value) {
    let listData;
    const data = [];
    events.map(event => {
      if (moment(event.date[0]).format('MMMM YYYY') === currentLabel) {
        const { label, title, id, description, time, date, type } = event;
        const a = moment(moment(event.date[1]).format('DD MMMM YYYY'));
        const b = moment(moment(event.date[0]).format('DD MMMM YYYY'));
        const totalDays = a.diff(b, 'days');

        switch (value.date()) {
          case parseInt(moment(event.date[0]).format('DD'), 10):
            data.push({ label, title, id, totalDays, description, time, date, type });
            listData = data;
            break;
          default:
        }
      }
      return listData;
    });
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <Dropdown
            className="event-dropdown"
            key={item.id}
            style={{ padding: 0 }}
            placement="bottomLeft"
            content={<ProjectUpdate onEventDelete={onEventDelete} {...item} />}
            action={['click']}
          >
            <li ref={getInput}>
              <Link style={{ width: width * (item.totalDays + 1) }} className={item.label} to="#">
                {item.title}
              </Link>
            </li>
          </Dropdown>
        ))}
      </ul>
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
          <CalenDar
            onClickMonth={() => {
              container.classList.remove('show');
            }}
            onActiveStartDateChange={({ activeStartDate }) =>
              setState({
                ...state,
                currentLabel: moment(activeStartDate).format('MMMM YYYY'),
                defaultValue: moment(activeStartDate).format('YYYY-MM-DD'),
              })
            }
            next2Label={null}
            prev2Label={null}
            nextLabel={<FeatherIcon icon="chevron-right" />}
            prevLabel={<FeatherIcon icon="chevron-left" />}
            onChange={onChange}
            value={state.date}
          />
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
          mode="month"
          dateCellRender={dateCellRender}
          value={moment(defaultValue)}
          defaultValue={moment(defaultValue)}
        />
      </BlockViewCalendarWrapper>
    </Cards>
  );
};

export default MonthCalendar;
