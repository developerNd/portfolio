'use client'

import { Button } from "@/components/ui/button"
import { X, Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import Logo from './Logo'

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Header({ isMenuOpen, toggleMenu }: HeaderProps) {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Tutorials', 'Blog', 'Contact']

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
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

      {isMenuOpen && (
        <motion.nav 
          className="fixed inset-0 bg-white z-30 flex flex-col items-center justify-center space-y-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          {navItems.map((item) => (
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
    </header>
  )
}