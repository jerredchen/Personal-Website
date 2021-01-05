import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <section id="footer">
            <div className="block">
                <div className="icons">
                    <a href="mailto:jchen788@gatech.edu" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                    <a href="https://www.linkedin.com/in/jerredchen00/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href="https://github.com/jerredchen" target="_blank">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
                <span>Built by Jerred Chen &#169; 2021</span>
            </div>
        </section>
    );
}

export default Footer;