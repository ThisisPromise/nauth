
"use client"
import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function WhyNauthSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const features = [
    {
      icon: "✅",
      title: "Protect Your Work",
      description: "Prevent plagiarism and image theft with early detection.",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: "🔍",
      title: "Binary-Powered Verification",
      description: "We use fast, pixel-level binary comparison for unmatched accuracy",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: "🔗",
      title: "On-Chain Provenance",
      description: "Immutable metadata, timestamp, and owner records.",
      color: "from-pink-500 to-pink-700"
    },
    {
      icon: "🤝",
      title: "Third-Party Integrations",
      description: "Easily integrate Nauth into your marketplace or platform.",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: "🧾",
      title: "Transparent Audit Logs",
      description: "Every verification is logged and traceable, ensuring full visibility and trust.",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: "🧠",
      title: "Built for the Future",
      description: "Scalable infrastructure ready for the next generation of creators and collectors.",
      color: "from-indigo-500 to-indigo-700"
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }


  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) return
    
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const particles: Particle[] = []
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      pulse: number;
      pulseDirection: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        

        const speedMultiplier = window.innerWidth > 768 ? 1.5 : 0.8;
        this.speedX = (Math.random() * 1.5 - 0.75) * speedMultiplier;
        this.speedY = (Math.random() * 1.5 - 0.75) * speedMultiplier;
        

        this.color = `rgba(${Math.floor(Math.random() * 100) + 150}, ${Math.floor(Math.random() * 50) + 100}, ${Math.floor(Math.random() * 100) + 150}, ${Math.random() * 0.5 + 0.1})`;
        

        this.pulse = 0;
        this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
      }
      
      update(): void {
        this.x += this.speedX;
        this.y += this.speedY;
        
  
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX * (0.9 + Math.random() * 0.2);
        }
        
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY * (0.9 + Math.random() * 0.2);
        }
        
  
        this.pulse += 0.01 * this.pulseDirection;
        if (this.pulse > 1 || this.pulse < 0) {
          this.pulseDirection *= -1;
        }
      }
      
      draw(): void {
        ctx.fillStyle = this.color;
        ctx.beginPath();

        const pulseSize = this.size * (0.8 + this.pulse * 0.4);
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
      }
    }
    
    const initParticles = () => {
      const particleCount = window.innerWidth > 768 ? 80 : 40;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }
    
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      

      ctx.shadowBlur = 0;
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const maxDistance = canvas.width > 768 ? 120 : 80;
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 120, 220, ${(maxDistance - distance) / maxDistance * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animateParticles)
    }
    
    initParticles()
    animateParticles()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="relative py-20 overflow-hidden">

      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-30"
      ></canvas>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
            Why Choose Nauth?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-6 animate-pulse"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            The next generation platform for NFT authentication and verification
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
            >
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-xl p-8 h-full border border-gray-800 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="text-3xl mb-4 transform transition-all duration-300 group-hover:scale-110">{feature.icon}</div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors duration-300">{feature.title}</h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
                
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-purple-500/0 group-hover:border-purple-500/70 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/70 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
