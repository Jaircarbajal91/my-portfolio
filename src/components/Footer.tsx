import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data/content'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 dark:bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400">
              The developer you'll want on your team - reliable, curious, and always ready to tackle the next challenge. 
              Let's build something amazing together.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: <Github size={20} />, href: personalInfo.github, label: 'GitHub' },
                { icon: <Linkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-gray-700 dark:border-slate-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by {personalInfo.name} • © {currentYear} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
