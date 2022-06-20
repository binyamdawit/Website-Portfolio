import React, { useState } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'
import {AiFillProject} from 'react-icons/ai'
import { filterOptions, portfolioData } from './utils'
import './index.scss'

const Projects = () => {

  const [ hoveredIndex, setHoveredIndex ] = useState(null)

  const [ filterValue, setFilterValue ] = useState(1)

  const handleFilter = (id) => {
    setFilterValue(id)
  }

  const filteredPortfolioData = filterValue === 1 ? portfolioData :
  portfolioData.filter(item => item.sectionId === filterValue)
  

  return(
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
      headerText = "My Projects"
      icon={<AiFillProject size={40}/>}
      />
      <div className='portfolio_content'>
        <ul className='portfolio_content_filter'>
          {
            filterOptions.map(option => (
              <li onClick={() => handleFilter(option.id)} 
              key={`filter${option.id}`}
              className={option.id === filterValue ? 'active' : ''}
              >
                {option.label}
              </li>
            ))
          }
        </ul>
        <div className='portfolio_content_cards'>
          {
            filteredPortfolioData.map((item, key) => (
              <div 
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={key} className='portfolio_content_cards_item'>
                <div className='portfolio_content_cards_item_img-wrapper'>
                  <a>
                    <img src={item.image} alt="project image" />
                  </a>
                </div>
                <div className='overlay'>
                  {
                    hoveredIndex === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <a href={item.projectLink}>
                      <button>Visit</button>
                    </a>
                  </div>
                  )}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects