import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import nftApp from '../nft-app.png';
import dirtImage from '../excavation.jpg';
import eventImage from '../table.jpg';




function Portfolio() {
  const [trueOne, setTrueOne] = useState(false);
  const [hoverOne, setHoverOne] = useState(false);
  const [trueTwo, setTrueTwo] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [trueThree, setTrueThree] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);

  function mouseEnterOne() {
    setHoverOne(true);
  }
  function mouseLeaveOne() {
    setHoverOne(false);
  }
  function mouseEnterTwo() {
    setHoverTwo(true);
  }
  function mouseLeaveTwo() {
    setHoverTwo(false);
  }
  function mouseEnterThree() {
    setHoverThree(true);
  }
  function mouseLeaveThree() {
    setHoverThree(false);
  }

  const nftAppLink = (
    <div className="hoveredIcon">
      <a className="icon" href="https://github.com/blockboy007">
        <i className="fab fa-github"></i>
      </a>
      See code
    </div>
  );
  const weddingSite = (
    <div id="multipleIcons">
      <div className="siteLinks">
        <a className="icon" href="https://www.tristaanne.com">
          <i className="fas fa-globe"></i>
        </a>
        To Website
      </div>
      <div className="siteLinks">
        <a className="icon" href="https://github.com/blockboy007">
          <i className="fab fa-github"></i>
        </a>
        See code
      </div>
    </div>
  );
  const excavationSite = (
    <div id="multipleIcons">
      <div className="siteLinks">
        <a className="icon" href="https://www.tristaanne.com">
          <i className="fas fa-globe"></i>
        </a>
        To Website
      </div>
      <div className="siteLinks">
        <a className="icon" href="https://github.com/blockboy007">
          <i className="fab fa-github"></i>
        </a>
        See code
      </div>
    </div>
  );


  return (
    <body className="portfolioBody">
      <h1 className="portfolioHeader">Projects</h1>
      <div className="portfolioLinks">

        <div className="portfolioLink" onMouseOver={mouseEnterTwo} onMouseLeave={mouseLeaveTwo}>
          <h1>Events Site</h1>
          <div className="portfolioLinkImage">
            <img className="projectImage" src={eventImage} alt=""/>
            <div className='shadow'/>
          </div>
          <div className="hoveredLinks">
            {hoverTwo && weddingSite}
          </div>
        </div>

        <div className="portfolioLink" id="app-site" onMouseOver={mouseEnterOne} onMouseLeave={mouseLeaveOne}>
          <h1>NFT Viewer application</h1>
          <div className="portfolioLinkImage">
            <img className="projectImage" src={nftApp} alt=""/>
            <div id="nft-shadow" className='shadow'/>
          </div>
          <div className="hoveredLinks">
            {hoverOne && nftAppLink}
          </div>
        </div>

        <div className="portfolioLink" onMouseOver={mouseEnterThree} onMouseLeave={mouseLeaveThree}>
          <h1>Excavation Site</h1>
          <div className="portfolioLinkImage">
            <img src={dirtImage} alt=""/>
            <div className='shadow'/>
          </div>
          <div className="hoveredLinks">
            {hoverThree && weddingSite}
          </div>
        </div>

      </div>
    </body>
  );
}

export default Portfolio;
