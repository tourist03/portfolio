import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const navigate = useNavigate();
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      company: "LTIMindtree",
      role: "Consultant - Package Implementation",
      period: "June 2022 - Present",
      location: "Pune, MH",
      technologies: ["React.js", "Node.js", "MongoDB", "Power BI", "Express.js", "Git", "AWS"],
      keyProjects: [
        {
          name: "Enterprise Web Application",
          points: [
            "Developed responsive web applications using React.js and Redux",
            "Implemented pixel-perfect UI components following design specifications",
            "Integrated RESTful APIs and handled complex state management",
            "Contributed to 30% improvement in application performance through code optimization"
          ]
        },
        {
          name: "Backend Development",
          points: [
            "Built and maintained RESTful APIs using Node.js and Express",
            "Implemented secure authentication using JWT tokens",
            "Worked with MongoDB for efficient data storage and retrieval",
            "Created comprehensive API documentation for team reference"
          ]
        },
        {
          name: "Analytics Dashboard",
          points: [
            "Developed interactive dashboards using Power BI",
            "Created data visualization components for business metrics",
            "Automated report generation reducing manual effort",
            "Collaborated with business teams to understand reporting requirements"
          ]
        }
      ],
      contributions: [
        "Provided knowledge transfer sessions to new team members",
        "Actively participated in code reviews and technical discussions",
        "Documented best practices and common solutions for team reference",
        "Improved existing codebase through regular refactoring"
      ],
      achievements: [
        "Recognized for consistent high-quality deliverables",
        "Completed all assigned tasks within or before deadlines",
        "Received positive feedback from senior developers and project managers",
        "Successfully handled multiple project modules independently"
      ],
      impact: {
        technical: [
          "Implemented efficient error handling and logging mechanisms",
          "Improved code quality through unit testing and documentation",
          "Reduced API response times by optimizing database queries"
        ],
        business: [
          "Ensured timely delivery of project milestones",
          "Maintained high code quality reducing bug fixes in production",
          "Effectively communicated technical concepts to non-technical stakeholders"
        ]
      },
      feedback: "Demonstrates strong technical skills and willingness to learn. Effectively collaborates with team members and consistently delivers quality work."
    },
    {
      company: "BitWise Inc.",
      role: "Project Trainee",
      period: "Sept 2021 - June 2022",
      location: "Remote, IN",
      technologies: ["Ab Initio", "ETL", "SQL", "Shell Scripting", "Data Processing"],
      keyProjects: [
        {
          name: "Data Processing Pipeline",
          points: [
            "Developed and maintained ETL workflows using Ab Initio",
            "Optimized data processing jobs reducing execution time by 25%",
            "Created automated data validation checks",
            "Handled large-scale data transformations"
          ]
        },
        {
          name: "Process Automation",
          points: [
            "Automated routine data processing tasks using shell scripts",
            "Implemented error handling and logging mechanisms",
            "Created documentation for operational procedures",
            "Monitored job execution and performance"
          ]
        }
      ],
      contributions: [
        "Learned and implemented ETL best practices",
        "Participated in daily standup meetings and sprint planning",
        "Collaborated with team members for problem-solving",
        "Maintained detailed documentation of processes"
      ],
      achievements: [
        "Completed training program with excellence",
        "Recognized for quick learning and adaptation",
        "Successfully handled independent modules within 3 months",
        "Contributed to process improvement initiatives"
      ],
      impact: {
        technical: [
          "Improved existing ETL processes",
          "Reduced manual intervention in data processing",
          "Enhanced data quality through validation checks"
        ],
        business: [
          "Contributed to faster data processing cycles",
          "Helped reduce operational errors through automation",
          "Supported timely delivery of data to business teams"
        ]
      },
      feedback: "Quick learner with strong analytical skills. Showed great potential in understanding and improving data processing workflows."
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.button
        onClick={() => navigate('/')}
        className="mb-8 text-gray-400 hover:text-white flex items-center gap-2"
        whileHover={{ x: -5 }}
      >
        ← Back to Home
      </motion.button>

      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          Professional Experience
        </motion.h1>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <motion.div 
              key={exp.company}
              className="bg-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Clickable Header */}
              <motion.div
                className="p-6 cursor-pointer hover:bg-gray-700/50 transition-colors"
                onClick={() => setSelectedExp(selectedExp === exp.company ? null : exp.company)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-blue-400">{exp.company}</h2>
                    <h3 className="text-xl text-gray-300 mt-1">{exp.role}</h3>
                    <p className="text-gray-400">{exp.location}</p>
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
                    className="border-t border-gray-700"
                  >
                    <div className="p-6 space-y-8">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Projects */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Key Projects</h4>
                        <div className="space-y-4">
                          {exp.keyProjects.map(project => (
                            <div key={project.name} className="bg-gray-700/50 p-4 rounded-lg">
                              <h5 className="text-lg font-medium text-blue-300 mb-2">{project.name}</h5>
                              <ul className="list-disc list-inside space-y-2">
                                {project.points.map((point, idx) => (
                                  <li key={idx} className="text-gray-300">{point}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contributions */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Key Contributions</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {exp.contributions.map((contribution, idx) => (
                            <li key={idx} className="text-gray-300">{contribution}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Impact</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-700/50 p-4 rounded-lg">
                            <h5 className="text-lg font-medium text-blue-300 mb-2">Technical Impact</h5>
                            <ul className="list-disc list-inside space-y-2">
                              {exp.impact.technical.map((point, idx) => (
                                <li key={idx} className="text-gray-300">{point}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-gray-700/50 p-4 rounded-lg">
                            <h5 className="text-lg font-medium text-blue-300 mb-2">Business Impact</h5>
                            <ul className="list-disc list-inside space-y-2">
                              {exp.impact.business.map((point, idx) => (
                                <li key={idx} className="text-gray-300">{point}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Feedback */}
                      <div className="bg-gray-700/50 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold mb-3">Performance Feedback</h4>
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