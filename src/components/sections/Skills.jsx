import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import './Skills.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit for building production-grade software"
        />

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="skills__card"
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h3 className="skills__card-title">{category.title}</h3>
              <div className="skills__card-tags">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="tag"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
