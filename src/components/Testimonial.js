import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from 'styled-components';
import css from '../utils/cssVariables';

import AppLink from '../components/AppLink';

import custImg from '../assets/img/testimonial-customer.png';
import carImg from '../assets/img/testimonial-car.png';

const ContentWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-right: ${css.paddingLarge};
  padding-left: ${css.paddingLarge};
  
  ${css.mobile} {
    padding-right: ${css.paddingSmall};
    padding-left: ${css.paddingSmall};
    flex-direction: column-reverse;
  }
`;

const ContentLeft = styled.div`
  position: relative;
  width: 50%;
  height: 50vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${css.primary};

  ${css.mobile} {
    height: 100%;
    width: 100vw;
    margin-top: 2rem;
    margin-left: -1rem;
  }

  img {
    vertical-align: bottom;
    max-width: 70%;
  }
`;

const ContentRight = styled.div`
  position: relative;
  display: block;
  width: 50%;
  height: 100%;
  padding: 5rem 0 0 7%;

  ${css.mobile} {
    width: 100%;
    padding: 0;
  }

  & > img {
    position: absolute;
    left: -80px;
    bottom: -14.25vw;
    max-width: 100%;
  }
`;

const TextWrapper = styled.div`
  border-bottom: 4px solid #F4F4F5;
  margin-bottom: 3rem;

 & > h2 {
   margin-bottom: 2rem;
 }
 
  & > p {
  }
`;

const Customer = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: #000;
  margin: 2rem 0 3rem;
`

const CarWrapper = styled.div`
  position: absolute;
  bottom: -9%;
  left 20%;
  width: 58vw;
  
  ${css.mobile} {
    display: none;
  }
`;

// COMPONENT
const Testimonial = () => {

  gsap.registerPlugin(ScrollTrigger);
  
  const bgAnimate = useRef();
  const userAnimate = useRef();
  const textAnimate = useRef();
  const carAnimate = useRef();

  useEffect(() => {

    let testimonial = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonial",
        start: "top center",
      }
    });
    
    testimonial.from( [bgAnimate.current], {
      x: "-100%",
      duration: 0.5, 
      autoAlpha: 0,
    })
    .from( [userAnimate.current], {
      x: -100,
      duration: 0.5, 
      autoAlpha: 0,
    }, "<50%" )
    .from( [carAnimate.current], {
      x: -100,
      duration: 0.5, 
      autoAlpha: 0,
    }, "<25%" )
    .from( [textAnimate.current], {
      y: -100,
      duration: 0.5,
      autoAlpha: 0,
    }, "<75%" )
  });

  return (
    <ContentWrapper id="testimonial">
      <ContentLeft ref={bgAnimate}>
        <img src={custImg} alt="customer providing testimonial" ref={userAnimate} />
      </ContentLeft>

      <ContentRight ref={textAnimate}>
        <TextWrapper>
          <h2>Customers with that new car smell</h2>
          <p>“With Eleanor I was able to drive 2 of my dream cars this year!  The process is always easy and affordable!”</p>
          <Customer>Alex Bateman, Interface Designer</Customer>
        </TextWrapper>
        <AppLink />
      </ContentRight>

      <CarWrapper ref={carAnimate}>
        <img src={carImg} alt="white Mercedez Benz sedan" />
      </CarWrapper>
    </ContentWrapper>
  );
};

export default Testimonial;