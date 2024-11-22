import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  const buttons = [
    { title: "Experience", route: "/experience", color: "from-blue-500 to-cyan-500", icon: "💼" },
    { title: "Projects", route: "/projects", color: "from-purple-500 to-pink-500", icon: "🚀" },
    { title: "Skills", route: "/skills", color: "from-green-500 to-emerald-500", icon: "🎯" },
    { title: "Education", route: "/education", color: "from-orange-500 to-yellow-500", icon: "🎓" },
    { title: "Contact", route: "/contact", color: "from-indigo-500 to-purple-500", icon: "📧" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Introduction Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Vineet Singh
          </h1>
          <p className="text-xl text-gray-300">
            Full Stack Developer & Technology Enthusiast
          </p>
        </motion.div>

        {/* Navigation Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {buttons.map((button, index) => (
            <motion.button
              key={button.title}
              onClick={() => navigate(button.route)}
              className={`p-8 rounded-xl bg-gradient-to-r ${button.color} 
                         hover:scale-105 transition-transform duration-300
                         flex flex-col items-center justify-center
                         shadow-lg hover:shadow-xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-4xl mb-4">{button.icon}</span>
              <span className="text-xl font-semibold">{button.title}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 