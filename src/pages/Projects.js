import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
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

  const projects = [
    {
      title: "ScribeSpace",
      thumbnail: "📝",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      duration: "Sept 2024 - Present",
      description: "Full-stack cloud notes application with secure authentication and real-time collaboration",
      features: [
        "Secure user authentication with JWT",
        "Real-time collaborative editing",
        "Rich text formatting",
        "Cloud storage integration",
        "Responsive design"
      ],
      workingOn: [
        "Enhanced collaboration features",
        "Advanced document organization",
        "Real-time notifications",
        "Offline mode support"
      ],
      liveDemo: "https://scribe-script.vercel.app/",
      sourceCode: "github.com/tourist03/iNotebook",
      challenges: [
        "Implementing real-time collaboration",
        "Managing concurrent edits",
        "Optimizing performance at scale",
        "Building intuitive UI/UX"
      ],
      learnings: "Mastered full-stack development with MERN and real-time collaboration features"
    },
    {
      title: "OpenWave",
      thumbnail: "📰",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "NewsAPI"],
      duration: "April 2024 - Present",
      description: "News aggregation platform with advanced search capabilities",
      features: [
        "OpenSource News API integration",
        "Multiple news sources aggregation",
        "Basic search functionality",
        "Responsive news cards layout",
        "Category-based filtering"
      ],
      workingOn: [
        "Implementing advanced search with autocomplete",
        "Developing article summarization feature",
        "Building relevance-based ranking system",
        "Implementing social sharing capabilities"
      ],
      sourceCode: "github.com/tourist03/OpenWave",
      challenges: [
        "Implementing efficient pagination for large datasets",
        "Building a performant search engine with autocomplete",
        "Managing multiple API requests and rate limiting",
        "Optimizing data caching for better performance"
      ],
      learnings: "Learning about news APIs, search optimization, and building scalable React applications"
    },
    {
      title: "TextMaster Pro",
      thumbnail: "🔤",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      technologies: ["React.js", "JavaScript", "CSS"],
      duration: "2023",
      description: "Advanced text manipulation and analysis tool",
      features: [
        "Case conversion functionality",
        "Text reversal capabilities",
        "Basic text analysis",
        "Copy to clipboard",
        "Character counting"
      ],
      workingOn: [
        "Adding advanced text analysis features",
        "Implementing regex-based search",
        "Building text comparison tool",
        "Developing custom formatting options"
      ],
      liveDemo: "https://tourist03.github.io/textmaster-pro/",
      sourceCode: "github.com/tourist03/textmaster-pro",
      challenges: [
        "Optimizing algorithms for large text processing",
        "Implementing complex text manipulation functions",
        "Building intuitive UI for complex operations",
        "Handling different text encodings"
      ],
      learnings: "Improved understanding of text processing algorithms and React optimization techniques"
    },
    {
      title: "Character Recognition & Prediction",
      thumbnail: "🔍",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
      technologies: ["Python", "Flask", "Flutter", "TensorFlow", "OpenCV"],
      duration: "June 2021 - May 2022",
      description: "ML-powered text recognition system with advanced preprocessing",
      features: [
        "Basic character recognition",
        "Image preprocessing pipeline",
        "Mobile app interface",
        "Real-time camera feed processing",
        "Basic error handling"
      ],
      workingOn: [
        "Improving model accuracy",
        "Adding support for multiple languages",
        "Implementing batch processing",
        "Enhancing preprocessing pipeline"
      ],
      sourceCode: "www.github.com/tourist03",
      challenges: [
        "Collecting diverse handwriting samples",
        "Optimizing model architecture",
        "Managing model size vs accuracy",
        "Ensuring cross-device compatibility"
      ],
      learnings: "Gained deep understanding of ML model optimization and image processing techniques"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {Array.from({ length: 15 }).map((_, i) => (
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
        <motion.button
          onClick={() => navigate('/')}
          className="mb-8 text-gray-400 hover:text-white flex items-center gap-2 glass px-4 py-2 rounded-lg"
          whileHover={{ x: -5 }}
        >
          ← Back to Home
        </motion.button>

        <motion.h1 
          className="text-6xl font-bold mb-12 text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Featured Projects
          </span>
        </motion.h1>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setSelectedProject(project.title)}
              onMouseLeave={() => setSelectedProject(null)}
              onMouseMove={handleMouseMove}
              className={`relative rounded-2xl ${project.bgColor} 
                         backdrop-blur-xl border border-white/10 overflow-hidden group`}
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

              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-5xl transform hover:scale-110 transition-transform duration-300">
                    {project.thumbnail}
                  </span>
                  <div>
                    <h2 className={`text-3xl font-bold bg-gradient-to-r ${project.color} text-transparent bg-clip-text`}>
                      {project.title}
                    </h2>
                    <p className="text-gray-400 mt-2">{project.duration}</p>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className={`px-4 py-2 rounded-full text-sm ${project.bgColor} backdrop-blur-md border border-white/10`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <AnimatePresence>
                  {selectedProject === project.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className={`p-6 rounded-xl ${project.bgColor} backdrop-blur-md border border-white/10`}>
                          <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${project.color} text-transparent bg-clip-text`}>
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <motion.li
                                key={feature}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                                <span className="text-gray-300">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className={`p-6 rounded-xl ${project.bgColor} backdrop-blur-md border border-white/10`}>
                          <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${project.color} text-transparent bg-clip-text`}>
                            In Development
                          </h4>
                          <ul className="space-y-2">
                            {project.workingOn.map((item, idx) => (
                              <motion.li
                                key={item}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                                <span className="text-gray-300">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={`p-6 rounded-xl ${project.bgColor} backdrop-blur-md border border-white/10`}>
                        <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${project.color} text-transparent bg-clip-text`}>
                          Technical Challenges
                        </h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, idx) => (
                            <motion.li
                              key={challenge}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                              <span className="text-gray-300">{challenge}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={`https://${project.sourceCode}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`px-6 py-3 rounded-xl ${project.bgColor} backdrop-blur-md border border-white/10 
                                    hover:border-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2
                                    hover:bg-white/10 active:scale-95 cursor-pointer z-10`}
                        >
                          <span>💻</span>
                          View Source Code
                        </a>
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`px-6 py-3 rounded-xl ${project.bgColor} backdrop-blur-md border border-white/10 
                                      hover:border-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2
                                      hover:bg-white/10 active:scale-95 cursor-pointer z-10`}
                          >
                            <span>🌐</span>
                            Live Demo
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, ${project.color.split(' ')[1]} 0%, transparent 100%)`,
                  opacity: 0.1,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 