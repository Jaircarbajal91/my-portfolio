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
  resume: getAssetPath("/assets/Jair_Carbajal_Resume.pdf"),
}

export const aboutContent = {
  story: `I'm a full-stack engineer focused on backend architecture, enterprise integrations, and data reliability — especially in manufacturing and ERP/MES systems. I build stable, scalable systems that turn messy, manual workflows into clean, maintainable platforms teams can rely on.

I enjoy designing systems end-to-end: data models, APIs, integrations, and the UI flows that connect it all. My priorities are reliability, clarity, data integrity, and performance under real production load — not quick fixes or short-lived hacks.`,

  howIWork: [
    'I start with diagrams, system design, and clear data flows before writing code.',
    'I use AI-augmented tools to speed up planning, documentation, and repetitive work — which frees me to focus on real engineering problems.',
    'I prioritize maintainable code, automated pipelines, and long-term sustainability over clever shortcuts.'
  ],

  projects: `I'm especially drawn to projects that bring order to operational chaos — legacy data, tangled systems, unclear workflows, or slow manual processes. Turning complex environments into predictable, scalable systems is where I do my best work.`,

  outside: `Outside of engineering, I'm usually hiking with my dog, exploring trails, or unplugging outdoors. It keeps me grounded and gives me the clarity I need for harder technical challenges.`
}

