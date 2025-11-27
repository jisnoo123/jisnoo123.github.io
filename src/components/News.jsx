import { motion } from 'framer-motion';
import { newsItems } from '../utils/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './News.module.css';

function News() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="news" className={styles.news} aria-labelledby="news-heading">
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 id="news-heading" className="section-title">
            News
          </h2>
          <hr className="section-divider" />
        </motion.div>

        <ul className={styles.newsList} role="list" aria-label="News items">
          {newsItems.map((item, index) => (
            <motion.li
              key={item.id}
              className={styles.newsItem}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className={styles.newsContent}>
                {item.isNew && (
                  <span className={styles.newBadge} aria-label="New announcement">
                    New
                  </span>
                )}
                <span className={styles.date}>[{item.date}]</span>
                <span className={styles.text}>{item.content}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default News;
