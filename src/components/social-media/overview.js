import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { MainWraper, SocialIcon } from './overview-style';
import Heading from '../heading/heading';

const SocialMediaContent = props => {
  const { icon, bgColor, title, subTitle } = props;
  return (
    <MainWraper>
      <SocialIcon className="social-icon" bgColor={bgColor}>
        <FontAwesome
          className="super-crazy-colors"
          name={icon}
          size="2x"
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
      </SocialIcon>
      <Heading as="h1">{title}</Heading>
      <p>{subTitle}</p>
    </MainWraper>
  );
};

SocialMediaContent.propTypes = {
  icon: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export { SocialMediaContent };
