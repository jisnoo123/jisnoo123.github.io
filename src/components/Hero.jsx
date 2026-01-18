import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, ChevronDown } from 'lucide-react';
import { personalInfo } from '../utils/data';
import styles from './Hero.module.css';

function Hero() {
  const scrollToNews = () => {
    const element = document.getElementById('education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero} aria-label="About Jisnoo Dev Pal">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.textContent}>
            <motion.h1
              className={styles.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              className={styles.bio}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              className={styles.mentors}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>
                I am fortunate to be mentored by{' '}
                {personalInfo.mentors.map((mentor, index) => (
                  <span key={mentor.name}>
                    <a
                      href={mentor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mentorLink}
                    >
                      {mentor.name}
                    </a>
                    {index < personalInfo.mentors.length - 1 && ' and '}
                  </span>
                ))}
                .
              </p>
            </motion.div>

            <motion.div
              className={styles.interests}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className={styles.interestsTitle}>Research Interests</h2>
              <div className={styles.interestTags}>
                {personalInfo.researchInterests.map((interest) => (
                  <span key={interest} className={styles.tag}>
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className={styles.socialLink}
                aria-label="Email Jisnoo"
                title="Email"
              >
                <Mail size={20} aria-hidden="true" />
                <span>Email</span>
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github size={20} aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin size={20} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Download CV"
                title="CV"
              >
                <FileText size={20} aria-hidden="true" />
                <span>CV</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src={personalInfo.profilePhoto}
              alt="Jisnoo Dev Pal - Computer Science Student"
              className={styles.profileImage}
              loading="eager"
              width="300"
              height="300"
            />
          </motion.div>
        </motion.div>

        <motion.button
          className={styles.scrollIndicator}
          onClick={scrollToNews}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 1,
          }}
          aria-label="Scroll to Education section"
        >
          <ChevronDown size={28} aria-hidden="true" />
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
