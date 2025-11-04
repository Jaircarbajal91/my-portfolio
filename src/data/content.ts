// Personal information and content for the portfolio
export const personalInfo = {
  name: "Jair Carbajal",
  title: "Software Engineer | Backend Developer | System Integration Specialist",
  description: "I build robust APIs, integrate complex systems, and create scalable solutions that power modern applications. When I'm not coding, you'll find me playing or hanging out with my best friend Bruce 🐕‍🦺 (my dog).",
  tagline: "Building systems that scale",
  catchPhrase: "From App Academy to Enterprise",
  email: "jair.carbajal91@gmail.com",
  phone: "714-267-9312",
  location: "Whittier, CA",
  github: "https://github.com/Jaircarbajal91",
  linkedin: "https://www.linkedin.com/in/jair-carbajal/",
  twitter: "",
  resume: "/assets/resume/Jair_Carbajal_Resume.pdf",
}

export const aboutContent = {
  story: `I'm a software engineer who loves solving problems and building things that make a difference. 
  My journey started at App Academy, where I discovered my passion for turning complex challenges into 
  elegant solutions. I specialize in backend development, API design, and system integration - basically, 
  I'm the person who makes sure all the pieces of a system work together seamlessly.

  When I'm not coding, you'll find me on the golf course working on my swing (I'm still an amateur, 
  but I love the challenge!), cheering for my favorite sports teams, or playing video games with friends. 
  I'm always curious about how things work under the hood - whether it's taking apart electronics 
  to see how they're built or figuring out why a particular algorithm is more efficient.

  I believe the best code comes from understanding both the technical requirements and the people 
  who will use it. That's why I love working on projects that have real impact, whether it's streamlining 
  business processes or creating tools that help people work more efficiently.`,
  
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Cups of Coffee', value: '1000+' },
    { label: 'Golf Rounds', value: '50+' },
  ],

  values: [
    {
      icon: 'Code',
      title: 'Clean Code',
      description: 'I write code that not only works but is readable, maintainable, and makes sense to anyone who needs to work with it. (Future me thanks past me for this.)'
    },
    {
      icon: 'Database',
      title: 'Problem Solving',
      description: 'I love tackling complex challenges and finding creative solutions that balance technical requirements with user needs. Sometimes the best solution is the simplest one.'
    },
    {
      icon: 'Zap',
      title: 'Continuous Learning',
      description: 'Technology evolves fast, and I\'m always exploring new tools, frameworks, and approaches to stay current.'
    },
    {
      icon: 'Shield',
      title: 'Team Collaboration',
      description: 'Some of my best work comes from collaborating with others, sharing ideas, and learning from different perspectives.'
    },
  ]
}

export const skillsData = {
  databases: {
    title: 'Database & SQL',
    icon: 'Database',
    skills: [
      { name: 'SQL', level: 'Expert', color: 'bg-blue-600' },
      { name: 'SQL Server', level: 'Advanced', color: 'bg-blue-700' },
      { name: 'Query Optimization', level: 'Expert', color: 'bg-green-600' },
      { name: 'SQLAlchemy', level: 'Advanced', color: 'bg-gray-600' },
      { name: 'Sequelize', level: 'Intermediate', color: 'bg-blue-500' },
      { name: 'Data Migration', level: 'Advanced', color: 'bg-purple-600' },
    ]
  },
  programming: {
    title: 'Programming Languages',
    icon: 'Code',
    skills: [
      { name: 'Python', level: 'Advanced', color: 'bg-yellow-500' },
      { name: 'C#', level: 'Advanced', color: 'bg-blue-600' },
      { name: 'JavaScript', level: 'Advanced', color: 'bg-yellow-600' },
      { name: 'TypeScript', level: 'Intermediate', color: 'bg-blue-500' },
      { name: 'SQL', level: 'Expert', color: 'bg-blue-700' },
      { name: 'Bash/Shell', level: 'Intermediate', color: 'bg-gray-600' },
    ]
  },
  frameworks: {
    title: 'Frameworks & Libraries',
    icon: 'Layers',
    skills: [
      { name: 'Angular', level: 'Advanced', color: 'bg-red-500' },
      { name: 'React', level: 'Intermediate', color: 'bg-blue-500' },
      { name: 'Flask', level: 'Advanced', color: 'bg-gray-600' },
      { name: 'Express', level: 'Intermediate', color: 'bg-gray-700' },
      { name: 'SQLAlchemy', level: 'Advanced', color: 'bg-gray-600' },
      { name: 'Sequelize', level: 'Intermediate', color: 'bg-blue-500' },
    ]
  },
  tools: {
    title: 'Tools & Technologies',
    icon: 'Zap',
    skills: [
      { name: 'Git', level: 'Expert', color: 'bg-orange-600' },
      { name: 'GitHub', level: 'Expert', color: 'bg-gray-800' },
      { name: 'Azure', level: 'Intermediate', color: 'bg-blue-500' },
      { name: 'AI Integration', level: 'Advanced', color: 'bg-purple-600' },
      { name: 'NetSuite', level: 'Advanced', color: 'bg-blue-600' },
      { name: 'Oracle ERP', level: 'Intermediate', color: 'bg-red-600' },
    ]
  }
}

