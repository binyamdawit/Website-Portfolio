import React from 'react'
import { RiContactsFill } from 'react-icons/ri'
import PageHeaderContent from '../../components/pageHeaderContent'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_i9t9kv4', 'template_roqep6b', form.current, '5WiBCdKdPK8NctIWf')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return(
    <section id="contact" className="contact">
      <PageHeaderContent
      headerText = "Contact Me"
      icon={<RiContactsFill size={40}/>}
      />
      <div className='contact_content'>
        <h3 className='contact_content_header-text'>Let's Talk</h3>
        <div className='animation-area'>
        <ul className='box-area'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
        <div className='contact_content_form'>
        <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact