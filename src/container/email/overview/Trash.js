import React from 'react';
import { useSelector } from 'react-redux';
import EmailContent from './Content';

const Trash = () => {
  const { searchData, email } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      email: state.email.allMessage,
    };
  });
  return (
    <EmailContent
      email={email.filter(value => {
        return value.type === 'trash';
      })}
      searchData={searchData}
    />
  );
};

export default Trash;
