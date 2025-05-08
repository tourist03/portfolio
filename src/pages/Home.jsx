import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { BriefcaseIcon, RocketLaunchIcon, SparklesIcon, AcademicCapIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaTrophy } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const transformedX = useTransform(mouseX, (value) => `${value}px`);
  const transformedY = useTransform(mouseY, (value) => `${value}px`);

  const handleMouseMove = (event) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  
  const sections = [
    { 
      title: "Experience", 
      route: "/experience", 
      color: "from-violet-500 to-fuchsia-500",
      bgColor: "bg-violet-500/20",
      icon: <BriefcaseIcon className="w-8 h-8 text-violet-400" />,
      description: "Senior Software Engineer @ LTIMindtree",
      details: ["Full Stack Development", "Cloud Architecture", "Team Leadership"]
    },
    { 
      title: "Projects", 
      route: "/projects", 
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/20",
      icon: <RocketLaunchIcon className="w-8 h-8 text-cyan-400" />,
      description: "Featured Works & Contributions",
      details: ["Web Applications", "Cloud Solutions", "Open Source"]
    },
    { 
      title: "Skills", 
      route: "/skills", 
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/20",
      icon: <SparklesIcon className="w-8 h-8 text-emerald-400" />,
      description: "Technical Expertise",
      details: ["React.js", "Node.js", "AWS", "MongoDB"]
    },
    { 
      title: "Education", 
      route: "/education", 
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/20",
      icon: <AcademicCapIcon className="w-8 h-8 text-amber-400" />,
      description: "Academic Journey",
      details: ["Computer Science", "Software Engineering", "Data Structures"]
    },
    { 
      title: "Contact", 
      route: "/contact", 
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-500/20",
      icon: <EnvelopeIcon className="w-8 h-8 text-pink-400" />,
      description: "Let's Connect",
      details: ["Email", "LinkedIn", "GitHub"]
    },
    { 
      title: "Coding Profiles", 
      route: "/coding-profiles", 
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/20",
      icon: <FaTrophy className="w-8 h-8 text-yellow-400" />,
      description: "Competitive Programming",
      details: ["LeetCode", "CodeChef", "HackerRank"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() + 0.5],
                opacity: [0.1, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 -z-10"
            style={{
              background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            }}
          />
          <motion.h1 
            className="text-7xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Vineet Singh
            </span>
          </motion.h1>
          <motion.div
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold text-gray-300">
              Full Stack Developer & Technology Enthusiast
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building innovative solutions with modern technologies
            </p>
          </motion.div>
        </motion.div>

        {/* Interactive Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(section.title)}
              onMouseLeave={() => setHoveredItem(null)}
              onMouseMove={handleMouseMove}
              onClick={() => navigate(section.route)}
              className={`relative group cursor-pointer rounded-2xl ${section.bgColor} 
                         backdrop-blur-xl border border-white/10 overflow-hidden`}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(
                    circle at var(--mouse-x) var(--mouse-y),
                    rgba(255,255,255,0.1) 0%,
                    transparent 60%
                  )`,
                  "--mouse-x": transformedX,
                  "--mouse-y": transformedY,
                }}
              />
              
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-14 h-14 rounded-full shadow group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: section.color.includes('from-') 
                            ? `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`
                            : 'linear-gradient(135deg, #a5b4fc 0%, #f472b6 100%)',
                          boxShadow: '0 4px 20px 0 rgba(139,92,246,0.15)'
                        }}>
                    <span className="group-hover:animate-pulse">
                      {section.icon}
                    </span>
                  </span>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${section.color} text-transparent bg-clip-text`}>
                    {section.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4">{section.description}</p>
                
                <AnimatePresence>
                  {hoveredItem === section.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      {section.details.map((detail, idx) => (
                        <motion.div
                          key={detail}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                          <span className="text-gray-300 text-sm">{detail}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, ${section.color.split(' ')[1]} 0%, transparent 100%)`,
                  opacity: 0.1,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 