import React from 'react';
import styled from 'styled-components';
import css from '../utils/cssVariables';

import logo from '../assets/svg/logo-footer.svg';

const Footer = () => {
  return (
    <StyledF className="App-footer">
      <a href="/">
        <img src={logo} alt="footer logo" />
      </a>
      <LinkWrapper>
        <a href="/">About Us</a>
        <a href="/">Terms of Use</a>
        <a href="/">FAQ</a>
      </LinkWrapper>
    </StyledF>
  )
}

const StyledF = styled.footer`
  text-align: left;
  position: relative;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #F4F4F5;
  margin: 10rem ${css.paddingLarge} 3rem;

  ${css.mobile} {
    padding: ${css.paddingSmall};
    margin: 0;
  }

  & img {
    display: inline-block;
    height: 1rem;
  }
`

const LinkWrapper = styled.div`
  display: inline-block;
  text-align: right;

  font-size: .6875rem;
  line-height: 1;

  ${css.mobile} {
    display: none;
  }

  & > a {
    color: #4F5874;
  }
  
  & > a:nth-of-type(2) {
    margin: 0 3rem;
  } 
`

export default Footer;