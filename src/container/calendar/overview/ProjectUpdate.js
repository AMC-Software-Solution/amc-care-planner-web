import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import UpdateEvent from './UpdateEvent';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { UpdatePopup } from '../Style';
import { Modal } from '../../../components/modals/antd-modals';

const ProjectUpdate = ({ title, id, description, label, onEventDelete, time, date, type }) => {
  const data = { title, id, description, label, onEventDelete, time, date, type };
  const [visible, setVisible] = useState(false);
  const onHandleVisible = () => {
    setVisible(true);
  };
  const onCancel = () => setVisible(false);
  return (
    <UpdatePopup>
      <Modal
        className="addEvent-modal"
        footer={null}
        type="primary"
        title="Update Event"
        visible={visible}
        onCancel={onCancel}
      >
        <UpdateEvent onCancel={onCancel} data={data} />
      </Modal>

      <Cards headless>
        <div className={`headerUpdate ${label}`}>
          <h4>{title}</h4>
          <div className="action">
            <Link onClick={onHandleVisible} to="#">
              <FeatherIcon icon="edit-3" size={14} />
            </Link>
            {/* <Link to="#">
              <FeatherIcon icon="mail" size={14} />
            </Link> */}
            <Link onClick={() => onEventDelete(id)} to="#">
              <FeatherIcon icon="trash-2" size={14} />
            </Link>
            <Link to="#">
              <FeatherIcon icon="x" size={14} />
            </Link>
          </div>
        </div>
        <div className="bodyUpdate">
          <p className="event-info">
            <FeatherIcon icon="calendar" size={16} /> <span className="label">Date:</span>{' '}
            <strong>{moment(date[0]).format('dddd, MMMM DD')}</strong>
          </p>
          <p className="event-info">
            <FeatherIcon icon="clock" size={16} /> <span className="label">Time:</span>
            <strong>{`${time[0]} - ${time[1]}`}</strong>
          </p>
          <p className="event-info">
            <img src={require(`../../../static/img/icon/right.svg`)} alt="menu" />{' '}
            <span className="desc">{description}</span>
          </p>
        </div>
      </Cards>
    </UpdatePopup>
  );
};

ProjectUpdate.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  description: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onEventDelete: PropTypes.func,
  time: PropTypes.array,
  date: PropTypes.array,
};

export default ProjectUpdate;
