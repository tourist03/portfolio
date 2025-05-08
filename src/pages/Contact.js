import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import githubIcon from './GitHub.jpeg';
import linkedinIcon from './LinkedIn.png';
import mailIcon from './mail.png';

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
      customIcon: mailIcon,
      link: "mailto:singhvineet2001@gmail.com",
      description: "Let's discuss your next project",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      type: "Phone",
      value: "+91-8929141357",
      icon: "📱",
      link: "tel:+91-8929141357",
      description: "Available for calls",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      type: "LinkedIn",
      value: "vineetsingh02",
      customIcon: linkedinIcon,
      link: "https://www.linkedin.com/in/vineetsingh02",
      description: "Connect professionally",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      type: "GitHub",
      value: "tourist03",
      customIcon: githubIcon,
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
          className="text-6xl font-bold mb-12 text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Get In Touch
          </span>
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
              onMouseMove={handleMouseMove}
              className={`relative rounded-2xl ${info.bgColor} 
                         backdrop-blur-xl border border-white/10 overflow-hidden group`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
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
                <div className="flex items-start gap-6">
                  {info.customIcon ? (
                    <div className={`p-4 rounded-xl ${info.bgColor} backdrop-blur-md border border-white/10 group-hover:border-white/20 transition-colors`}>
                      <img 
                        src={info.customIcon} 
                        alt={info.type} 
                        className="w-12 h-12 rounded-lg object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className={`p-4 rounded-xl ${info.bgColor} backdrop-blur-md border border-white/10 group-hover:border-white/20 transition-colors`}>
                      <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${info.color} text-transparent bg-clip-text`}>
                      {info.type}
                    </h3>
                    <p className="text-xl text-gray-300 mt-2">{info.value}</p>
                    <p className="text-gray-400 mt-2">{info.description}</p>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, ${info.color.split(' ')[1]} 0%, transparent 100%)`,
                  opacity: 0.1,
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
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