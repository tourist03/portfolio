export const profile = {
  name: 'Vineet Singh',
  headline: 'AI, systems & software engineering',
  email: 'singhvineet2001@gmail.com',
  phone: '+91 89291 41357',
  location: 'Noida, India',
  github: 'https://github.com/tourist03',
  linkedin: 'https://www.linkedin.com/in/vineetsingh02/',
  canonical: 'https://tourist03.github.io/portfolio/',
  resume: './Vineet_Singh_Resume.pdf',
  updated: 'October 2026',
};

export const projects = [
  {
    id: 'openwave', number: '01', name: 'OpenWave', subtitle: 'AI News Aggregator',
    category: 'ai', label: 'AI / NLP', visual: 'news', featured: true,
    description: 'Many sources. One clear story. A local AI pipeline that turns scattered reporting into searchable, summarized news.',
    tags: ['Python', 'FastAPI', 'React', 'Hugging Face'],
    source: 'https://github.com/tourist03/OpenWave',
    challenge: 'Different publications can report the same event in different words. A useful news feed needs to identify those overlaps without losing the story.',
    approach: [
      'A configurable crawler reads domain rules from site.json and collects time-bounded, keyword-matched articles.',
      'MiniLM embeddings represent article meaning. Vector-similarity clustering groups related reports and reduces cross-source duplication.',
      'Local BART inference produces abstractive summaries. A React interface and asynchronous FastAPI backend support search and summarized exports.',
    ],
    stack: ['React', 'JavaScript', 'Python', 'FastAPI', 'BART', 'MiniLM', 'Vector embeddings'],
    takeaway: 'A complete path from raw articles to organized information, with model inference running locally.',
  },
  {
    id: 'scribespace', number: '02', name: 'ScribeSpace', subtitle: 'A space for ideas',
    category: 'web', label: 'FULL STACK', visual: 'notes', featured: false,
    description: 'A cloud notebook for writing, organizing notes, and exploring ideas through a drawing canvas.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    source: 'https://github.com/tourist03/Scribe-Script',
    demo: 'https://scribe-script.vercel.app/',
    challenge: 'Make it easy to capture ideas and return to them across devices, while keeping each user’s notes attached to their own account.',
    approach: [
      'A React interface brings together note-taking and a drawing experience.',
      'An Express backend exposes authenticated note-management endpoints for creating, reading, updating, and deleting notes.',
      'JWT-based authentication and MongoDB persistence connect notes, tags, and accounts.',
    ],
    stack: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    takeaway: 'An end-to-end web application with a public interface and a dedicated notes API.',
  },
  {
    id: 'digit-recognition', number: '03', name: 'Digit Recognition', subtitle: 'From pixels to prediction',
    category: 'ai', label: 'COMPUTER VISION', visual: 'digits', featured: false,
    description: 'A convolutional neural network that recognizes handwritten digits using image processing and TensorFlow.',
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    source: 'https://github.com/tourist03/HandWritten-Digit-Recognition',
    challenge: 'Human handwriting varies in shape and stroke. Recognizing digits means learning useful visual patterns rather than matching a fixed character template.',
    approach: [
      'Use image preprocessing to prepare handwritten digit inputs.',
      'Apply a convolutional neural network to learn visual features and classify digits.',
      'Combine Python, TensorFlow, Keras, and OpenCV in the recognition pipeline.',
    ],
    stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Convolutional neural networks'],
    takeaway: 'A focused computer-vision project connecting image preparation with model prediction.',
  },
];

