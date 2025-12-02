import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, ChevronDown, ChevronUp } from 'lucide-react'
import { projectsData } from '../data/content'

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

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({})
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  // Separate personal projects from professional work
  const personalProjects = projectsData.filter(project => project.id <= 4)
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
  const renderProjectCard = (project: typeof projectsData[0], index: number, isPersonal: boolean) => (
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
        {/* Only show hover overlay for personal projects with links */}
        {isPersonal && (project.github || project.live) && (
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-4">
              {project.github && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <Github size={20} className="text-gray-900 dark:text-gray-200" />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.live}
                  className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <ExternalLink size={20} className="text-gray-900 dark:text-gray-200" />
                </motion.a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="px-4 sm:px-6 md:px-8 py-6 md:py-8">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
        </div>
        
        {/* Description with expandable functionality */}
        <div className="mb-4 max-w-full md:max-w-[420px]">
          <p className={`text-gray-900 dark:text-gray-300 ${
            !expandedDescriptions[project.id] ? 'line-clamp-3' : ''
          }`}>
            {project.description}
          </p>
          {project.description.length > 150 && (
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

        {/* Micro Impact Bullets - Only for professional projects */}
        {!isPersonal && (project as any).microImpacts && (project as any).microImpacts.length > 0 && (
          <div className="mb-4 max-w-full md:max-w-[420px]">
            <ul className="space-y-1">
              {(project as any).microImpacts.map((impact: string, idx: number) => (
                <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
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

        {/* Action Buttons - Only for personal projects */}
        {isPersonal && (project.github || project.live) && (
          <div className="flex space-x-3 mt-4">
            {project.github && (
              <a
                href={project.github}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 btn-code hover:scale-105"
              >
                <Github size={16} />
                Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 hover:shadow-md hover:scale-105 transition-all duration-200"
              >
                <Eye size={16} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I use to solve real-world problems.
          </p>
        </motion.div>

        {/* Personal Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Personal Projects
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-4xl">
            Full-stack applications and practice projects demonstrating modern web development and scalable application design.
          </p>
          <AnimatePresence mode="wait">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-12">
              {personalProjects.map((project, index) => renderProjectCard(project, index, true))}
            </div>
          </AnimatePresence>
        </motion.div>

        {/* Professional Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20 mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Work Experience
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-4xl">
            Engineering reliable, scalable systems across ERP, MES, and enterprise data platforms. Automations, integrations, and operational tools used daily in production environments.
          </p>
          
          {/* Professional Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ y: -4 }}
            className="project-card group max-w-[700px] mx-auto bg-white dark:bg-gray-800/50 shadow-lg border border-gray-200 dark:border-white/10 mt-8 mb-8"
          >
            <div className="px-4 sm:px-6 md:px-8 py-4 md:py-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Summary
              </h3>
              <div className="mb-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I build stable, scalable systems across ERP, MES, and manufacturing environments. My work focuses on system integration, workflow automation, data reliability, and operational tooling that supports real production teams. I specialize in bridging complex enterprise platforms—NetSuite, Oracle ERP, PLM, and MES—into unified, automated processes that reduce manual effort and increase operational accuracy.
                </p>
              </div>
              <ul className="space-y-1">
                <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>3+ years building enterprise integrations and automation</span>
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Experienced across ERP/MES ecosystems and manufacturing workflows</span>
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Focused on reliability, performance, and operational impact</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-4">
              {professionalProjects.map((project, index) => renderProjectCard(project, index, false))}
            </div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create amazing digital experiences.
          </p>
          <a
            href="#contact"
            className="btn-primary text-lg px-8 py-3"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
