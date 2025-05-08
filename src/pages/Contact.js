import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const navigate = useNavigate();
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

  const contactInfo = [
    {
      type: "Email",
      value: "singhvineet2001@gmail.com",
      icon: <EnvelopeIcon className="w-10 h-10 text-blue-500" />,
      link: "mailto:singhvineet2001@gmail.com",
      description: "Let's discuss your next project",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      type: "Phone",
      value: "+91-8929141357",
      icon: <PhoneIcon className="w-10 h-10 text-emerald-500" />,
      link: "tel:+91-8929141357",
      description: "Available for calls",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      type: "LinkedIn",
      value: "vineetsingh02",
      icon: <FaLinkedin className="w-10 h-10 text-purple-500" />,
      link: "https://www.linkedin.com/in/vineetsingh02",
      description: "Connect professionally",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      type: "GitHub",
      value: "tourist03",
      icon: <FaGithub className="w-10 h-10 text-amber-500" />,
      link: "https://github.com/tourist03",
      description: "Check out my code",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10"
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
          className="text-6xl font-bold mb-4 text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Get In Touch
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mb-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Feel free to reach out for collaborations, project discussions, or just to say hello!
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.type}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              className={`group relative rounded-2xl ${info.bgColor} 
                shadow-lg hover:shadow-2xl transition-shadow duration-300
                border border-white/10 overflow-hidden flex items-center gap-6 p-8
                hover:border-white/20 hover:scale-[1.03]`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex-shrink-0">
                <div className={`flex items-center justify-center w-20 h-20 rounded-full ${info.bgColor} shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:ring-4 group-hover:ring-white/20`}>
                  {info.icon}
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${info.color} text-transparent bg-clip-text`}>
                  {info.type}
                </h3>
                <p className="text-lg text-gray-300 mt-1">{info.value}</p>
                <p className="text-gray-400 mt-2">{info.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-300">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact; 