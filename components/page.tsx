'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Tutorials from './Tutorials'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'
import ScrollToTopButton from './ScrollToTopButton'

export function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 z-50" style={{ scaleX }} />
      
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Tutorials />
        <Blog />
        <Contact />
      </main>

      <Footer />

      <ScrollToTopButton />
    </div>
  )
}