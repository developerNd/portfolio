import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-center py-6">
      <div className="container mx-auto px-4">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Developer_Nd. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors"><Github className="w-6 h-6" /></a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors"><Twitter className="w-6 h-6" /></a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors"><Mail className="w-6 h-6" /></a>
        </div>
      </div>
    </footer>
  )
}