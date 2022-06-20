import React from 'react'
import LogoTitle from '../../images/logo-b.png'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { HiX} from 'react-icons/hi'
import { Link } from "react-router-dom"
import './index.scss'

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT',
        to: '/about'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PROJECTS',
        to: '/projects'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
]

const NavMenu = () => {

    const [ toggleIcon, setToggleIcon ] = useState(false)
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }
    
    return (

        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to={'/'} className="navbar_container_logo">
                        <img src={LogoTitle} className="imageTitle"/>
                    </Link>
                </div>
                <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""} `}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar_container_menu_item">
                                <Link className="navbar_container_menu_item_links" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} color="#4d4d4e" />
                    }
                </div>
            </nav>
        </div>
    )
}

export default NavMenu