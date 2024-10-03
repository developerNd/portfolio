'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true })

  const timeline = [
    { year: '2023', event: 'Senior Full Stack Developer at Tech Giant Inc.' },
    { year: '2021', event: 'Lead Developer at StartUp Success' },
    { year: '2019', event: 'Full Stack Developer at Web Solutions Co.' },
    { year: '2017', event: 'Graduated with BS in Computer Science' },
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-indigo-600">About Me</span>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-indigo-200 rounded-full transform rotate-6"></div>
              <img 
                src="/placeholder.svg?height=256&width=256" 
                alt="Your Name" 
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-2/3 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-6 text-gray-600 leading-relaxed">
              With over 6 years of experience in full stack web development, I've honed my skills in creating robust, 
              scalable, and user-centric web applications. My journey in tech is driven by a passion for problem-solving 
              and a commitment to crafting innovative digital solutions.
            </p>
            <p className="text-lg mb-6 text-gray-600 leading-relaxed">
              My expertise spans across front-end technologies like React and Vue.js, to back-end frameworks such as Node.js and PHP. 
              I pride myself on staying current with the latest tech trends and best practices, ensuring that I bring a 
              comprehensive and up-to-date skill set to every project.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge className="bg-indigo-100 text-indigo-800 text-sm py-1 px-3">React</Badge>
              <Badge className="bg-indigo-100 text-indigo-800 text-sm py-1 px-3">Node.js</Badge>
              <Badge className="bg-indigo-100 text-indigo-800 text-sm py-1 px-3">TypeScript</Badge>
              <Badge className="bg-indigo-100 text-indigo-800 text-sm py-1 px-3">GraphQL</Badge>
              <Badge className="bg-indigo-100 text-indigo-800 text-sm py-1 px-3">Docker</Badge>
            </div>
            <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              <a href="/path-to-your-cv.pdf" download>Download CV</a>
            </Button>
          </motion.div>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center text-indigo-600">My Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
            {timeline.map((item, index) => (
              <motion.div 
                key={item.year}
                className="mb-8 flex justify-between items-center w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="order-1 w-5/12 text-right pr-8">
                  <h3 className="font-bold text-indigo-600">{item.year}</h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-600">{item.event}</p>
                </div>
                <div className="z-10 flex items-center order-1 bg-indigo-600 shadow-xl w-8 h-8 rounded-full">
                  <h3 className="mx-auto font-semibold text-lg text-white">{item.year.slice(-2)}</h3>
                </div>
                <div className="order-1 w-5/12 pl-8">
                  {index % 2 === 0 && (
                    <div className="bg-white rounded-lg shadow-xl px-6 py-4">
                      <h3 className="font-bold text-indigo-600">{item.year}</h3>
                      <p className="text-sm leading-snug tracking-wide text-gray-600">{item.event}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}