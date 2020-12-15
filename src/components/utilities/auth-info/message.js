import React from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { useSelector } from 'react-redux';
import { AtbdTopDropdwon } from './auth-info-style';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';

const MessageBox = () => {
  const { rtl } = useSelector(state => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} props={props} />;
  };

  const renderTrackVertical = () => {
    const thumbStyle = {
      position: 'absolute',
      width: '6px',
      transition: 'opacity 200ms ease 0s',
      opacity: 0,
      [rtl ? 'left' : 'right']: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
    };
    return <div className="hello" style={thumbStyle} />;
  };

  const renderView = ({ style, ...props }) => {
    const customStyle = {
      marginRight: rtl && 'auto',
      [rtl ? 'marginLeft' : 'marginRight']: '-17px',
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  };

  renderThumb.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };

  renderView.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };

  const content = (
    <AtbdTopDropdwon className="atbd-top-dropdwon">
      <Heading className="atbd-top-dropdwon__title" as="h5">
        <span className="title-text">Messages</span>
        <Badge className="badge-success" count={3} />
      </Heading>
      <Scrollbars
        autoHeight
        autoHide
        renderThumbVertical={renderThumb}
        renderView={renderView}
        renderTrackVertical={renderTrackVertical}
      >
        <div className="atbd-top-dropdwon-menu">
          <ul className="atbd-top-dropdwon__nav">
            <li>
              <Link to="#">
                <figure className="atbd-top-dropdwon__content">
                  <img src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                  <figcaption>
                    <Heading as="h5">
                      Software <span className="color-success">3 hrs ago</span>
                    </Heading>
                    <div>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3} />
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li>
              <Link to="#">
                <figure className="atbd-top-dropdwon__content">
                  <img src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                  <figcaption>
                    <Heading as="h5">
                      Software <span className="color-success">3 hrs ago</span>
                    </Heading>
                    <div>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3} />
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li>
              <Link to="#">
                <figure className="atbd-top-dropdwon__content">
                  <img src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                  <figcaption>
                    <Heading as="h5">
                      Software <span className="color-success">3 hrs ago</span>
                    </Heading>
                    <div>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3} />
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li>
              <Link to="#">
                <figure className="atbd-top-dropdwon__content">
                  <img src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                  <figcaption>
                    <Heading as="h5">
                      Software <span className="color-success">3 hrs ago</span>
                    </Heading>
                    <div>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3} />
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li>
              <Link to="#">
                <figure className="atbd-top-dropdwon__content">
                  <img src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                  <figcaption>
                    <Heading as="h5">
                      Software <span className="color-success">3 hrs ago</span>
                    </Heading>
                    <div>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3} />
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <ul />
          </ul>
        </div>
      </Scrollbars>
      <Link className="btn-seeAll" to="#">
        See all messages
      </Link>
    </AtbdTopDropdwon>
  );

  return (
    <div className="message">
      <Popover placement="bottomLeft" content={content} action="click">
        <Badge dot offset={[-8, -5]}>
          <Link to="#" className="head-example">
            <FeatherIcon icon="mail" size={20} />
          </Link>
        </Badge>
      </Popover>
    </div>
  );
};

MessageBox.propTypes = {
  rtl: PropTypes.bool,
};

export default MessageBox;
