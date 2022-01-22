import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from 'styled-components';
import css from '../utils/cssVariables';

import carBG from '../assets/img/conJour3-Porsche-front.png'; 
import device from '../assets/img/conJour3-phone-with-shadow.png';

const ContentWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: ${css.paddingLarge};
  padding-left: ${css.paddingLarge};
  
  ${css.mobile} {
    margin-top: 50%;
    flex-direction: column-reverse;
    padding-right: ${css.paddingSmall};
    padding-left: ${css.paddingSmall};
  }
`;

const ContentLeft = styled.div`
  position: relative;
  width: 50%;
  height: 52vw;

  ${css.mobile} {
    width: 100%; 
  }
`;

const BgWrapper = styled.div`
  position: relative;
  background-color: ${css.primary};
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 90%;
  }
`;

const DeviceWrapper = styled.div`
  position: absolute;
  right: -8%;
  top: 5%;
  height: auto;
  width: 75%;
`;

const ContentRight = styled.div`
  position: relative;
  display: block;
  width: 50%;
  height: 100%;

  ${css.mobile} {
    width: 100%; 
    display: block;  
  }

  h2, p {
    white-space: pre-line;
  }

`;

const TextWrapper = styled.div`
  padding: 0;
  
  & > p {
    max-width: 65%;

    ${css.mobile} {
      max-width: 100%;
    }
`;

// COMPONENT
const ConsumerJour3 = () => {

  gsap.registerPlugin(ScrollTrigger);
  
  const carAnimate = useRef();
  const deviceAnimate = useRef();
  const h2Animate = useRef();
  const pAnimate = useRef();

  useEffect(() => {

    let seq3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#consumerJour3",
        start: "top center",
      }
    });
    
    seq3.from( [carAnimate.current], {
      x: "-100%",
      duration: 0.5, 
      autoAlpha: 0,
    })
    .from( [deviceAnimate.current], {
      y: -100,
      duration: 0.5, 
      autoAlpha: 0,
    }, "<50%" )
    .from( [h2Animate.current], {
      y: -100,
      duration: 0.5,
      autoAlpha: 0,
    }, "<50%" )
    .from( [pAnimate.current], {
      y: -100,
      duration: 0.2,
      autoAlpha: 0,
    }, "<50%" )
  });

  return (
    <ContentWrapper id="consumerJour3">
      <ContentLeft>
        <BgWrapper ref={carAnimate}>
          <img src={carBG} alt="White Porsche vehicle view from frontend"/>
        </BgWrapper>
        <DeviceWrapper ref={deviceAnimate}>
          <img src={device} alt="Eleanor app displayed on iPhone"/>
        </DeviceWrapper>
      </ContentLeft>

      <ContentRight>
        <TextWrapper id="textWrapper">
          <h2 ref={h2Animate}>TRADE IN YOUR CAR <br/>EVERY MONTH.</h2>
          <p ref={pAnimate}>Use Eleanor Trade-In Credits to trade in your vehicle for <br/>something else in our luxurious inventory.  Nothing says <br/>“June” like a new car!</p>
        </TextWrapper>
      </ContentRight>
    </ContentWrapper>
  );
};

export default ConsumerJour3;