import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import './i18n/i18n'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Partners from './components/partners/partners'
import Features from './components/features/features'
import Timeline from './components/timeline/timeline'
import Team from './components/team/team'
import Footer from './components/footer/footer'
import About from './components/about/about'
import Navbar from './components/navbar/navbar'
import LanguageSwitcher from './components/language-switcher/language-switcher'
import Download from './components/download/download'

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar>
          <LanguageSwitcher />
        </Navbar>
        <Header />
        <main className="flex-1 pt-[70px]">
          <Hero />
          <Features />
          <About />
          <Partners />
          <Timeline />
          <Team />
          <Download />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

