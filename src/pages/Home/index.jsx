import React from "react"
import './index.scss'
import { Animate } from 'react-simple-animate'
import { useNavigate } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Home = () => {

  const navigate = useNavigate()

  const handleNavigateToContactMePage = () => {

    navigate('/contact')
  }

  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm Binyam.
          <br/>
          Frontend & Backend Developer
        </h1>
      </div>
      <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform: 'translateY(550px)'
      }}
      end={{
        transform: 'translateX(0px)'
      }}
      >
        <div className="contact-me">
          <div className="contact-me_buttons-wrapper">
            <button onClick={handleNavigateToContactMePage}>Hire Me</button>
            <a href="https://docs.google.com/document/d/1LUtkc74SqQvOT5Al-XEE6U6NGszIsDc4W5EctBV-2o0/edit?usp=sharing">Download Resume</a>
          </div>
          <div className="contact-me_socials-wrapper">
            <a href="https://www.linkedin.com/in/binyam-d-268208167/">
              <FaLinkedin size={32}/>
            </a>
            <a href="https://github.com/binyamdawit">
              <FaGithub size={32}/>
            </a>
          </div>
        </div>
      </Animate>
    </section>
  )
}

export default Home