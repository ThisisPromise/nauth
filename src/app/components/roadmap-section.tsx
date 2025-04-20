
// // import { motion } from "framer-motion";
// // import { useInView } from "react-intersection-observer";
// // import { useState, useEffect } from "react";

// // export default function RoadmapSection() {
// //   // For responsive design
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const checkMobile = () => {
// //       setIsMobile(window.innerWidth < 768);
// //     };
    
// //     checkMobile();
// //     window.addEventListener("resize", checkMobile);
    
// //     return () => window.removeEventListener("resize", checkMobile);
// //   }, []);

// //   const containerVariants = {
// //     hidden: {},
// //     visible: {
// //       transition: {
// //         staggerChildren: 0.3
// //       }
// //     }
// //   };

// //   const phaseVariants = {
// //     hidden: { opacity: 0, y: 50 },
// //     visible: { 
// //       opacity: 1, 
// //       y: 0,
// //       transition: { 
// //         duration: 0.7, 
// //         ease: "easeOut" 
// //       }
// //     }
// //   };

// //   const lineVariants = {
// //     hidden: { scaleY: 0 },
// //     visible: { 
// //       scaleY: 1, 
// //       transition: { 
// //         duration: 1.5, 
// //         ease: "easeInOut" 
// //       } 
// //     }
// //   };

// //   const renderPhase = (phase) => {
// //     const [ref, inView] = useInView({
// //       triggerOnce: true,
// //       threshold: 0.2
// //     });

// //     const {
// //       number,
// //       title,
// //       isLeft,
// //       items
// //     } = phase;

// //     return (
// //       <motion.div 
// //         className="mb-16 md:mb-24 relative"
// //         ref={ref}
// //         variants={phaseVariants}
// //         initial="hidden"
// //         animate={inView ? "visible" : "hidden"}
// //       >
// //         <div className="flex flex-col md:flex-row items-center">
// //           {/* Left content (desktop) */}
// //           <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pr-12 md:text-right hidden md:block'}`}>
// //             {isLeft && (
// //               <motion.div 
// //                 className="bg-[#1a0b38] p-6 rounded-lg shadow-xl"
// //                 whileHover={{ scale: 1.03 }}
// //                 transition={{ type: "spring", stiffness: 300 }}
// //               >
// //                 <h3 className="text-xl font-bold mb-4 text-purple-400">{title}</h3>
// //                 <ul className="text-gray-400 space-y-3">
// //                   {items.map((item, idx) => (
// //                     <li key={idx} className="flex items-start gap-2 justify-end">
// //                       <span>{item.text}</span>
// //                       <span className="text-purple-400 font-bold">{item.icon}</span>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </motion.div>
// //             )}
// //           </div>

// //           {/* Center node */}
// //           <motion.div 
// //             className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center z-10 my-4 md:my-0 shadow-lg"
// //             whileHover={{ scale: 1.2, rotate: 360 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <span className="font-bold text-white">{number}</span>
// //           </motion.div>

// //           {/* Right content (desktop) */}
// //           <div className={`md:w-1/2 ${!isLeft ? 'md:pl-12 md:text-left' : 'md:pl-12 md:text-left hidden md:block'}`}>
// //             {!isLeft && (
// //               <motion.div 
// //                 className="bg-[#1a0b38] p-6 rounded-lg shadow-xl"
// //                 whileHover={{ scale: 1.03 }}
// //                 transition={{ type: "spring", stiffness: 300 }}
// //               >
// //                 <h3 className="text-xl font-bold mb-4 text-purple-400">{title}</h3>
// //                 <ul className="text-gray-400 space-y-3">
// //                   {items.map((item, idx) => (
// //                     <li key={idx} className="flex items-start gap-2">
// //                       <span className="text-purple-400 font-bold">{item.icon}</span>
// //                       <span>{item.text}</span>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </motion.div>
// //             )}
// //           </div>

// //           {/* Mobile view - always show content below circle */}
// //           {isMobile && (
// //             <div className="w-full mt-4">
// //               <motion.div 
// //                 className="bg-[#1a0b38] p-6 rounded-lg shadow-xl"
// //                 whileHover={{ scale: 1.03 }}
// //                 transition={{ type: "spring", stiffness: 300 }}
// //               >
// //                 <h3 className="text-xl font-bold mb-4 text-purple-400">{title}</h3>
// //                 <ul className="text-gray-400 space-y-3">
// //                   {items.map((item, idx) => (
// //                     <li key={idx} className="flex items-start gap-2">
// //                       <span className="text-purple-400 font-bold">{item.icon}</span>
// //                       <span>{item.text}</span>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </motion.div>
// //             </div>
// //           )}
// //         </div>
// //       </motion.div>
// //     );
// //   };

// //   const phases = [
// //     {
// //       number: 1,
// //       title: "📌 Phase 1: Core Infrastructure",
// //       isLeft: true,
// //       items: [
// //         { icon: "🔍", text: "Implement binary image conversion and pixel-level matching" },
// //         { icon: "🧠", text: "Add image hashing for fast duplicate detection" },
// //         { icon: "🔐", text: "Store verified metadata (creator, timestamp, hash) on-chain" },
// //         { icon: "🖥️", text: "Build core platform (upload UI, verification feedback, minting)" },
// //         { icon: "📄", text: "Integrate audit logs and traceable authentication history" }
// //       ]
// //     },
// //     {
// //       number: 2,
// //       title: "📌 Phase 2: Platform Expansion",
// //       isLeft: false,
// //       items: [
// //         { icon: "🎨", text: "Enable creator profiles with verified NFT history" },
// //         { icon: "📦", text: "Launch lightweight API for 3rd-party verification" },
// //         { icon: "🧪", text: "Set up verification sandbox for artists to test and submit feedback" },
// //         { icon: "🌐", text: "Prepare Nauth SDK for easy marketplace/plugin integration" },
// //         { icon: "⚡", text: "Improve comparison performance + UI/UX based on real user feedback" }
// //       ]
// //     },
// //     {
// //       number: 3,
// //       title: "📌 Phase 3: Trust & Ecosystem",
// //       isLeft: true,
// //       items: [
// //         { icon: "🛡️", text: "Launch Nauth Verified Badge (browser extension/widget)" },
// //         { icon: "📊", text: "Create analytics dashboards for creators and collectors" },
// //         { icon: "🤝", text: "Onboard marketplaces, galleries, and legal partners" },
// //         { icon: "📣", text: "Begin public campaigns around NFT authenticity and IP protection" },
// //         { icon: "🏛️", text: "Open partnerships with institutions & communities" }
// //       ]
// //     },
// //     {
// //       number: 4,
// //       title: "📌 Phase 4: Beyond NFTs",
// //       isLeft: false,
// //       items: [
// //         { icon: "📁", text: "Support document types like PDFs, screenshots, and concept designs" },
// //         { icon: "🤖", text: "Add smart forgery detection layer using lightweight AI/vision" },
// //         { icon: "🧠", text: "Explore user-driven validation network (DAO mechanics)" },
// //         { icon: "🔄", text: "Create versioning system for updated works" },
// //         { icon: "🌍", text: "Launch multi-language interface for global access" }
// //       ]
// //     }
// //   ];

// //   // For the header animation
// //   const [headerRef, headerInView] = useInView({
// //     triggerOnce: true,
// //     threshold: 0.2
// //   });

// //   const headerVariants = {
// //     hidden: { opacity: 0, y: -30 },
// //     visible: { 
// //       opacity: 1, 
// //       y: 0, 
// //       transition: { 
// //         duration: 0.7, 
// //         ease: "easeOut" 
// //       } 
// //     }
// //   };

// //   // For the vertical line animation
// //   const [lineRef, lineInView] = useInView({
// //     triggerOnce: true,
// //     threshold: 0.1
// //   });

// //   return (
// //     <div className="container mx-auto px-4 py-16">
// //       <div className="max-w-5xl mx-auto">
// //         <motion.div 
// //           className="text-center mb-12"
// //           ref={headerRef}
// //           variants={headerVariants}
// //           initial="hidden"
// //           animate={headerInView ? "visible" : "hidden"}
// //         >
// //           <h2 className="text-4xl font-bold mb-4">🚀 Nauth Milestone-Based Roadmap</h2>
// //           <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
// //           <p className="text-gray-300 max-w-2xl mx-auto">
// //             Our journey to revolutionize NFT authenticity and creator protection.
// //           </p>
// //         </motion.div>

// //         <div className="relative">
// //           {/* Animated Vertical Line */}
// //           <motion.div 
// //             className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-700 hidden md:block origin-top"
// //             ref={lineRef}
// //             variants={lineVariants}
// //             initial="hidden"
// //             animate={lineInView ? "visible" : "hidden"}
// //           ></motion.div>

// //           <motion.div
// //             variants={containerVariants}
// //             initial="hidden"
// //             animate="visible"
// //           >
// //             {phases.map((phase, index) => renderPhase(phase))}
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useState, useEffect } from "react";

