import React from 'react';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import { TabBasic, Child } from './style';

const Tab = props => {
  const { data, tabPosition, color } = props;
  let counter = 0;

  return (
    <TabBasic color={color && color} defaultActiveKey="1" tabPosition={tabPosition !== undefined ? tabPosition : 'top'}>
      {data.map(item => {
        const { title, content, icon, tabTitle } = item;
        counter += 1;
        return (
          <Child
            color={color && color}
            tab={
              icon === undefined ? (
                tabTitle
              ) : (
                <span>
                  <FeatherIcon icon={icon} size={16} />
                  {tabTitle}
                </span>
              )
            }
            key={counter}
          >
            <h2>{title}</h2>
            <p>{content}</p>
          </Child>
        );
      })}
    </TabBasic>
  );
};

Tab.propTypes = {
  color: PropTypes.string,
  tabPosition: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export { Tab };
