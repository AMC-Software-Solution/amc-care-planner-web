import React from 'react';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import { ListStyle } from './style';

const List = props => {
  const { text } = props;

  return (
    <ListStyle className="list-single">
      <span className="icon">
        <FeatherIcon icon="check" size={14} />
      </span>
      <span>{text}</span>
    </ListStyle>
  );
};
List.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
};
export { List };
