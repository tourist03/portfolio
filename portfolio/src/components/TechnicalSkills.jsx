const TechnicalSkills = () => {
  const skills = {
    "Core Development": [
      "Frontend: React.js, JavaScript, HTML5, CSS3, Material-UI",
      "Backend: Node.js, Express.js, Flask, RESTful APIs",
      "Databases: MongoDB, PostgreSQL"
    ],
    "Development Tools": [
      "Version Control: Git, GitHub",
      "Containerization: Docker",
      "CI/CD: TravisCI",
      "IDE: VS Code, PyCharm, IntelliJ"
    ],
    "Additional Skills": [
      "Data Visualization: Power BI, Data Analytics",
      "Data Processing: ETL Pipelines, Ab Initio",
      "Cloud Platforms: Google Cloud Platform"
    ],
    "Programming Languages": [
      "Java, Python, C/C++, JavaScript, SQL"
    ]
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
      <div className="space-y-4">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
            <div className="space-y-2">
              {skillList.map((skill, index) => (
                <div key={index} className="text-gray-700">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills; 