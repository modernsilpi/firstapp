import React from "react";
import group from "./group.jpg";
// import group from "./images/group-image.png";
import satish from "./gunta1.jpg";
import gunta2 from "./gunta2.jpg";
import gunta3 from "./gunta3.jpg";
import gunta4 from "./gunta4.jpg";
// import satish from "./images/satish1.jpeg";
// import gunta2 from "./images/sekhar2.jpeg";
// import gunta3 from "./images/sekhar3.jpeg";
// import gunta4 from "./images/sekhar5.png";
import gunta5 from "./gunta5.jpg";
import gunta6 from "./gunta6.jpg";
import "./about.scss";
import { BsLinkedin } from "react-icons/bs";
import FooterBar from "../home/footer_bar/footer_bar";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <p className="about-head">
          ABOUT &nbsp;<b>SPOTMIES</b>
        </p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          optio, incidunt et nam provident exercitationem quo dolor error
          facilis fugit? Qui dignissimos, ipsa quam quaerat ex nisi. Eum, dicta
          laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aperiam optio, incidunt et nam provident exercitationem quo dolor
          error facilis fugit? Qui dignissimos, ipsa quam quaerat ex nisi. Eum,
          dicta laborum!Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aperiam optio, incidunt et nam provident exercitationem quo
          dolor error facilis fugit? Qui dignissimos, ipsa quam quaerat ex nisi.
          Eum, dicta laborum.
        </p>
      </div>
      {/* 
      <div className="about-container">
        <p className="about-head">Vision</p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          optio, incidunt et nam provident exercitationem quo dolor error
          facilis fugit? Qui dignissimos, ipsa quam quaerat ex nisi. Eum, dicta
          laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aperiam optio, incidunt et nam provident exercitationem quo dolor
          error facilis fugit? Qui dignissimos, ipsa quam quaerat ex nisi. Eum,
          dicta laborum!Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aperiam optio, incidunt et nam provident exercitationem quo
          dolor error facilis fugit? Qui dignissimos, ipsa quam quaerat ex nisi.
          Eum, dicta laborum!Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aperiam optio, incidunt et nam provident exercitationem quo
          dolor error facilis fugit? Qui dignissimos, ipsa quam quaerat ex nisi.
          Eum, dicta laborum!
        </p>
      </div>

      <div className="about-container">
        <p className="about-head">Mission</p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          optio, incidunt et nam provident exercitationem quo dolor error
          facilis fugit? Qui dignissimos, ipsa quam quaerat ex nisi. Eum, dicta
          laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aperiam optio, incidunt et nam provident exercitationem quo dolor
          error facilis fugit? Qui dignissimos, ipsa quam quaerat ex nisi. Eum,
          dicta laborum!Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aperiam optio, incidunt et nam provident exercitationem quo
          dolor error facilis fugit? Qui dignissimos, ipsa quam quaerat ex nisi.
          Eum, dicta laborum!Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aperiam optio, incidunt et nam provident exercitationem quo
          dolor error facilis fugit? Qui dignissimos, ipsa quam quaerat ex nisi.
          Eum, dicta laborum!
        </p>
      </div> */}
      <section className="desc">
        <div className="desc-img-m">
          <img src={group} alt="meeting" />
        </div>
        <div className="transperent-card">
          <p className="text-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            optio, incidunt et nam provident exercitationem quo dolor error
            facilis fugit? Qui dignissimos, ipsa quam quaerat ex nisi. Eum,
            dicta laborum!
          </p>
        </div>
        <div className="img-web">
          <img src={group} alt="meeting" />
        </div>
      </section>

      <section className="sec2">
        <p className="about-head">
          <u>Meet Our Team</u>
        </p>
        <div className="team-div">
          <div className="desig1">
            <img src={satish} alt="name" />
            <div className="desig desig-gwr">
              <div>
                <p className="mem-name">Satish kumar saride</p>
                <p className="mem-deg">Designation</p>
              </div>
              <div className="li-icon-div">
                <BsLinkedin className="li-icon" />
              </div>
            </div>
          </div>
          <div className="desig1">
            <img src={gunta2} alt="name" />
            <div className="desig desig-gwr">
              <div>
                <p className="mem-name">Sekhar Javvadi</p>
                <p className="mem-deg">Designation</p>
              </div>
              <div className="li-icon-div">
                <BsLinkedin className="li-icon" />
              </div>
            </div>
          </div>
          <div className="desig1">
            <img src={gunta3} alt="name" />
            <div className="desig desig-gwr">
              <div>
                <p className="mem-name">Naveen kumar</p>
                <p className="mem-deg">Designation</p>
              </div>
              <div className="li-icon-div">
                <BsLinkedin className="li-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-div">
          <div className="desig1">
            <img src={gunta4} alt="name" />
            <div className="desig desig-gwr">
              <div>
                <p className="mem-name">Hemanth veeranala</p>
                <p className="mem-deg">Designation</p>
              </div>
              <div className="li-icon-div">
                <BsLinkedin className="li-icon" />
              </div>
            </div>
          </div>
          <div className="desig1">
            <img src={gunta5} alt="name" />
            <div className="desig desig-gwr">
              <div>
                <p className="mem-name">Gowri shankar</p>
                <p className="mem-deg">Co-Founder</p>
              </div>
              <div className="li-icon-div">
                <BsLinkedin className="li-icon" />
              </div>
            </div>
          </div>
          {/* <div className="Li-hover">
              <BsLinkedin className="li-icon" />
            </div> */}

          <div className="desig1">
            <img src={gunta6} alt="name" />
            <div className="desig desig-gwr">
              <div>
                <p className="mem-name">Teja pekala</p>
                <p className="mem-deg">Designation</p>
              </div>
              <div className="li-icon-div">
                <BsLinkedin className="li-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section></section>
      <FooterBar />
    </div>
  );
}

export default About;
