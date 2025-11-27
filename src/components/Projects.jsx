import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../utils/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Projects.module.css';

function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-heading">
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 id="projects-heading" className="section-title">
            Projects
          </h2>
          <hr className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              aria-labelledby={`project-title-${project.id}`}
            >
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className={styles.image}
                  loading="lazy"
                  width="400"
                  height="225"
                />
              </div>
              <div className={styles.content}>
                <h3 id={`project-title-${project.id}`} className={styles.title}>
                  {project.title}
                </h3>
                <p className={styles.description}>{project.description}</p>
                <p className={styles.techInfo}>{project.techInfo}</p>
                <div className={styles.footer}>
                  <span className={styles.date}>{project.date}</span>
                  <div className={styles.links}>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label={`View ${project.title} on GitHub`}
                        title="View Code on GitHub"
                      >
                        <Github size={18} aria-hidden="true" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label={`View ${project.title} demo on HuggingFace`}
                        title="View Demo"
                      >
                        <ExternalLink size={18} aria-hidden="true" />
                        <span>Demo 🤗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
