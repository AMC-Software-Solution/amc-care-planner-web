import React from 'react';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ContactCardWrapper } from '../style';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { contactDeleteData } from '../../../redux/contact/actionCreator';
import { Button } from '../../../components/buttons/buttons';

const ContactCard = ({ user, showEditModal }) => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => {
    return {
      users: state.Contact.data,
    };
  });
  const { id, name, designation, img, email, phone, company } = user;

  const onHandleDelete = () => {
    const value = users.filter(item => item.id !== id);
    dispatch(contactDeleteData(value));
  };

  return (
    <ContactCardWrapper>
      <div className="contact-card">
        <figure>
          <img src={require(`../../../${img}`)} alt="" />
          <figcaption>
            <h3>{name}</h3>
            <span>{designation}</span>
          </figcaption>
        </figure>
        <div className="user-info">
          <ul>
            <li>
              <FeatherIcon icon="phone" size={16} />
              {phone}
            </li>
            <li>
              <FeatherIcon icon="mail" size={16} />
              {email}
            </li>
            <li>
              <FeatherIcon icon="map-pin" size={16} />
              {company}
            </li>
          </ul>
        </div>
      </div>
      <Dropdown
        className="wide-dropdwon"
        content={
          <>
            <Link onClick={() => showEditModal(user, id)} to="#">
              <span>Edit</span>
            </Link>
            <Link onClick={() => onHandleDelete(id)} to="#">
              <span>Delete</span>
            </Link>
          </>
        }
        action={['click']}
      >
        <Button className="btn-icon" type="light" to="#" shape="circle">
          <FeatherIcon icon="more-horizontal" size={18} />
        </Button>
      </Dropdown>
    </ContactCardWrapper>
  );
};

ContactCard.propTypes = {
  user: PropTypes.object,
  showEditModal: PropTypes.func,
};

export default ContactCard;
