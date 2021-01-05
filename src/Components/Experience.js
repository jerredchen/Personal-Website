function Experience() {
    return (
        <section id="experience">
        <div className="row work">

            <div className="experience-header">
                <h1><span>Research/Work<br/>Experience</span></h1>
            </div>

            <div className="experience-content">
                <h3>Laboratory of Intelligent Decisions and Autonomous Robots</h3>
                <span>Aug. 2019 - Present</span>
                <div className="exp-block">
                    <p>Undergraduate Researcher</p>
                    <ul>
                        <li>Implemented RRT algorithm to perform path-planning and collision avoidance into KUKA arm simulation</li>
                        <li>Integrated OMPL into Drake software for the LIDAR Lab to use as reference</li>
                        <li>Improved functionality of upper body robot with an object-oriented script for the motors</li>
                        <li>Tuned the PID gains in actuators that control the movement of the spine of the upper body</li>
                    </ul>
                </div>
                <h3>Data-Driven Computing REU, University of Houston</h3>
                <span>June 2020 - Aug. 2020</span>
                <div className="exp-block">
                    <p>NSF REU Trainee</p>
                    <ul>
                        <li>Received 2nd best presentation for Using Anomaly Detection to Differentiate between Short and Long Chains</li>
                        <li>Developed cybersecurity algorithm detecting stepping-stone intruder chains</li>
                        <li>Designed a simulated user program to collect experimental data with 200% increased efficiency</li>
                        <li>Utilized Numpy, Pandas, Scikit-learn and Jupyter Notebook for analysis on data packets in SSH connections</li>
                    </ul>
                </div>
                <h3>Manufacturing Systems Optimization Lab</h3>
                <span>Aug. 2018 - May 2019</span>
                <div className="exp-block">
                    <p>Undergraduate Researcher</p>
                    <ul>
                        <li>Developed own simulations of industrial manufacturing systems through case studies</li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Experience;