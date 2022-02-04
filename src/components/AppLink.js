import React from 'react';
import styled from 'styled-components';

import arrow from '../assets/svg/arrow.svg';

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