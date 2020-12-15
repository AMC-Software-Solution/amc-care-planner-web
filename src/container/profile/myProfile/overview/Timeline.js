import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const RightAside = lazy(() => import('../overview/RightAside'));
const CreatePost = lazy(() => import('./timeline/CreatePost'));
const AllPosts = lazy(() => import('./timeline/Posts'));

const Timeline = () => {
  const { posts } = useSelector(state => {
    return {
      posts: state.Profile.posts,
    };
  });
  return (
    <Row gutter={25}>
      <Col md={16}>
        <Suspense
          fallback={
            <Cards headless>
              <Skeleton active />
            </Cards>
          }
        >
          <CreatePost />
        </Suspense>
        {posts
          .sort((a, b) => b.time - a.time)
          .map(post => {
            return (
              <Suspense
                key={post.postId}
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <AllPosts {...post} />
              </Suspense>
            );
          })}
      </Col>
      <Col md={8}>
        <Suspense
          fallback={
            <Cards headless>
              <Skeleton active paragraph={{ rows: 10 }} />
            </Cards>
          }
        >
          <RightAside />
        </Suspense>
      </Col>
    </Row>
  );
};

export default Timeline;
