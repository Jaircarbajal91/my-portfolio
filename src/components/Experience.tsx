import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { projectsData } from '../data/content'

// Helper to get asset path with base URL
const getAssetPath = (path: string): string => {
  if (path.startsWith('http') || path.startsWith('//')) {
    return path
  }
  const baseUrl = (import.meta as any).env?.BASE_URL || '/my-portfolio/'
  if (path.startsWith(baseUrl)) {
    return path
  }
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`
}

// Logo mapping for technologies
const techLogos: Record<string, string> = {
  'React': 'https://cdn.simpleicons.org/react/61DAFB',
  'Redux': 'https://cdn.simpleicons.org/redux/764ABC',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
  'Express.js': 'https://cdn.simpleicons.org/express/000000',
  'Express': 'https://cdn.simpleicons.org/express/000000',
  'Sequelize': 'https://cdn.simpleicons.org/sequelize/52B0E7',
  'PostgreSQL': 'https://cdn.simpleicons.org/postgresql/4169E1',
  'AWS S3': getAssetPath('/assets/projects/s3.png'),
  'JWT': getAssetPath('/assets/projects/jwt.png'),
  'Flask': 'https://cdn.simpleicons.org/flask/000000',
  'SQLAlchemy': 'https://cdn.simpleicons.org/sqlalchemy/000000',
  'Socket.IO': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1200px-Socket-io.svg.png',
  'Python': 'https://cdn.simpleicons.org/python/3776AB',
  'Redux-thunk': 'https://cdn.simpleicons.org/redux/764ABC',
  'boto3': getAssetPath('/assets/projects/boto3.jpg'),
  'Real-Time': getAssetPath('/assets/projects/websocket.svg'),
  'WebSockets': getAssetPath('/assets/projects/websocket.svg'),
  'Image Upload': getAssetPath('/assets/projects/s3.png'),
  'State Management': 'https://cdn.simpleicons.org/redux/764ABC',
  'Search': 'https://cdn.simpleicons.org/algolia/003DF5',
  'C#': 'https://api.iconify.design/logos/c-sharp.svg',
  'SQL': 'https://api.iconify.design/simple-icons/microsoftsqlserver.svg?color=%23CC2927',
  'SQL Server': 'https://api.iconify.design/simple-icons/microsoftsqlserver.svg?color=%23CC2927',
  'Azure': 'https://api.iconify.design/logos/microsoft-azure.svg',
  'NetSuite': getAssetPath('/assets/projects/netsuite.svg'),
  'Oracle ERP': 'https://api.iconify.design/logos/oracle.svg',
  'Angular': 'https://cdn.simpleicons.org/angular/DD0031',
  'TypeScript': 'https://cdn.simpleicons.org/typescript/3178C6',
  'Database': 'https://api.iconify.design/mdi/database.svg',
  'REST API': 'https://api.iconify.design/mdi/api.svg',
  'REST APIs': 'https://api.iconify.design/mdi/api.svg',
  'API Development': 'https://api.iconify.design/mdi/api.svg',
  'System Integration': 'https://api.iconify.design/mdi/source-branch-sync.svg',
  'Query Optimization': 'https://api.iconify.design/mdi/database-search.svg',
  'Optimization': 'https://api.iconify.design/mdi/database-search.svg',
  'Automation': 'https://api.iconify.design/mdi/workflow.svg',
  'Data Migration': 'https://api.iconify.design/mdi/database-arrow-right.svg',
  'Migrations': 'https://api.iconify.design/mdi/database-arrow-right.svg',
  'Performance Tuning': 'https://api.iconify.design/mdi/speedometer.svg',
  'Custom Screens': 'https://api.iconify.design/mdi/monitor-dashboard.svg',
  'Business Intelligence': 'https://api.iconify.design/mdi/chart-box.svg',
  'SuiteScript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'Workflow Automation': 'https://api.iconify.design/mdi/workflow.svg',
  'JavaScript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'API Integration': 'https://api.iconify.design/mdi/api.svg',
  'Date Validation': 'https://api.iconify.design/mdi/calendar-check.svg',
  'MES': 'https://api.iconify.design/mdi/factory.svg',
  'Manufacturing': 'https://api.iconify.design/mdi/factory.svg',
  'Data Integrity': 'https://api.iconify.design/mdi/shield-check.svg',
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({})
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  // Filter professional projects
  const professionalProjects = projectsData.filter(project => project.id > 4)

  const toggleDescription = (projectId: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  const getTechLogo = (tag: string): string | null => {
    return techLogos[tag] || null
  }

  // Render project card component
  const renderProjectCard = (project: typeof projectsData[0], index: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="project-card group border border-transparent hover:border-primary-600/20 dark:hover:border-primary-400/20"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        {project.image && !imageErrors[project.id] ? (
          // Check if it's a local screenshot or external icon
          project.image.includes('assets/projects/') && !project.image.startsWith('http') ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
              onError={() => {
                setImageErrors(prev => ({ ...prev, [project.id]: true }))
              }}
            />
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-32 h-32 object-contain opacity-70"
                onError={() => {
                  setImageErrors(prev => ({ ...prev, [project.id]: true }))
                }}
              />
            </div>
          )
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
            <div className="text-6xl font-bold text-primary-600 dark:text-primary-400 opacity-70">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="px-5 sm:px-7 md:px-9 py-7 md:py-9">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
        </div>
        
        {/* Description with expandable functionality */}
        <div className="my-3 max-w-[48ch]">
          <p 
            className={`text-gray-900 dark:text-gray-300 ${
              !expandedDescriptions[project.id] ? 'line-clamp-3' : ''
            }`}
            style={{ lineHeight: '1.55' }}
          >
            {project.description}
          </p>
          {(project as any).readMore && (
            <AnimatePresence>
              {expandedDescriptions[project.id] && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-900 dark:text-gray-300 mt-3"
                  style={{ lineHeight: '1.55' }}
                >
                  {(project as any).readMore}
                </motion.p>
              )}
            </AnimatePresence>
          )}
          {(project as any).readMore && (
            <button
              onClick={() => toggleDescription(project.id)}
              className="mt-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium flex items-center gap-1 transition-colors"
            >
              {expandedDescriptions[project.id] ? (
                <>
                  <ChevronUp size={16} />
                  Read Less
                </>
              ) : (
                <>
                  <ChevronDown size={16} />
                  Read More
                </>
              )}
            </button>
          )}
        </div>

        {/* Micro Impact Bullets */}
        {(project as any).microImpacts && (project as any).microImpacts.length > 0 && (
          <div className="my-3 max-w-full md:max-w-[420px]">
            <ul className="space-y-1">
              {(project as any).microImpacts.map((impact: string, idx: number) => (
                <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start" style={{ lineHeight: '1.55' }}>
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags with Logos */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => {
            const logoUrl = getTechLogo(tag)
            return (
              <span
                key={tag}
                className="btn-tag flex items-center gap-1.5 px-2 py-1 hover:scale-105"
                title={tag}
              >
                {logoUrl ? (
                  <>
                    <img 
                      src={logoUrl} 
                      alt={tag} 
                      className="w-4 h-4 object-contain flex-shrink-0 opacity-70"
                      onError={(e) => {
                        // Hide image on error, text will show
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    <span className="text-xs">{tag}</span>
                  </>
                ) : (
                  <span>{tag}</span>
                )}
              </span>
            )
          })}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="experience" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Engineering reliable, scalable systems across ERP, MES, and enterprise platforms — with a focus on integrations, automation, and operational impact. I design solutions that streamline operations, improve data reliability, and support production teams in real-world environments.
          </p>
        </motion.div>

        {/* Professional Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="project-card group max-w-[700px] mx-auto bg-white dark:bg-gray-800/50 shadow-lg border border-gray-200 dark:border-white/10 mb-12"
        >
          <div className="px-5 sm:px-7 md:px-9 py-5 md:py-7">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Professional Summary
            </h3>
            <div className="mb-4">
              <p className="text-gray-700 dark:text-gray-300" style={{ lineHeight: '1.55' }}>
                I build stable, scalable systems for ERP, MES, and manufacturing environments. My work centers on system integration, workflow automation, data reliability, and operational tooling used daily by production teams. I specialize in connecting complex enterprise platforms—such as NetSuite, Oracle ERP, PLM, and MES—into unified workflows that reduce manual effort and improve accuracy.
              </p>
            </div>
            <ul className="space-y-1 my-3">
              <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start" style={{ lineHeight: '1.55' }}>
                <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                <span>3+ years of experience building enterprise integrations and automation</span>
              </li>
              <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start" style={{ lineHeight: '1.55' }}>
                <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                <span>Deep experience across ERP/MES ecosystems and manufacturing workflows</span>
              </li>
              <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start" style={{ lineHeight: '1.55' }}>
                <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                <span>Focused on reliability, performance, and operational clarity</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Professional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-10">
              {professionalProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

