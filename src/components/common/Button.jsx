import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', href, onClick, className = '', icon }) {
  const baseClass = `btn btn-${variant} ${className}`;

  const buttonContent = (
    <motion.span
      className={baseClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}

