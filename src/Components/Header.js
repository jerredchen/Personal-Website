import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

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
        </div>

        <div className="floating">
            <a className="float-icon" href="#education"><FontAwesomeIcon icon={faAngleDoubleDown} size="3x" /></a>
        </div>

        </header>
    );
}

export default Header; 