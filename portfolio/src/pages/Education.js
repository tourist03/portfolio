import { motion } from 'framer-motion';
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
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          Education Journey
        </motion.h1>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 cursor-pointer"
              onClick={() => setSelectedSchool(selectedSchool === edu.school ? null : edu.school)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold text-orange-400">{edu.school}</h2>
                  <p className="text-gray-400 mt-1">{edu.duration}</p>
                </div>
                <span className="text-4xl">🎓</span>
              </div>
              <p className="text-lg text-gray-300 mt-2">{edu.degree}</p>
              <p className="text-gray-400">{edu.location}</p>

              {selectedSchool === edu.school && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6 space-y-4"
                >
                  {edu.gpa && (
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Academic Performance</h4>
                      <p className="text-orange-300">GPA: {edu.gpa}</p>
                    </div>
                  )}

                  {edu.percentage && (
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Academic Performance</h4>
                      <p className="text-orange-300">Percentage: {edu.percentage}</p>
                    </div>
                  )}

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Achievements</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300">{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {edu.courses && (
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Key Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map(course => (
                          <span key={course} className="px-3 py-1 bg-orange-500/20 rounded-full text-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.projects && (
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Projects</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {edu.projects.map((project, idx) => (
                          <li key={idx} className="text-gray-300">{project}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Activities & Involvement</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {edu.activities.map((activity, idx) => (
                        <li key={idx} className="text-gray-300">{activity}</li>
                      ))}
                    </ul>
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

export default Education; 