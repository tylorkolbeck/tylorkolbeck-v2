import React from "react"
import "./Card.scss"
import ScrollAnimation from "react-animate-on-scroll"

export default function Card({ index, title, text, delay, imgSrc, link }) {
  console.log(link)
  return (
    <ScrollAnimation animateIn="fadeInRight" animateOnce delay={delay}>
      <div className="Card__container">
        <div className="Card__index-container">
          <h1>{`0${index}`}</h1>
        </div>

        <div className="Card__content-container">
          <div
            className="Card__image-container"
            style={{ background: `url(${imgSrc})` }}
          >
            {/* <img src={imgSrc} alt="presentational"></img> */}
          </div>
          <div className="Card__text u-m-t-sm">
            <a href={link} target="_BLANK" rel="noreferrer noopener">
              Visit Repo
            </a>
            <h2>{title}</h2>

            <span>Date Updated</span>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}
