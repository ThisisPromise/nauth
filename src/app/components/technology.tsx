"use client"
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function TechnologySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const technologies = [
    {
      icon: "🧮 ",
      title: "Binary Image Conversion & Matching",
      description: "We convert uploaded images into binary format for fast and accurate comparisons",
      color: "from-purple-500 to-indigo-700"
    },
    {
        icon: "🧠",
        title: "Pixel-Level Duplicate Detection",
        description: "Using hashing and direct binary comparison, we detect similarities and forgeries with high reliability.",
        color: "from-purple-500 to-indigo-700"
      },
    {
      icon: "🔐",
      title: "Blockchain-integrated Metadata Storage",
      description: "Immutable records of ownership and provenance secured through decentralized blockchain technology.",
      color: "from-pink-500 to-purple-700"
    },
    {
      icon: "⚡",
      title: "Real-time Comparison & Decision",
      description: "Lightning-fast verification process that takes seconds, not hours or days.",
      color: "from-blue-500 to-indigo-700"
    },
    {
      icon: "🧾",
      title: "Transparent Verification Logs",
      description: "Complete audit trails that ensure trustworthy verification results accessible to all parties.",
      color: "from-indigo-500 to-violet-700"
    },
    {
        icon: "🌍 ",
        title: "Trust-Driven Creator Ecosystem",
        description: "Nauth promotes a secure and authentic space for digital artists by preserving ownership and establishing traceable provenance.",
        color: "from-blue-500 to-indigo-700"
      }
  ]
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }
  
  const slideUpVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20
      }
    }
  }
  
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0e0420] to-[#14052e]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
        
        <svg viewBox="0 0 1000 1000" className="absolute inset-0 w-full h-full opacity-10">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
            Backed by Technology
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Advanced systems working together to create a seamless verification experience
          </p>
        </motion.div>
        <motion.div
          ref={containerRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-24"
        >
          <div className="relative max-w-4xl mx-auto">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                d="M200,50 C300,50 300,150 400,150 C500,150 500,250 600,250" 
                stroke="url(#gradient1)" 
                strokeWidth="3" 
                strokeDasharray="6,6"
                fill="none"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#db2777" />
                </linearGradient>
              </defs>
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                variants={slideUpVariants}
                className="relative"
              >
                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-xl p-6 border border-purple-500/30 h-full">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-purple-900/50 mb-4">
                    <span className="text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Image Upload</h3>
                  <p className="text-gray-400">
                    The verification process begins with a secure image upload to our systems
                  </p>
                </div>
                <div className="hidden md:block absolute w-px h-12 bg-gradient-to-b from-purple-500 to-transparent right-0 top-full translate-x-1/2 mt-2"></div>
              </motion.div>
              
              <motion.div 
                variants={slideUpVariants}
                className="relative"
              >
                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-xl p-6 border border-pink-500/30 h-full">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-pink-900/50 mb-4">
                    <span className="text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                  <p className="text-gray-400">
                  We use binary image conversion and pixel-level hashing to generate unique digital signatures for each upload — fast, accurate, and built for trust.
                  </p>
                </div>
                <div className="hidden md:block absolute w-px h-12 bg-gradient-to-b from-pink-500 to-transparent right-0 top-full translate-x-1/2 mt-2"></div>
              </motion.div>
              
              <motion.div 
                variants={slideUpVariants}
              >
                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 h-full">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-900/50 mb-4">
                    <span className="text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Blockchain Verification</h3>
                  <p className="text-gray-400">
                    Results are verified against immutable blockchain records for provenance
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={slideUpVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/10 rounded-xl"></div>
              
              <div className="group relative bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full z-10 overflow-hidden">
      
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000 group-hover:animate-pulse"></div>
                
                <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br ${tech.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-3xl">{tech.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">{tech.title}</h3>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                </div>
              
                <div className="absolute bottom-3 right-3 flex space-x-1">
                  <div className="w-1 h-1 rounded-full bg-purple-500 opacity-30"></div>
                  <div className="w-1 h-1 rounded-full bg-pink-500 opacity-30"></div>
                  <div className="w-1 h-1 rounded-full bg-indigo-500 opacity-30"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
