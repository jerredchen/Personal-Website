import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <header id="home">

        <nav id="nav-links">
  
           <ul id="nav" className="nav">
                <li><a className="scroll" href="#projects">Projects</a></li>
                <li><a className="scroll" href="#education">Resume</a></li>
           </ul>
  
        </nav>

  
        <div className="intro-container">
           <div className="intro-item">
              <h1>I'm Jerred Chen</h1>
              <h3>I'm a third-year Computer Science/Mechanical Engineering student at Georgia Tech.</h3>
           </div>
           <div className="icons">
                <a href="mailto:jchen788@gatech.edu" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                </a>
                <a href="https://www.linkedin.com/in/jerredchen00/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/jerredchen" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
           </div>
        </div>

        <div className="floating">
            <a className="float-icon" href="#education"><FontAwesomeIcon icon={faAngleDoubleDown} size="3x" /></a>
        </div>

        </header>
    );
}

export default Header; 