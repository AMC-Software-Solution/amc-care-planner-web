import React, { useState } from 'react';
import { Comment, Avatar, Form, List, Input } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Button } from '../buttons/buttons';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment props={props} />}
  />
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} size="default" raised type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

Editor.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  value: PropTypes.string,
};

const CommentEditor = () => {
  const [state, setState] = useState({
    comments: [],
    submitting: false,
    value: '',
  });

  const handleSubmit = () => {
    if (!state.value) {
      return;
    }

    setState({
      ...state,
      submitting: true,
    });

    setTimeout(() => {
      setState({
        ...state,
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...state.comments,
        ],
      });
    }, 1000);
  };

  const handleChange = e => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const { comments, submitting, value } = state;

  return (
    <div>
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
        content={<Editor onChange={handleChange} onSubmit={handleSubmit} submitting={submitting} value={value} />}
      />
    </div>
  );
};
export default CommentEditor;
