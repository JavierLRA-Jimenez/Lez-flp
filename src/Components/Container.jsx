import React from 'react'
import Body from './Body/Body'
import Header from './Header/Header'
import About from './About/About'
import Spotify from './Spotify/Spotify'
import Youtube from './Spotify/Youtube'
import Contact from './Contact/Contact'

const Container = () => {
  return (
    <div>
        <Header/>
        <Body/>
        <About/>
        <Spotify/>
        <Youtube/>
        <Contact/>

    </div>
  )
}

export default Container