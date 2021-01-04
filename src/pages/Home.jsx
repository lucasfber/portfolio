import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Experience from '../components/experience/Experience';
import Hero from '../components/hero/Hero';
import Work from '../components/work/Work';

export default function Home({ isBlur }) {
  return (
    <main className={isBlur ? 'blur' : ''}>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
