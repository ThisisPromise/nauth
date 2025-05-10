"use client"

import Link from "next/link"
import { XIcon, Facebook, Instagram, Mail } from "lucide-react"
import HomeSection from "./components/home-section"
import AboutSection from "./components/about-section"
import RoadmapSection from "./components/roadmap-section"
import MobileNavbar from "./components/mobile-navbar"
import WhyNauthSection from "./components/WhyNauth"
import MissionSection from "./components/mission-section"
import TechnologySection from "./components/technology"
import Footer from "./components/footer"
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const whyNauthRef = useRef(null);
  const missionRef = useRef(null);
  const technologyRef = useRef(null);
  const roadmapRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionRefs = [
      { id: 'home', ref: homeRef },
      { id: 'about', ref: aboutRef },
      { id: 'why-nauth', ref: whyNauthRef },
      { id: 'mission', ref: missionRef },
      { id: 'technology', ref: technologyRef },
      { id: 'roadmap', ref: roadmapRef }
    ];

    const observerOptions = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.3 
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setCurrentSection(sectionId);
          
        
          console.log(`Section in view: ${sectionId}`);
          
        
          if (sectionId === 'home') {
            window.history.replaceState(null, '', '/');
          } else {
            window.history.replaceState(null, '', `/${sectionId}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.forEach(({ id, ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
        console.log(`Observing section: ${id}`);
      } else {
        console.warn(`Ref for section ${id} is null or undefined`);
      }
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const checkRoadmapVisibility = () => {
      if (!roadmapRef.current) return;
      
      const rect = roadmapRef.current.getBoundingClientRect();
      const isVisible = 
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.7 &&
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) * 0.3;
      
      if (isVisible) {
        setCurrentSection('roadmap');
        window.history.replaceState(null, '', '/roadmap');
      }
    };
    
    window.addEventListener('scroll', checkRoadmapVisibility);
    return () => window.removeEventListener('scroll', checkRoadmapVisibility);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0420] text-white overflow-hidden relative">

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-purple/70 backdrop-blur-md shadow-md' : 'bg-transparent'} h-16`}>
        <div className="container mx-auto px-4 py-4 h-full flex justify-between items-center pt-8">
          <Image 
            src="/Nau.png" 
            alt="Nauth Logo" 
            width={200} 
            height={40} 
            priority 
          />
          <nav className="hidden md:flex space-x-6">
            <Link href="#home" className={`text-white hover:text-purple-300 ${currentSection === 'home' ? 'text-purple-300' : ''}`}>
              Home
            </Link>
            <Link href="#about" className={`text-white hover:text-purple-300 ${currentSection === 'about' ? 'text-purple-300' : ''}`}>
              About
            </Link>
            <Link href="#why-nauth" className={`text-white hover:text-purple-300 ${currentSection === 'why-nauth' ? 'text-purple-300' : ''}`}>
              Why Nauth
            </Link>
            <Link href="#mission" className={`text-white hover:text-purple-300 ${currentSection === 'mission' ? 'text-purple-300' : ''}`}>
              Our Mission
            </Link>
            <Link href="#roadmap" className={`text-white hover:text-purple-300 ${currentSection === 'roadmap' ? 'text-purple-300' : ''}`}>
              Roadmap
            </Link>
          </nav>
          <div className="hidden md:flex space-x-3 items-center">
            <Link href="https://x.com/NauthSW?t=LvFPQJZqNKevpQhmXaJXkQ&s=08" className="text-white hover:text-purple-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>

          <div className="md:hidden">
            <MobileNavbar />
          </div>
        </div>
      </header>

      <section id="home" ref={homeRef}>
        <HomeSection />
      </section>

      <section id="about" ref={aboutRef}>
        <AboutSection />
      </section>

      <section id="why-nauth" ref={whyNauthRef}>
        <WhyNauthSection />
      </section>

      <section id="mission" ref={missionRef}>
        <MissionSection />
      </section>

      <section id="technology" ref={technologyRef}>
        <TechnologySection />
      </section>

      <section id="roadmap" ref={roadmapRef} data-section="roadmap">
        <RoadmapSection />
      </section>

      <div className="container mx-auto px-4 py-8 border-t border-gray-800">
        <Footer />
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-purple-500 opacity-30"></div>
        <div className="absolute top-[40%] left-[20%] w-3 h-3 rounded-full bg-blue-500 opacity-20"></div>
        <div className="absolute top-[60%] left-[15%] w-2 h-2 rounded-full bg-pink-500 opacity-30"></div>
        <div className="absolute top-[30%] right-[15%] w-2 h-2 rounded-full bg-yellow-500 opacity-20"></div>
        <div className="absolute top-[70%] right-[25%] w-3 h-3 rounded-full bg-purple-500 opacity-30"></div>
      </div>
    </div>
  )
}
