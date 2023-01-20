import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import earthImage from '../earth.jpg';
import spaceImage from '../space.jpg';
import computerImage from '../computer.jpg';
import mountainImage from '../mountains.jpg';


function Home() {
  return (
    <body className="home-body">
      <div className="landing-page">
        <panel className="info-panel">
          <div className="info-content">
            <h1>Welcome to ICONIX</h1>
            <ul>
              <li>I am a full-stack web developer, focusing on websites and other tools.</li>
              <li>I am dedicated and driven to grow in the web development industry and pursue a career.</li>
              <li>Contact me if you're looking to build a website/project, or if you would like to know more about me.</li>
              <li>Looking forward to working with you on future projects.</li>
            </ul>
            <section className="box">
               <div className="middle">
                <a className="btn" href="https://www.linkedin.com/in/luke-reardon-333b001a6/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a className="btn" href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn" href="#">
                  <i className="fab fa-google"></i>
                </a>
                <a className="btn" href="https://github.com/blockboy007">
                  <i className="fab fa-github"></i>
                </a>
               </div>
            </section>
          </div>
        </panel>

      </div>

    </body>

  );
}

export default Home;
