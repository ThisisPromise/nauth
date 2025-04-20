// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Menu, X, Twitter, Facebook, Instagram, Mail } from "lucide-react"

// export default function MobileNavbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <>
//       <button onClick={toggleMenu} className="text-white p-2">
//         <Menu size={24} />
//       </button>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
//           isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={toggleMenu}
//       ></div>

//       {/* Mobile Menu Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-[#0e0420] z-50 transform transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="p-4">
//           <div className="flex justify-between items-center mb-8">
//             <button onClick={toggleMenu} className="text-white p-2">
//               <X size={24} />
//             </button>
//           </div>

//           <nav className="flex flex-col space-y-4">
//             <Link
//               href="#home"
//               className="text-white hover:text-purple-300 py-2 border-b border-gray-800"
//               onClick={toggleMenu}
//             >
//               Home
//             </Link>
//             <Link
//               href="#about"
//               className="text-white hover:text-purple-300 py-2 border-b border-gray-800"
//               onClick={toggleMenu}
//             >
//               About
//             </Link>
//             <Link
//               href="#why-nauth"
//               className="text-white hover:text-purple-300 py-2 border-b border-gray-800"
//               onClick={toggleMenu}
//             >
//               Why Nauth
//             </Link>
//             <Link
//               href="#mission"
//               className="text-white hover:text-purple-300 py-2 border-b border-gray-800"
//               onClick={toggleMenu}
//             >
//               Our Mission
//             </Link>
//             <Link
//               href="#roadmap"
//               className="text-white hover:text-purple-300 py-2 border-b border-gray-800"
//               onClick={toggleMenu}
//             >
//               Roadmap
//             </Link>

//           </nav>

//           <div className="flex space-x-4 mt-8">
//           <Link href="https://x.com/Nauthauth?t=ntZb3owKLeiea25v3M98HQ&s=09" className="text-white hover:text-purple-300">
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//   </svg>
// </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Handle body scroll locking when the menu is open
  useEffect(() => {
    if (isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY
      
      // Add styles to prevent scrolling
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      // Remove scroll lock styles when menu is closed
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      
      // Restore scroll position
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
    
    // Clean up effect
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button onClick={toggleMenu} className="text-white p-2">
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0e0420] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <button onClick={toggleMenu} className="text-white p-2">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            <Link
              href="#home"
              className="text-white hover:text-purple-300 py-2 border-b border-gray-800"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-purple-300 py-2 border-b border-gray-800"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#why-nauth"
              className="text-white hover:text-purple-300 py-2 border-b border-gray-800"
              onClick={toggleMenu}
            >
              Why Nauth
            </Link>
            <Link
              href="#mission"
              className="text-white hover:text-purple-300 py-2 border-b border-gray-800"
              onClick={toggleMenu}
            >
              Our Mission
            </Link>
            <Link
              href="#roadmap"
              className="text-white hover:text-purple-300 py-2 border-b border-gray-800"
              onClick={toggleMenu}
            >
              Roadmap
            </Link>
          </nav>

          <div className="flex space-x-4 mt-8">
            <Link 
              href="https://x.com/Nauthauth?t=ntZb3owKLeiea25v3M98HQ&s=09" 
              className="text-white hover:text-purple-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}