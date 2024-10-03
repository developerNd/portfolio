'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <section id="contact" ref={ref} className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-indigo-600">Get In Touch</span>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.h2>
        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" required className="bg-white border-gray-300 text-gray-800" />
            <Input type="email" placeholder="Your Email" required className="bg-white border-gray-300 text-gray-800" />
            <Textarea placeholder="Your Message" required className="bg-white border-gray-300 text-gray-800" />
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Send Message</Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}