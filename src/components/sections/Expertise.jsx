import { motion } from 'framer-motion';
import { expertiseAreas } from '../../data/expertise';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import './Expertise.css';

export default function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <SectionTitle
          title="Engineering Expertise"
          subtitle="Core strengths and technical proficiencies"
        />
        <div className="expertise__grid">
          {expertiseAreas.map((area, i) => (
            <ScrollReveal key={area.name} delay={i * 0.03}>
              <motion.div
                className="expertise__item"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="expertise__item-header">
                  <span className="expertise__item-name">{area.name}</span>
                  <span className="expertise__item-level">{area.level}%</span>
                </div>
                <div className="expertise__item-bar">
                  <motion.div
                    className="expertise__item-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${area.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
    </section>
  );
}
