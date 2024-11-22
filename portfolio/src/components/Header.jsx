const Header = () => {
  return (
    <header className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Vineet Singh</h1>
      <div className="flex flex-wrap gap-4 text-gray-600">
        <a href="mailto:singhvineet2001@gmail.com" className="hover:text-blue-600 transition-colors">
          <span>📧 singhvineet2001@gmail.com</span>
        </a>
        <a href="tel:+91-8929141357" className="hover:text-blue-600 transition-colors">
          <span>📱 +91-8929141357</span>
        </a>
        <a href="https://www.linkedin.com/in/vineetsingh02" target="_blank" rel="noopener noreferrer" 
           className="hover:text-blue-600 transition-colors">
          <span>💼 LinkedIn</span>
        </a>
        <a href="https://github.com/tourist03" target="_blank" rel="noopener noreferrer"
           className="hover:text-blue-600 transition-colors">
          <span>👨‍💻 GitHub</span>
        </a>
      </div>
    </header>
  );
};

export default Header; 