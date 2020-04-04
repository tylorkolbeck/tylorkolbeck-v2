import React from "react"
import "./LandingSection.scss"

import ScrollAnimation from "react-animate-on-scroll"
import { useHistory } from "react-router-dom"
// import HeaderImage from '../../assets/images/LandingSectionImage1.jpg'
import ImageOverlay from "../UI/ImageOverlay/ImageOverlay"
import Button from "../Button/Button"

function LandingSection({ introText }) {
  let history = useHistory()
  return (
    <div className="LandingSection__container">
      <div>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <div className="LandingSection__content-header">{introText}</div>
        </ScrollAnimation>
        <div className="LandingSection__actionButtons">
          <Button
            text="View Resume"
            onClick={() => history.push("/resume")}
            type="btn-primary"
          />
        </div>
      </div>
      <ImageOverlay opacity={0.5} />
    </div>
  )
}

export default LandingSection
