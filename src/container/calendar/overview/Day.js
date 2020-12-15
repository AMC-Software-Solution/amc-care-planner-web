import React, { useState, useLayoutEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink } from 'react-router-dom';
import CalenDar from 'react-calendar';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import AddNewEvent from './AddNewEvent';
import ProjectUpdate from './ProjectUpdate';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import './style.css';
import { eventVisible, addNewEvents, calendarDeleteData } from '../../../redux/calendar/actionCreator';
import { Modal } from '../../../components/modals/antd-modals';
import { Dropdown } from '../../../components/dropdown/dropdown';

const DayCalendar = () => {
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
    defaultValue: moment().format('YYYY-MM-DD'),
  });

  const { date, container, currentLabel, defaultValue } = state;

  useLayoutEffect(() => {
    const button = document.querySelector(
      '.calendar-header__left .react-calendar__navigation .react-calendar__navigation__label',
    );
    const containers = document.querySelector('.calendar-header__left .react-calendar__viewContainer');
    const calenderDom = document.querySelectorAll('.ant-picker-calendar-date-content');
    calenderDom.forEach(element => {
      element.addEventListener('click', e => {
        if (e.target.classList[0] === 'ant-picker-calendar-date-content') {
          setState({
            container: containers,
            date,
            currentLabel,
            defaultValue,
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
    });
  }, [date, currentLabel, defaultValue, dispatch]);

  const onChange = dt => setState({ ...state, date: dt, defaultValue: moment(dt).format('YYYY-MM-DD') });

  const onEventDelete = id => {
    const data = events.filter(item => item.id !== id);
    dispatch(calendarDeleteData(data));
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

  const eventTimes = [
    '12 AM',
    '1 AM',
    '2 AM',
    '3 AM',
    '4 AM',
    '5 AM',
    '6 AM',
    '7 AM',
    '8 AM',
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
    '6 PM',
    '7 PM',
    '8 PM',
    '9 PM',
    '10 PM',
    '11 PM',
  ];

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
          <Button className="btn-today" type="white" size="small" outlined>
            <NavLink to="./day">Today</NavLink>
          </Button>
          <CalenDar
            onClickDay={() => {
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
            navigationLabel={() => `${moment(defaultValue).format('MMMM DD, YYYY')}`}
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
      <table className="table-event" width="100%">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>
              <p>{moment(defaultValue).format('dddd')}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {eventTimes.map((time, key) => {
            return (
              <tr key={key + 1}>
                <td style={{ width: '60px' }}>{time}</td>
                <td
                  className={`ant-picker-calendar-date-content ${
                    moment().format('h A') === time ? 'current-data' : null
                  }`}
                >
                  {moment().format('h A') === time ? <span className="currentTime secondary" /> : null}

                  {events.map(
                    event =>
                      moment(defaultValue).format('MM/DD/YYYY') === event.date[0] &&
                      time === moment(event.time[0], 'h:mm a').format('h A') && (
                        <Dropdown
                          className="event-dropdown"
                          key={event.id}
                          style={{ padding: 0 }}
                          placement="bottomLeft"
                          content={<ProjectUpdate onEventDelete={onEventDelete} {...event} />}
                          action={['click']}
                        >
                          <Link to="#" className={`${event.label} day-event-item`}>
                            <span className="event-title">{event.title}</span>
                            <span>{`${event.time[0]} - ${event.time[1]}`}</span>
                          </Link>
                        </Dropdown>
                      ),
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Cards>
  );
};

export default DayCalendar;
