import React from 'react';
import styled from 'styled-components';
import css from '../utils/cssVariables';

import logo from '../assets/img/logo.svg';

const StyledH = styled.header`
  text-align: left;
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;
  padding: 3rem ${css.paddingLarge};

  ${css.mobile} {
    padding: ${css.paddingSmall};
  }
`;

const Header = () => {  
  return (
    <StyledH className="App-header">
      <img src={logo} className="main-logo" alt="logo" />
    </StyledH>
  )
}

export default Header;