export const experience = [
  {
    id: 'samsung', company: 'Samsung Research Institute Delhi', shortName: 'Samsung Research',
    dates: 'Oct 2025 — Present', location: 'Noida, UP', current: true,
    roles: [{ title: 'Lead Engineer · Tizen', relationship: 'Contractor via Tech Mahindra', dates: 'Oct 2025 — Present', points: [
      'Built an internal RAG assistant using more than one million records to retrieve historical guidance for Tizen app development and submission issues.',
      'Developed AI tools with Python backends, React, and local Hugging Face models for semantic analysis, clustering, summarization, and translation.',
      'Developing an on-device AI proof of concept for Samsung TVs with 1 GB RAM, evaluating lightweight models and model distillation.',
      'Own Samsung-side integration and build delivery for content-partner applications on hospitality and education TVs; develop C++ native integration code across Tizen environments.',
      'Extended Bixby title-selection handling through Samsung’s VoiceInteraction API and debug playback, rendering, and memory issues across web/native boundaries.',
    ] }],
    tags: ['C++', 'Tizen', 'Python', 'React', 'RAG', 'Local inference'],
    summary: 'Native TV integration, practical AI tools, and model evaluation under real memory constraints.',
  },
  {
    id: 'ltm', company: 'LTIMindtree · now LTM', shortName: 'LTIMindtree',
    dates: 'Jun 2022 — Oct 2025', location: 'Noida & Pune', current: false,
    roles: [
      { title: 'Senior Software Engineer', dates: 'Apr 2023 — Oct 2025', points: [
        'Built high-throughput backend services with Java, Spring Boot, and Spring Cloud.',
        'Designed a Redis caching layer that reduced latency by 45% under production load.',
        'Implemented MongoDB replication and indexing strategies, REST services, and asynchronous workers for concurrent financial workloads.',
      ] },
      { title: 'Software Engineer', dates: 'Jun 2022 — Apr 2023', points: [
        'Built Node.js utilities for logging and event-driven monitoring, and contributed React UI enhancements and fixes.',
        'Containerized services with Docker and contributed to a Kubernetes deployment pipeline.',
      ] },
    ],
    tags: ['Java', 'Spring Boot', 'Redis', 'MongoDB', 'Docker', 'Kubernetes'],
    summary: 'Reliable backend services, caching, and asynchronous processing for financial workloads.',
  },
  {
    id: 'bitwise', company: 'BitWise Inc.', shortName: 'BitWise',
    dates: 'Sep 2021 — Jun 2022', location: 'Pune, MH', current: false,
    roles: [{ title: 'Software Engineer Intern', dates: 'Sep 2021 — Jun 2022', points: [
      'Implemented REST APIs and optimized database queries to improve latency.',
    ] }],
    tags: ['REST APIs', 'Database optimization'],
    summary: 'The foundations: backend development, APIs, and database performance.',
  },
];

export const skillGroups = [
  { number: '01', title: 'Systems & native', text: 'Working close to the platform, where memory and runtime behavior matter.', skills: ['C++', 'Tizen OS', 'Linux', 'Native integration', 'Runtime debugging', 'Memory analysis'] },
  { number: '02', title: 'AI & language', text: 'Bringing retrieval, local models, and semantic understanding into useful tools.', skills: ['RAG', 'Hugging Face', 'Vector embeddings', 'NLP', 'Semantic clustering', 'On-device AI'] },
  { number: '03', title: 'Backend & web', text: 'Connecting dependable services to clear, responsive interfaces.', skills: ['Python', 'FastAPI', 'Java', 'Spring Boot', 'Spring Cloud', 'Node.js', 'React', 'JavaScript', 'REST APIs', 'Bixby integration'] },
  { number: '04', title: 'Data & infrastructure', text: 'The persistence, caching, and deployment foundations behind the product.', skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Distributed systems'] },
];

export const coding = [
  { name: 'LeetCode', username: 'vineet-ii', rating: '1820', url: 'https://leetcode.com/u/vineet-ii/' },
  { name: 'CodeChef', username: 'vineet_03', rating: '1892', url: 'https://www.codechef.com/users/vineet_03' },
];

export const education = {
  school: 'GL Bajaj Institute of Technology and Management',
  degree: 'B.Tech · Computer Science & Engineering',
  dates: '2018 — 2022', location: 'Noida, UP',
};

export const architecture = [
  { id: 'rag', label: 'Retrieve', caption: 'Ground the answer.', description: 'Find relevant context before asking a language model to answer. Retrieval connects a question to useful source material.', stages: ['Question', 'Retrieval', 'Context', 'Answer'], note: 'Retrieval-augmented generation' },
  { id: 'cluster', label: 'Understand', caption: 'Connect the stories.', description: 'Turn articles into semantic embeddings, then group reports about the same event. Less repetition. More context.', stages: ['Articles', 'Embeddings', 'Clusters', 'Summary'], note: 'Semantic news processing' },
  { id: 'device', label: 'Run locally', caption: 'Work within the limits.', description: 'Evaluate lightweight models against a device’s memory budget. Useful inference has to fit the product it runs on.', stages: ['Input', 'Light model', 'Inference', 'Device'], note: 'On-device model evaluation' },
];
