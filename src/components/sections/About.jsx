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
          subtitle="A software engineer focused on practical systems and continuous learning"
        />
        <div className="about__content">
          <ScrollReveal className="about__text">
            <p>
              I'm a software engineer at <strong>The Yellow Network</strong> and a student at{' '}
              <strong>Government College of Technology (GCT)</strong>. I work on backend systems,
              API integration, and cloud infrastructure for real products.
            </p>
            <p>
              My work is grounded in <strong>scalable engineering</strong>, <strong>system reliability</strong>,
              and clear operational practices. I believe strong systems are built through careful design,
              testing, and iterative improvement.
            </p>
            <p>
              I am actively learning <strong>MLOps</strong>, <strong>production observability</strong>, and
              distributed system patterns while contributing to practical projects every day.
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
      </div>
    </section>
  );
}
