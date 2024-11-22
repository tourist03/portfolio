import { motion } from 'framer-motion';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          {/* Header Section */}
          <header className="px-6 py-12 border-b border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 text-center">Vineet Singh</h1>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-gray-600">
              <a href="mailto:singhvineet2001@gmail.com" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                <img src="/gmail.jpeg" alt="Email" className="w-6 h-6 object-contain" />
                <span>singhvineet2001@gmail.com</span>
              </a>
              <a href="tel:+91-8929141357" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                <img src="/phone.jpeg" alt="Phone" className="w-6 h-6 object-contain" />
                <span>+91-8929141357</span>
              </a>
              <a href="https://www.linkedin.com/in/vineetsingh02" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-600 transition-colors flex items-center gap-2">
                <img src="/linkedIn.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/tourist03" target="_blank" rel="noopener noreferrer"
                 className="hover:text-blue-600 transition-colors flex items-center gap-2">
                <img src="/github.jpeg" alt="GitHub" className="w-6 h-6 object-contain" />
                <span>GitHub</span>
              </a>
            </div>
          </header>

          {/* Main Content */}
          <main className="px-6 py-8">
            <Experience />
            <Projects />
            <TechnicalSkills />
            <Education />
          </main>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
