import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { navLinks } from '../utils/data';
import { useActiveSection } from '../hooks/useScrollAnimation';
import styles from './Sidebar.module.css';

function Sidebar({ className }) {
  const activeSection = useActiveSection(navLinks.map((link) => link.id));

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleKeyDown = useCallback((e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavClick(e, id);
    }
  }, [handleNavClick]);

  return (
    <aside className={`${styles.sidebar} ${className || ''}`} aria-label="Section navigation">
      <nav className={styles.nav}>
        <ul className={styles.navList} role="menubar" aria-orientation="vertical">
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.id} 
              role="none"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 + 0.2 }}
            >
              <a
                href={`#${link.id}`}
                className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
                onKeyDown={(e) => handleKeyDown(e, link.id)}
                role="menuitem"
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                <span className={styles.indicator} />
                <span className={styles.label}>{link.label}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
