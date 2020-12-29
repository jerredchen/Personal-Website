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
                        <h3>Languages</h3>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C/C++</li>
                            <li>MATLAB</li>
                            <li>HTML/CSS</li>
                            <li>Bash</li>
                        </ul>
                    </div>
                    <div id="skill-child" className="software">
                        <h3>Software</h3>
                        <ul>
                            <li>Drake</li>
                            <li>OMPL</li>
                            <li>Numpy</li>
                            <li>Pandas</li>
                            <li>Scrapy</li>
                            <li>Selenium</li>
                            <li>Matplotlib</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div id="skill-child" className="tech">
                        <h3>Technologies</h3>
                        <ul>
                            <li>Git</li>
                            <li>Linux</li>
                            <li>Jupyter Notebook</li>
                            <li>Wireshark</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Skills;