// export default function RoadmapSection() {
//   // For responsive design
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
    
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const phaseVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.7, 
//         ease: "easeOut" 
//       }
//     }
//   };

//   const lineVariants = {
//     hidden: { scaleY: 0 },
//     visible: { 
//       scaleY: 1, 
//       transition: { 
//         duration: 1.5, 
//         ease: "easeInOut" 
//       } 
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     },
//     hover: {
//       scale: 1.03,
//       boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
//       transition: { 
//         type: "spring", 
//         stiffness: 300 
//       }
//     }
//   };

//   const nodeVariants = {
//     hidden: { scale: 0 },
//     visible: { 
//       scale: 1,
//       transition: { 
//         type: "spring",
//         stiffness: 300,
//         delay: 0.2
//       }
//     },
//     hover: {
//       scale: 1.2,
//       rotate: 360,
//       boxShadow: "0 0 15px 5px rgba(124, 58, 237, 0.5)",
//       transition: { duration: 0.5 }
//     }
//   };

//   const iconVariants = {
//     hidden: { scale: 0 },
//     visible: { 
//       scale: 1,
//       transition: { 
//         type: "spring",
//         stiffness: 500,
//         delay: 0.3
//       }
//     }
//   };

//   const phases = [
//     {
//       number: 1,
//       title: "Phase 1: Core Infrastructure",
//       icon: "📌",
//       isLeft: true,
//       items: [
//         { icon: "🔍", text: "Implement binary image conversion and pixel-level matching" },
//         { icon: "🧠", text: "Add image hashing for fast duplicate detection" },
//         { icon: "🔐", text: "Store verified metadata (creator, timestamp, hash) on-chain" },
//         { icon: "🖥️", text: "Build core platform (upload UI, verification feedback, minting)" },
//         { icon: "📄", text: "Integrate audit logs and traceable authentication history" }
//       ]
//     },
//     {
//       number: 2,
//       title: "Phase 2: Platform Expansion",
//       icon: "📌",
//       isLeft: false,
//       items: [
//         { icon: "🎨", text: "Enable creator profiles with verified NFT history" },
//         { icon: "📦", text: "Launch lightweight API for 3rd-party verification" },
//         { icon: "🧪", text: "Set up verification sandbox for artists to test and submit feedback" },
//         { icon: "🌐", text: "Prepare Nauth SDK for easy marketplace/plugin integration" },
//         { icon: "⚡", text: "Improve comparison performance + UI/UX based on real user feedback" }
//       ]
//     },
//     {
//       number: 3,
//       title: "Phase 3: Trust & Ecosystem",
//       icon: "📌",
//       isLeft: true,
//       items: [
//         { icon: "🛡️", text: "Launch Nauth Verified Badge (browser extension/widget)" },
//         { icon: "📊", text: "Create analytics dashboards for creators and collectors" },
//         { icon: "🤝", text: "Onboard marketplaces, galleries, and legal partners" },
//         { icon: "📣", text: "Begin public campaigns around NFT authenticity and IP protection" },
//         { icon: "🏛️", text: "Open partnerships with institutions & communities" }
//       ]
//     },
//     {
//       number: 4,
//       title: "Phase 4: Beyond NFTs",
//       icon: "📌",
//       isLeft: false,
//       items: [
//         { icon: "📁", text: "Support document types like PDFs, screenshots, and concept designs" },
//         { icon: "🤖", text: "Add smart forgery detection layer using lightweight AI/vision" },
//         { icon: "🧠", text: "Explore user-driven validation network (DAO mechanics)" },
//         { icon: "🔄", text: "Create versioning system for updated works" },
//         { icon: "🌍", text: "Launch multi-language interface for global access" }
//       ]
//     }
//   ];

