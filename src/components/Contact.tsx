import React, { useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react'
import { personalInfo } from '../data/content'

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

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

    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in')
    fadeElements?.forEach((el) => observer.observe(el))

    return () => {
      fadeElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

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
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="fade-in text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In <span className="text-primary-600 dark:text-primary-400">Touch</span>
          </h2>
          <p className="fade-in text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-7">
            Whether you want to collaborate, talk engineering, or explore new opportunities, feel free to reach out. I enjoy meeting people who care about building great systems and solving meaningful problems.
          </p>
          <p className="fade-in text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-3 font-medium">
            Let's build something great together — send me a message anytime.
          </p>
          <p className="fade-in text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto italic">
            I typically respond within 24–48 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="fade-in contact-cards-wrapper grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="contact-card group flex flex-col items-center p-6 card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg border border-transparent text-center"
                >
                  <div className="icon-wrapper flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 transition-transform duration-200 group-hover:scale-105">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {info.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Download Resume Button */}
            <div className="fade-in text-center mb-8">
              <a
                href={personalInfo.resume}
                download="Jair_Carbajal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="fade-in text-center">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h4>
              <div className="connect-icons flex justify-center gap-5">
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
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-lg transition-all duration-200 flex items-center justify-center text-white hover:shadow-lg hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
