import PropTypes from 'prop-types';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as External } from '../../assets/optimised.svg';
import './ProjectCard.css';

const ProjectCard = ({ project }) => (
  <div className="project">
    <div className="content">
      <img src={project.image} alt="Project demo image" />
      <div className="project-info">
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    </div>

    <ul className="tech-list">
      {project.techs.map((tech) => (
        <li key={tech}>
          <p>{tech}</p>
        </li>
      ))}
    </ul>
    <div className="useful-links">
      {project.githubUrl && (
        <a
          href="https://github.com/lucasfber"
          target="_blank"
          rel="noreferrer"
          title="View on GitHub"
        >
          <GitHubIcon />
        </a>
      )}
      {project.demoUrl && (
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          title="Live demo"
        >
          <External />
        </a>
      )}
    </div>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    techs: PropTypes.arrayOf(PropTypes.string),
    githubUrl: PropTypes.string,
    demoUrl: PropTypes.string,
  }).isRequired,
};
export default ProjectCard;
