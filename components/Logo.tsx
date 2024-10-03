'use client'

import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
          <svg width="160" height="30" viewBox="0 0 160 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#4F46E5">&lt;Dev_ND/&gt;</text>
          </svg>
        </Link>
  )
}