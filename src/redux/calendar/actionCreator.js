import moment from 'moment';
import actions from './actions';

const initialState = [
  {
    title: 'Family Events',
    date: [moment().format('MM/DD/YYYY'), moment().format('MM/DD/YYYY')],
    id: 1,
    label: 'success',
    time: ['2:00 pm', '3:00 pm'],
    type: 'event',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'Product Launch',
    date: [moment().format('MM/DD/YYYY'), moment(moment().add(2, 'days')).format('MM/DD/YYYY')],
    id: 2,
    label: 'primary',
    time: ['4:00 pm', '5:00 pm'],
    type: 'reminder',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'Team Meeting',
    id: 3,
    date: [
      moment(moment().subtract(2, 'days')).format('MM/DD/YYYY'),
      moment(moment().subtract(2, 'days')).format('MM/DD/YYYY'),
    ],
    label: 'secondary',
    time: ['2:00 pm', '3:00 pm'],
    type: 'event',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'UI/UX Tasks',
    id: 4,
    date: ['09/12/2020', '09/12/2020'],
    label: 'info',
    time: ['9:00 am', '3:00 pm'],
    type: 'event',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'Project Update',
    id: 5,
    date: [moment(moment().add(5, 'days')).format('MM/DD/YYYY'), moment(moment().add(5, 'days')).format('MM/DD/YYYY')],
    label: 'warning',
    time: ['12:00 pm', '2:30 pm'],
    type: 'event',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
];

const {
  calendarReadBegin,
  calendarReadSuccess,
  calendarReadErr,
  eventVisibleBegin,
  eventVisibleSuccess,
  eventVisibleErr,
  starUpdateBegin,
  starUpdateSuccess,
  starUpdateErr,
  labelUpdateBegin,
  labelUpdateSuccess,
  labelUpdateErr,
} = actions;

const calendarGetData = () => {
  return async dispatch => {
    try {
      dispatch(calendarReadBegin());
      dispatch(calendarReadSuccess(initialState));
    } catch (err) {
      dispatch(calendarReadErr(err));
    }
  };
};

const addNewEvents = events => {
  return async dispatch => {
    try {
      dispatch(calendarReadBegin());
      dispatch(calendarReadSuccess(events));
    } catch (err) {
      dispatch(calendarReadErr(err));
    }
  };
};

const updateCurrentEvent = (events, event, id) => {
  return async dispatch => {
    try {
      dispatch(calendarReadBegin());
      events.map(value => {
        const item = value;
        if (item.id === id) {
          item.title = event.title;
          item.description = event.description;
          item.date = event.date;
          item.time = event.time;
          item.label = event.label;
          item.type = event.type;
        }
        return item;
      });
      // console.log(events);
      dispatch(calendarReadSuccess(events));
    } catch (err) {
      dispatch(calendarReadErr(err));
    }
  };
};

const eventVisible = data => {
  return async dispatch => {
    try {
      dispatch(eventVisibleBegin());
      dispatch(eventVisibleSuccess(data));
    } catch (err) {
      dispatch(eventVisibleErr(err));
    }
  };
};

const calendarAddData = data => {
  return async dispatch => {
    try {
      dispatch(calendarReadBegin());
      dispatch(calendarReadSuccess(data));
    } catch (err) {
      dispatch(calendarReadErr(err));
    }
  };
};

const calendarDeleteData = data => {
  return async dispatch => {
    try {
      dispatch(calendarReadBegin());
      dispatch(calendarReadSuccess(data));
    } catch (err) {
      dispatch(calendarReadErr(err));
    }
  };
};

const onStarUpdate = (data, id) => {
  return async dispatch => {
    try {
      dispatch(starUpdateBegin());
      data.map(item => {
        if (item.key === id) {
          const fav = item;
          if (item.stared) {
            fav.stared = false;
          } else {
            fav.stared = true;
          }
        }
        return dispatch(starUpdateSuccess(data));
      });
    } catch (err) {
      dispatch(starUpdateErr(err));
    }
  };
};

const onLabelUpdate = (data, id, value) => {
  return async dispatch => {
    try {
      dispatch(labelUpdateBegin());
      data.map(item => {
        if (item.key === id) {
          const fav = item;
          fav.label = value;
        }
        return dispatch(labelUpdateSuccess(data));
      });
    } catch (err) {
      dispatch(labelUpdateErr(err));
    }
  };
};

const onLabelFilter = label => {
  return async dispatch => {
    try {
      dispatch(labelUpdateBegin());
      const data = initialState.filter(item => {
        return label === 'all' ? initialState : label === 'favorite' ? item.stared : item.label === label;
      });

      dispatch(labelUpdateSuccess(data));
    } catch (err) {
      dispatch(labelUpdateErr(err));
    }
  };
};

export {
  eventVisible,
  calendarGetData,
  calendarAddData,
  calendarDeleteData,
  onStarUpdate,
  onLabelUpdate,
  onLabelFilter,
  addNewEvents,
  updateCurrentEvent,
};
