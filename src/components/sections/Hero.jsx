import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiExternalLink } from 'react-icons/fi';
import Button from '../common/Button';
import { useScrollTo } from '../../hooks/useScrollTo';
import './Hero.css';

const roles = [
  'Software Engineer',
  'AI Engineer',
  'Backend Developer',
  'Full Stack Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollTo } = useScrollTo();

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero__grid" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="hero__grid-dot"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="hero__badge-dot" />
            GCT Student
          </motion.div>
          <h1 className="hero__title">
            Hi, I'm
            <span className="text-gradient"> Mohammed Riyaz</span>
          </h1>
          <div className="hero__role-wrapper">
            <span className="hero__role-label">I'm a </span>
            <span className="hero__role">
              {roles[roleIndex].substring(0, charIndex)}
              <span className="hero__role-cursor">|</span>
          </div>
          <p className="hero__headline">
            Building scalable backend systems, AI-powered products, and production-grade software.
          </p>
          <p className="hero__description">
            I specialize in designing scalable, maintainable, production-ready systems.
            Passionate about backend engineering, distributed systems, cloud infrastructure,
            and AI agents. I solve difficult engineering problems rather than simply writing code.
          </p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button variant="primary" onClick={() => scrollTo('projects')}>
              View Projects
              <FiExternalLink />
            </Button>
            <Button variant="outline" onClick={() => scrollTo('contact')}>
              <FiMail />
              Contact Me
            </Button>
            <Button variant="outline" href="https://drive.google.com" icon={<FiDownload />}>
              Resume
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <button
            className="hero__scroll-btn"
            onClick={() => scrollTo('about')}
            aria-label="Scroll to about section"
          >
            <span className="hero__scroll-text">Scroll</span>
            <motion.div
              className="hero__scroll-line"
              animate={{ height: ['0%', '100%', '0%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
