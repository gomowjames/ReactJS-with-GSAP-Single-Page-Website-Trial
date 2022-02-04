import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './utils/cssGlobal';

import LoadingAnim from './components/PreLoader';
import Header from './components/Header';
import Intro from './components/Intro';
import ConsumerJour1 from './components/ConsumerJour1';
import ConsumerJour2 from './components/ConsumerJour2';
import ConsumerJour3 from './components/ConsumerJour3';
import ValueProps from './components/ValueProps';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import * as images from './assets/img';

const imagesList = Object.values(images);

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ count, setCounter ] = useState(0);

  useEffect(() => {
    if (count >= imagesList.length) {
      setIsLoading(false);
    }
  }, [count])

  const loadImages = () => {
    return imagesList.map( src => 
      <img
        key={src}
        src={src}
        alt="img preload"
        onLoad={() => setCounter( count + 1 )}
      />
    );
  };

    return (
      <main>
        <GlobalStyle />

        { isLoading ?
          <LoadingAnim /> :
          <>
          <Header />
          <Intro />
          <BoxedContent>
            <ConsumerJour1/>
            <ConsumerJour2 />
            <ConsumerJour3 />
            <ValueProps />
            <Testimonial />
          </BoxedContent>
          <Footer />          
          </>
        }

        <ImgLoader>{loadImages()}</ImgLoader>
      </main>
    )
}

const BoxedContent = styled.div`
  margin : 0 auto;
`;

const ImgLoader = styled.div`
  display: none;
  height: 0;
  width: 0;
  opacity: 0;
`;

export default App;
