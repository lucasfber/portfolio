import PropTypes from 'prop-types';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Experience from '../components/experience/Experience';
import Hero from '../components/hero/Hero';
import Work from '../components/work/Work';

const Home = ({ isBlur }) => (
  <main className={isBlur ? 'blur' : ''}>
    <Hero />
    <About />
    <Experience />
    <Work />
    <Contact />
  </main>
);

Home.propTypes = {
  isBlur: PropTypes.bool.isRequired,
};

export default Home;
