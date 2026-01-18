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
                {personalInfo.researchInterests.map((interest, index) => {
                  // Alternate between primary and secondary gradients
                  const gradientClass = index % 2 === 0 ? 'primary' : 'secondary';
                  return (
                    <span 
                      key={interest} 
                      className={styles.tag}
                      style={{ background: `var(--gradient-${gradientClass})` }}
                    >
                      {interest}
                    </span>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email', gradient: 'primary' },
                { href: personalInfo.social.github, icon: Github, label: 'GitHub', gradient: 'secondary', external: true },
                { href: personalInfo.social.linkedin, icon: Linkedin, label: 'LinkedIn', gradient: 'primary', external: true },
                { href: personalInfo.cv, icon: FileText, label: 'CV', gradient: 'secondary', external: true }
              // eslint-disable-next-line no-unused-vars
              ].map(({ href, icon: Icon, label, gradient, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className={styles.socialLink}
                  style={{ background: `var(--gradient-${gradient})` }}
                  aria-label={label === 'Email' ? 'Email Jisnoo' : `${label} Profile`}
                  title={label}
                >
                  <Icon size={20} aria-hidden="true" />
                  <span>{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <picture>
              <source
                srcSet={personalInfo.profilePhoto}
                type="image/webp"
              />
              <img
                src="/images/profile_photo/jisnoo.png"
                alt="Jisnoo Dev Pal - Computer Science Student"
                className={styles.profileImage}
                loading="eager"
                width="300"
                height="300"
              />
            </picture>
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
