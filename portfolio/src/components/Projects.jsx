const Projects = () => {
  const projects = [
    {
      title: "OpenWave",
      technologies: "Javascript, React, Node.js, MongoDB, OpenSource NewsAPI",
      duration: "April 2024 - Present",
      points: [
        "Utilized the OpenSource News API to fetch and display news articles from multiple sources, with features like pagination, search, and filtering.",
        "Built a responsive and intuitive user interface using React.js, with features like infinite scrolling, article summaries, and shareable links.",
        "Currently developing a robust search engine with autocomplete and relevance-based ranking."
      ],
      sourceLink: "www.github.com/tourist03/OpenWave"
    },
    {
      title: "iNotebook - Cloud Notes Application",
      technologies: "MERN Stack (MongoDB, Express.js, React, Node.js), JWT Authentication",
      duration: "2023",
      points: [
        "Developed a full-stack note-taking application with secure user authentication using JWT tokens",
        "Implemented unique feature allowing users to use the application without login for temporary notes",
        "Built complete CRUD operations for notes management with real-time updates",
        "Designed responsive UI with modern React practices and secure backend API endpoints"
      ],
      sourceLink: "github.com/tourist03/iNotebook"
    },
    {
      title: "TextMaster Pro",
      technologies: "React.js, JavaScript, CSS",
      duration: "2023",
      points: [
        "Created a versatile text manipulation tool with features like case conversion, text reversal, and duplicate removal",
        "Implemented specialized functions for extracting emails and phone numbers from text",
        "Deployed application on GitHub Pages for public access with clean, user-friendly interface",
        "Built with performance optimization in mind for handling large text inputs"
      ],
      sourceLink: "github.com/tourist03/textmaster-pro",
      liveLink: "https://tourist03.github.io/textmaster-pro/"
    },
    {
      title: "Character Recognition & Prediction",
      technologies: "Python, Flask, Flutter, TensorFlow, OpenCV",
      duration: "June 2021 - May 2022",
      points: [
        "Developed a machine learning model to convert images of text into machine-coded text",
        "Improved model accuracy by 30% through iterative refinement and parameter tuning",
        "Implemented image preprocessing using OpenCV to enhance model performance"
      ],
      sourceLink: "www.github.com/tourist03"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <span className="text-sm text-gray-600">{project.duration}</span>
            </div>
            <div className="mt-2">
              <p className="text-sm text-primary">{project.technologies}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {project.points.map((point, idx) => (
                <li key={idx} className="text-gray-700 text-sm flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4">
              <a 
                href={`https://${project.sourceLink}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary-dark"
              >
                Source Code: {project.sourceLink}
              </a>
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:text-green-700"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 