import React, { useEffect, lazy, Suspense, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import { Tooltip, Row, Col, Spin } from 'antd';
import moment from 'moment';
import propTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { MailDetailsWrapper, MessageAction, MessageDetails, ReplyList, MessageReply, MailRightAction } from './style';
import { Dropdown } from '../../../components/dropdown/dropdown';
import Heading from '../../../components/heading/heading';
import { filterSinglePage, onStarUpdate } from '../../../redux/email/actionCreator';
import { Cards } from '../../../components/cards/frame/cards-frame';

const MailComposer = lazy(() => import('./MailComposer'));

const Single = props => {
  const { match, history } = props;
  const email = useSelector(state => state.emailSingle.data[0]);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    replyMessage: 0,
  });

  useEffect(() => {
    if (filterSinglePage) {
      const id = parseInt(match.params.id, 10);
      dispatch(filterSinglePage(id));
    }
  }, [match.params.id, dispatch]);

  const replyMail = async replyMessage => {
    // hit replyMail api
    setState({ ...state, replyMessage });
  };

  const onStaredChange = id => {
    dispatch(onStarUpdate(id));
  };

  return (
    <MailDetailsWrapper>
      <Cards
        title={
          <>
            <MessageAction>
              <Link onClick={() => history.goBack()} to="#">
                <FeatherIcon icon="arrow-left" size={14} />
              </Link>
              <Tooltip placement="bottom" title="Refresh">
                <NavLink to="/refresh">
                  <FeatherIcon icon="rotate-cw" size={18} />
                </NavLink>
              </Tooltip>
              <Tooltip placement="bottom" title="Archive">
                <NavLink to="/">
                  <FeatherIcon icon="archive" size={18} />
                </NavLink>
              </Tooltip>
              <Tooltip placement="bottom" title="Info">
                <NavLink to="/">
                  <FeatherIcon icon="alert-octagon" size={18} />
                </NavLink>
              </Tooltip>
              <Tooltip placement="bottom" title="Delete">
                <NavLink to="/">
                  <FeatherIcon icon="trash" size={18} />
                </NavLink>
              </Tooltip>
              <Tooltip placement="bottom" title="Read">
                <NavLink to="/">
                  <FeatherIcon icon="book-open" size={18} />
                </NavLink>
              </Tooltip>
              <Tooltip placement="bottom" title="Folder">
                <NavLink to="/">
                  <FeatherIcon icon="folder" size={18} />
                </NavLink>
              </Tooltip>
            </MessageAction>
          </>
        }
        isbutton={
          <MailRightAction>
            <span>1 - 50 of 235</span>
          </MailRightAction>
        }
      >
        <Row gutter={15}>
          <Col>
            <MessageDetails>
              <div className="d-flex justify-content-between align-items-center">
                <div className="message-subject">
                  <Heading as="h2">
                    {email.subject}
                    <span className="mail-badge primary">{email.type}</span>
                  </Heading>
                </div>

                <div className="message-action">
                  <Link to="#" className="ex-coll">
                    <FeatherIcon icon="chevron-up" size={16} />
                    <FeatherIcon icon="chevron-down" size={16} />
                  </Link>

                  <Link to="#">
                    <FeatherIcon icon="printer" size={16} />
                  </Link>
                </div>
              </div>

              <div className="message-box d-flex justify-content-between align-items-center">
                <div className="message-author">
                  <img style={{ width: '60px', borderRadius: '50%' }} src={email.img} alt="" />
                  <div>
                    <Heading as="h4">{email.userName}</Heading>
                    <Dropdown
                      placement="bottomCenter"
                      content={
                        <ul className="mail-props">
                          <li>
                            <span>From:</span> <span>{email.from}</span>{' '}
                          </li>
                          <li>
                            <span>To:</span> <span>{email.to}</span>{' '}
                          </li>
                          <li>
                            <span>CC:</span> <span>example@gamil.com</span>{' '}
                          </li>
                          <li>
                            <span>Date:</span> <span>{moment(email.id).format('LLL')}</span>
                          </li>
                        </ul>
                      }
                    >
                      <Link to="#">
                        To {email.to}
                        <FeatherIcon icon="chevron-down" size={14} />
                      </Link>
                    </Dropdown>
                  </div>
                </div>

                <div className="message-excerpt">
                  <span>
                    <FeatherIcon icon="paperclip" />
                  </span>
                  <span> {moment(email.id).format('LLL')} </span>
                  <Link
                    className={email.stared ? 'starActive' : 'starDeactivate'}
                    onClick={() => onStaredChange(email.id)}
                    to="#"
                  >
                    <FontAwesome name="star-o" />
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="corner-up-left" />
                  </Link>
                  <Link to="#">
                    <FeatherIcon icon="more-vertical" />
                  </Link>
                </div>
              </div>

              <div className="message-body">
                <span className="welcome-text">Hello Adam,</span>
                <p>{email.body}</p>

                <Heading as="h6">
                  Best Regards <br /> {email.userName}
                </Heading>
              </div>

              <div className="message-attachments">
                <figure>
                  <div className="attachment-image">
                    <img src={require('../../../static/img/email/2.png')} alt="" />
                  </div>
                  <div className="attachment-hover">
                    <Link className="btn-link" to="#">
                      <FeatherIcon icon="download" />
                    </Link>
                    <Link className="btn-link" to="#">
                      <FeatherIcon icon="share-2" />
                    </Link>
                  </div>
                  <figcaption>
                    <Heading as="h4">Attached.jpg</Heading>
                    <p>256.5 KB</p>
                  </figcaption>
                </figure>

                <figure>
                  <div className="attachment-image">
                    <img src={require('../../../static/img/email/1.png')} alt="" />
                  </div>
                  <div className="attachment-hover">
                    <Link className="btn-link" to="#">
                      <FeatherIcon icon="download" />
                    </Link>
                    <Link className="btn-link" to="#">
                      <FeatherIcon icon="share-2" />
                    </Link>
                  </div>
                  <figcaption>
                    <Heading as="h4">Attached.jpg</Heading>
                    <p>256.5 KB</p>
                  </figcaption>
                </figure>
                <figure>
                  <div className="attachment-image">
                    <img src={require('../../../static/img/email/3.png')} alt="" />
                  </div>
                  <div className="attachment-hover">
                    <Link className="btn-link" to="#">
                      <FeatherIcon icon="download" />
                    </Link>
                    <Link className="btn-link" to="#">
                      <FeatherIcon icon="share-2" />
                    </Link>
                  </div>
                  <figcaption>
                    <Heading as="h4">Attached.zip</Heading>
                    <p>256.5 KB</p>
                  </figcaption>
                </figure>
                <figure>
                  <div className="attachment-image">
                    <img src={require('../../../static/img/email/4.png')} alt="" />
                  </div>
                  <div className="attachment-hover">
                    <Link className="btn-link" to="#">
                      <FeatherIcon icon="download" />
                    </Link>
                    <Link className="btn-link" to="#">
                      <FeatherIcon icon="share-2" />
                    </Link>
                  </div>
                  <figcaption>
                    <Heading as="h4">Attached.pdf</Heading>
                    <p>256.5 KB</p>
                  </figcaption>
                </figure>
              </div>
              <hr />
            </MessageDetails>
          </Col>
        </Row>

        <Row gutter={15}>
          <Col xs={24}>
            <ReplyList>
              <div className="reply-view__single">
                <figure className="reply-view__content d-flex">
                  <img style={{ width: 50, height: 50 }} src={require('../../../static/img/email/2.png')} alt="" />
                  <figcaption>
                    <Heading as="h6">Reynante Labares</Heading>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      inviduntLorem ipsum dolor...
                    </p>
                  </figcaption>
                </figure>
                <div className="reply-view__meta">
                  <span className="meta-list">
                    <span className="date-meta">Jan 2, 2020, 5:22 PM</span>
                    <Link
                      className={email.stared ? 'starActive' : 'starDeactivate'}
                      onClick={() => onStaredChange(email.id)}
                      to="#"
                    >
                      <FontAwesome name="star-o" />
                    </Link>
                    <Link to="#">
                      <FeatherIcon icon="more-vertical" />
                    </Link>
                    <Link to="#">
                      <FeatherIcon icon="corner-up-left" />
                    </Link>
                  </span>
                </div>
              </div>
            </ReplyList>
            <MessageReply>
              <nav>
                <ul>
                  <li>
                    <NavLink to={`${match.url}/replay`}>
                      <FeatherIcon icon="corner-up-left" size={14} /> Reply
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`${match.url}/forward`}>
                      <FeatherIcon icon="corner-up-right" size={14} /> Forward
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="reply-form d-flex">
                <Switch>
                  <Suspense
                    fallback={
                      <div className="spin">
                        <Spin />
                      </div>
                    }
                  >
                    <div style={{ width: '100%' }} className="reply-box">
                      <Route
                        path={`${match.url}/replay`}
                        render={value => (
                          <>
                            <img
                              style={{ width: 50, height: 50 }}
                              src={require('../../../static/img/email/2.png')}
                              alt=""
                            />
                            <MailComposer replay props={value} defaultTag="Alice Freeman" onSend={replyMail} />
                          </>
                        )}
                      />
                    </div>
                  </Suspense>
                </Switch>
              </div>
            </MessageReply>
          </Col>
        </Row>
      </Cards>
    </MailDetailsWrapper>
  );
};

Single.propTypes = {
  match: propTypes.object,
  history: propTypes.object,
};

export default Single;
