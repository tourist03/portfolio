import { motion } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const experiences = [
    {
      company: "LTIMindtree",
      role: "Consultant - Package Implementation",
      period: "June 2022 - Present",
      location: "Pune, MH",
      technologies: ["React.js", "Node.js", "MongoDB", "Power BI"],
      skills: ["Full Stack Development", "API Design", "Data Visualization"],
      description: "Led development of enterprise web applications and data visualization solutions.",
      projects: [
        "Developed responsive web applications using React.js",
        "Implemented RESTful APIs with Node.js",
        "Created analytics dashboards using Power BI"
      ],
      review: "Consistently delivered high-quality solutions while meeting tight deadlines."
    },
    {
      company: "BitWise Inc.",
      role: "Project Trainee",
      period: "Sept 2021 - June 2022",
      location: "Remote, IN",
      technologies: ["Ab Initio", "ETL", "Data Processing"],
      skills: ["Data Engineering", "Process Optimization", "Documentation"],
      description: "Focused on data processing and ETL pipeline optimization.",
      projects: [
        "Optimized Ab Initio workflows",
        "Maintained ETL pipelines",
        "Created technical documentation"
      ],
      review: "Demonstrated strong learning ability and technical aptitude."
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          Professional Experience
        </motion.h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 cursor-pointer"
              onClick={() => setSelectedCompany(selectedCompany === exp.company ? null : exp.company)}
            >
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-semibold text-blue-400">{exp.company}</h2>
                <span className="text-gray-400">{exp.period}</span>
              </div>
              <h3 className="text-xl text-gray-300 mt-2">{exp.role}</h3>

              {/* Expanded Details */}
              {selectedCompany === exp.company && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6 space-y-4"
                >
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Key Projects</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.projects.map((project, idx) => (
                        <li key={idx} className="text-gray-300">{project}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Review</h4>
                    <p className="text-gray-300 italic">{exp.review}</p>
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

export default Experience; 