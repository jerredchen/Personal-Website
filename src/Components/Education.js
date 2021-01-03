function Education() {
    return (
        <section id="education">
        <div className="row education">
            <div className="button-element">
                <p>
                    <a href="/downloads/Jerred_Chen_Resume.pdf" className="button"><i className="fa fa-download"></i>Download Resume</a>
                </p>
            </div>
            <div className="education-block">
                <div className="row-item">
                    <div className="education-title">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="college-info">
                        <h3>Georgia Institute of Technology
                            <span>Expected Fall 2022</span>
                        </h3>
                        <p>Bachelor's in Mechanical Engineering</p>
                        <p>Bachelor's in Computer Science<br/>- Concentrations in Artificial Intelligence, Modeling & Simulation</p>
                        <p>GPA: 3.88</p>
                    </div>
                </div>
            </div>

            <div className="coursework">
                <h1>Relevant<br/>Coursework</h1>
                <div id="course-top" className="course-block">Completed:</div>
                <ul className="course-block">
                    <li>ECE 3170: Circuits and Electronics</li>
                    <li>MATH 2552: Differential Equations</li>
                    <li>MATH 3670: Statistics</li>
                    <li>ME 3017: System Dynamics</li>
                    <li>CS 1332: Data Structures and Algorithms</li>
                    <li>CS 2050: Discrete Mathematics</li>
                    <li>CS 2110: Computer Organization and Programming</li>
                    <li>CS 3600: Introduction to Artificial Intelligence</li>
                </ul>
                <div className="course-block">In Progress:</div>
                <ul className="course-block">
                    <li>CS 2200: Systems and Networks</li>
                    <li>CS 3510: Design Analysis of Algorithms</li>
                    <li>CS 3630: Robotics and Perception</li>
                </ul>
            </div>
        </div>
        </section>
    );
}

export default Education;