import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { honors } from '../utils/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Honors.module.css';

function Honors() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="honors" className={styles.honors} aria-labelledby="honors-heading">
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 id="honors-heading" className="section-title">
            Honors and Awards
          </h2>
          <hr className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          {honors.map((honor, index) => (
            <motion.a
              key={honor.id}
              href={honor.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              aria-label={`View certificate: ${honor.title} - ${honor.description}`}
            >
              <div className={styles.iconWrapper}>
                <Award size={28} className={styles.icon} aria-hidden="true" />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{honor.title}</h3>
                <p className={styles.description}>{honor.description}</p>
              </div>
              <ExternalLink
                size={16}
                className={styles.linkIcon}
                aria-hidden="true"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Honors;
