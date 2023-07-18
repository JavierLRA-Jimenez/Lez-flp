import React from 'react'
import Body from './Body/Body'
import Header from './Header/Header'
import About from './About/About'
import Spotify from './Spotify/Spotify'
import Youtube from './Spotify/Youtube'
import SocialNetwork from './SocialNetwork/SocialNetwork'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
const Container = () => {
  return (
    <div>
        <Header/>
        <Body/>
        <About/>
        <Spotify/>
        <Youtube/>
        <SocialNetwork/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default Container