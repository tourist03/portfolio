import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Consultant - Package Implementation",
      company: "LTIMindtree",
      location: "Pune, MH",
      duration: "June 2022 - Present",
      points: [
        "Developed and maintained full-stack web applications using React.js, Node.js, and MongoDB",
        "Implemented responsive design patterns and RESTful APIs for web applications",
        "Optimized application performance through code splitting and caching strategies",
        "Built data visualization solutions using Power BI to complement web applications with analytics dashboards",
        "Collaborated with cross-functional teams in an Agile environment to deliver features on schedule",
        "Implemented automated testing frameworks and participated in code reviews to maintain code quality"
      ]
    },
    {
      title: "Project Trainee",
      company: "BitWise Inc.",
      location: "Remote, IN",
      duration: "Sept 2021 - June 2022",
      points: [
        "Assisted in optimizing Ab Initio data processing workflows",
        "Supported the development and maintenance of ETL pipelines for data operations",
        "Gained hands-on experience with data transformation and workflow optimization techniques",
        "Collaborated with team members to document processes and create technical specifications"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <motion.h3 
                className="text-lg font-semibold text-gray-900"
                whileHover={{ scale: 1.01 }}
              >
                {exp.title}
              </motion.h3>
              <span className="text-sm text-gray-600">{exp.duration}</span>
            </div>
            <div className="flex justify-between items-start mt-1">
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-gray-600 text-sm">{exp.location}</p>
            </div>
            <motion.ul 
              className="mt-4 space-y-2"
              variants={containerVariants}
            >
              {exp.points.map((point, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="text-gray-700 text-sm flex items-start"
                >
                  <span className="text-primary mr-2">•</span>
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience; 