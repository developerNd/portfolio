'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '@/data/skills'

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-indigo-600">Skills & Expertise</span>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className={`p-4 rounded-lg ${skill.color} backdrop-filter backdrop-blur-lg`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center mb-2">
                <skill.icon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-center text-indigo-800 font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}