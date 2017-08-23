import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Education from './components/Education';


const App = props => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;


    return (
      <div className="container">
        <div className="row">
          <aside className="col-md-4">
            <div className="inner">
              <Profile profileData={profileData} />
            </div>
          </aside>
          <main className="col-md-8">
                <div className="inner">
                  <About aboutData={aboutData} />
                  <Work workData={workData} />
                  <Skills skillsData={skillsData} />
                  <Education educationData={educationData} />
                </div>
          </main>

        </div>
      </div>
    );
  }


export default App;
