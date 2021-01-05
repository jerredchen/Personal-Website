function Skills() {
    return (
        <section id="skills">
        <div className="row skills">
            <div className="skills-title">
                <h1><span>Skills</span></h1>
            </div>

            <div className="outer skills container">
                <div className="skills-container">
                    <div id="skill-child" className="languages">
                        <h3 className="skill-block">Languages</h3>
                        <div className="skill-block">
                            <p>Python</p>
                            <p>Java</p>
                            <p>C/C++</p>
                            <p>MATLAB</p>
                            <p>HTML/CSS</p>
                            <p>Bash</p>
                        </div>
                    </div>
                    <div id="skill-child" className="software">
                        <h3 className="skill-block">Software</h3>
                        <div className="skill-block">
                            <p>Drake - Robotics Simulation</p>
                            <p>Open Motion Planning Library</p>
                            <p>Numpy</p>
                            <p>Pandas</p>
                            <p>Scrapy</p>
                            <p>Selenium</p>
                            <p>Matplotlib</p>
                            <p>React</p>
                        </div>
                    </div>
                    <div id="skill-child" className="tech">
                        <h3 className="skill-block">Technologies</h3>
                        <div className="skill-block">
                            <p>Git</p>
                            <p>Linux</p>
                            <p>Jupyter Notebook</p>
                            <p>Wireshark</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Skills;