import React from 'react';
import { useSelector } from 'react-redux';
import EmailContent from './Content';

const Sent = () => {
  const [searchData, email] = useSelector(state => [state.headerSearchData, state.email.allMessage]);
  return (
    <EmailContent
      email={email.filter(value => {
        return value.type === 'sent';
      })}
      searchData={searchData}
    />
  );
};

export default Sent;
