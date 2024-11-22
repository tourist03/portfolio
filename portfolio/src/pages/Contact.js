import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      type: "Email",
      value: "singhvineet2001@gmail.com",
      icon: "📧",
      link: "mailto:singhvineet2001@gmail.com",
      color: "from-blue-400 to-purple-500"
    },
    {
      type: "Phone",
      value: "+91-8929141357",
      icon: "📱",
      link: "tel:+91-8929141357",
      color: "from-green-400 to-emerald-500"
    },
    {
      type: "LinkedIn",
      value: "vineetsingh02",
      icon: "💼",
      link: "https://www.linkedin.com/in/vineetsingh02",
      color: "from-blue-500 to-blue-600"
    },
    {
      type: "GitHub",
      value: "tourist03",
      icon: "👨‍💻",
      link: "https://github.com/tourist03",
      color: "from-gray-600 to-gray-700"
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
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          Contact Information
        </motion.h1>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.type}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
              }}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{info.icon}</span>
                <div>
                  <h3 className={`text-xl font-semibold bg-gradient-to-r ${info.color} text-transparent bg-clip-text`}>
                    {info.type}
                  </h3>
                  <p className="text-gray-300 mt-1">{info.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact; 