import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
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

  const skillsData = {
    "Core Technologies": {
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      skills: [
        {
          name: "Programming Languages",
          technologies: ["Core Java", "JavaScript", "TypeScript", "Python"],
          proficiency: 90,
          projects: "Developed multiple enterprise applications using Java and JavaScript",
          experience: "3 years"
        },
        {
          name: "Web Technologies",
          technologies: ["HTML5", "CSS3", "React.js", "Redux", "Material-UI"],
          proficiency: 95,
          projects: "Built responsive and interactive web applications",
          experience: "3 years"
        },
        {
          name: "Backend Technologies",
          technologies: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "GraphQL"],
          proficiency: 85,
          projects: "Developed scalable backend services and microservices",
          experience: "3 years"
        }
      ]
    },
    "Database & Cloud": {
      icon: "☁️",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      skills: [
        {
          name: "Databases",
          technologies: ["MongoDB", "MySQL", "Redis", "PostgreSQL"],
          proficiency: 88,
          projects: "Designed and optimized database schemas for high-performance applications",
          experience: "2+ years"
        },
        {
          name: "Cloud Services",
          technologies: ["AWS", "EC2", "S3", "Lambda", "API Gateway"],
          proficiency: 85,
          projects: "Implemented cloud-native solutions and serverless architectures",
          experience: "1.5+ years"
        },
        {
          name: "DevOps",
          technologies: ["Docker", "Git", "CI/CD", "Jenkins"],
          proficiency: 80,
          projects: "Set up automated deployment pipelines and containerized applications",
          experience: "1+ years"
        }
      ]
    },
    "Additional Skills": {
      icon: "🛠️",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      skills: [
        {
          name: "Software Architecture",
          technologies: ["Microservices", "System Design", "API Design", "Design Patterns"],
          proficiency: 85,
          projects: "Designed scalable architectures for enterprise applications",
          experience: "2+ years"
        },
        {
          name: "Development Practices",
          technologies: ["Agile", "Scrum", "Code Review", "TDD"],
          proficiency: 90,
          projects: "Led agile development teams and implemented best practices",
          experience: "2+ years"
        },
        {
          name: "Tools & Frameworks",
          technologies: ["VS Code", "Postman", "Swagger", "JIRA"],
          proficiency: 92,
          projects: "Utilized modern development tools for efficient workflows",
          experience: "2+ years"
        }
      ]
    }
  };

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
            Technical Skills
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, { icon, color, bgColor, skills }], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setSelectedCategory(category)}
              onMouseLeave={() => setSelectedCategory(null)}
              onMouseMove={handleMouseMove}
              className={`relative rounded-2xl ${bgColor} 
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
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </span>
                  <h2 className={`text-2xl font-bold bg-gradient-to-r ${color} text-transparent bg-clip-text`}>
                    {category}
                  </h2>
                </div>

                <div className="space-y-6">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className={`p-6 rounded-xl ${bgColor} backdrop-blur-md border border-white/10`}
                    >
                      <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${color} text-transparent bg-clip-text`}>
                        {skill.name}
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {skill.technologies.map(tech => (
                              <span key={tech} className={`px-4 py-2 rounded-full text-sm ${bgColor} backdrop-blur-md border border-white/10`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold mb-2 text-gray-300">Proficiency</h4>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold mb-1 text-gray-300">Experience</h4>
                            <p className="text-gray-300">{skill.experience}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold mb-1 text-gray-300">Projects</h4>
                            <p className="text-gray-300">{skill.projects}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, ${color.split(' ')[1]} 0%, transparent 100%)`,
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

export default Skills; 