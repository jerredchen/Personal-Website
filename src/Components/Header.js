function Header() {
    return (
        <header id="home">

        <nav id="nav-links">
  
           <ul id="nav" className="nav">
              <li><a className="fadeIn" href="#education">Resume</a></li>
              <li><a className="fadeIn" href="#projects">Projects</a></li>
           </ul>
  
        </nav>

        <hr/>
  
        <div className="row banner">
           <div className="banner-text">
              <h1 className="responsive-headline">I'm Jerred Chen</h1>
              <h3>I'm a third-year ME/CS major at Georgia Tech.</h3>
              <ul className="social">
                <li><a className="header-email" href="">
                    <img src="" alt="email logo"/>
                </a></li>
                <li><a className="header-linkedin" href="">
                    <img src="" alt="linkedin logo"/>
                </a></li>
                <li><a className="header-github" href="">
                    <img src="" alt="github logo"/>
                </a></li>
              </ul>
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