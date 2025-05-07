import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Education = () => {
  const navigate = useNavigate();
  const [selectedSchool, setSelectedSchool] = useState(null);

  const educationData = [
    {
      school: "GL Bajaj Institute of Technology and Management",
      degree: "Bachelor's of Technology in Computer Science and Engineering",
      location: "Greater Noida, UP",
      duration: "Aug. 2018 - July 2022",
      gpa: "8.5/10",
      achievements: [
        "Department Rank: Top 5%",
        "Technical Club Lead",
        "Published research paper on ML applications"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Machine Learning"
      ],
      projects: [
        "Final Year Project: Character Recognition System",
        "IoT-based Smart Home Automation",
        "Library Management System"
      ],
      activities: [
        "Technical Club Lead - Organized workshops and coding competitions",
        "Participated in multiple hackathons",
        "Mentored junior students in programming"
      ]
    },
    {
      school: "Fr. Agnel School",
      degree: "Class XII - Physics, Mathematics",
      location: "Delhi, DL",
      duration: "Mar. 2017 - May 2018",
      percentage: "92%",
      achievements: [
        "School Topper in Mathematics",
        "Science Club Secretary",
        "Inter-school Competition Winner"
      ],
      activities: [
        "Science Club Activities",
        "Mathematics Olympiad Participant",
        "Sports Team Member"
      ]
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
          Education Journey
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-2xl p-8 cursor-pointer hover-lift"
              onClick={() => setSelectedSchool(selectedSchool === edu.school ? null : edu.school)}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold gradient-text">{edu.school}</h2>
                  <p className="text-gray-400 mt-2">{edu.duration}</p>
                </div>
                <span className="text-5xl transform hover:scale-110 transition-transform duration-300">
                  🎓
                </span>
              </div>
              <p className="text-xl text-gray-300 mt-3">{edu.degree}</p>
              <p className="text-gray-400 mt-1">{edu.location}</p>

              <AnimatePresence>
                {selectedSchool === edu.school && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 space-y-6"
                  >
                    {edu.gpa && (
                      <div className="glass p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-3 gradient-text">Academic Performance</h4>
                        <p className="text-2xl font-bold text-gray-300">GPA: {edu.gpa}</p>
                      </div>
                    )}

                    {edu.percentage && (
                      <div className="glass p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-3 gradient-text">Academic Performance</h4>
                        <p className="text-2xl font-bold text-gray-300">Percentage: {edu.percentage}</p>
                      </div>
                    )}

                    <div className="glass p-6 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4 gradient-text">Achievements</h4>
                      <ul className="space-y-3">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {edu.courses && (
                      <div className="glass p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4 gradient-text">Key Courses</h4>
                        <div className="flex flex-wrap gap-3">
                          {edu.courses.map(course => (
                            <span key={course} className="px-4 py-2 glass rounded-full text-sm hover-lift">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.projects && (
                      <div className="glass p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4 gradient-text">Projects</h4>
                        <ul className="space-y-3">
                          {edu.projects.map((project, idx) => (
                            <li key={idx} className="text-gray-300 flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="glass p-6 rounded-xl">
                      <h4 className="text-xl font-semibold mb-4 gradient-text">Activities & Involvement</h4>
                      <ul className="space-y-3">
                        {edu.activities.map((activity, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
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

export default Education; 