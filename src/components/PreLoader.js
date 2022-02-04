import React from 'react';
import styled from 'styled-components';

const PreLoader = (props) => {
  return (
    <LoaderWrapper className={ props.loading ? 'active' : 'disabled' }>
      <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 150 150" fill="none">
        <g>
          <circle cx="75" cy="75" r="61" stroke="#7B87AF" strokeWidth="2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M101.7,67.1l-6.9-3.7c-0.3-0.1-0.6-0.1-0.8,0.2l-6.3,9c-0.2,0.2-0.5,0.4-0.8,0.3L83,72 c-0.3-0.1-0.6-0.4-0.6-0.6l-1.5-10.8c0-0.3-0.3-0.5-0.6-0.5h-9.6c-0.3,0-0.6,0.2-0.6,0.5l-1.6,10.8c0,0.3-0.3,0.6-0.6,0.7l-3.9,0.9 c-0.3,0.1-0.7-0.1-0.8-0.3l-6.3-9c-0.2-0.2-0.5-0.3-0.8-0.2l-6.9,3.7c-0.3,0.1-0.4,0.5-0.3,0.8l7.5,21.6c0.1,0.3,0.4,0.5,0.7,0.5 h36.6c0.3,0,0.6-0.2,0.7-0.5l7.5-21.6C102.1,67.6,101.9,67.2,101.7,67.1z" fill="#7B87AF"/>
        </g>
          <circle id="orbit" cx="14" cy="75" r="5" fill="#7B87AF"/>
      </svg>
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  display: flex;
  pointer-events: none;

  &.active {
    opacity: 1;
    z-index: 1000;
  }

  &.disabled {
    animation: fadeOutAnim ease 1000ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes fadeOutAnim {
    0% {
      opacity: 1;
      visibility: visible;
    }
    95% {
      z-index: 1000;
    }
    100% {
      opacity: 0;
      visibility: hidden;
      z-index: -1;
    }
  }


  circle#orbit {
    animation: 3s linear infinite orbit;
    transform-origin: center center;

    @keyframes orbit {
      from {
        transform: rotate(0deg);
      }
    
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export default PreLoader;