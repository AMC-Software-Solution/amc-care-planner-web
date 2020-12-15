import React from 'react';
import { useSelector } from 'react-redux';
import Content from './Content';

const Spam = () => {
  const [searchData, email] = useSelector(state => [state.headerSearchData, state.email.allMessage]);
  return (
    <Content
      email={email.filter(value => {
        return value.type === 'spam';
      })}
      searchData={searchData}
    />
  );
};

export default Spam;
