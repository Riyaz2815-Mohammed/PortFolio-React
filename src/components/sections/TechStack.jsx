import { motion } from 'framer-motion';
import { techStack } from '../../data/techStack';
import SectionTitle from '../common/SectionTitle';
import './TechStack.css';

export default function TechStack() {
  return (
    <section id="techstack" className="section section-alt">
      <div className="container">
        <SectionTitle
          title="Tech Stack"
          subtitle="Technologies I work with daily"
        />
        <div className="techstack__cloud">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              className="techstack__item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
