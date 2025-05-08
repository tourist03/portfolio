import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Education = () => {
  const navigate = useNavigate();
  const [selectedSchool, setSelectedSchool] = useState(null);
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

  const educationData = [
    {
      school: "GL Bajaj Institute of Technology and Management",
      degree: "Bachelor's of Technology in Computer Science and Engineering",
      location: "Greater Noida, UP",
      duration: "Aug. 2018 - July 2022",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      icon: "🎓",
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
        "Machine Learning",
        "Web Development",
        "Software Engineering",
        "Cloud Computing"
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
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      icon: "🏫",
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
            Education Journey
          </span>
        </motion.h1>

        <div className="space-y-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setSelectedSchool(edu.school)}
              onMouseLeave={() => setSelectedSchool(null)}
              onMouseMove={handleMouseMove}
              className={`relative rounded-2xl ${edu.bgColor} 
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
                    <h2 className={`text-3xl font-bold bg-gradient-to-r ${edu.color} text-transparent bg-clip-text`}>
                      {edu.school}
                    </h2>
                    <p className="text-xl text-gray-300 mt-2">{edu.degree}</p>
                    <p className="text-gray-400 mt-1">{edu.location}</p>
                    <p className="text-gray-400 mt-1">{edu.duration}</p>
                  </div>
                  <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </span>
                </div>

                <AnimatePresence>
                  {selectedSchool === edu.school && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-6"
                    >
                      {(edu.gpa || edu.percentage) && (
                        <div className={`p-6 rounded-xl ${edu.bgColor} backdrop-blur-md border border-white/10`}>
                          <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${edu.color} text-transparent bg-clip-text`}>
                            Academic Performance
                          </h4>
                          <p className="text-2xl font-bold text-gray-300">
                            {edu.gpa ? `GPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}
                          </p>
                        </div>
                      )}

                      <div className={`p-6 rounded-xl ${edu.bgColor} backdrop-blur-md border border-white/10`}>
                        <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${edu.color} text-transparent bg-clip-text`}>
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
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

                      {edu.courses && (
                        <div className={`p-6 rounded-xl ${edu.bgColor} backdrop-blur-md border border-white/10`}>
                          <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${edu.color} text-transparent bg-clip-text`}>
                            Key Courses
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map(course => (
                              <span key={course} className={`px-4 py-2 rounded-full text-sm ${edu.bgColor} backdrop-blur-md border border-white/10`}>
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {edu.projects && (
                        <div className={`p-6 rounded-xl ${edu.bgColor} backdrop-blur-md border border-white/10`}>
                          <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${edu.color} text-transparent bg-clip-text`}>
                            Projects
                          </h4>
                          <ul className="space-y-2">
                            {edu.projects.map((project, idx) => (
                              <motion.li
                                key={project}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2" />
                                <span className="text-gray-300">{project}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className={`p-6 rounded-xl ${edu.bgColor} backdrop-blur-md border border-white/10`}>
                        <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${edu.color} text-transparent bg-clip-text`}>
                          Activities & Involvement
                        </h4>
                        <ul className="space-y-2">
                          {edu.activities.map((activity, idx) => (
                            <motion.li
                              key={activity}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2" />
                              <span className="text-gray-300">{activity}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, ${edu.color.split(' ')[1]} 0%, transparent 100%)`,
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

export default Education; 