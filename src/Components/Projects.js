import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Projects() {
    return (
        <section id="projects">

        <div className="row">
            <div className="projects-title">
                <h1><span>Projects</span></h1>
            </div>

           <div className="portfolio-container">
                <a>
                    <h3><FontAwesomeIcon icon={ faCaretRight} /> Movie That Pauses When You Look Away</h3></a>
                <span>(In-Progress)</span>
                <div className="project-block">
                    <ul>
                        <li>Pauses video or movie when webcam detects user looking away from screen</li>
                        <li>Utilize FaceNet deep neural network model with Keras software to perform facial recognition</li>
                        <li>Designed data set of different facial angles to be used in training and validation</li>
                        <li>Integrate neural network model into real-time computer vision detection using Tensorflow</li>
                    </ul>
                </div>
                <a href="https://github.com/jerredchen/RRT-KUKA-Simulation" target="_blank">
                    <h3><FontAwesomeIcon icon={ faCaretRight} /> RRT Path-Planning for KUKA Arm</h3></a>
                <span>Aug. 2020 - Dec. 2020</span>
                <div className="project-block">
                    <ul>
                        <li>Developed simulation in Drake for a KUKA robot arm's end-effector to reach a point in Euclidean space</li>
                        <li>Implemented RRT to search the joint-configuration space and output a solution of joint configurations to reach desired destination</li>
                        <li>Created publisher-subscriber systems between the simulation visualizer and the path-planner using LCM (Lightweight Communication Marshalling)</li>
                        <li>Integrated the Open Motion Planning Library's RRT algorithm into the Drake software</li>
                    </ul>
                </div>
                <a href="https://github.com/jerredchen/UH-CS-REU-2020" target="_blank">
                    <h3><FontAwesomeIcon icon={ faCaretRight} /> Simulated User Activity Program</h3></a>
                <span>June 2020 - Aug. 2020</span>
                <div className="project-block">
                    <ul>
                        <li>Simulated multiple users typing simultaneously across several terminals for faster data collection</li>
                        <li>Implemented multithreading to represent each user’s typing activity on an individual thread</li>
                        <li>Modeled pauses between keystrokes by sampling from probability distributions of human users’ data</li>
                        <li>Designed program to automatically log data from each simulated user in a Pandas dataframe</li>
                    </ul>
                </div>
            </div>
        </div>
     </section>
    );
}

export default Projects;