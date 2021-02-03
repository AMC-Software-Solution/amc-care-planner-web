/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Input, Upload } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { BackShadow, CreatePost } from './style';
import { Cards } from '../../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../../components/buttons/buttons';
import { submitPost } from '../../../../../redux/profile/actionCreator';

const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => {
    return {
      posts: state.Profile.posts,
    };
  });

  const [drawer, setDrawer] = useState(false);
  const [textValue, setTextValue] = useState('');

  const onCreate = () => {
    const arrayData = [];
    posts.map(data => {
      return arrayData.push(data.postId);
    });
    const max = Math.max(...arrayData);
    if (textValue === '') {
      alert('Please input minumum content');
    } else {
      dispatch(
        submitPost([
          ...posts,
          {
            postId: max + 1,
            from: 'David Warner',
            time: new Date().getTime(),
            img: ['static/img/profile/post/postImage.png'],
            author: 'static/img/chat-author/t4.jpg',
            content: textValue,
            like: 0,
            comment: [],
          },
        ]),
      );
      setTextValue('');
    }
    setTimeout(() => {
      setDrawer(false);
    }, 500);
  };

  const onTextChange = e => {
    return setTextValue(e.target.value);
  };

  return (
    <CreatePost>
      {drawer && <BackShadow onClick={() => setDrawer(false)} />}
      <Cards title="Post Something">
        <div onClick={() => setDrawer(true)} className="postBody">
          <img className="post-author" src={require('../../../../../static/img/chat-author/t4.jpg')} alt="" />
          <Input.TextArea value={textValue} onChange={onTextChange} placeholder="Write something..." />
        </div>
        <div onClick={() => setDrawer(true)} className="postFooter">
          <div className="postFooter_left">
            <Upload>
              <Button shape="circle" type="light">
                <img src={require('../../../../../static/img/icon/image.png')} alt="" />
                Photo/Video
              </Button>
            </Upload>
            <Button className="btn-more" shape="circle" type="light">
              <FeatherIcon icon="more-horizontal" />
            </Button>
          </div>
          <div className="postFooter_right">
            {drawer && (
              <Button className="btn-post" onClick={onCreate} type="primary">
                Publish Post
              </Button>
            )}
          </div>
        </div>
      </Cards>
    </CreatePost>
  );
};

export default Post;
