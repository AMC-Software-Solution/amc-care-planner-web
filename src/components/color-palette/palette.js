import React from 'react';
import PropTypes from 'prop-types';
import { ColorPalette } from './style';

const Palette = props => {
  const { colorCode, bordered, content, bg, gradient, direction, children } = props;

  return (
    <>
      <ColorPalette
        isgrad={gradient}
        direction={direction}
        isbg={bg}
        iscontent={content}
        isbordered={bordered}
        type={colorCode}
      >
        <span>{children}</span> {content && <span>{!gradient ? colorCode : colorCode[1]}</span>}
      </ColorPalette>
      {!content && colorCode}
    </>
  );
};

Palette.propTypes = {
  colorCode: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  bordered: PropTypes.bool,
  content: PropTypes.bool,
  bg: PropTypes.bool,
  gradient: PropTypes.bool,
  direction: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]),
};

export default Palette;
