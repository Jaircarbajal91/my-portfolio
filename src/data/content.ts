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
  story: `I'm a full-stack engineer focused on system design, backend architecture, and building reliable integrations across ERP, MES, and enterprise platforms. I enjoy simplifying complexity — turning slow, manual, or inconsistent workflows into scalable, automated systems that support real-world operations.

I also embrace AI-augmented development. Tools like ChatGPT, Cursor, GitHub Copilot, Claude, and Miro are part of my engineering toolkit — not shortcuts, but accelerators. They help me think through architecture, prototype ideas faster, validate assumptions, and eliminate repetitive work so I can focus on solving the real problems.

My goal is simple: build software that lasts, scales, and genuinely improves the way teams work.`,
  
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
      'API Integration',
      'System Integration',
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
      'Claude',
      'Miro'
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
    description: 'Airbnb-style booking platform with advanced date-conflict validation, spot management, user reviews, and AWS S3 image uploads. Includes Google Maps integration and multi-layer backend checks to prevent overlapping bookings.',
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
    description: 'Real-time chat app inspired by Discord, featuring typing indicators, instant messaging, channel/DM separation, and a mobile-first UI. Powered by Socket.IO for fast bidirectional communication.',
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
    description: 'Social networking app with AWS-based image uploads, secure IAM rules, nested comments, likes/follows, and a Twitter-style feed. Includes media validation and cloud-hosted content delivery.',
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
    description: 'Full-stack e-commerce marketplace with multi-criteria search/filter, Redux state management, real-time cart sync, product reviews, and secure checkout flows.',
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
