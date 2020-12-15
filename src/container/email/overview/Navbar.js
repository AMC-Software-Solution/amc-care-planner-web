import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Input, Form } from 'antd';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EmailNav } from './style';
import { Button } from '../../../components/buttons/buttons';
import Title from '../../../components/heading/heading';

const EmailNavbar = ({ path, toggleCollapsed }) => {
  const [state, setState] = useState({
    labels: ['personal', 'social', 'promotions'],
    newLabel: '',
    addNewDisplay: false,
  });
  const { labels, newLabel, addNewDisplay } = state;

  const addNewLabels = e => {
    e.preventDefault();

    setState({
      ...state,
      addNewDisplay: true,
    });
  };

  const cancelAddNewLabels = e => {
    e.preventDefault();
    e.stopPropagation();
    setState({
      ...state,
      addNewDisplay: false,
    });
  };

  const handelChange = e => {
    e.preventDefault();
    e.stopPropagation();
    if (newLabel !== '') {
      setState({
        ...state,
        labels: [...labels, newLabel],
        newLabel: '',
      });
    } else {
      alert('Please Give a label...');
    }
  };

  const onLabelChange = e => {
    setState({
      ...state,
      newLabel: e.target.value,
    });
  };

  return (
    <>
      <EmailNav>
        <ul>
          <li>
            <NavLink to={`${path}inbox`} onClick={toggleCollapsed}>
              <FeatherIcon icon="inbox" size={18} />
              <span className="nav-text">
                <span>Inbox</span>
                <span className="badge badge-primary">3</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}starred`} onClick={toggleCollapsed}>
              <FeatherIcon icon="star" size={18} />
              <span className="nav-text">
                <span>Starred</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}sent`} onClick={toggleCollapsed}>
              <FeatherIcon icon="send" size={18} />
              <span className="nav-text">
                <span>Sent</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}drafts`} onClick={toggleCollapsed}>
              <FeatherIcon icon="edit" size={18} />
              <span className="nav-text">
                <span>Drafts</span>
              </span>
              <span className="badge badge-primary">12</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}spam`} onClick={toggleCollapsed}>
              <FeatherIcon icon="alert-octagon" size={18} />
              <span className="nav-text">
                <span>Spam</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}trash`} onClick={toggleCollapsed}>
              <FeatherIcon icon="trash-2" size={18} />
              <span className="nav-text">
                <span>Trash</span>
              </span>
            </NavLink>
          </li>
        </ul>
        <div className="nav-labels">
          <p>Labels</p>
          <ul>
            {labels.map(label => {
              return (
                <li key={label}>
                  <Link to="#">
                    <FeatherIcon icon="list" size={18} /> {label}
                  </Link>
                </li>
              );
            })}

            <li className="add-label-btn" onKeyPress={() => {}} onClick={addNewLabels} role="menuitem">
              <NavLink onClick={addNewLabels} to={`${path}newLabels`}>
                <FeatherIcon icon="plus" size={18} /> Add New Label
              </NavLink>
              {addNewDisplay && (
                <div className="add-label">
                  <Form onSubmit={handelChange}>
                    <Title label={3}>Add New Label</Title>
                    <Input
                      onChange={onLabelChange}
                      value={newLabel}
                      name={newLabel}
                      type="text"
                      placeholder="Enter label name"
                    />
                    <div className="btn-group">
                      <Button size="default" onClick={handelChange} type="primary">
                        Add Label
                      </Button>
                      <Button onClick={cancelAddNewLabels} type="default">
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </div>
              )}
            </li>
          </ul>
        </div>
      </EmailNav>
    </>
  );
};

EmailNavbar.propTypes = {
  path: propTypes.string.isRequired,
};

export default EmailNavbar;
