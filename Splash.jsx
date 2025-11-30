// src/pages/Splash.jsx
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Splash({ onFinish }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish()
    }, 6500)
    return () => clearTimeout(timeout)
  }, [onFinish])

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg1.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.h1
        className="relative text-6xl md:text-8xl font-extrabold text-vionixCyan z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0, 1] }}
        transition={{
          duration: 6,
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: 0,
          ease: 'easeInOut'
        }}
      >
        VIONIX
      </motion.h1>
    </div>
  )
}
