import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { experiences } from '../../data/experience';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import './Experience.css';

export default function Experience() {
  const exp = experiences[0];

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          title="Experience"
          subtitle="Current role and professional journey"
        />

        <div className="experience__timeline">
          <ScrollReveal>
            <motion.div
              className="experience__card"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="experience__card-header">
                <div className="experience__card-icon">
                  <FiBriefcase />
                </div>
                <div className="experience__card-info">
                  <h3 className="experience__card-role">{exp.role}</h3>
                  <p className="experience__card-company">{exp.company}</p>
                  <span className="experience__card-period">
                    <FiCalendar size={12} />
                    {exp.period}
                  </span>
                </div>
              <ul className="experience__card-list">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    className="experience__card-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <span className="experience__card-dot" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
