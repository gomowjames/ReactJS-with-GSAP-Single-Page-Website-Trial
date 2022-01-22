import React from 'react';
import styled from 'styled-components';
import css from '../utils/cssVariables';

import arrow from '../assets/img/arrow.svg';

const LinkOut = styled.a`
  color: #414A69;

  & > span {
    margin-left: 2rem;
  }
`;

const AppLink = () => {  
  return (
    <LinkOut href="#">
      Available On the App Store<span><img src={arrow} alt="arrow icon"/></span>
    </LinkOut>
  )
}

export default AppLink;