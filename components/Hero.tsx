'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Code } from 'lucide-react'
import { skills } from '@/data/skills'

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-800">
            Hello World, <br />
            <span className="text-indigo-600">I'm Developer_ND</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">A Full-Stack Developer crafting digital experiences</p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-64 h-64 md:w-96 md:h-96 bg-indigo-100 rounded-full mx-auto relative overflow-hidden">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`absolute ${skill.color} p-2 rounded-full shadow-lg`}
                  style={{
                    x: Math.cos(index * (Math.PI * 2) / skills.length) * 120,
                    y: Math.sin(index * (Math.PI * 2) / skills.length) * 120,
                  }}
                >
                  <skill.icon className="w-6 h-6 text-indigo-600" />
                </motion.div>
              ))}
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Code className="w-24 h-24 text-indigo-600" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}