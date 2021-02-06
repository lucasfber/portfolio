import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './Work.css';
import ProjectCard from '../project-card/ProjectCard';
import { PROJECTS } from '../../services/data';

export default function Work({ myRef }) {
  return (
    <section className="work" ref={myRef}>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h2 className="section-title">some things i’ve built</h2>
      </ScrollAnimation>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ScrollAnimation animateIn="fadeIn" animateOnce delay={500}>
            <ProjectCard key={project.id} project={project} />
          </ScrollAnimation>
        ))}
      </div>
      <div className="btn-wrapper">
        <Link className="btn btn-see-more" to="/work">
          See more
        </Link>
      </div>
    </section>
  );
}
