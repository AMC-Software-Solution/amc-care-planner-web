import moment from 'moment';
import actions from './actions';

const events = [
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

const initialState = {
  events,
  loading: false,
  error: null,
  eventVisible: false,
};

const {
  CALENDAR_READ_BEGIN,
  CALENDAR_READ_SUCCESS,
  CALENDAR_READ_ERR,
  EVENT_VISIBLE_BEGIN,
  EVENT_VISIBLE_SUCCESS,
  EVENT_VISIBLE_ERR,
  CALENDAR_STAR_UPDATE_BEGIN,
  CALENDAR_STAR_UPDATE_SUCCESS,
  CALENDAR_STAR_UPDATE_ERR,
  CALENDAR_LABEL_UPDATE_BEGIN,
  CALENDAR_LABEL_UPDATE_SUCCESS,
  CALENDAR_LABEL_UPDATE_ERR,
} = actions;

const CalenderReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CALENDAR_STAR_UPDATE_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case CALENDAR_STAR_UPDATE_SUCCESS:
      return {
        ...state,
        events: data,
        sLoading: false,
      };
    case CALENDAR_STAR_UPDATE_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };
    case CALENDAR_LABEL_UPDATE_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case CALENDAR_LABEL_UPDATE_SUCCESS:
      return {
        ...state,
        events: data,
        sLoading: false,
      };
    case CALENDAR_LABEL_UPDATE_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };
    case CALENDAR_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CALENDAR_READ_SUCCESS:
      return {
        ...state,
        events: data,
        loading: false,
      };
    case CALENDAR_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case EVENT_VISIBLE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case EVENT_VISIBLE_SUCCESS:
      return {
        ...state,
        eventVisible: data,
        loading: false,
      };
    case EVENT_VISIBLE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default CalenderReducer;
