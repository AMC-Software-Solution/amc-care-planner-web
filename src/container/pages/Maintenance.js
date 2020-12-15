import React from 'react';
import { MaintananceWrapper } from './style';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';

const Maintenance = () => {
  return (
    <Main>
      <MaintananceWrapper>
        <img src={require(`../../static/img/pages/maintenance.svg`)} alt="maintenance" />
        <Heading as="h3">We are currently performing maintenance</Heading>
        <p>
          We&rsquo;re making the system more awesome. <br />
          We&rsquo;ll be back shortly.
        </p>
      </MaintananceWrapper>
    </Main>
  );
};

export default Maintenance;
