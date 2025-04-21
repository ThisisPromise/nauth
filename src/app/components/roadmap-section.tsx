import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function RoadmapSection() {
  // For responsive design
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  const phases = [
    {
      number: 1,
      title: "Phase 1: Core Infrastructure",
      icon: "📌",
      isLeft: true,
      items: [
        { icon: "🔍", text: "Implement binary image conversion and pixel-level matching" },
        { icon: "🧠", text: "Add image hashing for fast duplicate detection" },
        { icon: "🔐", text: "Store verified metadata (creator, timestamp, hash) on-chain" },
        { icon: "🖥️", text: "Build core platform (upload UI, verification feedback, minting)" },
        { icon: "📄", text: "Integrate audit logs and traceable authentication history" }
      ]
    },
    {
      number: 2,
      title: "Phase 2: Platform Expansion",
      icon: "📌",
      isLeft: false,
      items: [
        { icon: "🎨", text: "Enable creator profiles with verified NFT history" },
        { icon: "📦", text: "Launch lightweight API for 3rd-party verification" },
        { icon: "🧪", text: "Set up verification sandbox for artists to test and submit feedback" },
        { icon: "🌐", text: "Prepare Nauth SDK for easy marketplace/plugin integration" },
        { icon: "⚡", text: "Improve comparison performance + UI/UX based on real user feedback" }
      ]
    },
    {
      number: 3,
      title: "Phase 3: Trust & Ecosystem",
      icon: "📌",
      isLeft: true,
      items: [
        { icon: "🛡️", text: "Launch Nauth Verified Badge (browser extension/widget)" },
        { icon: "📊", text: "Create analytics dashboards for creators and collectors" },
        { icon: "🤝", text: "Onboard marketplaces, galleries, and legal partners" },
        { icon: "📣", text: "Begin public campaigns around NFT authenticity and IP protection" },
        { icon: "🏛️", text: "Open partnerships with institutions & communities" }
      ]
    },
    {
      number: 4,
      title: "Phase 4: Beyond NFTs",
      icon: "📌",
      isLeft: false,
      items: [
        { icon: "📁", text: "Support document types like PDFs, screenshots, and concept designs" },
        { icon: "🤖", text: "Add smart forgery detection layer using lightweight AI/vision" },
        { icon: "🧠", text: "Explore user-driven validation network (DAO mechanics)" },
        { icon: "🔄", text: "Create versioning system for updated works" },
        { icon: "🌍", text: "Launch multi-language interface for global access" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            <span className="mr-2">🚀</span>
            Nauth Roadmap
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          ></motion.div>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Our journey to revolutionize NFT authenticity and creator protection across the digital landscape.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Vertical line for desktop view */}
          {!isMobile && (
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-700/40"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          )}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {phases.map((phase, index) => {
              const {
                number,
                title,
                icon,
                isLeft,
                items
              } = phase;

              return (
                <motion.div 
                  key={`phase-${number}`}
                  className="mb-16 md:mb-24 relative"
                  variants={itemVariants}
                >
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Left content (desktop only) */}
                    {!isMobile && isLeft && (
                      <div className="md:w-1/2 md:pr-12 md:text-right">
                        <motion.div 
                          className="bg-[#1a0b38] p-6 rounded-lg shadow-xl border border-purple-900/30"
                          variants={cardVariants}
                          whileHover="hover"
                        >
                          <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center justify-end gap-2">
                            {title}
                            <span>{icon}</span>
                          </h3>
                          <ul className="text-gray-300 space-y-3">
                            {items.map((item, idx) => (
                              <motion.li 
                                key={`left-item-${number}-${idx}`}
                                className="flex items-start gap-2 justify-end"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 + (idx * 0.1) }}
                              >
                                <span className="text-sm md:text-base">{item.text}</span>
                                <span className="text-purple-400 font-bold text-lg flex-shrink-0">{item.icon}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    )}

                    {/* Placeholder div for desktop layout when content is on right */}
                    {!isMobile && !isLeft && (
                      <div className="md:w-1/2"></div>
                    )}

                    {/* Center node */}
                    <div className="relative">
                      <motion.div 
                        className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center z-10 shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.2 + (index * 0.1) }}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 360, 
                          boxShadow: "0 0 15px 5px rgba(124, 58, 237, 0.5)" 
                        }}
                      >
                        <span className="font-bold text-white text-lg">{number}</span>
                      </motion.div>
                      {/* Connecting lines */}
                      {index < phases.length - 1 && !isMobile && (
                        <motion.div 
                          className="absolute top-14 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-purple-600/50"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                        />
                      )}
                    </div>

                    {/* Right content (desktop only) */}
                    {!isMobile && !isLeft && (
                      <div className="md:w-1/2 md:pl-12 md:text-left">
                        <motion.div 
                          className="bg-[#1a0b38] p-6 rounded-lg shadow-xl border border-purple-900/30"
                          variants={cardVariants}
                          whileHover="hover"
                        >
                          <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                            <span>{icon}</span>
                            {title}
                          </h3>
                          <ul className="text-gray-300 space-y-3">
                            {items.map((item, idx) => (
                              <motion.li 
                                key={`right-item-${number}-${idx}`}
                                className="flex items-start gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 + (idx * 0.1) }}
                              >
                                <span className="text-purple-400 font-bold text-lg flex-shrink-0">{item.icon}</span>
                                <span className="text-sm md:text-base">{item.text}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    )}

                    {/* Placeholder div for desktop layout when content is on left */}
                    {!isMobile && isLeft && (
                      <div className="md:w-1/2"></div>
                    )}

                    {/* Mobile view card - only show on mobile */}
                    {isMobile && (
                      <motion.div 
                        className="w-full mt-6"
                        variants={cardVariants}
                        whileHover="hover"
                      >
                        <div className="bg-[#1a0b38] p-6 rounded-lg shadow-xl border border-purple-900/30">
                          <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                            <span>{icon}</span>
                            {title}
                          </h3>
                          <ul className="text-gray-300 space-y-3">
                            {items.map((item, idx) => (
                              <motion.li 
                                key={`mobile-item-${number}-${idx}`}
                                className="flex items-start gap-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + (idx * 0.1) }}
                              >
                                <span className="text-purple-400 font-bold text-lg flex-shrink-0">{item.icon}</span>
                                <span className="text-sm">{item.text}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
