import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import css from '../utils/cssVariables';

import AppLink from '../components/AppLink';

import carGroup from '../assets/img/intro-cars-group.png'; 
import device from '../assets/img/intro-phone-with-shadow.png';

// STYLIZATION
const ContentWrapper = styled.section`
  background-color: ${css.primary};
  height: 50vw;
  display: flex;
  flex-direction: row;
  margin-bottom: 15vw;
  padding-top: 10vh;
  
  ${css.mobile} {
    position: relative;
    height: unset;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ContentLeft = styled.div`
  position: relative;
  width: 66.6666vw;
  height: 100%;
  
  ${css.mobile} {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  padding: 40px 0px 20vw ${css.paddingLarge};

  ${css.mobile} {
    padding-right: ${css.paddingSmall};
    padding-left: ${css.paddingSmall};
  }
`;

const IntroH1 = styled.h1`
  color: #FFF;

  ${css.mobile} {
    font-size: 12.8vw;
    line-height: 12.8vw;
  }
`;

const CarWrapper = styled.div`
  position: absolute;
  bottom: -105px;
  max-width: 100%;

  ${css.mobile} {
    overflow: hidden;
    width: 100%;
    height: 30vh;
    position: absolute;
    left: 0px;
    bottom: -5vh;
  }

  & > img { 
    max-width: 100%;

    ${css.mobile} {
      position: absolute;
      bottom: 0vh;
    }  
  }
`;

const ContentRight = styled.div`
  position: relative;
  display: block;
  width: 33.3333vw;
  height: 100%;
  text-align: center;

  & > img {
    position: absolute;
    left: -80px;
    bottom: -14.25vw;
  }

  ${css.mobile} {
    display: none;
  }
`;

// COMPONENT
const Intro = (props) => {

  const parentDiv = useRef();
  const carAnimate = useRef();
  const phoneAnimate = useRef();
  const h1Animate = useRef();
  const linkAnimate = useRef();

  useLayoutEffect( () => {
    let introSeq = gsap.timeline({});

      introSeq.from([parentDiv.current], {
          x: "-100%",
          duration: 1,
        })
        .from([carAnimate.current], {
          x: "-200%",
          duration: 1,
        })
        .from([phoneAnimate.current], {
          x: "400%",
          duration: 1,
        })
        .from([h1Animate.current], {
          y: -100,
          duration: 0.5,
          autoAlpha: 0,
        }, "<25%")
        .from([linkAnimate.current], {
          y: -100,
          duration: 0.5,
          autoAlpha: 0,
        }, "<25%")
    }, []);
    
  return (
    <ContentWrapper id="intro" ref={parentDiv}>
      <ContentLeft>
        <TextWrapper>
          <IntroH1 ref={h1Animate}>Drive a New<br/>Car Every Month.</IntroH1>
          <div ref={linkAnimate}>
            <AppLink/>
          </div>
        </TextWrapper>

        <CarWrapper ref={carAnimate}>
          <img src={carGroup} alt="Porsche / Mercedes Benz / Audi A7-MY18 compiled " onLoad={props.handleImgLoad}/>
        </CarWrapper>
      </ContentLeft>

      <ContentRight>
        <img src={device} ref={phoneAnimate} alt="Eleanor app displayed on iPhone " onLoad={props.handleImgLoad}/>
      </ContentRight>
    </ContentWrapper>
  );
}

export default Intro;