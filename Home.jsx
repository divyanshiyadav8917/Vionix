import React from 'react'
import StoryCard from '../Components/StoryCard'
import StoryGenerator from '../Components/StoryGenerator'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section with background and overlay */}
      <section className="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left: Hero text */}
          <div className="bg-blue-500/70 p-6 rounded-lg max-w-xl mx-auto md:mx-0 text-white">
            <h2 className="text-4xl font-extrabold leading-tight">
              VIONIX — Where Creativity Meets the Future
            </h2>
            <p className="mt-4 text-slate-100">
              Discover mood-based stories, personalized AI characters, and indie films curated for youth culture.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#aistudio"
                className="px-4 py-2 bg-vionixCyan rounded font-semibold text-slate-900"
              >
                Open AI Studio
              </a>
              <a
                href="#explore"
                className="px-4 py-2 border border-slate-600 rounded"
              >
                Explore
              </a>
            </div>
          </div>

          {/* Right: StoryGenerator */}
          <div className="p-6 bg-blue-500/70 rounded-lg text-white">
            <StoryGenerator />
          </div>
        </div>
      </section>

      {/* About VIONIX Section */}
      <section className="my-12 p-6 bg-vionixPurple/10 rounded-lg">
        <h2 className="text-3xl font-bold text-vionixPurple mb-4">About VIONIX</h2>
        <p className="text-slate-200">
          VIONIX is a next-gen platform that blends technology and creativity. We empower creators and readers alike to explore
          personalized stories, generate unique characters with AI, and experience indie films that resonate with youth culture.
        </p>
        <p className="mt-3 text-slate-200">
          Whether you’re here to read, create, or share, VIONIX transforms storytelling into an interactive and dynamic experience.
        </p>
      </section>

      {/* Explore grid */}
      <section id="explore" className="bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-vionixCyan mb-4">Featured Stories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StoryCard
            title="Midnight Signal"
            tag="Horror"
            excerpt="A static-filled radio reaches a lonely host..."
          />
          <StoryCard
            title="Neon Alley"
            tag="Thriller"
            excerpt="A courier must deliver a memory chip across the city..."
          />
          <StoryCard
            title="Quiet Room"
            tag="Suspense"
            excerpt="She hears footsteps but the house is empty..."
          />
        </div>
      </section>

      {/* Why Choose VIONIX */}
      <section className="my-12 p-6 bg-vionixCyan/10 rounded-lg">
        <h2 className="text-3xl font-bold text-vionixCyan mb-4">Why Choose VIONIX?</h2>
        <ul className="list-disc list-inside text-slate-200 space-y-2">
          <li>AI-powered story creation tailored to your mood and preferences.</li>
          <li>Curated indie films and unique narratives from emerging creators.</li>
          <li>Interactive and immersive storytelling experiences.</li>
          <li>Seamless platform for creators to share their vision and reach audiences.</li>
        </ul>
      </section>

      {/* Bottom CTA Section */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to create your story?</h2>
        <a
          href="#aistudio"
          className="px-6 py-3 bg-vionixCyan rounded font-semibold text-slate-900 hover:scale-105 transition-transform"
        >
          Open AI Studio
        </a>
      </section>
    </div>
  )
}
