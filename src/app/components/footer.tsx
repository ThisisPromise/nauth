

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Footer() {
  const borderRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const borderElement = borderRef.current
    if (!borderElement) return
    
    let position = 0
    const speed = 0.5
    
    const animate = () => {
      position += speed
      if (position > 100) position = 0
      
      borderElement.style.backgroundPosition = `${position}% 0`
      requestAnimationFrame(animate)
    }
    
    const animationId = requestAnimationFrame(animate)
    
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])
  
  return (
    <footer className="relative w-full bg-gray-950 text-white overflow-hidden">
      <div 
        ref={borderRef}
        className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_auto]"
      ></div>
      
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
          <div>
            <h2 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Nauth</h2>
            <h3 className="font-medium text-lg mb-2 mt-4">About Nauth</h3>
            <p className="text-gray-400 text-sm">
              Nauth is your trusted NFT verification layer — we use binary image authentication and on-chain storage to prove originality and fight forgery in digital assets.
            </p>
          </div>
          

          <div className="flex flex-col md:items-end">
  <h3 className="font-medium text-lg mb-2">Follow Us on X</h3>
  <div className="flex flex-col md:items-end">


  <a 
  
    onClick={(e) => {
      e.stopPropagation();
      window.open("https://x.com/NauthSW?t=LvFPQJZqNKevpQhmXaJXkQ&s=08", "_blank");
    }}
    style={{
      display: "flex",
      alignItems: "center",
      color: "#9CA3AF",
      cursor: "pointer",
      position: "relative",
      zIndex: 10
    }}
    className="hover:text-purple-500 transition-colors"
  >
 
    <span style={{ marginRight: "8px", fontWeight: "bold" }}>𝕏</span>
    @NauthSW
  </a>
</div>
</div>
</div>
        

        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © Nauth 2025 – Built for truth. Powered by precision.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-900/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-pink-900/10 rounded-full filter blur-3xl"></div>
    </footer>
  )
}