//   const renderPhase = (phase, index) => {
//     const [ref, inView] = useInView({
//       triggerOnce: false,
//       threshold: 0.2
//     });

//     const {
//       number,
//       title,
//       icon,
//       isLeft,
//       items
//     } = phase;

//     return (
//       <motion.div 
//         key={`phase-${number}`}
//         className="mb-16 md:mb-24 relative"
//         ref={ref}
//         variants={phaseVariants}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//       >
//         <div className="flex flex-col md:flex-row items-center">
//           {/* Left content (desktop) */}
//           <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pr-12 md:text-right hidden md:block'}`}>
//             {isLeft && (
//               <motion.div 
//                 className="bg-[#1a0b38] p-6 rounded-lg shadow-xl border border-purple-900/30"
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 whileHover="hover"
//               >
//                 <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center justify-end gap-2">
//                   {title}
//                   <motion.span
//                     variants={iconVariants}
//                     initial="hidden"
//                     animate={inView ? "visible" : "hidden"}
//                   >
//                     {icon}
//                   </motion.span>
//                 </h3>
//                 <ul className="text-gray-300 space-y-3">
//                   {items.map((item, idx) => (
//                     <motion.li 
//                       key={`left-item-${number}-${idx}`}
//                       className="flex items-start gap-2 justify-end"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                       transition={{ delay: 0.1 + (idx * 0.1) }}
//                     >
//                       <span className="text-sm md:text-base">{item.text}</span>
//                       <span className="text-purple-400 font-bold text-lg flex-shrink-0">{item.icon}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </motion.div>
//             )}
//           </div>

