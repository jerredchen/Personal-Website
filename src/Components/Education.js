function Education() {
    return (
        <section id="education">
        <div className="row education">
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
                        <p>Bachelor's in Computer Science - Concentrations in Artificial Intelligence, Modeling & Simulation</p>
                        <p>GPA: 3.87</p>
                    </div>
                </div>
            </div>

            <div className="coursework">
                <h1>Relevant<br/>Coursework</h1>
                <ul>
                    <li>Completed:<ul>
                        <li>ECE 3170: Circuits and Electronics</li>
                        <li>MATH 2552: Differential Equations</li>
                        <li>CS 1332: Data Structures and Algorithms</li>
                        <li>MATH 3670: Statistics</li>
                        <li>CS 2050: Discrete Mathematics</li>
                        <li>ME 3017: System Dynamics</li>
                        <li>CS 2110: Computer Organization and Programming</li>
                        <li>CS 3600: Introduction to Artificial Intelligence</li>
                    </ul></li>
                    <li>In Progress:<ul>
                        <li>CS 3630: Robotics and Perception</li>
                        <li>CS 3510: Design Analysis of Algorithms</li>
                        <li>CS 2200: Systems and Networks</li>
                    </ul></li>
                </ul>
            </div>
        </div>
        </section>
    );
}

export default Education;