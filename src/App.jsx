import React from 'react'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Partners from './components/partners/partners'
import Features from './components/features/features'
import Countdown from './components/countdown/countdown'
import Timeline from './components/timeline/timeline'
import Team from './components/team/team'
import Footer from './components/footer/footer'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Partners />
        <Countdown />
        <Timeline />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App