export const projectsData = [
  {
    id: 1,
    title: 'Enterprise API Gateway',
    description: 'Architected and built a comprehensive API gateway using Angular and C# that streamlined business workflows and reduced manual processes by over 60%. Implemented microservices architecture with robust API versioning and rate limiting.',
    image: '/api/placeholder/600/400',
    tags: ['Angular', 'C#', 'API Gateway', 'Microservices', 'Rate Limiting'],
    category: 'fullstack',
    github: 'https://github.com/Jaircarbajal91',
    live: '',
    date: '2023-2024',
    featured: true
  },
  {
    id: 2,
    title: 'System Integration Platform',
    description: 'Designed and implemented comprehensive integration solutions between enterprise systems using RESTful APIs. Built robust data synchronization with validation rules, error handling, and real-time monitoring.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'REST APIs', 'System Integration', 'Data Sync', 'Monitoring'],
    category: 'backend',
    github: 'https://github.com/Jaircarbajal91',
    live: '',
    date: '2023-2024',
    featured: true
  },
  {
    id: 3,
    title: 'Real-time Data Pipeline',
    description: 'Engineered Python-based data pipeline system with interactive dashboards providing real-time operational insights. Implemented streaming APIs and event-driven architecture for real-time data processing.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'Flask', 'Streaming APIs', 'Data Pipeline', 'Event-Driven'],
    category: 'fullstack',
    github: 'https://github.com/Jaircarbajal91',
    live: '',
    date: '2023',
    featured: false
  },
  {
    id: 4,
    title: 'Data Migration API',
    description: 'Built enterprise-grade data migration system with comprehensive API endpoints ensuring system accuracy, traceability, and seamless client onboarding. Implemented robust validation and rollback mechanisms.',
    image: '/api/placeholder/600/400',
    tags: ['API Development', 'Data Migration', 'ETL', 'Validation', 'Rollback'],
    category: 'backend',
    github: 'https://github.com/Jaircarbajal91',
    live: '',
    date: '2023',
    featured: false
  },
  {
    id: 5,
    title: 'Secure API Handler',
    description: 'Developed secure API solutions for enterprise environments with comprehensive authentication, authorization, and audit logging. Implemented OAuth2, JWT tokens, and API security best practices.',
    image: '/api/placeholder/600/400',
    tags: ['API Security', 'OAuth2', 'JWT', 'Authentication', 'Audit Logging'],
    category: 'backend',
    github: 'https://github.com/Jaircarbajal91',
    live: '',
    date: '2023',
    featured: false
  },
  {
    id: 6,
    title: 'AI-Powered Development Workflow',
    description: 'Architected secure AI integration solutions for development workflows, implementing proper API key management, data sanitization, and secure communication protocols with AI services.',
    image: '/api/placeholder/600/400',
    tags: ['AI Integration', 'Security', 'API Management', 'Workflow Automation', 'Data Sanitization'],
    category: 'backend',
    github: 'https://github.com/Jaircarbajal91',
    live: '',
    date: '2024',
    featured: true
  }
]
