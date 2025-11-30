import React from 'react'

export default function Header() {
  return (
    <header className="py-4 border-b border-slate-700">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          {/* Image logo */}
          <img 
            src="/logo.png.png" 
            alt="VIONIX Logo" 
            className="w-18 h-16 rounded-full object-cover" 
          />
          {/* Text logo */}
          <h1 className="text-2xl font-bold text-white"></h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <a href="#explore" className="text-sm hover:underline">Explore</a>
          <a href="#aistudio" className="text-sm hover:underline">AI Studio</a>
          <a href="#join" className="text-sm bg-white/10 px-3 py-1 rounded">Join</a>
        </nav>
      </div>
    </header>
  )
}
