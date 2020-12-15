import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import ModalVideo from 'react-modal-video';
import { RightAsideWrapper } from './style';
import { Button } from '../../../../components/buttons/buttons';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { profileFriendsChangeStatus } from '../../../../redux/profile/actionCreator';
import './video-modal.css';

const RightAside = () => {
  const dispatch = useDispatch();
  const { friends, gallery } = useSelector(state => {
    return {
      friends: state.Profile.friends,
      gallery: state.gallery.data,
    };
  });

  const [isOpen, setOpen] = useState(false);

  return (
    <RightAsideWrapper>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <Cards title="Friends">
        <ul className="ff-widget">
          {friends.map(({ name, key, designation, status, img }) => {
            return (
              <li key={key}>
                <div className="ff-info">
                  <img src={require(`../../../../${img}`)} alt="" />
                  <p>
                    {name} <span>{designation}</span>
                  </p>
                </div>
                <Button
                  className="btn-ff"
                  onClick={() => dispatch(profileFriendsChangeStatus(key))}
                  outlined={!status}
                  type={status ? 'primary' : 'white'}
                >
                  {!status ? (
                    'Follow'
                  ) : (
                    <>
                      <FeatherIcon icon="check" />
                      Following
                    </>
                  )}
                </Button>
              </li>
            );
          })}

          <Link to="#" className="btn-loadMore">
            Load more friends
          </Link>
        </ul>
      </Cards>
      <Cards
        isbutton={
          <Link className="btn-seeAll" to="/admin/pages/gallery">
            See All
          </Link>
        }
        title="Photos"
      >
        <div className="widget-photo-list">
          <Row gutter={10}>
            {gallery.map(({ img, id }) => {
              return (
                id <= 6 && (
                  <Col key={id} xxl={8} md={24} sm={6} xs={8}>
                    <img style={{ width: '100%' }} src={require(`../../../../${img}`)} alt="" />
                  </Col>
                )
              );
            })}
          </Row>
        </div>
      </Cards>
      <Cards
        isbutton={
          <Link className="btn-seeAll" to="#">
            See All
          </Link>
        }
        title="Videos"
      >
        <div className="widget-video-list">
          <Row gutter={10}>
            {gallery.map(({ img, id }) => {
              return (
                id <= 6 && (
                  <Col key={id} xxl={8} md={24} sm={6} xs={8}>
                    <Link onClick={() => setOpen(true)} className="video" to="#">
                      <img style={{ width: '100%' }} src={require(`../../../../${img}`)} alt="" />
                      <span>
                        <FeatherIcon icon="play" />
                      </span>
                    </Link>
                  </Col>
                )
              );
            })}
          </Row>
        </div>
      </Cards>
    </RightAsideWrapper>
  );
};

export default RightAside;
