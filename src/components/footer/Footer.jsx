import { ReactComponent as ScrollButton } from '../../assets/up-chevron.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as GmailIcon } from '../../assets/gmail.svg';
import { ReactComponent as CodepenIcon } from '../../assets/codepen.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <button className="btn-stt">
        <ScrollButton />
      </button>
      <ul className="social-links">
        <li>
          <a href="#">
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href="#">
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
        Design and Code by <span>Lucas Bertoldo</span> &copy; 2021
      </p>
    </footer>
  );
}
