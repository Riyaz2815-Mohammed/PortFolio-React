import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiArrowUpRight } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import './Contact.css';

const contactLinks = [
  {
    icon: <FiMail />,
    label: 'Email',
    href: 'mailto:riyaz@example.com',
    value: 'riyaz@example.com',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    href: 'https://github.com/Riyaz2815-Mohammed',
    value: '@Riyaz2815-Mohammed',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/riyaz2815',
    value: 'Mohammed Riyaz',
  },
  {
    icon: <FiTwitter />,
    label: 'Twitter / X',
    href: 'https://twitter.com',
    value: '@riyaz_dev',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's build something scalable together."
        />

        <div className="contact__cta">
          <motion.h3
            className="contact__cta-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's build something
            <span className="text-gradient"> scalable </span>
            together.
          </motion.h3>
        </div>

        <div className="contact__links">
          {contactLinks.map((link, i) => (
            <ScrollReveal key={link.label} delay={i * 0.1}>
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="contact__link-icon">{link.icon}</span>
                <div className="contact__link-info">
                  <span className="contact__link-label">{link.label}</span>
                  <span className="contact__link-value">{link.value}</span>
                </div>
                <FiArrowUpRight className="contact__link-arrow" />
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
