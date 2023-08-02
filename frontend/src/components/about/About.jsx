import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpeg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Meet Our Team" subtitle="We are Team - 54" />
            <p>
              <b>Umais Rifah</b> - B.Tech fourth year
            </p>
            <p>
              <b>Yashvi Singh</b> - B.Tech fourth year
            </p>
            <p>
              <b>Sandhya Rakhunde</b> - B.E. fourth year
            </p>
            <p>
              <b>Shreya Singh</b> - B.Tech third year
            </p>
            <p>
              <b>Kaveri Raut</b> - B.E. fourth year
            </p>
            <p>
              <b>Nikita Shitole</b> - B.Tech fourth year
            </p>
          </div>
          <div className="about2">
            <img src="./about2.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About
