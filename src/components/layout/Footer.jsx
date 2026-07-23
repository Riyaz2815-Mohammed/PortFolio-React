import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer__divider" />
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Mohammed Riyaz
          </p>
          <p className="footer__built-with">
            Built with <span className="footer__heart">React</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

