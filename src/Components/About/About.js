import React from "react";
import "./About.scss";
import reactHtmlParser from "react-html-parser";
import ScrollAnimation from "react-animate-on-scroll";
import profileImage from "../../assets/images/profile_one.jpg";

export default function About() {
  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
      <div className="About__container">
        <div className="About__image-container">
          <div className="About-img">
            <img
              src={profileImage}
              alt="profile"
              style={{ height: "inherit" }}
            ></img>
          </div>
        </div>

        <div className="About__text-container">
          {reactHtmlParser(
            `<p>Hello, my name Is Tylor. I live in San Diego with my wife Kaila, two dogs and conure. I am a 12 year Navy veteran that has changed careers to pursue my dream of being a web developer.  <p>I have spent over 5 years self learning web development.  I used my experience as an instructor and teacher to build my own web development curriculunm. After years of hard work I landed a job at Jack Henry And Assosciates as a Senior UI/UX Developer.</p> <p>I have a passion for teaching and someday hope to spend most of my time teaching others what I have learned about web development.</p>`
          )}
        </div>
      </div>
    </ScrollAnimation>
  );
}
