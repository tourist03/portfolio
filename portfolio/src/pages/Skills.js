import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const skillsData = {
    "Data Engineering": {
      icon: "🔄",
      skills: [
        {
          name: "ETL Development",
          technologies: ["Ab Initio", "SQL", "Python", "Shell Scripting"],
          proficiency: 75,
          projects: "Developed enterprise-scale ETL pipelines processing 100M+ records daily",
          experience: "2+ years"
        },
        {
          name: "Data Processing",
          technologies: ["Data Warehousing", "Data Quality", "Data Integration"],
          proficiency: 98,
          projects: "Implemented data quality frameworks and automated reconciliation systems",
          experience: "2+ years"
        },
        {
          name: "Database Management",
          technologies: ["MongoDB", "PostgreSQL", "MySQL"],
          proficiency: 85,
          projects: "Designed and optimized database schemas for multiple projects",
          experience: "2+ years"
        }
      ]
    },
    "Full Stack Development": {
      icon: "💻",
      skills: [
        {
          name: "Frontend Development",
          technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Redux"],
          proficiency: 90,
          projects: "Built multiple interactive dashboards and web applications",
          experience: "2+ years"
        },
        {
          name: "Backend Development",
          technologies: ["Node.js", "Express.js", "RESTful APIs", "GraphQL"],
          proficiency: 85,
          projects: "Developed scalable backend services and APIs",
          experience: "2+ years"
        },
        {
          name: "Cloud Technologies",
          technologies: ["AWS", "Lambda", "API Gateway", "S3", "EC2"],
          proficiency: 80,
          projects: "Led cloud migration initiatives and serverless implementations",
          experience: "1.5+ years"
        }
      ]
    },
    "Analytics & Tools": {
      icon: "📊",
      skills: [
        {
          name: "Business Intelligence",
          technologies: ["Power BI", "Data Visualization", "Dashboard Design"],
          proficiency: 90,
          projects: "Created interactive analytics dashboards for stakeholders",
          experience: "2+ years"
        },
        {
          name: "Development Tools",
          technologies: ["Git", "Docker", "Jenkins", "JIRA"],
          proficiency: 85,
          projects: "Implemented CI/CD pipelines and development workflows",
          experience: "2+ years"
        },
        {
          name: "Performance Optimization",
          technologies: ["Caching", "Query Optimization", "Load Testing"],
          proficiency: 85,
          projects: "Improved application performance and reduced costs",
          experience: "2+ years"
        }
      ]
    }
  };

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
          Technical Skills
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, { icon, skills }], index) => (
            <motion.div
              key={category}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-2xl p-8 hover-lift"
            >
              <motion.div
                className="flex items-center gap-4 cursor-pointer mb-6"
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-5xl transform hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
                <h2 className="text-2xl font-bold gradient-text">{category}</h2>
              </motion.div>

              <AnimatePresence>
                {selectedCategory === category && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6"
                  >
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="glass p-6 rounded-xl"
                      >
                        <h3 className="text-xl font-semibold gradient-text mb-4">{skill.name}</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold mb-3 text-gray-300">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {skill.technologies.map(tech => (
                                <span key={tech} className="px-4 py-2 glass rounded-full text-sm hover-lift">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm font-semibold mb-2 text-gray-300">Proficiency</h4>
                              <div className="h-2 glass rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.proficiency}%` }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                />
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold mb-1 text-gray-300">Experience</h4>
                              <p className="text-gray-300">{skill.experience}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-1 text-gray-300">Projects</h4>
                            <p className="text-gray-300">{skill.projects}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
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

export default Skills; 