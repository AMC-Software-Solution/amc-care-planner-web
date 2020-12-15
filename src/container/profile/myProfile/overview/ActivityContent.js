import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { ActivityContents } from './style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../../components/dropdown/dropdown';

const ActivityContent = () => {
  return (
    <ActivityContents>
      <Cards headless>
        <ul className="activity-list">
          <li className="activity-list__single">
            <span className="activity-icon primary">
              <FeatherIcon icon="inbox" size={14} />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t1.jpg')} alt="" />
                <p>
                  <span className="inline-text color-primary">James</span> Send you a message{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <FeatherIcon icon="more-horizontal" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon secondary">
              <FeatherIcon icon="upload" size={14} />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t2.jpg')} alt="" />
                <p>
                  <span className="inline-text color-primary">Adam </span>upload website template for sale{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <FeatherIcon icon="more-horizontal" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon success">
              <FeatherIcon icon="log-out" size={14} />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t3.jpg')} alt="" />
                <p>
                  <span className="inline-text color-primary">Mumtahin</span> has registered{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <FeatherIcon icon="more-horizontal" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon info">
              <FeatherIcon icon="at-sign" size={14} />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t4.jpg')} alt="" />
                <p>
                  <span className="inline-text color-primary">James</span> Send you a message{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <FeatherIcon icon="more-horizontal" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon danger">
              <FeatherIcon icon="heart" size={14} />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t5.png')} alt="" />
                <p>
                  <span className="inline-text color-primary">Adam</span> upload website template for sale{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <FeatherIcon icon="more-horizontal" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon warning">
              <FeatherIcon icon="message-square" size={14} />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t1.jpg')} alt="" />
                <p>
                  <span className="inline-text color-primary">Mumtahin</span> has registered{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <FeatherIcon icon="more-horizontal" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon info">
              <FeatherIcon icon="at-sign" size={14} />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t6.png')} alt="" />
                <p>
                  <span className="inline-text color-primary">James</span> Send you a message{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <FeatherIcon icon="more-horizontal" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon warning">
              <FeatherIcon icon="heart" size={14} />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t7.png')} alt="" />
                <p>
                  <span className="inline-text color-primary">Mumtahin</span> has registered{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <FeatherIcon icon="more-horizontal" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon danger">
              <FeatherIcon icon="message-square" size={14} />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t8.png')} alt="" />
                <p>
                  <span className="inline-text color-primary">Adam</span> upload website template for sale{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <FeatherIcon icon="more-horizontal" />
                </Dropdown>
              </Link>
            </div>
          </li>
          <li className="activity-list__single">
            <span className="activity-icon primary">
              <FeatherIcon icon="heart" size={14} />
            </span>
            <div className="activity-content">
              <div className="activity-info">
                <img src={require('../../../../static/img/chat-author/t1.jpg')} alt="" />
                <p>
                  <span className="inline-text color-primary">James</span> Send you a message{' '}
                  <span className="hour">5 hours ago</span>
                </p>
              </div>
              <Link className="activity-more" to="#">
                <Dropdown
                  action={['click']}
                  content={
                    <>
                      <Link to="#">
                        <span>Hide</span>
                      </Link>
                      <Link to="#">
                        <span>Delete</span>
                      </Link>
                    </>
                  }
                >
                  <FeatherIcon icon="more-horizontal" />
                </Dropdown>
              </Link>
            </div>
          </li>
        </ul>
      </Cards>
    </ActivityContents>
  );
};

export default ActivityContent;
