import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import './i18n/i18n'
import Header from './components/header/header'
import Home from './components/home/home'
import Partners from './components/partners/partners'
import Features from './components/features/features'
import Timeline from './components/timeline/timeline'
import Team from './components/team/team'
import Footer from './components/footer/footer'
import About from './components/about/about'
import Download from './components/download/download'
import Contact from './components/contact/contact'
import ComingSoon from './components/home/ComingSoon'
import ChatClient from './components/chat/chatClient'
const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* <Navbar>
          <LanguageSwitcher />
        </Navbar> */}
        <Header />
        <main className="flex-1 pt-[70px]">
          <ChatClient />
          <Home />
          <Features />  
          <About />
          <Partners />
          <Timeline />
          {/* <Download /> */}
          <ComingSoon />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