//           {/* Center node */}
//           <div className="relative">
//             <motion.div 
//               className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center z-10 shadow-lg"
//               variants={nodeVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               whileHover="hover"
//             >
//               <span className="font-bold text-white text-lg">{number}</span>
//             </motion.div>
//             {/* Connecting lines */}
//             {index < phases.length - 1 && (
//               <motion.div 
//                 className="absolute top-14 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-purple-600/50 hidden md:block"
//                 initial={{ scaleY: 0, opacity: 0 }}
//                 animate={inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
//                 transition={{ delay: 0.5, duration: 0.5 }}
//               />
//             )}
//           </div>

//           {/* Right content (desktop) */}
//           <div className={`md:w-1/2 ${!isLeft ? 'md:pl-12 md:text-left' : 'md:pl-12 md:text-left hidden md:block'}`}>
//             {!isLeft && (
//               <motion.div 
//                 className="bg-[#1a0b38] p-6 rounded-lg shadow-xl border border-purple-900/30"
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 whileHover="hover"
//               >
//                 <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
//                   <motion.span
//                     variants={iconVariants}
//                     initial="hidden"
//                     animate={inView ? "visible" : "hidden"}
//                   >
//                     {icon}
//                   </motion.span>
//                   {title}
//                 </h3>
//                 <ul className="text-gray-300 space-y-3">
//                   {items.map((item, idx) => (
//                     <motion.li 
//                       key={`right-item-${number}-${idx}`}
//                       className="flex items-start gap-2"
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//                       transition={{ delay: 0.1 + (idx * 0.1) }}
//                     >
//                       <span className="text-purple-400 font-bold text-lg flex-shrink-0">{item.icon}</span>
//                       <span className="text-sm md:text-base">{item.text}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </motion.div>
//             )}
//           </div>

