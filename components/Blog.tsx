'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true })

  const blogPosts = [
    { title: 'The Future of Web Development', date: '2023-05-15', url: '/blog/future-of-web-dev' },
    { title: 'Optimizing React Performance', date: '2023-04-22', url: '/blog/react-performance' },
    { title: 'Introduction to GraphQL', date: '2023-03-10', url: '/blog/intro-to-graphql' },
  ]

  return (
    <section id="blog" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
              animate={inView ? { opacity: 1, y: 0 } : {}}
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
  )
}