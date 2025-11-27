import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Dumbbell, ExternalLink } from 'lucide-react';
import { trivia, galleryImages } from '../utils/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Gallery from './Gallery';
import styles from './Trivia.module.css';

function Trivia() {
  const { ref, isVisible } = useScrollAnimation();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGallery = (index = 0) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  return (
    <section id="trivia" className={styles.trivia} aria-labelledby="trivia-heading">
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 id="trivia-heading" className="section-title">
            Trivia
          </h2>
          <hr className="section-divider" />
        </motion.div>

        <div className={styles.content}>
          {/* Gallery Section */}
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className={styles.sectionTitle}>
              <Image size={20} aria-hidden="true" />
              Gallery
            </h3>
            <div className={styles.galleryGrid}>
              {galleryImages.slice(0, 6).map((image, index) => (
                <button
                  key={image.id}
                  className={styles.galleryItem}
                  onClick={() => openGallery(index)}
                  aria-label={`View ${image.title}`}
                >
                  <img
                    src={image.thumb}
                    alt={image.title}
                    loading="lazy"
                  />
                  <div className={styles.galleryOverlay}>
                    <span>View</span>
                  </div>
                </button>
              ))}
            </div>
            <button
              className={styles.viewAllButton}
              onClick={() => openGallery(0)}
            >
              View All Photos ({galleryImages.length})
            </button>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className={styles.sectionTitle}>
              <Dumbbell size={20} aria-hidden="true" />
              Hobbies
            </h3>
            <div className={styles.hobbies}>
              {trivia.hobbies.map((hobby) => (
                <span key={hobby} className={styles.hobbyTag}>
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Brother's Website */}
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className={styles.sectionTitle}>
              <ExternalLink size={20} aria-hidden="true" />
              Family
            </h3>
            <p className={styles.familyText}>
              Check out my brother&apos;s website:{' '}
              <a
                href={trivia.brotherWebsite.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {trivia.brotherWebsite.name}
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      <Gallery
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={galleryIndex}
      />
    </section>
  );
}

export default Trivia;
