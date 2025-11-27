import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { specializations } from '../utils/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Specializations.module.css';

function Specializations() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="specializations"
      className={styles.specializations}
      aria-labelledby="specializations-heading"
    >
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 id="specializations-heading" className="section-title">
            Online Specializations
          </h2>
          <hr className="section-divider" />
        </motion.div>

        <div className={styles.list}>
          {specializations.map((spec, index) => (
            <motion.a
              key={spec.id}
              href={spec.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              aria-label={`View certificate for ${spec.title} from ${spec.provider}`}
            >
              <div className={styles.iconWrapper}>
                <BookOpen size={24} className={styles.icon} aria-hidden="true" />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{spec.title}</h3>
                <p className={styles.provider}>{spec.provider}</p>
                <p className={styles.platform}>Offered by: {spec.platform}</p>
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

export default Specializations;
