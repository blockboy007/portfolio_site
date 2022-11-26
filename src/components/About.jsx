import React, { useState } from "react";
import "./About.css";


function About () {
  return(
    <div className="about-page">
      <div className="about-container">
        <h1>About Me</h1>
        <p>I am a self-taught full-stack web developer, looking to further my career in development.
         I am currently located in Washington State. I have a background in Physical Therapy and Exercise Science,
         but am looking to make a change as I have discovered Tech is something I am passionate about
         and interested pursuing a career in.
        </p>
        <p>
          If you would like to know more or would like to contact me, please use the social media links available or
          complete the contact form, under the "contact" tab.
        </p>
        <button className="download-btn">
          <a  href="bubbles.jpg" download>
            <i className="fas fa-download" />
            Download
          </a>
        </button>
      </div>
    </div>
  );
}
export default About;
