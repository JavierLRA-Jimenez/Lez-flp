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

const Container = () => {
  return (
    <div>
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