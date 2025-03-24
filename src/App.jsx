import React from 'react'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Stats from './components/stats/stats'
import Features from './components/features/features'
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
        <Stats />
        <Timeline />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App

