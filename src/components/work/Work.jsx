import { Link } from 'react-router-dom';
import './Work.css';
import ProjectCard from '../project-card/ProjectCard';
import { PROJECTS } from '../../services/data';

export default function Work() {
  return (
    <section className="work">
      <h2 className="section-title">some things i’ve built</h2>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
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
