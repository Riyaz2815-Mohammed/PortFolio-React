import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCloud, FiCpu } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import './About.css';

const highlights = [
  { icon: <FiServer />, label: 'Backend Engineering' },
  { icon: <FiCloud />, label: 'Cloud Infrastructure' },
  { icon: <FiCpu />, label: 'AI Agents' },
  { icon: <FiCode />, label: 'Production Systems' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          title="About Me"
          subtitle="A software engineer passionate about building systems that matter"
        />
        <div className="about__content">
          <ScrollReveal className="about__text">
            <p>
              I'm a software engineer at <strong>The Yellow Network</strong> and a student at{' '}
              <strong>Government College of Technology (GCT)</strong>. I specialize in designing
              scalable, maintainable, production-ready systems that solve real engineering challenges.
            </p>
            <p>
              My expertise spans <strong>backend engineering</strong>, <strong>distributed systems</strong>,{' '}
              <strong>cloud infrastructure</strong>, and <strong>AI agent solutions</strong>. I don't just
              write code — I architect solutions that are robust, performant, and built to scale.
            </p>
            <p>
              Whether it's designing a microservices architecture, building RAG pipelines, or optimizing
              database performance, I approach every problem with engineering rigor and a focus on
              production-grade outcomes.
            </p>
          </ScrollReveal>
          <ScrollReveal className="about__highlights" delay={0.2}>
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                className="about__highlight-card"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="about__highlight-icon">{item.icon}</span>
                <span className="about__highlight-label">{item.label}</span>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
    </section>
  );
}
