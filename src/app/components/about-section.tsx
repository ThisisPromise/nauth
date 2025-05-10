

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function AboutSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }
    
    resizeCanvas()
    const particles: Particle[] = []

    const handleResize = () => {
      resizeCanvas()
    }
    
    window.addEventListener('resize', handleResize)
    
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.8 - 0.4
        this.speedY = Math.random() * 0.8 - 0.4
        this.color = `rgba(${120 + Math.random() * 50}, ${70 + Math.random() * 30}, ${190 + Math.random() * 60}, ${0.2 + Math.random() * 0.3})`
      }
      
      update() {
        this.x += this.speedX
        this.y += this.speedY
        
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX
        }
        
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY
        }
      }
      
      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    
    for (let i = 0; i < 30; i++) {
      particles.push(new Particle())
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, { threshold: 0.1 })
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="about" className="relative py-16 overflow-hidden bg-gray-900">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20 z-0"></canvas>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-on-scroll transition-all duration-700 opacity-0 translate-y-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20 px-4 sm:px-0">
<div className="flex justify-center md:justify-start">
  <div className="relative h-64 md:h-80 w-full animate-on-scroll transition-all duration-700 opacity-0 md:-translate-x-10">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse rounded-lg"></div>
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl mx-auto max-w-[300px] md:max-w-none">
      <Image 
        src="/NftIm.png" 
        alt="NFT Verification" 
        fill
        sizes="(max-width: 768px) 280px, 50vw"
        priority
        className="object-cover rounded-lg transition-all duration-500 hover:scale-105"
        style={{ 
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />
    </div>
    <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-purple-500 opacity-70 animate-spin-slow"></div>
    <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-pink-500 opacity-70 animate-spin-slow"></div>
  </div>
</div>
            <div className="animate-on-scroll transition-all duration-700 opacity-0 translate-x-10 px-4 sm:px-0">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">How It Works</h3>
  <p className="text-gray-300 mb-6">
    Our advanced platform ensures that digital art is authenticated, secured, and properly attributed to its creators.
  </p>

              <div className="space-y-4">
                <div className="flex items-start group relative p-3 sm:p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/40">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                    <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="transform transition-all duration-300 group-hover:translate-x-1">
                    <h4 className="font-bold mb-1 text-white group-hover:text-purple-300 text-sm sm:text-base">Step 1: Upload Art</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 text-xs sm:text-sm">
                      Creators upload their digital artwork to be authenticated.
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/0 opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300"></div>
                </div>
                <div className="flex items-start group relative p-3 sm:p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/40">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-800 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                    <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                
                  <div className="transform transition-all duration-300 group-hover:translate-x-1">
                    <h4 className="font-bold mb-1 text-white group-hover:text-blue-300 text-sm sm:text-base">Step 2: AI Authentication</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 text-xs sm:text-sm">
                      Our computer vision model analyzes the artwork, compares it with existing assets, and detects forgeries.
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/0 opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300"></div>
                </div>
                <div className="flex items-start group relative p-3 sm:p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/40">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-600 to-purple-800 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0 shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-all duration-300">
                    <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="transform transition-all duration-300 group-hover:translate-x-1">
                    <h4 className="font-bold mb-1 text-white group-hover:text-pink-300 text-sm sm:text-base">Step 3: Provenance Registration</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 text-xs sm:text-sm">
                      Once verified, Nauth records essential metadata and provenance information on-chain.
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/0 to-pink-600/0 opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300"></div>
                </div>
                <div className="flex items-start group relative p-3 sm:p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/40">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                    <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="transform transition-all duration-300 group-hover:translate-x-1">
                    <h4 className="font-bold mb-1 text-white group-hover:text-indigo-300 text-sm sm:text-base">Step 4: Verified & Minted</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 text-xs sm:text-sm">
                      The artwork is now verified and minted with a unique Nauth seal — ready for marketplaces.
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 to-indigo-600/0 opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white animate-on-scroll transition-all duration-700 opacity-0 translate-y-10">Our Process</h3>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-black p-5 relative overflow-hidden group hover:-translate-y-2 hover:shadow-lg animate-on-scroll transition-opacity duration-700 opacity-0 transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 border border-purple-500 rounded-lg shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 transition-all"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30">
                    <svg width="24" height="24" className="sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 8a2 2 0 11-4 0 2 2 0 014 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-center mb-2 text-white">Upload Art</h4>
                  <p className="text-gray-300 text-center text-xs sm:text-sm">Creators upload their digital artwork to be authenticated.</p>
                </div>
              </div>

              <div className="rounded-lg bg-black p-5 relative overflow-hidden group hover:-translate-y-2 hover:shadow-lg animate-on-scroll transition-opacity duration-700 opacity-0 transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 border border-blue-500 rounded-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30">
                    <svg width="24" height="24" className="sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 14a2 2 0 100-4 2 2 0 000 4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12c0 5-5 8-9 8s-9-3-9-8 5-8 9-8 9 3 9 8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-center mb-2 text-white">AI Authentication</h4>
                  <p className="text-gray-300 text-center text-xs sm:text-sm">Our computer vision model analyzes the artwork and detects forgeries.</p>
                </div>
              </div>


              <div className="rounded-lg bg-black p-5 relative overflow-hidden group hover:-translate-y-2 hover:shadow-lg animate-on-scroll transition-opacity duration-700 opacity-0 transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 border border-green-500 rounded-lg shadow-lg shadow-green-500/20 group-hover:shadow-green-500/30 transition-all"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30">
                    <svg width="24" height="24" className="sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 16a4 4 0 01-4-4V6a2 2 0 012-2h4a4 4 0 014 4v2m-1 4h7a2 2 0 002-2v-2a4 4 0 00-4-4h-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 17l-5 5v-5h5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-center mb-2 text-white">Provenance</h4>
                  <p className="text-gray-300 text-center text-xs sm:text-sm">Essential metadata and provenance information recorded on-chain.</p>
                </div>
              </div>

              <div className="rounded-lg bg-black p-5 relative overflow-hidden group hover:-translate-y-2 hover:shadow-lg animate-on-scroll transition-opacity duration-700 opacity-0 transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 border border-yellow-500 rounded-lg shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/30 transition-all"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg shadow-yellow-500/30">
                    <svg width="24" height="24" className="sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l-4 4M17 6h4M21 10v4M17 18h4M21 14l-4 4M3 15l4-4M9 18l-4 4M16 3h-4M20 7l-4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-center mb-2 text-white">Verified & Minted</h4>
                  <p className="text-gray-300 text-center text-xs sm:text-sm">Artwork is verified and minted with a unique Nauth seal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </section>
  );
}
