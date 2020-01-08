import React, { useState } from 'react';
import './App.css';
import "animate.css/animate.min.css";

import HeaderNavigation from './Components/HeaderNavigation/HeaderNavigation'
import LandingSection from './Components/LandingSection/LandingSection'
import Section from './Components/Section/Section'
import Work from './Components/Work/Work'
import Error from './Components/Error/Error'
import Skill from './Components/Skill/Skill'
import About from './Components/About/About'
import Form from './Components/Form/Form'
import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'
import SlideOutNavigation from './Components/SlideOutNavigation/SlideOutNavigation'
import Button from './Components/Button/Button'


const headerLinks = [
  {
    to: 'work',
    text: 'Work'
  },
  {
    to: 'skills',
    text: 'Skills'
  },
  {
    to: 'about',
    text: 'About'
  },
  {
    to: 'contact',
    text: 'Contact'
  },
  {
    to: 'blog',
    text: 'Blog'
  }
]

const workInfo = [
  {
    img: 'image1.jpg',
    title: 'Project Title Here',
    text: 'I m the co-founder of Gruntwork, a company that helps startups get up and running on AWS with DevOps best practices and world-class infrastructure. Our mission is to make it an order of magnitude easier to understand, develop, and deploy software. '
  },
  {
    img: 'image2.jpg',
    title: 'Another Project Title',
    text: 'This book is the "Hello, World" tutorial for building products, technologies, and teams in a startup environment. I based it off of my own experiences, as well as interviews with programmers from some of the most successful startups of the last decade, including Google, Facebook, LinkedIn, Twitter, GitHub, Stripe, Instagram, AdMob, Pinterest, and many others. '
  },
  {
    img: 'image3.jpg',
    title: 'Startup Essentials',
    text: 'This free e-book is a curated collection of chapters from the O\'Reilly Business Library. It includes a chapter from my book, Hello, Startup. '
  },
]

const introText = '<h1 class="LandingSection__header-text"> Hi, my name is <span>Tylor Kolbeck</span>. I am a front-end React developer and UX designer.</h1>'

const skillData = [
  {
    percent: 80,
    name: 'React'
  },
  {
    percent: 90,
    name: 'HTML/CSS'
  },
  {
    percent: 70,
    name: 'Javascript'
  },
  {
    percent: 60,
    name: 'Node.js'
  },
  {
    percent: 60,
    name: 'UX Design'
  }
]

const cardData = [
  {
    title: 'Another Title',
    text: 'This is a short description of the post. You will have to click here to read more...',
    image: ''
  },
  {
    title: 'Some Title Here',
    text: 'This is a short description of the post. You will have to click here to read more...',
    image: ''
  },
  {
    title: 'Blog Post Title',
    text: 'This is a short description of the post. You will have to click here to read more...',
    image: ''
  }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleNavigationHandler() {
    setMenuOpen(!menuOpen)
  }


  return (
    <div className="App">
      {menuOpen ? <SlideOutNavigation links={headerLinks} closeMenu={() => setMenuOpen(false)}/> : null}

      <HeaderNavigation links={headerLinks} toggleNavigation={toggleNavigationHandler}/>
      {/* {menuOpen ? <Backdrop /> : null} */}

      <LandingSection introText={introText} />

      <Section title="work" theme='dark' headerCaption="Here are a few recent projects that I have worked on.  If you would like to see more please email me.">
        {workInfo.length > 0 ? 
          workInfo.map((work, index) => <Work key={work.title} index={index + 1} img={work.img} title={work.title} text={work.text} />) 
          : <Error>No Work Data</Error>}
      </Section>

      <Section style={{textAlign: 'center'}} title='skills' theme='light' headerCaption='These are primarily the technologies that I work with and my proficiency with each.'>
          {skillData.length > 0 ? 
          skillData.map((skill, index) => <Skill key={skill.name} delay={index * 180}percent={skill.percent} name={skill.name} />) 
          : <Error>No Skill Data</Error>}
      </Section>

      <Section title='about' theme='dark' style={{paddingBottom: '0px'}}>
            <About />
      </Section>

      <Section title='contact' theme='light' headerCaption='If you want to get in touch to collaborate on a project please fill out the form below.'>
            <Form />
      </Section>

      <Section title='blog' theme='dark' >
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
              {cardData.length > 0 ? 
                cardData.map((card, index) => <Card key={index} delay={index * 180}index={index + 1} title={card.title} text={card.text}/>)
              : <Error>No Card Data</Error>}
            </div>
            <div style={{width: '100%', textAlign: 'center', padding: '50px'}}>
              <Button text='See All Posts'/>
            </div>
      </Section>

      <Footer />

    </div>
  );
}

export default App;
