import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const skillsData = {
    "Core Development": {
      icon: "💻",
      skills: [
        {
          name: "Frontend Development",
          technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Material-UI"],
          proficiency: 90,
          projects: "Built 10+ responsive web applications",
          experience: "3+ years"
        },
        {
          name: "Backend Development",
          technologies: ["Node.js", "Express.js", "Flask", "RESTful APIs"],
          proficiency: 85,
          projects: "Developed 5+ backend systems",
          experience: "2+ years"
        },
        {
          name: "Database Management",
          technologies: ["MongoDB", "PostgreSQL"],
          proficiency: 80,
          projects: "Designed and maintained multiple database systems",
          experience: "2+ years"
        }
      ]
    },
    "Development Tools": {
      icon: "🛠️",
      skills: [
        {
          name: "Version Control",
          technologies: ["Git", "GitHub"],
          proficiency: 90,
          projects: "Used in all development projects",
          experience: "3+ years"
        },
        {
          name: "Containerization",
          technologies: ["Docker"],
          proficiency: 75,
          projects: "Containerized 3+ applications",
          experience: "1+ year"
        },
        {
          name: "CI/CD",
          technologies: ["TravisCI"],
          proficiency: 70,
          projects: "Implemented in 2+ projects",
          experience: "1 year"
        }
      ]
    },
    "Additional Skills": {
      icon: "🎯",
      skills: [
        {
          name: "Data Visualization",
          technologies: ["Power BI", "Data Analytics"],
          proficiency: 85,
          projects: "Created 5+ analytics dashboards",
          experience: "2 years"
        },
        {
          name: "Data Processing",
          technologies: ["ETL Pipelines", "Ab Initio"],
          proficiency: 80,
          projects: "Optimized multiple data workflows",
          experience: "1.5 years"
        }
      ]
    }
  };

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
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          Technical Skills
        </motion.h1>

        <div className="space-y-8">
          {Object.entries(skillsData).map(([category, { icon, skills }], index) => (
            <motion.div
              key={category}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <motion.div
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-4xl">{icon}</span>
                <h2 className="text-2xl font-semibold text-green-400">{category}</h2>
              </motion.div>

              {selectedCategory === category && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6 space-y-6"
                >
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="bg-gray-700/50 p-4 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold text-green-300 mb-4">{skill.name}</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {skill.technologies.map(tech => (
                              <span key={tech} className="px-3 py-1 bg-green-500/20 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold mb-2">Proficiency</h4>
                            <div className="h-2 bg-gray-600 rounded-full">
                              <motion.div
                                className="h-full bg-green-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.proficiency}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                              />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold mb-1">Experience</h4>
                            <p className="text-gray-300">{skill.experience}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold mb-1">Projects</h4>
                          <p className="text-gray-300">{skill.projects}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills; 