import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <section className="work">
      <h2>Some Things I’ve Built</h2>
      <div className="projects-wrapper">
        <div className="project">
          <h3>Project XYZ</h3>
          <img src="http://findmatthew.com/img/blog-1.jpg" alt="Some Image" />
          <p className="project-description">
            A nicer look at your GitHub profile and repository stats with data
            visualizations of your top languages and stars. Sort through your
            top repos by number of stars, forks, and size.
          </p>
          <ul className="tech-list">
            <li>
              <p>NextJS</p>
            </li>
            <li>
              <p>Node</p>
            </li>
            <li>
              <p>Stripe</p>
            </li>
          </ul>
          <div className="useful-links">
            <a href="#">View on GitHub</a>
            <a href="#">Live Demo</a>
          </div>
        </div>
        <div className="project">
          <h3>Project XYZ</h3>
          <img src="http://findmatthew.com/img/blog-1.jpg" alt="Some Image" />
          <p className="project-description">
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
            and more. Available on Visual Studio Marketplace, Package Control,
            Atom Package Manager, and npm.
          </p>
          <ul className="tech-list">
            <li>
              <p>NextJS</p>
            </li>
            <li>
              <p>Node</p>
            </li>
            <li>
              <p>Stripe</p>
            </li>
          </ul>
          <div className="useful-links">
            <a href="#">View on GitHub</a>
            <a href="#">Live Demo</a>
          </div>
        </div>
        <div className="project">
          <h3>Project XYZ</h3>
          <img src="http://findmatthew.com/img/blog-1.jpg" alt="Some Image" />
          <p className="project-description">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <ul className="tech-list">
            <li>
              <p>NextJS</p>
            </li>
            <li>
              <p>Node</p>
            </li>
            <li>
              <p>Stripe</p>
            </li>
          </ul>
          <div className="useful-links">
            <a href="#">View on GitHub</a>
            <a href="#">Live Demo</a>
          </div>
        </div>
      </div>

      <div>
        <Link to="/work">See all acomplished frontend challenges</Link>
      </div>
    </section>
  );
}
