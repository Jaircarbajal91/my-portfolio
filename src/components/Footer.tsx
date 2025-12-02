import React, { useEffect, useRef } from 'react'
import { Heart, Github, Linkedin, Mail, Download } from 'lucide-react'
import { personalInfo } from '../data/content'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const fadeElements = footerRef.current?.querySelectorAll('.fade-in')
    fadeElements?.forEach((el) => observer.observe(el))

    return () => {
      fadeElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <footer ref={footerRef} className="fade-in footer-enhanced bg-gray-800 dark:bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="fade-in space-y-4">
            <h3 className="footer-name text-2xl font-bold text-white">
              <span className="text-primary-400">{personalInfo.name.split(' ')[0]}</span> {personalInfo.name.split(' ').slice(1).join(' ')}
            </h3>
            <p className="footer-body-text text-gray-300 max-w-md leading-relaxed">
              A developer focused on building reliable systems, clean architecture, and thoughtful engineering. I care about scalable design, strong communication, and delivering solutions that last. Let's build something great together.
            </p>
          </div>

          {/* Social Links & Resume */}
          <div className="fade-in footer-connect-wrapper space-y-4">
            <h4 className="footer-heading text-lg font-semibold font-bold">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {[
                { icon: <Github size={20} />, href: personalInfo.github, label: 'GitHub' },
                { icon: <Linkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon social-icon transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href={personalInfo.resume}
              download="Jair_Carbajal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="fade-in border-t border-gray-700 dark:border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 leading-relaxed">
            Made with <Heart size={16} className="text-red-500" /> by {personalInfo.name} • © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
