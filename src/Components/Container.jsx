import React from 'react';
import { Element } from 'react-scroll';
import Header from './Header/Header'; 
import Body from './Body/Body';
import About from './About/About';
import Spotify from './Spotify/Spotify';
import Youtube from './Spotify/Youtube';
import SocialNetwork from './Photo/Photo';
import Footer from './Footer/Footer';

const Container = () => {
  return (
    <div>
      <Header />
      <Element name="body">
        <Body />
      </Element>
      <Element name="spotify">
        <Spotify />
      </Element>
      <Element name="youtube">
        <Youtube />
      </Element>
      <Element name="socialnetwork">
        <SocialNetwork />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Footer />
    </div>
  );
};

export default Container;