function Header() {
    return (
        <header id="home">

        <nav id="nav-links">
  
           <ul id="nav" className="nav">
                <li><a className="scroll" href="#projects">Projects</a></li>
                <li><a className="scroll" href="#skills">Skills</a></li>
                <li><a className="scroll" href="#experience">Experience</a></li>
                <li><a className="scroll" href="#education">Education</a></li>
           </ul>
  
        </nav>

  
        <div className="row banner">
           <div className="banner-text">
              <h1 className="responsive-headline">I'm Jerred Chen</h1>
              <h3>I'm a third-year Computer Science/Mechanical Engineering student at Georgia Tech.</h3>
              {/* <ul className="social">
                <li><a className="header-email" href="">
                    
                </a></li>
                <li><a className="header-linkedin" href="">
                    <img src="" alt="linkedin logo"/>
                </a></li>
                <li><a className="header-github" href="">
                    <img src="" alt="github logo"/>
                </a></li>
              </ul> */}
              {/* <i class="fas fa-envelope-square"></i> */}

           </div>
        </div>

        <div className="columns download">
            <p>
                <a href="" className="button"><i className="fa fa-download"></i>Download Resume</a>
            </p>
        </div>

        </header>
    );
}

export default Header; 