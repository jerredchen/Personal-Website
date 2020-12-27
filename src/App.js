// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Education/>
        <Experience/>
        <Skills/>
        <Projects/>
      </div>
    )
  }
}

export default App;
