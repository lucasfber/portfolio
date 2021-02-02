import { Link } from 'react-router-dom';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as External } from '../../assets/optimised.svg';
import './Work.css';

export default function Work() {
  return (
    <section className="work">
      <h2 className="section-title">some things i’ve built</h2>
      <div className="projects-grid">
        <div className="project">
          <div className="content">
            <img src="http://findmatthew.com/img/blog-1.jpg" alt="Some Image" />
            <div className="project-info">
              <h3>Project XYZ</h3>
              <p className="project-description">
                A nicer look at your GitHub profile and repository stats with
                data visualizations of your top languages and stars. Sort
                through your top repos by number of stars, forks, and size.
              </p>
            </div>
          </div>

          <ul className="tech-list">
            <li>
              <p>NextJS</p>
            </li>
            <li>
              <p>React</p>
            </li>
            <li>
              <p>Firebase</p>
            </li>
          </ul>
          <div className="useful-links">
            <a
              href="https://github.com/lucasfber"
              target="_blank"
              rel="noreferrer"
              title="View on GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              title="Live demo"
            >
              <External />
            </a>
          </div>
        </div>

        <div className="project">
          <div className="content">
            <img src="http://findmatthew.com/img/blog-1.jpg" alt="Some Image" />
            <div className="project-info">
              <h3>Project XYZ</h3>
              <p className="project-description">
                A nicer look at your GitHub profile and repository stats with
                data visualizations of your top languages and stars. Sort
                through your top repos by number of stars, forks, and size.
              </p>
            </div>
          </div>

          <ul className="tech-list">
            <li>
              <p>NextJS</p>
            </li>
            <li>
              <p>React</p>
            </li>
            <li>
              <p>Firebase</p>
            </li>
            <li>
              <p>Stripe</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
            <li>
              <p>Stripe</p>
            </li>
          </ul>
          <div className="useful-links">
            <a
              href="https://github.com/lucasfber"
              target="_blank"
              rel="noreferrer"
              title="View on GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              title="Live demo"
            >
              <External />
            </a>
          </div>
        </div>

        <div className="project">
          <div className="content">
            <img src="http://findmatthew.com/img/blog-1.jpg" alt="Some Image" />
            <div className="project-info">
              <h3>Project XYZ</h3>
              <p className="project-description">
                A nicer look at your GitHub profile and repository stats with
                data visualizations of your top languages and stars. Sort
                through your top repos by number of stars, forks, and size.
              </p>
            </div>
          </div>
          <ul className="tech-list">
            <li>
              <p>NextJS</p>
            </li>
            <li>
              <p>React</p>
            </li>
            <li>
              <p>Firebase</p>
            </li>
            <li>
              <p>Stripe</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
            <li>
              <p>Stripe</p>
            </li>
          </ul>
          <div className="useful-links">
            <a
              href="https://github.com/lucasfber"
              target="_blank"
              rel="noreferrer"
              title="View on GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              title="Live demo"
            >
              <External />
            </a>
          </div>
        </div>
      </div>
      <div className="btn-wrapper">
        <Link className="btn btn-see-more" to="/work">
          See more
        </Link>
      </div>
    </section>
  );
}
