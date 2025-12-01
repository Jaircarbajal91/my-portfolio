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
    title: 'JairBnB',
    description: 'Airbnb-style booking platform with advanced date-conflict validation, spot management, user reviews, and AWS S3 image uploads. Includes Google Maps integration and multi-layer backend checks that prevent overlapping or invalid bookings.',
    image: '/assets/projects/jairbnb.png',
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
    description: 'Real-time chat app inspired by Discord, featuring typing indicators, instant message delivery, channel/DM separation, and a mobile-responsive UI. Powered by Socket.IO for fast, seamless bidirectional communication.',
    image: '/assets/projects/yapyap.png',
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
    description: 'Social networking app with AWS image uploads, secure IAM rules, UUID filenames, nested comments, likes, follows, and user authentication. Includes a Twitter-style feed with cloud-hosted images and media validation.',
    image: '/assets/projects/litter.png',
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
    description: 'Full-stack e-commerce marketplace with search, multi-criteria filtering, Redux state management, and real-time cart synchronization. Includes product reviews, inventory rules, and secure checkout workflows.',
    image: '/assets/projects/swetsy.png',
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
