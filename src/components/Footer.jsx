import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../utils/data';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.brand}>
            <span className={styles.name}>{personalInfo.name}</span>
            <p className={styles.tagline}>
              CS Student | Deep Learning Enthusiast
            </p>
          </div>

          <nav className={styles.social} aria-label="Social links">
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.socialLink}
              aria-label="Send email"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Visit GitHub profile"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
          </nav>

          <div className={styles.copyright}>
            <p>
              © 2023-{currentYear} {personalInfo.name}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
