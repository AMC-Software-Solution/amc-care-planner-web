import React, { useState, useLayoutEffect } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from 'antd';
import AddNewEvent from './AddNewEvent';
import ProjectUpdate from './ProjectUpdate';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import './style.css';
import { eventVisible, addNewEvents, calendarDeleteData } from '../../../redux/calendar/actionCreator';
import { Modal } from '../../../components/modals/antd-modals';
import { Dropdown } from '../../../components/dropdown/dropdown';

const WeekCalendar = () => {
  const dispatch = useDispatch();
  const { events, isVisible } = useSelector(state => {
    return {
      events: state.Calender.events,
      isVisible: state.Calender.eventVisible,
    };
  });
  const [state, setState] = useState({
    currentWeek: moment().week(),
    maxWeek: moment('12-31-2020', 'MM-DD-YYYY').isoWeek(),
    minWeek: 1,
    year: 2020,
    defaultValue: moment().format('YYYY-MM-DD'),
  });

  const { currentWeek, maxWeek, minWeek, defaultValue, year } = state;

  useLayoutEffect(() => {
    const calenderDom = document.querySelectorAll('.ant-picker-calendar-date-content');
    calenderDom.forEach(element => {
      element.addEventListener('click', e => {
        if (e.target.classList[0] === 'ant-picker-calendar-date-content') {
          const getDate = moment(e.currentTarget.getAttribute('title')).format('YYYY-MM-DD');
          setState({
            defaultValue: getDate,
            currentWeek,
            maxWeek,
            minWeek,
            year,
          });
          dispatch(eventVisible(true));
        }
      });
    });
    setState({
      currentWeek,
      maxWeek,
      minWeek,
      defaultValue,
      year,
    });
  }, [currentWeek, maxWeek, minWeek, defaultValue, year, dispatch]);

  const onIncrement = () => {
    return currentWeek < maxWeek
      ? setState({
          ...state,
          currentWeek: currentWeek + 1,
        })
      : setState({
          ...state,
          year: year + 1,
          currentWeek: 1,
        });
  };

  const onDecrement = () => {
    return currentWeek > minWeek
      ? setState({
          ...state,
          currentWeek: currentWeek - 1,
        })
      : setState({
          ...state,
          year: year - 1,
          currentWeek: maxWeek,
        });
  };

  const option = [];
  for (let i = minWeek; i <= maxWeek; i += 1) {
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

  const maximumDate = () => {
    return parseInt(
      moment(
        moment()
          .day('Sunday')
          .year(year)
          .week(currentWeek)
          .toDate(),
      ).format('DD'),
      10,
    ) +
      6 <=
      moment(
        moment()
          .day('Sunday')
          .year(year)
          .week(currentWeek)
          .toDate(),
      ).daysInMonth()
      ? parseInt(
          moment(
            moment()
              .day('Sunday')
              .year(year)
              .week(currentWeek)
              .toDate(),
          ).format('DD'),
          10,
        ) + 6
      : parseInt(
          moment(
            moment()
              .day('Sunday')
              .year(year)
              .week(currentWeek)
              .toDate(),
          ).format('DD'),
          10,
        ) +
          6 -
          parseInt(
            moment(
              moment()
                .day('Sunday')
                .year(year)
                .week(currentWeek)
                .toDate(),
            ).daysInMonth(),
            10,
          );
  };

  const daysOfMonth = moment(
    moment()
      .day('Sunday')
      .year(year)
      .week(currentWeek)
      .toDate(),
  ).daysInMonth();

  const minimumDate = () => {
    return parseInt(
      moment(
        moment()
          .day('Sunday')
          .year(year)
          .week(currentWeek)
          .toDate(),
      ).format('DD'),
      10,
    );
  };

  const daysOfWeek = () => {
    const days = [];
    if (minimumDate() + 6 <= daysOfMonth) {
      for (let i = minimumDate(); i <= maximumDate(); i += 1) {
        days.push(
          `${moment(
            moment()
              .day('Sunday')
              .year(year)
              .week(currentWeek)
              .toDate(),
          ).format('MM')}/${i}/${year}`,
        );
      }
    } else {
      for (let i = minimumDate(); i <= daysOfMonth; i += 1) {
        days.push(
          `${moment(
            moment()
              .day('Sunday')
              .year(year)
              .week(currentWeek)
              .toDate(),
          ).format('MM')}/${i}/${year}`,
        );
      }
      for (let j = 1; j <= minimumDate() + 6 - daysOfMonth; j += 1) {
        days.push(
          `${
            parseInt(
              moment(
                moment()
                  .day('Sunday')
                  .year(year)
                  .week(currentWeek)
                  .toDate(),
              ).format('MM'),
              10,
            ) < 12
              ? parseInt(
                  moment(
                    moment()
                      .day('Sunday')
                      .year(year)
                      .week(currentWeek)
                      .toDate(),
                  ).format('MM'),
                  10,
                ) + 1
              : 1
          }/${j}/${year}`,
        );
      }
    }
    return days;
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

  const onEventDelete = id => {
    const data = events.filter(item => item.id !== id);
    dispatch(calendarDeleteData(data));
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
          <Button className="btn-today" size="small" type="white" outlined>
            <NavLink to="./today">Today</NavLink>
          </Button>
          <div className="calender-head__navigation">
            <Button onClick={onDecrement} className="btn-navigate" type="white" outlined>
              <FeatherIcon icon="chevron-left" />
            </Button>
            <span className="date-label">
              {`${moment(
                moment()
                  .day('Sunday')
                  .year(year)
                  .week(currentWeek)
                  .toDate(),
              ).format('MMM DD')} - ${
                parseInt(
                  moment(
                    moment()
                      .day('Sunday')
                      .year('2020')
                      .week(currentWeek)
                      .toDate(),
                  ).format('DD'),
                  10,
                ) +
                  6 <=
                moment(
                  moment()
                    .day('Sunday')
                    .year('2020')
                    .week(currentWeek)
                    .toDate(),
                ).daysInMonth()
                  ? moment(
                      moment()
                        .day('Sunday')
                        .year(year)
                        .week(currentWeek)
                        .toDate(),
                    ).format('MMM')
                  : moment(
                      moment()
                        .day('Sunday')
                        .year(year)
                        .week(currentWeek + 1)
                        .toDate(),
                    ).format('MMM')
              } ${
                parseInt(
                  moment(
                    moment()
                      .day('Sunday')
                      .year(year)
                      .week(currentWeek)
                      .toDate(),
                  ).format('DD'),
                  10,
                ) +
                  6 <=
                moment(
                  moment()
                    .day('Sunday')
                    .year(year)
                    .week(currentWeek)
                    .toDate(),
                ).daysInMonth()
                  ? parseInt(
                      moment(
                        moment()
                          .day('Sunday')
                          .year(year)
                          .week(currentWeek)
                          .toDate(),
                      ).format('DD'),
                      10,
                    ) + 6
                  : parseInt(
                      moment(
                        moment()
                          .day('Sunday')
                          .year(year)
                          .week(currentWeek)
                          .toDate(),
                      ).format('DD'),
                      10,
                    ) +
                    6 -
                    parseInt(
                      moment(
                        moment()
                          .day('Sunday')
                          .year(year)
                          .week(currentWeek)
                          .toDate(),
                      ).daysInMonth(),
                      10,
                    )
              }, ${year}`}
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
      <table className="table-event event-week table-responsive" width="100%">
        <thead>
          <tr>
            <th>&nbsp;</th>
            {daysOfWeek().map(day => {
              return (
                <th key={day}>
                  <p className="week-dayName">{moment(day).format('dddd')}</p>
                  <p className={moment().format('MM/DD/YYYY') === day ? 'week-date primary' : 'week-date deactivate'}>
                    {moment(day).format('DD MMM')}
                  </p>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {eventTimes.map(time => {
            return (
              <tr key={time}>
                <td>{time}</td>
                {daysOfWeek().map(day => {
                  return (
                    <td
                      key={day}
                      className={`ant-picker-calendar-date-content ${
                        moment().format('h A') === time && moment().format('MM/DD/YYYY') === day ? 'current-data' : null
                      }`}
                      title={day}
                    >
                      {moment().format('h A') === time && moment().format('MM/DD/YYYY') === day ? (
                        <span className="currentTime secondary" />
                      ) : null}
                      {events.map(
                        event =>
                          day === event.date[0] &&
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
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Cards>
  );
};

export default WeekCalendar;
