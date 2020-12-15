import React from 'react';
import { ErrorWrapper } from './style';
import { NavLink } from 'react-router-dom';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';

const NotFound = () => {
  return (
    <Main>
      <ErrorWrapper>
        <img src={require(`../../static/img/pages/404.svg`)} alt="404" />
        <Heading className="error-text" as="h3">
          404
        </Heading>
        <p>Sorry! the page you are looking for doesn't exist.</p>
        <NavLink to="/admin">
          <Button size="default" type="primary" to="/admin">
            Return Home
          </Button>
        </NavLink>
      </ErrorWrapper>
    </Main>
  );
};

export default NotFound;
