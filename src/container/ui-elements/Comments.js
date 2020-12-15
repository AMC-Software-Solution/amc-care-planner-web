import React, { useState } from 'react';
import { Row, Col, Comment, Tooltip, Avatar, List } from 'antd';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import CommentEditor from '../../components/comments/comments-editor';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply</span>]}
    author={<NavLink to="#">Han Solo</NavLink>}
    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and
        Axure).
      </p>
    }
  >
    {children}
  </Comment>
);

ExampleComment.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const Comments = () => {
  const [state, setState] = useState({
    likes: 0,
    dislikes: 0,
    action: null,
  });

  const like = () => {
    setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  const dislike = () => {
    setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  const { likes, dislikes, action } = state;

  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        <LikeOutlined theme={action === 'liked' ? 'filled' : 'outlined'} onClick={like} />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
    </span>,
    <span key=' key="comment-basic-dislike"'>
      <Tooltip title="Dislike">
        <DislikeOutlined theme={action === 'disliked' ? 'filled' : 'outlined'} onClick={dislike} />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
    </span>,
    <span key="comment-basic-reply-to">Reply</span>,
  ];

  const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply</span>],
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design resources (Sketch and
          Axure), to help people create their product prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment()
            .subtract(1, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
          <span>
            {moment()
              .subtract(1, 'days')
              .fromNow()}
          </span>
        </Tooltip>
      ),
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply</span>],
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design resources (Sketch and
          Axure), to help people create their product prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment()
            .subtract(2, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
          <span>
            {moment()
              .subtract(2, 'days')
              .fromNow()}
          </span>
        </Tooltip>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        title="Comments"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <Cards title="Basic comment">
              <Comment
                actions={actions}
                author={<NavLink to="#">Han Solo</NavLink>}
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
                }
                content={
                  <p>
                    We supply a series of design principles, practical patterns and high quality design resources
                    (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                  </p>
                }
                datetime={
                  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
              />
            </Cards>
          </Col>
          <Col xs={24}>
            <Cards title="Usage with list">
              <List
                className="comment-list"
                header={`${data.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <li>
                    <Comment
                      actions={actions}
                      author={item.author}
                      avatar={item.avatar}
                      content={item.content}
                      datetime={item.datetime}
                    />
                  </li>
                )}
              />
            </Cards>
          </Col>
          <Col xs={24}>
            <Cards title="Nested comments">
              <div className="nested-comment-wrapper">
                <h6 className="comment-title">Reply to</h6>
                <ExampleComment>
                  <ExampleComment>
                    <ExampleComment />
                    <ExampleComment />
                  </ExampleComment>
                </ExampleComment>
              </div>
            </Cards>
          </Col>
          <Col xl={12} xs={24}>
            <Cards title="Reply Editor">
              <CommentEditor />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Comments;
