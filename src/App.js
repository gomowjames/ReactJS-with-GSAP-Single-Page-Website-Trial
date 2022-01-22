import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './utils/cssGlobal';

import Header from './components/Header';
import Intro from './components/Intro';
import ConsumerJour1 from './components/ConsumerJour1';
import ConsumerJour2 from './components/ConsumerJour2';
import ConsumerJour3 from './components/ConsumerJour3';
import ValueProps from './components/ValueProps';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const BoxedContent = styled.div`
  margin : 0 auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoading: true,
    }
  }

  removeLoader() {
    const preL = document.querySelector("#preloader");
    if (preL) {
      preL.remove();
      this.setState({
        isLoading: false,
      });
    }
  }

  componentDidMount(){
    setTimeout( () => this.removeLoader(), 2000)    
  }
  
  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <main>
        <GlobalStyle />
        <Header />
        <Intro/>
        <BoxedContent>
          <ConsumerJour1/>
          <ConsumerJour2 />
          <ConsumerJour3 />
          <ValueProps />
          <Testimonial />
        </BoxedContent>
        <Footer />
      </main>
    ) 
  }
}

export default App;
