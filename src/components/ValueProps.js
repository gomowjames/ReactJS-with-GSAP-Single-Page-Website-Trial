import React, { useEffect } from 'react';
import styled from 'styled-components';
import css from '../utils/cssVariables';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import pricingImg from '../assets/img/prop-pricing.png';
import insuranceImg from '../assets/img/prop-insurance.png';
import maintenanceImg from '../assets/img/prop-maintenance.png';

const ContentWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${css.paddingLarge};

  ${css.mobile} {
    margin-top: 50%;
    padding: 0 ${css.paddingSmall};
    flex-direction: column;
  }
`;

const Module = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 28vw;
  width: 28vw;
  background-color: #F5F5F7;

  ${css.mobile} {
    width: 100vw;
    height: 100vw;
    margin-bottom: 1rem;
  }

  img {
    height: 35%;
  }  
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  h3 {
    font-size: 2.1rem;
    line-height: 1;
    margin: 2.25rem auto 1rem;
  }

  p {
    white-space: pre-line;
    margin: 0px;
    font-size: 0.875rem; 
  }
`;

// COMPONENT
const ValueProps = () => {

  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
    
    gsap.from( ".module", {
      scrollTrigger: {
        trigger: "#valueProps",
        start: "top center",
        },
      y: -100,
      duration: 0.5, 
      stagger: 0.25,
      opacity: 0,
    });
  });

  return (
    <ContentWrapper id="valueProps">
      <Module className="module">
        <img src={pricingImg} alt="customer providing testimonial" />
        <TextWrapper>
          <h3>SIMPLE MONTHLY PRICING</h3>
          <p>Pick your plan, pay the monthly price.<br/>Thats it. No hidden fees!</p>
        </TextWrapper>
      </Module>

      <Module className="module">
        <img src={insuranceImg} alt="customer providing testimonial" />
        <TextWrapper>
         <h3>VEHICLE INSURANCE INCLUDED</h3>
         <p>That’s right, you’re covered. All Eleanor plans<br/>include insurance coverage.</p>
        </TextWrapper>
      </Module>
      
      <Module className="module">
        <img src={maintenanceImg} alt="customer providing testimonial" />
        <TextWrapper>
          <h3>MAINTENANCE IS COVERED</h3>
          <p>Leave it us. Don’t worry about maintaining<br/> your vehicle. Eleanor covers that as well.</p>
        </TextWrapper>
      </Module>
    </ContentWrapper>
  );
};

export default ValueProps;