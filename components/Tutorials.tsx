'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Youtube } from 'lucide-react'

export default function Tutorials() {
  const [ref, inView] = useInView({ triggerOnce: true })

  const tutorials = [
    { title: 'Building a React App from Scratch', url: 'https://youtube.com/example1' },
    { title: 'Node.js REST API Tutorial', url: 'https://youtube.com/example2' },
    { title: 'Advanced TypeScript Techniques', url: 'https://youtube.com/example3' },
  ]

  return (
    <section id="tutorials" ref={ref} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-indigo-600">Tutorials & Resources</span>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {tutorials.map((tutorial, index) => (
            <motion.div 
              key={tutorial.title}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={tutorial.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg hover:bg-indigo-50 transition-colors"
              >
                <Youtube className="w-8 h-8 text-red-500 mr-4" />
                <span className="text-gray-800 hover:text-indigo-600 transition-colors">{tutorial.title}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}