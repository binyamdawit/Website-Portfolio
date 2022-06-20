import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import PageHeaderContent from '../../components/pageHeaderContent'
import { data } from './utils'
import 'react-vertical-timeline-component/style.min.css'
import './index.scss'
import { MdWork } from 'react-icons/md'

const Resume = () => {

  return(
    <section id="resume" className="resume">
      <PageHeaderContent
      headerText = "My Resume"
      icon={<BsInfoCircleFill size={40}/>}
      />
      <div className='timeline'>
        <div className='timeline_experience'>
          <h3 className='timeline_experience_header-text'>Experience</h3>
          <VerticalTimeline
          layout={'1-column'}
          lineColor="var(--green-theme-main-color)"
          >
            {
              data.experience.map((item, i) => (
                <VerticalTimelineElement
                key={i}
                className="time_experience_vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color: 'var(--green-theme-sub-text-color)',
                  border: "1.5px solid var(--green-theme-main-color)"
                }}
                icon={<MdWork/>}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--green-theme-main-color)'
                }}
                >
                  <div className='vertical-timeline-element-title-wrapper'>
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className='vertical-timelinie-element-title-wrapper-description'>{item.describtion}</p>
                  <p className='vertical-timelinie-element-title-wrapper-startend'>{item.startend}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
        <div className='timeline_education'>
          <h3 className='timeline_education_header-text'>Education</h3>
          <VerticalTimeline
          layout={'1-column'}
          lineColor="var(--green-theme-main-color)"
          >
            {
              data.education.map((item, i) => (
                <VerticalTimelineElement
                key={i}
                className="time_education_vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color: 'var(--green-theme-sub-text-color)',
                  border: "1.5px solid var(--green-theme-main-color)"
                }}
                icon={<MdWork/>}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--green-theme-main-color)'
                }}
                >
                  <div className='vertical-timeline-element-title-wrapper'>
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className='vertical-timelinie-element-title-wrapper-description'>{item.describtion}</p>
                  <p className='vertical-timelinie-element-title-wrapper-startend'>{item.startend}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Resume