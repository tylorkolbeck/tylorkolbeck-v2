import React from 'react'

// Home Components
import LandingSection from '../Components/LandingSection/LandingSection'
import Section from '../Components/Section/Section'
import Work from '../Components/Work/Work'
import Error from '../Components/Error/Error'
import Skill from '../Components/Skill/Skill'
import About from '../Components/About/About'
import ContactForm from '../Components/ContactForm/ContactForm'
import Button from '../Components/Button/Button'
import Card from '../Components/Card/Card'
import { Link } from 'react-router-dom'

const sectionText = {
    workSectionCaption: () => <p>Here are a few recent projects that I have worked on. You can view my resume <Link to='/resume'>here.</Link></p>,
    headerSectionCaption: () => <p>These are my primary skill areas.</p>,
    landingSectionCaption: () => <h1 className="LandingSection__header-text"> Hi, my name is <span>Tylor Kolbeck</span>. I am a front-end React developer and UX designer.</h1>,
    contactSectionCaption: () => <p>If you have a question or want to collaborate on a project please fill out the form below.</p>
}

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

export default function Home() {
    return (
        <div>
            {/* LANDING SECTION */}
            <LandingSection introText={sectionText.landingSectionCaption()} />

            {/* WORK SECTION */}
            <Section title="work" theme='dark' headerCaption={sectionText.workSectionCaption()}>
                {workInfo.length > 0 ?
                    workInfo.map((work, index) => <Work key={work.title} index={index + 1} img={work.img} title={work.title} text={work.text} />)
                    : <Error>No Work Data</Error>}
            </Section>

            {/* SKILL SECTION */}
            <Section style={{ textAlign: 'center' }} title='skills' theme='light' headerCaption={sectionText.headerSectionCaption()}>
                {skillData.length > 0 ?
                    skillData.map((skill, index) => <Skill key={skill.name} delay={index * 180} percent={skill.percent} name={skill.name} />)
                    : <Error>No Skill Data</Error>}
            </Section>

            {/* ABOUT SECTION */}
            <Section title='about' theme='dark' style={{ paddingBottom: '0px' }}>
                <About />
            </Section>

            {/* CONTACT SECTION  */}
            <Section title='contact' theme='light' headerCaption={sectionText.contactSectionCaption()}>
                <ContactForm />
            </Section>

            {/* BLOG SECTION */}
            <Section title='blog' theme='dark'>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {cardData.length > 0 ?
                        cardData.map((card, index) => <Card key={index} delay={index * 180} index={index + 1} title={card.title} text={card.text} />)
                        : <Error>No Card Data</Error>}
                </div>
                <div style={{ width: '100%', textAlign: 'center', padding: '50px' }}>
                    <Button text='More Posts' type='btn-primary'/>
                </div>
            </Section>
        </div>
    )
}