//           {/* Mobile view - always show content below circle */}
//           {isMobile && (
//             <motion.div 
//               className="w-full mt-6"
//               variants={cardVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               whileHover="hover"
//             >
//               <div className="bg-[#1a0b38] p-6 rounded-lg shadow-xl border border-purple-900/30">
//                 <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
//                   <motion.span
//                     variants={iconVariants}
//                     initial="hidden"
//                     animate={inView ? "visible" : "hidden"}
//                   >
//                     {icon}
//                   </motion.span>
//                   {title}
//                 </h3>
//                 <ul className="text-gray-300 space-y-3">
//                   {items.map((item, idx) => (
//                     <motion.li 
//                       key={`mobile-item-${number}-${idx}`}
//                       className="flex items-start gap-2"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                       transition={{ delay: 0.1 + (idx * 0.1) }}
//                     >
//                       <span className="text-purple-400 font-bold text-lg flex-shrink-0">{item.icon}</span>
//                       <span className="text-sm">{item.text}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </motion.div>
//     );
//   };

//   // For the header animation
//   const [headerRef, headerInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.2
//   });

//   const headerVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { 
//         duration: 0.7, 
//         ease: "easeOut" 
//       } 
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <motion.div className="max-w-5xl mx-auto">
//         <motion.div 
//           className="text-center mb-16"
//           ref={headerRef}
//           variants={headerVariants}
//           initial="hidden"
//           animate={headerInView ? "visible" : "hidden"}
//         >
//           <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
//             <motion.span
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//               transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//             >
//               🚀
//             </motion.span> 
//             Nauth Roadmap
//           </h2>
//           <motion.div 
//             className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
//             initial={{ width: 0 }}
//             animate={headerInView ? { width: 96 } : { width: 0 }}
//             transition={{ delay: 0.3, duration: 0.7 }}
//           ></motion.div>
//           <motion.p 
//             className="text-gray-300 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             Our journey to revolutionize NFT authenticity and creator protection across the digital landscape.
//           </motion.p>
//         </motion.div>

//         <div className="relative">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {phases.map((phase, index) => renderPhase(phase, index))}
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const phaseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1, 
      transition: { 
        duration: 1.5, 
        ease: "easeInOut" 
      } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      boxShadow: "0 0 15px 5px rgba(124, 58, 237, 0.5)",
      transition: { duration: 0.5 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 500,
        delay: 0.3
      }
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

  const renderPhase = (phase, index) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.2
    });

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
        ref={ref}
        variants={phaseVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content (desktop only) */}
          {!isMobile && isLeft && (
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <motion.div 
                className="bg-[#1a0b38] p-6 rounded-lg shadow-xl border border-purple-900/30"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center justify-end gap-2">
                  {title}
                  <motion.span
                    variants={iconVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    {icon}
                  </motion.span>
                </h3>
                <ul className="text-gray-300 space-y-3">
                  {items.map((item, idx) => (
                    <motion.li 
                      key={`left-item-${number}-${idx}`}
                      className="flex items-start gap-2 justify-end"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
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
              variants={nodeVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
            >
              <span className="font-bold text-white text-lg">{number}</span>
            </motion.div>
            {/* Connecting lines */}
            {index < phases.length - 1 && !isMobile && (
              <motion.div 
                className="absolute top-14 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-purple-600/50"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            )}
          </div>

          {/* Right content (desktop only) */}
          {!isMobile && !isLeft && (
            <div className="md:w-1/2 md:pl-12 md:text-left">
              <motion.div 
                className="bg-[#1a0b38] p-6 rounded-lg shadow-xl border border-purple-900/30"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                  <motion.span
                    variants={iconVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    {icon}
                  </motion.span>
                  {title}
                </h3>
                <ul className="text-gray-300 space-y-3">
                  {items.map((item, idx) => (
                    <motion.li 
                      key={`right-item-${number}-${idx}`}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
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
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
            >
              <div className="bg-[#1a0b38] p-6 rounded-lg shadow-xl border border-purple-900/30">
                <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                  <motion.span
                    variants={iconVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    {icon}
                  </motion.span>
                  {title}
                </h3>
                <ul className="text-gray-300 space-y-3">
                  {items.map((item, idx) => (
                    <motion.li 
                      key={`mobile-item-${number}-${idx}`}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
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
  };

  // For the header animation
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              🚀
            </motion.span> 
            Nauth Roadmap
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={headerInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          ></motion.div>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Our journey to revolutionize NFT authenticity and creator protection across the digital landscape.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Vertical line for desktop view */}
          {!isMobile && (
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-700/40"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>
          )}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {phases.map((phase, index) => renderPhase(phase, index))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}