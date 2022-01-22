import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from 'styled-components';
import css from '../utils/cssVariables';

import car from '../assets/img/conJour2-Porsche-side.png'; 
import map from '../assets/img/conJour2-map.png';
import device from '../assets/img/conJour2-phone.png';

const ContentWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: ${css.paddingLarge};
  padding-left: ${css.paddingLarge};
  
  ${css.mobile} {
    margin-top: 30%;
    height: 50vh;
    flex-direction: column;
    padding-right: ${css.paddingSmall};
    padding-left: ${css.paddingSmall};
  }
`;

const ContentLeft = styled.div`
  position: relative;
  flex: 1 1 0%;

  h2, p {
    white-space: pre-line;
  }
`;

const TextWrapper = styled.div`

`;

const ContentRight = styled.div`
  position: relative;
  flex: 1.5 1 0%;
  height: 100%;

  ${css.mobile} {
    display: block;
    width: 100%;
    margin-top: 20%;
  }
`;

const CarWrapper = styled.div`
  position: absolute;
  left: -27%;
  bottom: -7%;
  width: 31vw;

  ${css.mobile} {
    display: none;
  }
`;

const PhoneWrapper = styled.div`
  position: absolute;
  top: -18%;
  right: 12%;
  width: 46%;
  filter: drop-shadow(rgba(0,0,0,0.3) -25px 25px 36px);
  
  ${css.mobile} {
    left: 30%;
    top: -20%;
  }
`;

const MapWrapper = styled.div`
  width: 50vw;

  ${css.mobile} {
    width: 100vw;
  }
`;

// COMPONENT
const ConsumerJour2 = () => {

  gsap.registerPlugin(ScrollTrigger);

  const mapAnimate = useRef();  
  const carAnimate = useRef();
  const deviceAnimate = useRef();
  const h2Animate = useRef();
  const pAnimate = useRef();
  
  useEffect(() => {

    let sequence = gsap.timeline({
      scrollTrigger: {
        trigger: "#consumerJour2",
        start: "top center",
      }
    });
    
    sequence.from( [h2Animate.current], {
      y: -200,
      duration: 0.75,
      autoAlpha: 0,
    })
    .from( [mapAnimate.current], {
      x: "70vw",
      duration: 0.5,
    }, "<" )
    .from( [carAnimate.current], {
      x: "-10vw",
      duration: 0.5, 
      autoAlpha: 0,
    }, "<75%" )
    .from( [pAnimate.current], {
      y: -100,
      duration: 0.5,
      autoAlpha: 0,
    }, "<" )
    .from( [deviceAnimate.current], {
      y: -100,
      duration: 0.5,
      autoAlpha: 0,
    }, "<25%" )
  });

  return (
    <ContentWrapper id="consumerJour2">
      <ContentLeft>
        <TextWrapper id="textWrapper">
          <h2 ref={h2Animate}>Delivered to your Door.</h2>
          <p ref={pAnimate}>Eleanor works with your schedule to have a <br/>white-glove delivery service deliver your new <br/>vehicle right to your door.</p>
        </TextWrapper>
      </ContentLeft>

      <ContentRight>
        <MapWrapper ref={mapAnimate}>
          <img src={map} alt="Eleanor location map"/>
        </MapWrapper>
        <CarWrapper ref={carAnimate}>
          <img src={car} alt="Grey Porsche vehicle view from side"/>
        </CarWrapper>
        <PhoneWrapper ref={deviceAnimate}>
          <img src={device} alt="Eleanor app displayed on iPhone with location map in background"/>
        </PhoneWrapper>
      </ContentRight>
    </ContentWrapper>
  );
};

export default ConsumerJour2;