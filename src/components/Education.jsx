import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../utils/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Education.module.css';

function Education() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className={styles.education} aria-labelledby="education-heading">
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 id="education-heading" className="section-title">
            Education
          </h2>
          <hr className="section-divider" />
        </motion.div>

        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            >
              <div className={styles.timelineMarker}>
                <div className={`${styles.dot} ${edu.isCurrent ? styles.current : ''}`} />
                {index < education.length - 1 && <div className={styles.line} />}
              </div>
              <article className={styles.card} aria-labelledby={`edu-title-${edu.id}`}>
                <div className={styles.header}>
                  <GraduationCap
                    size={24}
                    className={styles.icon}
                    aria-hidden="true"
                  />
                  {edu.isCurrent && (
                    <span className={styles.currentBadge}>Current</span>
                  )}
                </div>
                <h3 id={`edu-title-${edu.id}`} className={styles.institution}>
                  {edu.institution}
                </h3>
                <p className={styles.degree}>{edu.degree}</p>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <MapPin size={14} aria-hidden="true" />
                    {edu.location}
                  </span>
                  <span className={styles.metaItem}>
                    <Calendar size={14} aria-hidden="true" />
                    {edu.period}
                  </span>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