export const skillsData = {
  backend: {
    title: 'Backend & APIs',
    description: 'Designing reliable backend architectures, REST APIs, and service layers using:',
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
    description: 'Building responsive, maintainable UI systems with modern frameworks and state management patterns:',
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
    description: 'Modeling relational schemas, optimizing queries, and improving data reliability at scale:',
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
    description: 'Connecting enterprise systems and automating operational workflows across ERP/MES ecosystems:',
    icon: 'Zap',
    skills: [
      'NetSuite',
      'SuiteScript',
      'Oracle ERP',
      'Workflow Automation'
    ]
  },
  ai: {
    title: 'AI-Augmented Development Tools',
    description: 'Using AI tools to accelerate planning, documentation, and implementation:',
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
    description: 'Managing deployments, version control, CI/CD workflows, and cloud-backed storage:',
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
    description: 'A full-stack booking platform inspired by Airbnb. I built the listing system, reservation flow, authentication, image uploads, and multi-layer validation to prevent booking conflicts. The project focuses on scalable API design, reliable data handling, and clean state management across React, Node.js, and PostgreSQL.',
    readMore: `This project features a full reservation lifecycle with conflict detection, transactional booking logic, and layered validation on both the client and server. I designed RESTful APIs for listings, bookings, and user management, and implemented secure authentication with JWT. Image uploads use AWS S3 with signed URLs, and the data model ensures consistent availability checks across overlapping dates.

Frontend state is managed with Redux and normalized store patterns to support responsive UI updates and predictable async flows. Overall, the project demonstrates scalable API design, reliable business logic, and end-to-end integration across React, Node.js, Express, and PostgreSQL.`,
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
    description: 'A real-time chat application inspired by Discord. I implemented channel messaging, typing indicators, and bidirectional WebSocket communication with Socket.IO. The project emphasizes real-time system design, event-driven architecture, and responsive UI patterns built for collaboration.',
    readMore: `YapYap is built around a real-time communication model using event-driven architecture. I implemented a bidirectional WebSocket layer for message delivery, typing indicators, and presence updates using Socket.IO. The system manages channels, direct messages, and user sessions through optimized database queries and persistent message storage in PostgreSQL.

On the frontend, I designed UI patterns that gracefully handle real-time updates, ephemeral states (like typing), and fast channel switching. This project emphasizes responsive interaction design, scalable WebSocket communication, and the engineering patterns needed for modern collaborative apps.`,
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
    description: 'A Twitter-style social platform where users post images, follow accounts, and interact through threaded conversations. I built secure AWS S3 image uploads, IAM-based access control, real-time feed updates, and scalable database models using Flask and PostgreSQL. This project highlights cloud integration and robust social feature design.',
    readMore: `Litter integrates user-generated content, image uploads, and social interaction features in a scalable backend structure. I implemented AWS S3 uploads using secure IAM policies and presigned URLs, ensuring controlled and authenticated media submission. The platform handles posts, follows, likes, and nested comment threads, all supported by a relational data model built in PostgreSQL.

The backend uses Flask with modular service layers, enabling clean separation between auth, content, feeds, and notifications. This project demonstrates secure cloud integration, social graph modeling, and best practices for user-generated content platforms.`,
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
    description: 'A full-stack e-commerce marketplace where users browse, search, and purchase products through a seamless shopping experience. I implemented advanced search filtering, real-time cart syncing, product reviews, and secure checkout logic. The project demonstrates complex state management, scalable API design, and UX patterns for online marketplaces.',
    readMore: `swEtsy showcases a complex marketplace system with advanced search, filtering, and product discovery. I built a robust backend in Flask with PostgreSQL, handling product catalogs, user reviews, cart management, and authenticated purchases. Real-time cart synchronization ensures the UI reflects accurate quantities and pricing even across multiple sessions.

The frontend uses Redux for predictable state management across product lists, filters, reviews, and checkout flows. The project highlights end-to-end e-commerce logic, optimized querying, and UX patterns that support fast browsing and smooth transactional workflows.`,
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
    description: 'I design and implement enterprise integrations connecting ERP, MES, PLM, and internal systems through REST APIs and automated workflows. My work reduces manual effort, eliminates data inconsistencies, and supports real-time operational visibility.',
    image: 'https://api.iconify.design/mdi/source-branch-sync.svg?width=600&height=400',
    tags: ['C#', 'NetSuite', 'SuiteScript', 'REST APIs', 'Python', 'Oracle ERP', 'System Integration', 'Automation'],
    category: 'backend',
    github: '',
    live: '',
    date: '2023-2024',
    featured: false,
    microImpacts: [
      'Automated cross-system workflows, reducing manual effort by 80%+',
      'Designed scalable internal APIs used across ERP, MES, and PLM integrations',
      'Implemented high-volume, reliable data synchronization processes for production teams'
    ]
  },
  {
    id: 6,
    title: 'Database Engineering & Performance Optimization',
    description: 'I engineered large-scale SQL optimizations that improved query performance by up to 75%, enabling faster reporting, more responsive dashboards, and smoother operational workflows.',
    image: 'https://api.iconify.design/mdi/database-search.svg?width=600&height=400',
    tags: ['SQL', 'SQL Server', 'Performance Tuning', 'Migrations', 'Data Integrity', 'Optimization'],
    category: 'backend',
    github: '',
    live: '',
    date: '2023-2024',
    featured: false,
    microImpacts: [
      'Improved SQL query performance by 75% through indexing, refactoring, and schema tuning',
      'Reduced multi-join query runtimes from minutes to seconds',
      'Strengthened data quality through automated validation and monitoring tools'
    ]
  },
  {
    id: 7,
    title: 'MES Engineering & Custom Operational Tools',
    description: 'I developed custom MES features and tools used by production, quality, and shipping teams. These tools streamline day-to-day operations and improve traceability, audit readiness, and workflow reliability.',
    image: 'https://api.iconify.design/mdi/factory.svg?width=600&height=400',
    tags: ['JavaScript', 'C#', 'Angular', 'MES', 'API Integration', 'Manufacturing'],
    category: 'fullstack',
    github: '',
    live: '',
    date: '2023-2024',
    featured: false,
    microImpacts: [
      'Built configurable MES screens for Data Collection rollups, Inventory workflows, NC workflows, and Shipping Order tools',
      'Automated NC and disposition workflows with audit tracking and rule-based validation',
      'Delivered real-time rollups powering operational dashboards and manufacturing insights'
    ]
  }
]
