import React from 'react';
import { useSelector } from 'react-redux';
import Content from './Content';

const Starred = () => {
  const { searchData, email } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      email: state.email.allMessage,
    };
  });
  return (
    <Content
      email={email.filter(value => {
        return value.stared;
      })}
      searchData={searchData}
    />
  );
};

export default Starred;
