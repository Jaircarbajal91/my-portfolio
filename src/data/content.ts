// Helper to get asset path with base URL
const getAssetPath = (path: string): string => {
  if (path.startsWith('http') || path.startsWith('//')) {
    return path
  }
  // If path already includes base URL, return as is
  const baseUrl = (import.meta as any).env?.BASE_URL || '/my-portfolio/'
  if (path.startsWith(baseUrl)) {
    return path
  }
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`
}

// Personal information and content for the portfolio
export const personalInfo = {
  name: "Jair Carbajal",
  title: "Software Engineer | Backend Developer | System Integration Specialist",
  description: "I build robust APIs, integrate complex systems, and create scalable solutions that power modern applications. When I'm not coding, you'll find me playing or hanging out with my best friend Bruce 🐕‍🦺 (my dog).",
  tagline: "Building systems that scale",
  catchPhrase: "From App Academy to Enterprise",
  heroIntro: "Hi — I'm Jair Carbajal. I build scalable backend systems, enterprise integrations, and full-stack apps.",
  heroTagline: "ERP & MES Integration • Data Engineering • Full-Stack Web Development",
  email: "jair.carbajal91@gmail.com",
  phone: "714-267-9312",
  location: "Whittier, CA",
  github: "https://github.com/Jaircarbajal91",
  linkedin: "https://www.linkedin.com/in/jair-carbajal/",
  twitter: "",
  resume: getAssetPath("/assets/resume/Jair_Carbajal_Resume.pdf"),
}

export const aboutContent = {
  story: `I code because I love turning chaos into clarity — transforming slow, manual processes into elegant systems that actually work. My philosophy is simple: build software that lasts, scales, and genuinely improves how teams operate. I thrive on solving complex integration challenges and designing architectures that handle real-world complexity with reliability and grace.`,
  
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
  backend: {
    title: 'Backend & APIs',
    icon: 'Code2',
    skills: [
      'Python',
      'C#',
      'Node.js',
      'Flask',
      'Express.js',
      'REST APIs'
    ]
  },
  frontend: {
    title: 'Frontend & UI',
    icon: 'Layers',
    skills: [
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Redux',
      'Tailwind CSS'
    ]
  },
  databases: {
    title: 'Databases & Data Engineering',
    icon: 'Database',
    skills: [
      'SQL',
      'SQL Server',
      'PostgreSQL',
      'SQLAlchemy',
      'Sequelize',
      'Query Optimization'
    ]
  },
  integrations: {
    title: 'Integrations & Automation',
    icon: 'Zap',
    skills: [
      'NetSuite',
      'SuiteScript',
      'Oracle ERP',
      'Workflow Automation'
    ]
  },
  ai: {
    title: 'AI-Driven Development Tools',
    icon: 'Brain',
    skills: [
      'ChatGPT',
      'Cursor',
      'GitHub Copilot',
      'Claude'
    ]
  },
  devops: {
    title: 'DevOps / Infrastructure',
    icon: 'Cloud',
    skills: [
      'Git',
      'GitHub',
      'Azure',
      'AWS S3',
      'CI/CD',
      'Docker'
    ]
  }
}

export const projectsData = [
  {
    id: 1,
    title: 'JairBnB',
    description: 'JairBnB is a full-stack Airbnb-style booking platform that enables users to discover, book, and manage vacation rentals. Built with React, Redux, Node.js, Express, and PostgreSQL, featuring AWS S3 image uploads, Google Maps integration, and multi-layer backend validation to prevent date conflicts. This project demonstrates scalable full-stack architecture, secure authentication with JWT, and complex business logic for handling real-time booking constraints.',
    image: getAssetPath('/assets/projects/jairbnb.png'),
    tags: ['React', 'Redux', 'Node.js', 'Express.js', 'Sequelize', 'PostgreSQL', 'AWS S3', 'JWT', 'Date Validation'],
    category: 'fullstack',
    github: 'https://github.com/Jaircarbajal91/aa-air-bnb-clone',
    live: 'https://jair-bnb-cd7df7b44d78.herokuapp.com/',
    date: '2024',
    featured: true
  },
  {
    id: 2,
    title: 'YapYap',
    description: 'YapYap is a real-time chat application inspired by Discord, enabling instant messaging across channels and direct messages with live typing indicators. Built with React, Redux, Node.js, and Socket.IO for bidirectional WebSocket communication, featuring a responsive mobile-first UI and PostgreSQL for persistent message storage. This project showcases real-time system design, WebSocket implementation, and state management for live collaborative features.',
    image: getAssetPath('/assets/projects/yapyap.png'),
    tags: ['React', 'Redux', 'Node.js', 'Express.js', 'Socket.IO', 'PostgreSQL', 'AWS S3', 'Real-Time', 'WebSockets'],
    category: 'fullstack',
    github: 'https://github.com/Jaircarbajal91/YapYap',
    live: 'https://yap-yap-d52da3cbcf3d.herokuapp.com/app',
    date: '2024',
    featured: true
  },
  {
    id: 3,
    title: 'Litter',
    description: 'Litter is a Twitter-style social networking platform where users can share posts, images, and engage through likes, follows, and nested comment threads. Built with React, Redux, Flask, and PostgreSQL, featuring AWS S3 integration with secure IAM policies for image uploads and cloud-hosted content delivery. This project demonstrates cloud infrastructure integration, social media feature implementation, and scalable content management with proper security practices.',
    image: getAssetPath('/assets/projects/litter.png'),
    tags: ['React', 'Redux', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'AWS S3', 'boto3', 'Python', 'Image Upload'],
    category: 'fullstack',
    github: 'https://github.com/Jaircarbajal91/litter-twitter',
    live: 'https://litter-twitter-55b0f2c66855.herokuapp.com/',
    date: '2024',
    featured: true
  },
  {
    id: 4,
    title: 'swEtsy',
    description: 'swEtsy is a full-stack e-commerce marketplace where users can browse, search, filter, and purchase products with a seamless shopping experience. Built with React, Redux, Flask, and PostgreSQL, featuring advanced search functionality, real-time cart synchronization, product reviews, and secure checkout workflows. This project showcases complex state management patterns, e-commerce business logic, and user experience optimization for online marketplaces.',
    image: getAssetPath('/assets/projects/swetsy.png'),
    tags: ['React', 'Redux', 'Redux-thunk', 'Flask', 'Python', 'SQLAlchemy', 'PostgreSQL', 'State Management', 'Search'],
    category: 'fullstack',
    github: 'https://github.com/Jaircarbajal91/swEtsy',
    live: 'https://swetsy-app-2-a892cfb2b203.herokuapp.com/',
    date: '2024',
    featured: true
  },
  {
    id: 5,
    title: 'Enterprise Systems Integration & Automation',
    description: 'Built enterprise integrations connecting ERP, MES, PLM, and internal services through REST APIs and automated pipelines. Delivered high-volume data sync, record transformations, and validation logic that reduced manual work by 80% and improved operational accuracy. Created scalable workflows and reusable internal APIs used daily across multiple teams.',
    image: 'https://api.iconify.design/mdi/source-branch-sync.svg?width=600&height=400',
    tags: ['C#', 'NetSuite', 'SuiteScript', 'REST APIs', 'Python', 'Oracle ERP', 'System Integration', 'Automation'],
    category: 'backend',
    github: '',
    live: '',
    date: '2023-2024',
    featured: false,
    microImpacts: [
      'Automated cross-system workflows reducing manual effort by ~80%',
      'Designed scalable internal APIs used across ERP, MES, and PLM integrations',
      'Enabled high-volume, reliable data synchronization across teams'
    ]
  },
  {
    id: 6,
    title: 'Database Engineering & Performance Optimization',
    description: 'Engineered large-scale SQL optimizations improving query performance by up to 75%. Refactored complex database logic, implemented indexing strategies, and delivered monitoring tools for long-running queries and integrity issues. Reduced latency across reporting and production workflows.',
    image: 'https://api.iconify.design/mdi/database-search.svg?width=600&height=400',
    tags: ['SQL', 'SQL Server', 'Performance Tuning', 'Migrations', 'Data Integrity', 'Optimization'],
    category: 'backend',
    github: '',
    live: '',
    date: '2023-2024',
    featured: false,
    microImpacts: [
      'Improved SQL query performance by up to 75%',
      'Reduced multi-join query runtimes from minutes to seconds',
      'Strengthened data quality with automated validation and monitoring tools'
    ]
  },
  {
    id: 7,
    title: 'MES Engineering & Custom Operational Tools',
    description: 'Developed custom MES features including Data Collection rollups, Inventory workflows, NC tools, and Shipping Order automation. Built fast, user-friendly screens and backend logic that improved shop-floor efficiency and reduced errors. Integrated MES with ERP and PLM to provide real-time operational data.',
    image: 'https://api.iconify.design/mdi/factory.svg?width=600&height=400',
    tags: ['JavaScript', 'C#', 'Angular', 'MES', 'API Integration', 'Manufacturing'],
    category: 'fullstack',
    github: '',
    live: '',
    date: '2023-2024',
    featured: false,
    microImpacts: [
      'Built configurable MES screens used by production, quality, and shipping teams',
      'Automated NC and disposition workflows with audit tracking',
      'Delivered real-time rollups powering operational dashboards'
    ]
  }
]
