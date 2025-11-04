import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Calendar, Tag } from 'lucide-react'
import { projectsData } from '../data/content'

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState('all')

  const projects = projectsData

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'mobile', label: 'Mobile' },
  ]

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'featured') return project.featured
    return project.category === activeFilter
  })

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
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I use to solve real-world problems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`filter-btn ${
                activeFilter === filter.key
                  ? 'filter-btn-active'
                  : 'filter-btn-inactive'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="project-card group"
              >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary-600 dark:text-primary-400">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github size={20} className="text-gray-900 dark:text-gray-200" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ExternalLink size={20} className="text-gray-900 dark:text-gray-200" />
                    </motion.a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Calendar size={16} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-900 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="btn-tag"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 btn-code"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <Eye size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

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
          <p className="text-gray-900 dark:text-gray-300 mb-6">
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
