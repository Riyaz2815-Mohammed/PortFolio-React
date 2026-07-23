import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/projects';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionTitle
          title="Projects"
          subtitle="Production-grade software built with modern architectures"
        />

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <motion.div
                className="projects__card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="projects__card-image">
                  <div className="projects__card-placeholder">
                    <span className="projects__card-initials">
                      {project.title.split(' ').map(w => w[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                <div className="projects__card-body">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-description">{project.description}</p>
                  <div className="projects__card-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                  <div className="projects__card-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-btn"
                    >
                      <FiGithub />
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-btn projects__card-btn--primary"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
    </section>
  );
}
