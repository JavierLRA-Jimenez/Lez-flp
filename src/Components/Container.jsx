import React from 'react';
import { Element } from 'react-scroll';
import Header from './Header/Header'; // Importa el componente Header aquí, después de importar React
import Body from './Body/Body';
import About from './About/About';
import Spotify from './Spotify/Spotify';
import Youtube from './Spotify/Youtube';
import SocialNetwork from './SocialNetwork/SocialNetwork';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import FloatingButton from './FloatingButton';
import Fear from './Fear/Fear';

const Container = () => {
  return (
    <div>
      <FloatingButton />
      <Header />
      <Element name="body">
        <Body />
      </Element>
      <Element name="about">
        <About />
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
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default Container;