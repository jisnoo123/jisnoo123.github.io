import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import Projects from './components/Projects';
import Education from './components/Education';
import Honors from './components/Honors';
import Specializations from './components/Specializations';
import Trivia from './components/Trivia';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <News />
        <Projects />
        <Education />
        <Honors />
        <Specializations />
        <Trivia />
      </main>
      <Footer />
    </>
  );
}

export default App;
