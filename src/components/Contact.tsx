import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { personalInfo } from '../data/content'

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: personalInfo.location,
      href: '#'
    }
  ]

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm actively seeking new career opportunities in software engineering and system integration. 
            Let's discuss how I can contribute to your team's success.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I'm passionate about building robust APIs, integrating complex systems, and creating scalable solutions. 
                If you're looking for a dedicated software engineer who thrives on solving challenging technical problems, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  href={info.href}
                  className="flex flex-col items-center p-6 card hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h4>
              <div className="flex justify-center space-x-6">
                {[
                  { 
                    name: 'GitHub', 
                    href: personalInfo.github, 
                    color: 'bg-gray-800 hover:bg-gray-700',
                    icon: <Github className="w-6 h-6" />
                  },
                  { 
                    name: 'LinkedIn', 
                    href: personalInfo.linkedin, 
                    color: 'bg-primary-600 hover:bg-primary-700',
                    icon: <Linkedin className="w-6 h-6" />
                  },
                  { 
                    name: 'Email', 
                    href: `mailto:${personalInfo.email}`, 
                    color: 'bg-primary-600 hover:bg-primary-700',
                    icon: <Mail className="w-6 h-6" />
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 rounded-lg transition-colors duration-200 flex items-center justify-center text-white ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
