import React from 'react';
import { Row, Col } from 'antd';
import { SocialMediaWrapper } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { SocialMediaContent } from '../../../../components/social-media/overview';

const SocialMediaOverview = () => {
  return (
    <SocialMediaWrapper>
      <Cards title="Social Media Overview" size="large">
        <Row gutter={25}>
          <Col xxl={8} md={4} xs={8}>
            <SocialMediaContent icon="facebook" bgColor="#2366B8" title="5,461" subTitle="Likes" />
          </Col>
          <Col xxl={8} md={4} xs={8}>
            <SocialMediaContent icon="twitter" bgColor="#00ABE4" title="5,461" subTitle="Followers" />
          </Col>
          <Col xxl={8} md={4} xs={8}>
            <SocialMediaContent
              icon="instagram"
              bgColor="linear-gradient(to top, #ffc107 0%,#f44336 31%,#9c27b0 65%,#9c27b0 100%)"
              title="5,461"
              subTitle="Followers"
            />
          </Col>
          <Col xxl={8} md={4} xs={8}>
            <SocialMediaContent icon="youtube-play" bgColor="#E32212" title="5,461" subTitle="Subscribers" />
          </Col>
          <Col xxl={8} md={4} xs={8}>
            <SocialMediaContent icon="pinterest-p" bgColor="#E32212" title="5,461" subTitle="Followers" />
          </Col>
          <Col xxl={8} md={4} xs={8}>
            <SocialMediaContent icon="linkedin" bgColor="#007CBC" title="5,461" subTitle="Followers" />
          </Col>
        </Row>
      </Cards>
    </SocialMediaWrapper>
  );
};

export default SocialMediaOverview;
