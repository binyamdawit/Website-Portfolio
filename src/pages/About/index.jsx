import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'
import { Animate } from 'react-simple-animate'
import './index.scss'
import { faCss3, faAngular, faHtml5, faGitAlt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import selfImage from '../../images/pic1-mod.png'

const personalInfo = [
  {
    label: "Name",
    value: "Binyam Dawit"
  },
  {
    label: "Age",
    value: "22"
  },
  {
    label: "Location",
    value: "Brandon, Manitoba"
  },
  {
    label: "Email",
    value: "binyamdawit17@gmail.com"
  },
  {
    label: "Mobile Phone Number",
    value: "+1(204)721-3260"
  },
]

const About = () => {

  return(
    <section id="about" className="about">
      <PageHeaderContent
      headerText = "About me"
      icon={<BsInfoCircleFill size={40}/>}
      />
      <div className='about_content'>
        <div className='about_content_personalWrapper'>
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateX(-1280px)'
        }}
        end={{
          transform: 'translateX(0px)'
        }}
        >
        <h3>Frontend & Backend Developer</h3>
        <p>I'm passionate about creating amazing web projects and focusing on problem solving to create a fully 
          functional product. I am seeking a role in established tech company with opportunity to work amazing 
          projects that brings challenges to the job, alongside with co-workers that to tackle these obstacles 
          by making the job more exciting. 
        </p>
        <p>I'm confidence with, naturally curious, and perpetually working on improving my programming skills</p>
        <p><b>Here's a little bit about myself:</b> I currently live in Brandon, Manitoba and moved here when I was 7 years old.
          I'm a caring person, hardworker, film fanatic, and ambitious. I go to the gym almost everyday, I love to read books or 
          listen to audiobooks, and I like to watch videos about coding.
        </p>
        <p>I will love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me!</p>
        </Animate>
        
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateX(1900px)'
        }}
        end={{
          transform: 'translateX(0px)'
        }}
        >
          <img src={selfImage} alt='self image'/>
          <h3 className='personalInfoHeaderText'>Personal Information</h3>
          <ul>
            {
              personalInfo.map((item, i) => (
              <li key={i}>
                <span className='title'>{item.label}</span>
                <span className='value'>{item.value}</span>
              </li>
              ))
            }
          </ul>
        </Animate>
      </div>
      <div className='about_content_stageCube'>
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateX(650px)'
        }}
        end={{
          transform: 'translateX(0px)'
        }}
        >
          <div className='about_content_stageCube_innerCube'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color="#f0f529" />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </Animate>
      </div>
      </div>
    </section>
  )
}

export default About