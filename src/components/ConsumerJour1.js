import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from 'styled-components';
import css from '../utils/cssVariables';

import VehicleSlider from './VehicleSlider';

const ContentWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-right: ${css.paddingLarge};
  padding-left: ${css.paddingLarge};
  
  ${css.mobile} {
    margin-top: 30%;
    padding-right: ${css.paddingSmall};
    padding-left: ${css.paddingSmall};
    flex-direction: column-reverse;
    min-height: 50vh;
  }
`;

const ContentLeft = styled.div`
  position: relative;
  width: 50%;
  height: 40vw;

  ${css.mobile} {
    height: 45vh;
    min-height: 80vw;
    width: 100%;
  }
`;

const BgWrapper = styled.div`
  background-color: ${css.primary};
  width: 66%;
  height: 100%;
  transform-origin: right;

  ${css.mobile} {
    width: 100%;
  }
`;

const ContentRight = styled.div`
  position: relative;
  display: block;
  width: 50%;
  height: 100%;

  ${css.mobile} {
    width: 100%;
  }

  h2, p {
    white-space: pre-line;
  }
`;

const TextWrapper = styled.div`
  padding: 5vw 0 0;
`;


// COMPONENT
const ConsumerJour1 = () => {

  gsap.registerPlugin(ScrollTrigger);

  const bgAnimate = useRef();
  const h2Animate = useRef();
  const pAnimate = useRef();

  useLayoutEffect( () => {
    let seq1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#consumerJour1",
        start: "top center",
      }
    });
    
    seq1.from([bgAnimate.current], {
      scaleX: 0,
      duration: .5,
    })
    .from( [h2Animate.current], {
      y: -100,
      duration: 0.5,
      autoAlpha: 0,
    }, "<25%" )
    .from( [pAnimate.current], {
      y: -100,
      duration: 0.2,
      autoAlpha: 0,
    }, "<50%" )
  });

  return (
    <ContentWrapper id="consumerJour1">
      <ContentLeft>
        <BgWrapper id="background" ref={bgAnimate} />
        <VehicleSlider />
      </ContentLeft>

      <ContentRight>
        <TextWrapper>
          <h2 ref={h2Animate}>Select a Vehicle <br/>From Your Phone.</h2>
          <p ref={pAnimate}>Select from a wide range of luxury vehicles in our inventory. <br/>Drive it for a month, trade it the next for something else you have <br/>always wanted to own.</p>
        </TextWrapper>
      </ContentRight>
    </ContentWrapper>
  );
};

export default ConsumerJour1;