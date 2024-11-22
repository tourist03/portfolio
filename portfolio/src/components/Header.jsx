import { motion } from 'framer-motion';

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const linkHoverStyle = "hover:scale-105 hover:shadow-lg transition-all duration-300 p-2 rounded-lg flex items-center gap-3 bg-white/50 backdrop-blur-sm";

  return (
    <motion.header 
      className="max-w-4xl mx-auto p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Vineet Singh
      </motion.h1>

      <motion.div 
        className="flex flex-wrap justify-center gap-6 text-gray-600"
        variants={containerVariants}
      >
        <motion.a 
          href="mailto:singhvineet2001@gmail.com" 
          className={linkHoverStyle}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl">📧</span>
          <span className="text-sm font-medium">singhvineet2001@gmail.com</span>
        </motion.a>

        <motion.a 
          href="tel:+91-8929141357" 
          className={linkHoverStyle}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/phone.jpeg" alt="Phone" className="w-6 h-6 object-contain rounded-full" />
          <span className="text-sm font-medium">+91-8929141357</span>
        </motion.a>

        <motion.a 
          href="https://www.linkedin.com/in/vineetsingh02" 
          target="_blank" 
          rel="noopener noreferrer"
          className={linkHoverStyle}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/LinkedIn.png" alt="LinkedIn" className="w-6 h-6 object-contain rounded" />
          <span className="text-sm font-medium">LinkedIn</span>
        </motion.a>

        <motion.a 
          href="https://github.com/tourist03" 
          target="_blank" 
          rel="noopener noreferrer"
          className={linkHoverStyle}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/GitHub.jpeg" alt="GitHub" className="w-6 h-6 object-contain rounded" />
          <span className="text-sm font-medium">GitHub</span>
        </motion.a>
      </motion.div>
    </motion.header>
  );
};

export default Header; 