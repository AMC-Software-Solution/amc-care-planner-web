import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './style';
import { Cards } from '../cards/frame/cards-frame';
import { Dropdown } from '../dropdown/dropdown';
import { noteDeleteData, onStarUpdate, onLabelUpdate } from '../../redux/note/actionCreator';

const NoteCard = ({ data }) => {
  const dispatch = useDispatch();
  const { noteData } = useSelector(state => {
    return {
      noteData: state.Note.data,
    };
  });
  const { title, key, description, stared, label } = data;
  const onLabelChange = labels => {
    dispatch(onLabelUpdate(noteData, key, labels));
  };
  const content = (
    <>
      <div className="nav-labels">
        <ul>
          <li>
            <Link onClick={() => onLabelChange('personal')} to="#" />
          </li>
          <li>
            <Link onClick={() => onLabelChange('work')} to="#" />
          </li>
          <li>
            <Link onClick={() => onLabelChange('social')} to="#" />
          </li>
          <li>
            <Link onClick={() => onLabelChange('important')} to="#" />
          </li>
        </ul>
      </div>
    </>
  );
  const onHandleDelete = () => {
    const value = noteData.filter(item => item.key !== key);
    dispatch(noteDeleteData(value));
  };
  return (
    <Card className={label}>
      <Cards headless>
        <h4>
          <span>
            {title}
            <span className={`status-bullet ${label}`} />
          </span>
        </h4>
        <p>{description}</p>
        <div className="actions">
          <span>
            <Link
              className={stared ? 'star active' : 'star'}
              onClick={() => dispatch(onStarUpdate(noteData, key))}
              to="#"
            >
              <FeatherIcon icon="star" size={16} />
            </Link>
            <Link onClick={() => onHandleDelete()} to="#">
              <FeatherIcon icon="trash-2" size={16} />
            </Link>
          </span>
          <Dropdown content={content}>
            <Link to="#">
              <FeatherIcon icon="more-vertical" size={20} />
            </Link>
          </Dropdown>
        </div>
      </Cards>
    </Card>
  );
};

NoteCard.propTypes = {
  data: PropTypes.object,
};
export default NoteCard;
