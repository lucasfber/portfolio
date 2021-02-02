import { ReactComponent as ScrollButton } from '../../assets/up-chevron.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as GmailIcon } from '../../assets/gmail.svg';
import { ReactComponent as CodepenIcon } from '../../assets/codepen.svg';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <button className="btn-stt" type="button">
        <ScrollButton onClick={scrollToTop} />
      </button>
      <ul className="social-links">
        <li>
          <a href="#/">
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href="#/">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href="#/">
            <CodepenIcon />
          </a>
        </li>
        <li>
          <a href="mailto:lucas.fber@gmail.com">
            <GmailIcon />
          </a>
        </li>
      </ul>
      <p>
        Design and Code by{' '}
        <span>
          <a
            className="repo-link"
            href="https://github.com/lucasfber/portfolio"
          >
            Lucas Bertoldo{' '}
          </a>
        </span>
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
