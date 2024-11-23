import { motion } from 'framer-motion';
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
      className="min-h-screen bg-gray-900 text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Back Button */}
      <motion.button
        onClick={() => navigate('/')}
        className="mb-8 text-gray-400 hover:text-white flex items-center gap-2"
        whileHover={{ x: -5 }}
      >
        ← Back to Home
      </motion.button>

      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
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
              className="bg-gray-800 rounded-lg p-6 cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.title ? null : project.title)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{project.thumbnail}</span>
                  <div>
                    <h2 className="text-2xl font-semibold text-purple-400">{project.title}</h2>
                    <p className="text-gray-400 mt-1">{project.duration}</p>
                  </div>
                </div>
              </div>

              {selectedProject === project.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6 space-y-4"
                >
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Features</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Working On</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {project.workingOn.map((task, idx) => (
                        <li key={idx} className="text-gray-300">{task}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Links</h4>
                    <div className="space-y-2">
                      {project.liveLink && (
                        <a 
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 block"
                        >
                          🌐 Live Demo
                        </a>
                      )}
                      <a 
                        href={`https://${project.sourceCode}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 block"
                      >
                        💻 Source Code
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Challenges</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {Array.isArray(project.challenges) ? 
                          project.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-gray-300">
                              {typeof challenge === 'string' ? 
                                challenge : 
                                <div className="ml-4">
                                  <p className="font-medium">{challenge.title}</p>
                                  <ul className="list-disc list-inside ml-4 mt-1">
                                    {challenge.points.map((point, pidx) => (
                                      <li key={pidx} className="text-gray-400">{point}</li>
                                    ))}
                                  </ul>
                                </div>
                              }
                            </li>
                          )) : 
                          <li className="text-gray-300">{project.challenges}</li>
                        }
                      </ul>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Learnings</h4>
                      <p className="text-gray-300">{project.learnings}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 