import React, { useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from 'styled-components';
import css from '../utils/cssVariables';

import arrowLeft from '../assets/img/arrow-left.svg';
import arrowRight from '../assets/img/arrow-right.svg';
import iconMPG from '../assets/img/icon-mpg.svg';
import iconHP from '../assets/img/icon-hp.svg';
import iconSpeed from '../assets/img/icon-speed.svg';
import landroverImg from '../assets/img/slider-rover-left.png';
import porscheImg from '../assets/img/slider-porsche-left.png';

const ContentWrapper = styled.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Controls = styled.div`
  display: block;
  position: absolute;
  width: 66%;
  text-align: right;

  ${css.mobile} {
    width: 100%;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: inline-block;
    width: 2rem;
    margin: 1rem;
  }
  
  img {
    display: inline-block;
    height: auto;
    width: 100%;
  }
`;

const Slider = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextWrapper = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  padding-top: 5vw;
  padding-left: 5vw;
  
  p {
    color: #414A69;
    font-size: 1vw;

    ${css.mobile} {
      font-size: 3.5vw;
    }
  }
`;

const DataBox = styled.div`
  
  & > div {
    display: flex;
    align-content: center;
    align-items: center;

    * {
      box-sizing: border-box;
      width: auto;
      padding: 0;
    }

    img {
      padding-right: 0;
      max-width: 25px;
    }
    
    .label {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      font-size: 1.1rem;
      width: 50px;
    }
    
    .data {
      font-size: 2.25rem;
      padding-left: 1rem;

      ${css.mobile} {
        font-size: 7vw;
      }
    }
  }
`;

const ImgWrapper = styled.div`
  position: absolute;
  bottom: -10%;
  left: 15%;
  width: 100%;
`;


const slides = [
  {
    maker: 'LAND ROVER',
    model: '2019 - RANGE ROVER VELAR',
    mpg: '25/29',
    hp: '247',
    speed: '6.4',
    img: landroverImg,
  },
  {
    maker: 'PORSCHE',
    model: '2019 - 911 Carrera S',
    mpg: '19/24',
    hp: '443',
    speed: '3.2',
    img: porscheImg,
  },
];

const VehicleSlider = () => {

  gsap.registerPlugin(ScrollTrigger);

  const carAnimate = useRef();
  const controlsAnimate = useRef();
  const textAnimate = useRef();
  const dataAnimate = useRef();

  useLayoutEffect( () => {
    let seqSlider = gsap.timeline({
      scrollTrigger: {
        trigger: "#slider",
        start: "top center",
      }
    });
    
    seqSlider.from([carAnimate.current], {
      x: "30vw",
      autoAlpha: 0,
      duration: 0.5,
      delay: 0.5,
    })
    .from([textAnimate.current], {
      autoAlpha: 0,
      duration: 1,
    }, "<0.5")
    .from([controlsAnimate.current], {
      autoAlpha: 0,
      duration: 1,      
    }, "<0")
  }, []);

  const [ slideIndex, setIndex ] = useState(0); 
  const [ {currentAuto}, setAuto ] = useState(slides[slideIndex]);

  const increaseIndex = () => {
    if ( slideIndex < slides.length -1  ) {
      setIndex(slideIndex + 1);
    } else {
      setIndex(0);
    }
  }
  
  const decreaseIndex = () => {
    if ( slideIndex > 0 ) {
      setIndex(slideIndex - 1);
    } else {
      setIndex(slides.length -1);
    }
  }

  useLayoutEffect( () => {
    gsap.from([carAnimate.current], {
      x: "30vw",
      autoAlpha: 0,
      duration: 0.5,
    })
    gsap.from([textAnimate.current], {
      y: "50px",
      autoAlpha: 0,
      duration: 0.5,
    })
  });

  return (
    <ContentWrapper id="slider" >
      <Controls ref={controlsAnimate}>
        <button id="prev" onClick={ () => decreaseIndex() }><img src={arrowLeft} alt="arrow for returning slider" /></button>
        <button id="next" onClick={ () => increaseIndex() }><img src={arrowRight} alt="arrow for advancing slider" /></button>
      </Controls>
      <Slider>
        <div key={slides[slideIndex].model} className="slide">
          <TextWrapper ref={textAnimate}>
            <h4>{slides[slideIndex].maker}</h4>
            <p>{slides[slideIndex].model}</p>
            <DataBox ref={dataAnimate}>
              <div>
                <img src={iconMPG} alt="icon representing miles per gallon" />
                <div className="label">MPG</div>
                <div className="data">{slides[slideIndex].mpg}</div>
              </div>
              <div>
                <img src={iconHP} alt="icon representing horsepower" />
                <div className="label">HP</div>
                <div className="data">{slides[slideIndex].hp}</div>
              </div>
              <div>
                <img src={iconSpeed} alt="icon representing speed from 0 to 60miles per hour" />
                <div className="label">0–60</div>
                <div className="data">{slides[slideIndex].speed}</div>
              </div>
            </DataBox>
          </TextWrapper>
          
          <ImgWrapper ref={carAnimate}>
            <img src={slides[slideIndex].img} alt="" />
          </ImgWrapper>
        </div>
      </Slider>
    </ContentWrapper>
  )
}

export default VehicleSlider;