

"use client"
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const globeRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!globeRef.current) return
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!globeRef.current) return
      
      const { left, top, width, height } = globeRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      
      const moveX = (e.clientX - centerX) / 25
      const moveY = (e.clientY - centerY) / 25
      
      globeRef.current.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (!globeRef.current || !isMobile) return
    
    const rotateGlobe = () => {
      if (!globeRef.current) return
      
      const angle = (Date.now() / 2000) % (2 * Math.PI)
      const moveX = 5 * Math.sin(angle)
      const moveY = 3 * Math.cos(angle)
      
      globeRef.current.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${moveY}deg)`
    }
    
    const intervalId = setInterval(rotateGlobe, 16)
    
    return () => {
      clearInterval(intervalId)
    }
  }, [isMobile])
  
  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, scale }}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-purple-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-pink-500 rounded-full filter blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1/4 h-1/4 bg-violet-600 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600"
          >
            Our Mission
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-6 origin-left"
          ></motion.div>
          
          <motion.h3 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium mb-8 text-gray-100"
          >
            Built to Protect Creativity Across the Globe
          </motion.h3>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At Nauth, we believe that creativity deserves protection. Our mission is to build a transparent infrastructure that ensures originality, preserves digital heritage, and empowers artists across borders.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-6 border border-purple-400/20 shadow-lg"
            >
              <h4 className="text-xl font-semibold text-purple-300 mb-6 flex items-center">
                <span className="text-2xl mr-2">🖼️</span> Use Cases
              </h4>
              
              <ul className="space-y-5 list-none pl-0">
                {[
                  { 
                    title: "NFT Marketplaces", 
                    desc: "Add a trust layer to every NFT sold",
                    icon: "🛒",
                    color: "from-purple-500 to-pink-500" 
                  },
                  { 
                    title: "Collectors", 
                    desc: "Know the true origin of the art you're investing in",
                    icon: "🏛️",
                    color: "from-pink-500 to-purple-500" 
                  },
                  { 
                    title: "Artists", 
                    desc: "Prove that your work is 100% original",
                    icon: "🎨",
                    color: "from-purple-500 to-violet-500" 
                  },
                  { 
                    title: "Curators", 
                    desc: "Verify the authenticity of art before exhibitions",
                    icon: "🔍",
                    color: "from-violet-500 to-purple-500" 
                  }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                    className="flex items-start group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="inline-block bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-700 group-hover:border-purple-500/30">
                      <span className="text-xl">{item.icon}</span>
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <span className="font-bold text-white text-lg mb-1 md:mb-0">{item.title}</span>
                        <span className="hidden md:inline-block text-xs font-medium py-1 px-2 rounded-full shadow-sm bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 border border-gray-700/50">{i + 1}/4</span>
                      </div>
                      <p className="text-gray-300 mt-1">{item.desc}</p>
                      <div className="h-1 w-0 bg-gradient-to-r group-hover:w-full mt-2 transition-all duration-500 rounded-full ${item.color}"></div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div 
            ref={globeRef}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative transition-transform duration-200 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-700/50 to-pink-900/30 shadow-xl"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-800/10 backdrop-blur-sm"></div>
              
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-20"></div>
                
                <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
                  <path 
                    d="M100,100 Q200,50 300,120" 
                    fill="none" 
                    stroke="rgba(168, 85, 247, 0.6)" 
                    strokeWidth="1"
                    className="animate-pulse"
                  />
                  <path 
                    d="M80,200 Q200,250 320,180" 
                    fill="none" 
                    stroke="rgba(219, 39, 119, 0.5)" 
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                  <path 
                    d="M150,300 Q250,200 330,270" 
                    fill="none" 
                    stroke="rgba(124, 58, 237, 0.5)" 
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{ animationDelay: '0.5s' }}
                  />
                  
                  <circle cx="100" cy="100" r="4" fill="#a855f7" className="animate-ping" style={{ animationDuration: '3s' }} />
                  <circle cx="300" cy="120" r="4" fill="#a855f7" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                  <circle cx="80" cy="200" r="4" fill="#db2777" className="animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
                  <circle cx="320" cy="180" r="4" fill="#db2777" className="animate-ping" style={{ animationDuration: '3.2s', animationDelay: '1.2s' }} />
                  <circle cx="150" cy="300" r="4" fill="#7c3aed" className="animate-ping" style={{ animationDuration: '2.8s', animationDelay: '0.8s' }} />
                  <circle cx="330" cy="270" r="4" fill="#7c3aed" className="animate-ping" style={{ animationDuration: '4.2s', animationDelay: '0.3s' }} />
                </svg>
              </div>

              <motion.div 
                animate={{ 
                  rotate: 360,
                  transition: { duration: 60, repeat: Infinity, ease: "linear" } 
                }}
                className="absolute inset-0"
              >
                <motion.div 
                  className="absolute top-6 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center space-x-2 border border-purple-500/30 shadow-lg transform -rotate-6"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  animate={isMobile ? {
                    y: [0, -5, 0],
                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  } : {}}
                >
                  <span className="text-lg">🧮</span>
                  <span className="text-sm">Binary Conversion</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center space-x-2 border border-pink-500/30 shadow-lg transform rotate-6"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  animate={isMobile ? {
                    y: [0, 5, 0],
                    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                  } : {}}
                >
                  <span className="text-lg">🔐</span>
                  <span className="text-sm">Blockchain Storage</span>
                </motion.div>
                
                <motion.div 
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center space-x-2 border border-violet-500/30 shadow-lg transform -rotate-12"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  animate={isMobile ? {
                    x: [-5, 0, -5],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
                  } : {}}
                >
                  <span className="text-lg">⚡</span>
                  <span className="text-sm">Verification</span>
                </motion.div>
                
                <motion.div 
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center space-x-2 border border-purple-500/30 shadow-lg transform rotate-12"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  animate={isMobile ? {
                    x: [5, 0, 5],
                    transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
                  } : {}}
                >
                  <span className="text-lg">🧾</span>
                  <span className="text-sm">Transparent Logs</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
<motion.div
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="mt-16 text-center"
>
  <motion.a 
    href="https://x.com/NauthSW?t=LvFPQJZqNKevpQhmXaJXkQ&s=08"
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1"
    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.5)" }}
    whileTap={{ scale: 0.95 }}
    style={{ display: 'inline-flex' }} 
  >
    <span>Join Our Mission</span>
    <svg
      className="ml-2 w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </motion.a>
</motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
