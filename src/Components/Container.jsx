import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Header from './Header/Header'; 
import Body from './Body/Body';
import About from './About/About';
import Spotify from './Spotify/Spotify';
import Youtube from './Spotify/Youtube';
import SocialNetwork from './Photo/Photo';
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';

const Section = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(children.props.id);

      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;

        if (isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [children.props.id]);

  return (
    <div
      id={children.props.id}
      className={`transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

const Container = () => {
  return (
    <div>
      <Header />
      <Element name="body">
        <Section>
          <Body id="body" />
        </Section>
      </Element>
      <Element name="spotify">
        <Section>
          <Spotify id="spotify" />
        </Section>
      </Element>
      <Element name="youtube">
        <Section>
          <Youtube id="youtube" />
        </Section>
      </Element>
      <Element name="socialnetwork">
        <Section>
          <SocialNetwork id="socialnetwork" />
        </Section>
      </Element>
      <Element name="about">
        <Section>
          <About id="about" />
        </Section>
      </Element>
      <Footer />
      <Link to="/Header" className=' text-red-600 font-bold text-xl'>Ir a Miedo</Link>
    </div>
  );
};

export default Container;
