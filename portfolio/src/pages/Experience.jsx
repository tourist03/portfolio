import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const navigate = useNavigate();
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      company: "LTIMindtree",
      role: "Senior Software Engineer",
      period: "June 2022 - Present",
      location: "Pune, India",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "AWS", "TypeScript", "Docker", "Kubernetes", "Redis", "GraphQL"],
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
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />

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
          Professional Experience
        </motion.h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.company}
              className="glass rounded-2xl overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Clickable Header */}
              <motion.div
                className="p-8 cursor-pointer hover:bg-white/5 transition-colors"
                onClick={() => setSelectedExp(selectedExp === exp.company ? null : exp.company)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold gradient-text">{exp.company}</h2>
                    <h3 className="text-xl text-gray-300 mt-2">{exp.role}</h3>
                    <p className="text-gray-400 mt-1">{exp.location}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-400">{exp.period}</span>
                    <motion.span
                      className="text-2xl mt-2"
                      animate={{ rotate: selectedExp === exp.company ? 180 : 0 }}
                    >
                      ↓
                    </motion.span>
                  </div>
                </div>
              </motion.div>

              {/* Expandable Content */}
              <AnimatePresence>
                {selectedExp === exp.company && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10"
                  >
                    <div className="p-8 space-y-8">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-xl font-semibold mb-4 gradient-text">Technologies</h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map(tech => (
                            <span key={tech} className="px-4 py-2 glass rounded-full text-sm hover-lift">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Projects */}
                      <div>
                        <h4 className="text-xl font-semibold mb-4 gradient-text">Key Projects</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {exp.keyProjects.map(project => (
                            <div key={project.name} className="glass p-6 rounded-xl hover-lift">
                              <h5 className="text-xl font-medium gradient-text mb-3">{project.name}</h5>
                              <ul className="space-y-3">
                                {project.points.map((point, idx) => (
                                  <li key={idx} className="text-gray-300 flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contributions */}
                      <div>
                        <h4 className="text-xl font-semibold mb-4 gradient-text">Key Contributions</h4>
                        <div className="glass p-6 rounded-xl">
                          <ul className="space-y-3">
                            {exp.contributions.map((contribution, idx) => (
                              <li key={idx} className="text-gray-300 flex items-start gap-2">
                                <span className="text-blue-400 mt-1">•</span>
                                {contribution}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Impact */}
                      <div>
                        <h4 className="text-xl font-semibold mb-4 gradient-text">Impact</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="glass p-6 rounded-xl hover-lift">
                            <h5 className="text-xl font-medium gradient-text mb-3">Technical Impact</h5>
                            <ul className="space-y-3">
                              {exp.impact.technical.map((point, idx) => (
                                <li key={idx} className="text-gray-300 flex items-start gap-2">
                                  <span className="text-blue-400 mt-1">•</span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="glass p-6 rounded-xl hover-lift">
                            <h5 className="text-xl font-medium gradient-text mb-3">Business Impact</h5>
                            <ul className="space-y-3">
                              {exp.impact.business.map((point, idx) => (
                                <li key={idx} className="text-gray-300 flex items-start gap-2">
                                  <span className="text-blue-400 mt-1">•</span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Feedback */}
                      <div className="glass p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-3 gradient-text">Feedback</h4>
                        <p className="text-gray-300 italic">"{exp.feedback}"</p>
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

export default Experience; 