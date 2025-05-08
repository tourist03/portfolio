import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const navigate = useNavigate();
  const [selectedExp, setSelectedExp] = useState(null);
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

  const experiences = [
    {
      company: "LTIMindtree",
      role: "Senior Software Engineer",
      period: "June 2022 - Present",
      location: "Pune, India",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-violet-500/10",
      technologies: ["Core Java","React.js","Node.js", "MongoDB", "Express.js", "AWS", "JavaScript", "Redis", "GraphQL"],
      keyProjects: [
        {
          name: "Microservices Architecture Migration",
          points: [
            "Led the decomposition of monolithic application into microservices using Node.js and Docker",
            "Implemented event-driven architecture using Apache Kafka for inter-service communication",
            "Achieved 99.99% system availability through Kubernetes orchestration and auto-scaling",
            "Reduced system latency by 70% through caching implementation with Redis"
          ]
        },
        {
          name: "Full-Stack Application Development",
          points: [
            "Architected and developed scalable web applications using React.js and TypeScript",
            "Designed RESTful and GraphQL APIs serving 1M+ requests daily with 99.9% uptime",
            "Implemented real-time features using WebSocket and Socket.io",
            "Optimized frontend performance achieving 95+ Lighthouse score"
          ]
        },
        {
          name: "Cloud Infrastructure Modernization",
          points: [
            "Designed and implemented cloud-native architecture on AWS using containerization",
            "Developed CI/CD pipelines using GitHub Actions and AWS CodePipeline",
            "Implemented infrastructure as code using Terraform and AWS CloudFormation",
            "Reduced cloud infrastructure costs by 40% through optimization and auto-scaling"
          ]
        }
      ],
      contributions: [
        "Led architecture design discussions and technical decision-making for major features",
        "Mentored junior developers in software design patterns and best practices",
        "Implemented microservices design patterns and API gateway patterns",
        "Established coding standards and review processes improving code quality by 50%"
      ],
      achievements: [
        "Promoted to Senior Software Engineer for exceptional technical leadership",
        "Reduced application error rates by 80% through robust error handling and monitoring",
        "Implemented automated testing achieving 90% code coverage",
        "Recognized for developing innovative solutions saving $200K annually"
      ],
      impact: {
        technical: [
          "Architected scalable microservices handling 10M+ daily transactions",
          "Implemented distributed caching reducing database load by 60%",
          "Developed reusable component library reducing development time by 40%"
        ],
        business: [
          "Reduced time-to-market for new features by 50% through CI/CD automation",
          "Improved system reliability achieving 99.99% uptime",
          "Decreased customer reported bugs by 75% through automated testing"
        ]
      },
      feedback: "Demonstrates exceptional technical expertise in software architecture and development, consistently delivering high-impact solutions."
    },
    {
      company: "BitWise Inc.",
      role: "Software Engineer",
      period: "Sept 2021 - June 2022",
      location: "Remote, India",
      color: "from-violet-500 to-fuchsia-500",
      bgColor: "bg-cyan-500/10",
      technologies: ["Node.js", "React.js", "MongoDB", "Docker", "AWS", "Jest", "TypeScript"],
      keyProjects: [
        {
          name: "E-commerce Platform Development",
          points: [
            "Developed scalable backend services using Node.js and Express.js",
            "Implemented real-time inventory management system using WebSocket",
            "Created automated test suites with Jest achieving 85% coverage",
            "Optimized API performance reducing response time by 60%"
          ]
        },
        {
          name: "DevOps Implementation",
          points: [
            "Set up automated deployment pipelines using Docker and Jenkins",
            "Implemented monitoring and alerting using ELK stack",
            "Developed infrastructure as code using AWS CDK",
            "Reduced deployment time from hours to minutes"
          ]
        }
      ],
      contributions: [
        "Developed reusable components reducing development time by 30%",
        "Implemented automated code quality checks using SonarQube",
        "Created comprehensive API documentation using Swagger",
        "Contributed to system architecture decisions"
      ],
      achievements: [
        "Recognized for developing high-performance microservices",
        "Improved API response times by 70% through optimization",
        "Implemented automated testing reducing QA cycle time by 50%",
        "Successfully delivered critical features ahead of schedule"
      ],
      impact: {
        technical: [
          "Established modern development practices and tooling",
          "Improved system scalability handling 2x traffic growth",
          "Reduced technical debt through code refactoring"
        ],
        business: [
          "Accelerated feature delivery by 40% through process automation",
          "Improved customer satisfaction through system reliability",
          "Reduced operational costs through efficient resource utilization"
        ]
      },
      feedback: "Demonstrated strong technical skills in software development and automation, consistently delivering high-quality solutions."
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
            Professional Experience
          </span>
        </motion.h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setSelectedExp(exp.company)}
              onMouseLeave={() => setSelectedExp(null)}
              onMouseMove={handleMouseMove}
              className={`relative rounded-2xl ${exp.bgColor} 
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
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className={`text-3xl font-bold bg-gradient-to-r ${exp.color} text-transparent bg-clip-text`}>
                      {exp.company}
                    </h2>
                    <h3 className="text-xl text-gray-300 mt-2">{exp.role}</h3>
                    <p className="text-gray-400 mt-1">{exp.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  {exp.technologies.map(tech => (
                    <span key={tech} className={`px-4 py-2 rounded-full text-sm ${exp.bgColor} backdrop-blur-md border border-white/10`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <AnimatePresence>
                  {selectedExp === exp.company && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {exp.keyProjects.map((project, idx) => (
                          <div key={project.name} className={`p-6 rounded-xl ${exp.bgColor} backdrop-blur-md border border-white/10`}>
                            <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${exp.color} text-transparent bg-clip-text`}>
                              {project.name}
                            </h4>
                            <ul className="space-y-2">
                              {project.points.map((point, pointIdx) => (
                                <motion.li
                                  key={point}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: pointIdx * 0.1 }}
                                  className="flex items-start gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2" />
                                  <span className="text-gray-300">{point}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className={`p-6 rounded-xl ${exp.bgColor} backdrop-blur-md border border-white/10`}>
                          <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${exp.color} text-transparent bg-clip-text`}>
                            Key Contributions
                          </h4>
                          <ul className="space-y-2">
                            {exp.contributions.map((contribution, idx) => (
                              <motion.li
                                key={contribution}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2" />
                                <span className="text-gray-300">{contribution}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className={`p-6 rounded-xl ${exp.bgColor} backdrop-blur-md border border-white/10`}>
                          <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${exp.color} text-transparent bg-clip-text`}>
                            Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.li
                                key={achievement}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2" />
                                <span className="text-gray-300">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className={`p-6 rounded-xl ${exp.bgColor} backdrop-blur-md border border-white/10`}>
                          <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${exp.color} text-transparent bg-clip-text`}>
                            Technical Impact
                          </h4>
                          <ul className="space-y-2">
                            {exp.impact.technical.map((impact, idx) => (
                              <motion.li
                                key={impact}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2" />
                                <span className="text-gray-300">{impact}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className={`p-6 rounded-xl ${exp.bgColor} backdrop-blur-md border border-white/10`}>
                          <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${exp.color} text-transparent bg-clip-text`}>
                            Business Impact
                          </h4>
                          <ul className="space-y-2">
                            {exp.impact.business.map((impact, idx) => (
                              <motion.li
                                key={impact}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2" />
                                <span className="text-gray-300">{impact}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={`p-6 rounded-xl ${exp.bgColor} backdrop-blur-md border border-white/10`}>
                        <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${exp.color} text-transparent bg-clip-text`}>
                          Feedback
                        </h4>
                        <p className="text-gray-300 italic">"{exp.feedback}"</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, ${exp.color.split(' ')[1]} 0%, transparent 100%)`,
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

export default Experience; 