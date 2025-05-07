import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "OpenWave",
      thumbnail: "📰",
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
        "Optimizing data caching for better performance",
        "Ensuring consistent mobile responsiveness",
        "Handling real-time updates without overwhelming the API"
      ],
      learnings: "Learning about news APIs, search optimization, and building scalable React applications"
    },
    {
      title: "iNotebook",
      thumbnail: "📝",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      duration: "2023",
      description: "Full-stack cloud notes application with secure authentication",
      features: [
        "Secure user authentication with JWT",
        "CRUD operations for notes",
        "User profile management",
        "Basic search functionality",
        "Responsive design"
      ],
      workingOn: [
        "Adding collaborative note sharing",
        "Implementing rich text editor",
        "Developing offline mode functionality",
        "Building export/import feature"
      ],
      sourceCode: "github.com/tourist03/iNotebook",
      challenges: [
        "Implementing secure JWT authentication flow",
        "Creating efficient database schema for notes and users",
        "Managing real-time state updates across components",
        "Building responsive UI for various screen sizes",
        "Optimizing database queries for better performance",
        "Implementing proper error handling and validation"
      ],
      learnings: "Mastered full-stack development with MERN and authentication best practices"
    },
    {
      title: "TextMaster Pro",
      thumbnail: "🔤",
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
      liveLink: "https://tourist03.github.io/textmaster-pro/",
      sourceCode: "github.com/tourist03/textmaster-pro",
      challenges: [
        "Optimizing algorithms for large text processing",
        "Implementing complex text manipulation functions",
        "Ensuring cross-browser compatibility",
        "Managing state for undo/redo functionality",
        "Building intuitive UI for complex operations",
        "Handling different text encodings and formats"
      ],
      learnings: "Improved understanding of text processing algorithms and React optimization techniques"
    },
    {
      title: "Character Recognition & Prediction",
      thumbnail: "🔍",
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
        "Enhancing preprocessing pipeline",
        "Adding custom model training options"
      ],
      sourceCode: "www.github.com/tourist03",
      challenges: [
        "Collecting diverse handwriting samples for training",
        "Implementing effective image preprocessing pipeline",
        "Optimizing model architecture for better accuracy",
        "Handling variations in writing styles and orientations",
        "Managing model size vs accuracy trade-offs",
        "Integrating TensorFlow model with Flutter frontend",
        "Ensuring consistent performance across devices",
        "Implementing efficient error handling and recovery"
      ],
      learnings: "Gained deep understanding of ML model optimization and image processing techniques"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />

      {/* Back Button */}
      <motion.button
        onClick={() => navigate('/')}
        className="mb-8 text-gray-400 hover:text-white flex items-center gap-2 glass px-4 py-2 rounded-lg"
        whileHover={{ x: -5 }}
      >
        ← Back to Home
      </motion.button>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          Featured Projects
        </motion.h1>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-2xl p-8 cursor-pointer hover-lift"
              onClick={() => setSelectedProject(selectedProject === project.title ? null : project.title)}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-6">
                  <span className="text-5xl transform hover:scale-110 transition-transform duration-300">
                    {project.thumbnail}
                  </span>
                  <div>
                    <h2 className="text-3xl font-bold gradient-text">{project.title}</h2>
                    <p className="text-gray-400 mt-2">{project.duration}</p>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {selectedProject === project.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 space-y-6"
                  >
                    <div className="glass p-6 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4 gradient-text">Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map(tech => (
                          <span key={tech} className="px-4 py-2 glass rounded-full text-sm hover-lift">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="glass p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4 gradient-text">Features</h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-300 flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="glass p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4 gradient-text">Working On</h4>
                        <ul className="space-y-3">
                          {project.workingOn.map((task, idx) => (
                            <li key={idx} className="text-gray-300 flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="glass p-6 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4 gradient-text">Links</h4>
                      <div className="flex gap-4">
                        {project.liveLink && (
                          <a 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass px-6 py-3 rounded-lg hover-lift flex items-center gap-2"
                          >
                            🌐 Live Demo
                          </a>
                        )}
                        <a 
                          href={`https://${project.sourceCode}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass px-6 py-3 rounded-lg hover-lift flex items-center gap-2"
                        >
                          💻 Source Code
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="glass p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4 gradient-text">Challenges</h4>
                        <ul className="space-y-3">
                          {project.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-gray-300 flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="glass p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4 gradient-text">Key Learnings</h4>
                        <p className="text-gray-300">{project.learnings}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 