'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowUpCircle } from 'lucide-react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <Button 
          variant="outline" 
          size="icon" 
          className="fixed bottom-4 right-4 rounded-full shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white"
          onClick={scrollToTop}
        >
          <ArrowUpCircle className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}