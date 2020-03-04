import React from 'react'
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
    workSectionCaption: () => <p>Here are a few projects that I am currently working on. You can view my resume <Link to='/resume'>here.</Link></p>,
    headerSectionCaption: () => <p>These are my primary skill areas.</p>,
    landingSectionCaption: () => <h1 className="LandingSection__header-text"> Hi, my name is <span>Tylor Kolbeck</span>. I am a Front End Web Developer.</h1>,
    contactSectionCaption: () => <p>If you have a question or want to collaborate on a project please send me a message!</p>
}

const workInfo = [
    {
        img: 'wildside_mockup.jpg',
        title: 'UI / UX Developer',
        text: `<p>I am currently working for Jack Henry and Asssociates as a UI/UX developer.  I am responsible for producing and maintaining a functional prototype with which our team deploys to Credit Unions across the US for user testing.</p>
                <ul>
                    <li>React</li>
                    <li>Prototyping</li>
                    <li>User Testing</li>
                    <li>Sketch</li>
        
              `
    },
    {
        img: 'wildside_mockup.jpg',
        title: 'WildsideVo.com',
        text: `<p>WildsideVO is a voice over portfolio designed for a client to show case his work and passion for wildlife.  Created using React framework and designed to fil all screen sizes.</p>
                <ul>
                    <li>React</li>
                    <li>Responsive</li>
                </ul>
                `
    },
    {
        img: 'petcare_mockup.png',
        title: 'JenniferInglePetCare.com',
        text: `<p>Created for a client to market their pet sitting business as well provide a place for customers to request service. Created using React framework, deployed on a Digital Ocean VM and designed to fit all screen sizes.</p>
                <ul>
                    <li>Front End - React</li>
                    <li>Responsive</li>
                    <li>Email Services</li>
                </ul>
                `
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
        title: 'Coming Soon',
        text: 'Please be patient while I get my blog posts connected to my website.',
        image: ''
    },
    {
        title: 'Coming Soon',
        text: 'Please be patient while I get my blog posts connected to my website.',
        image: ''
    },
    {
        title: 'Coming Soon',
        text: 'Please be patient while I get my blog posts connected to my website.',
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

            {/* CONTACT SECTION  */}
            <Section title='contact' theme='dark' headerCaption={sectionText.contactSectionCaption()}>
                <ContactForm />
            </Section>

            {/* BLOG SECTION */}
            <Section title='blog' theme='light'>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {cardData.length > 0 ?
                        cardData.map((card, index) => <Card key={index} delay={index * 180} index={index + 1} title={card.title} text={card.text} />)
                        : <Error>No Card Data</Error>}
                </div>
                <div style={{ width: '100%', textAlign: 'center', padding: '50px' }}>
                    <Button text='More Posts' type='btn-primary'/>
                </div>
            </Section>


            {/* ABOUT SECTION */}
            <Section title='about' theme='dark' style={{ paddingBottom: '0px' }}>
                <About />
            </Section>


        </div>
    )
}














