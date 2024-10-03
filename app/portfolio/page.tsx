'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpCircle, Code, Database, Mail, Menu, Server, X, ExternalLink, Youtube, Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Intersection observer hooks for each section
  const [heroRef, heroInView] = useInView({ triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true })
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true })
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true })
  const [tutorialsRef, tutorialsInView] = useInView({ triggerOnce: true })
  const [blogRef, blogInView] = useInView({ triggerOnce: true })
  const [contactRef, contactInView] = useInView({ triggerOnce: true })

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

  const skills = [
    { name: 'JavaScript', icon: Code, color: 'bg-yellow-200' },
    { name: 'React', icon: Code, color: 'bg-blue-200' },
    { name: 'Node.js', icon: Server, color: 'bg-green-200' },
    { name: 'TypeScript', icon: Code, color: 'bg-blue-300' },
    { name: 'HTML/CSS', icon: Code, color: 'bg-orange-200' },
    { name: 'PHP', icon: Code, color: 'bg-purple-200' },
    { name: 'Laravel', icon: Code, color: 'bg-red-200' },
    { name: 'Express', icon: Server, color: 'bg-gray-200' },
    { name: 'MongoDB', icon: Database, color: 'bg-green-300' },
    { name: 'PostgreSQL', icon: Database, color: 'bg-blue-200' },
    { name: 'GraphQL', icon: Database, color: 'bg-pink-200' },
    { name: 'Docker', icon: Database, color: 'bg-blue-200' },
  ]

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

  const timeline = [
    { year: '2023', event: 'Senior Full Stack Developer at Tech Giant Inc.' },
    { year: '2021', event: 'Lead Developer at StartUp Success' },
    { year: '2019', event: 'Full Stack Developer at Web Solutions Co.' },
    { year: '2017', event: 'Graduated with BS in Computer Science' },
  ]

  const tutorials = [
    { title: 'Building a React App from Scratch', url: 'https://youtube.com/example1' },
    { title: 'Node.js REST API Tutorial', url: 'https://youtube.com/example2' },
    { title: 'Advanced TypeScript Techniques', url: 'https://youtube.com/example3' },
  ]

  const blogPosts = [
    { title: 'The Future of Web Development', date: '2023-05-15', url: '/blog/future-of-web-dev' },
    { title: 'Optimizing React Performance', date: '2023-04-22', url: '/blog/react-performance' },
    { title: 'Introduction to GraphQL', date: '2023-03-10', url: '/blog/intro-to-graphql' },
  ]

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 z-50" style={{ scaleX }} />
      
      <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Your Name</h1>
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Skills', 'Projects', 'Tutorials', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 hover:text-indigo-600 transition-colors relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <motion.nav 
          className="fixed inset-0 bg-white z-30 flex flex-col items-center justify-center space-y-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          {['Home', 'About', 'Skills', 'Projects', 'Tutorials', 'Blog', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-2xl text-gray-800 hover:text-indigo-600 transition-colors" 
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </motion.nav>
      )}

      <main className="pt-16">
        <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-800">
                Hello World, <br />
                <span className="text-indigo-600">I'm Your Name</span>
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
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
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

        <section id="about" ref={aboutRef} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-indigo-600">About Me</span>
              <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            </motion.h2>
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <motion.div 
                className="lg:w-1/3 mb-8 lg:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-indigo-200 rounded-full transform rotate-6"></div>
                  <Image 
                    src="/placeholder.svg?height=256&width=256" 
                    alt="Your Name" 
                    className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                    width={256}
                    height={256}
                  />
                </div>
              </motion.div>
              <motion.div 
                className="lg:w-2/3 lg:pl-12"
                initial={{ opacity: 0, x: 50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
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
                    animate={aboutInView ? { opacity: 1, y: 0 } : {}}
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

        <section id="skills" ref={skillsRef} className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
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
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
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

        <section id="projects" ref={projectsRef} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
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
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col bg-white border-gray-200">
                    <CardContent className="p-0 flex-grow flex flex-col">
                      <Image src={project.image} alt={project.title} className="w-full h-48 object-cover" width={300} height={200} />
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

        <section id="tutorials" ref={tutorialsRef} className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={tutorialsInView ? { opacity: 1, y: 0 } : {}}
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
                  animate={tutorialsInView ? { opacity: 1, y: 0 } : {}}
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

        <section id="blog" ref={blogRef} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={blogInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-indigo-600">Latest Insights</span>
              <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              {blogPosts.map((post, index) => (
                <motion.div 
                  key={post.title}
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={blogInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a 
                    href={post.url}
                    className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-indigo-50 transition-colors"
                  >
                    <span className="text-gray-800 hover:text-indigo-600 transition-colors">{post.title}</span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" ref={contactRef} className="py-20 bg-indigo-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-indigo-600">Get In Touch</span>
              <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            </motion.h2>
            <motion.div 
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
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
      </main>

      <footer className="bg-white text-center py-6">
        <div className="container mx-auto px-4">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>

      <Button 
        variant="outline" 
        size="icon" 
        className="fixed bottom-4 right-4 rounded-full shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}