'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true })

  const projects = [
    { 
      title: 'E-commerce Platform', 
      description: 'A full-stack e-commerce solution built with Next.js and Node.js', 
      image: '/placeholder.svg?height=200&width=300',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://example-ecommerce.com',
      githubLink: 'https://github.com/yourusername/ecommerce-platform'
    },
    { 
      title: 'Task Management App', 
      description: 'A React-based task manager with real-time updates using WebSockets', 
      image: '/placeholder.svg?height=200&width=300',
      technologies: ['React', 'WebSockets', 'Express', 'PostgreSQL'],
      liveLink: 'https://example-taskmanager.com',
      githubLink: 'https://github.com/yourusername/task-manager'
    },
    { 
      title: 'Blog CMS', 
      description: 'A content management system built with Laravel and Vue.js', 
      image: '/placeholder.svg?height=200&width=300',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
      liveLink: 'https://example-blogcms.com',
      githubLink: 'https://github.com/yourusername/blog-cms'
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-indigo-600">Featured Projects</span>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-white border-gray-200">
                <CardContent className="p-0 flex-grow flex flex-col">
                  <Image src={project.image} alt={project.title} width={300} height={200} />
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-indigo-600">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-indigo-100 text-indigo-800">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex justify-between mt-auto">
                      <Button asChild variant="outline" size="sm" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          GitHub <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}