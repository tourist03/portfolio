import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      school: "GL Bajaj Institute of Technology and Management",
      degree: "Bachelor's of Technology in Computer Science and Engineering",
      location: "Greater Noida, UP",
      duration: "Aug. 2018 - July 2022"
    },
    {
      school: "Fr. Agnel School",
      degree: "Class XII - Physics, Mathematics",
      location: "Delhi, DL",
      duration: "Mar. 2017 - May 2018"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group"
          >
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <motion.h3 
                  className="text-lg font-semibold text-gray-900"
                  whileHover={{ scale: 1.01 }}
                >
                  {edu.school}
                </motion.h3>
                <span className="text-sm text-gray-600">{edu.duration}</span>
              </div>
              <p className="text-gray-700 mt-2">{edu.degree}</p>
              <p className="text-gray-600 text-sm mt-1">{edu.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education; 