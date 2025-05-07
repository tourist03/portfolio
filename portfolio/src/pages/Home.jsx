import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  const buttons = [
    { 
      title: "Experience", 
      route: "/experience", 
      color: "from-violet-500 to-fuchsia-500", 
      icon: "💼",
      description: "Professional journey"
    },
    { 
      title: "Projects", 
      route: "/projects", 
      color: "from-cyan-500 to-blue-500", 
      icon: "🚀",
      description: "Featured works"
    },
    { 
      title: "Skills", 
      route: "/skills", 
      color: "from-emerald-500 to-teal-500", 
      icon: "🎯",
      description: "Technical expertise"
    },
    { 
      title: "Education", 
      route: "/education", 
      color: "from-amber-500 to-orange-500", 
      icon: "🎓",
      description: "Academic background"
    },
    { 
      title: "Contact", 
      route: "/contact", 
      color: "from-rose-500 to-pink-500", 
      icon: "📧",
      description: "Get in touch"
    },
    { 
      title: "Coding Profiles", 
      route: "/coding-profiles", 
      color: "from-indigo-500 to-purple-500", 
      icon: "🏆",
      description: "Online presence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 relative overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Vineet Singh
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer & Technology Enthusiast
          </motion.p>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Crafting digital experiences with modern technologies
          </motion.p>
        </motion.div>

        {/* Navigation Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {buttons.map((button, index) => (
            <motion.button
              key={button.title}
              onClick={() => navigate(button.route)}
              className={`p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20
                         hover:bg-white/20 transition-all duration-300
                         flex flex-col items-center justify-center
                         shadow-lg hover:shadow-xl group`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {button.icon}
              </span>
              <span className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                {button.title}
              </span>
              <span className="text-sm text-gray-400">
                {button.description}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 