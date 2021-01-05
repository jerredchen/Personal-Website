import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

function Education() {
    return (
        <section id="education">
        <div className="row education">
            <div className="button-element">
                <p>
                    <a href="../downloads/Jerred_Chen_Resume.pdf" className="button"><FontAwesomeIcon icon={faFileDownload} /> Download Resume</a>
                </p>
            </div>
            <div className="education-block">
                <div className="row-item">
                    <div className="education-title">
                        <h1>Education</h1>
                    </div>
                    <div className="college-name">
                        <h3>Georgia Institute of Technology</h3>
                    </div>
                    <div className="date-container">
                        <span className="date">Expected Graduation Fall 2022</span>
                    </div>
                    <div className="college-info">
                        <p>Bachelor's in Mechanical Engineering</p>
                        <p>Bachelor's in Computer Science<br/>- Concentrations in Artificial Intelligence, Modeling & Simulation</p>
                        <p>GPA: 3.88</p>
                    </div>
                </div>
            </div>

            <div className="row-item">
                <h1>Relevant<br/>Coursework</h1>
                <div className="course-container">
                    <div className="course-block">
                        <p className="course-top">Completed:</p>
                        <p>ECE 3170: Circuits and Electronics</p>
                        <p>MATH 2552: Differential Equations</p>
                        <p>MATH 3670: Statistics</p>
                        <p>ME 3017: System Dynamics</p>
                        <p>CS 1332: Data Structures and Algorithms</p>
                        <p>CS 2050: Discrete Mathematics</p>
                        <p>CS 2110: Computer Organization and Programming</p>
                        <p>CS 3600: Introduction to Artificial Intelligence</p>
                    </div>
                    <div className="course-block">
                        <p className="course-top">In Progress:</p>
                        <p>CS 2200: Systems and Networks</p>
                        <p>CS 3510: Design Analysis of Algorithms</p>
                        <p>CS 3630: Robotics and Perception</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Education;