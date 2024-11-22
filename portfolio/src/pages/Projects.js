import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "TextMaster Pro",
      thumbnail: "🔤",
      technologies: ["React.js", "JavaScript", "CSS"],
      duration: "2023",
      description: "A versatile text manipulation tool with advanced features",
      features: [
        "Case conversion functionality",
        "Text reversal capabilities",
        "Duplicate removal system",
        "Email & phone number extraction"
      ],
      liveLink: "https://tourist03.github.io/textmaster-pro/",
      sourceCode: "github.com/tourist03/textmaster-pro",
      challenges: "Optimizing performance for large text inputs",
      learnings: "Improved understanding of text processing algorithms"
    },
    {
      title: "Character Recognition & Prediction",
      thumbnail: "🔍",
      technologies: ["Python", "Flask", "Flutter", "TensorFlow", "OpenCV"],
      duration: "2021-2022",
      description: "ML-powered text recognition system",
      features: [
        "Image to text conversion",
        "Machine learning model integration",
        "Image preprocessing capabilities",
        "High accuracy prediction"
      ],
      sourceCode: "www.github.com/tourist03",
      challenges: "Improving model accuracy and preprocessing",
      learnings: "Deep learning model optimization techniques"
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
                      <p className="text-gray-300">{project.challenges}</p>
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