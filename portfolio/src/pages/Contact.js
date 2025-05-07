import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import githubIcon from './GitHub.jpeg';
import linkedinIcon from './LinkedIn.png';
import mailIcon from './mail.png';

const Contact = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      type: "Email",
      value: "singhvineet2001@gmail.com",
      customIcon: mailIcon,
      link: "mailto:singhvineet2001@gmail.com",
      description: "Let's discuss your next project"
    },
    {
      type: "Phone",
      value: "+91-8929141357",
      icon: "📱",
      link: "tel:+91-8929141357",
      description: "Available for calls"
    },
    {
      type: "LinkedIn",
      value: "vineetsingh02",
      customIcon: linkedinIcon,
      link: "https://www.linkedin.com/in/vineetsingh02",
      description: "Connect professionally"
    },
    {
      type: "GitHub",
      value: "tourist03",
      customIcon: githubIcon,
      link: "https://github.com/tourist03",
      description: "Check out my code"
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
          Get In Touch
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.type}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-8 hover-lift"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
            >
              <div className="flex items-start gap-6">
                {info.customIcon ? (
                  <div className="glass p-4 rounded-xl">
                    <img 
                      src={info.customIcon} 
                      alt={info.type} 
                      className="w-12 h-12 rounded-lg object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="glass p-4 rounded-xl">
                    <span className="text-4xl transform hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold gradient-text">
                    {info.type}
                  </h3>
                  <p className="text-xl text-gray-300 mt-2">{info.value}</p>
                  <p className="text-gray-400 mt-2">{info.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact; 