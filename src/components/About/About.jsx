import React from 'react'
import './About.css'
import about_image from '../../assets/Backgroundimage3.jpg'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='about'>

        <div className="about-left">
            
            <img src={about_image} alt='AboutImage'/>
            
       </div>

       <div className="about-right">
            
            <h4>K&M Homes & Developers</h4>
            <p>K&M Homes & Developers started their journey in 2023. Over the years, the group has undertaken many challenging projects and accumulated skills, know-how and experiences in design and build solutions, project management services, building trades and related engineering works.</p>
            <Link to='/about'><button className='aboutbutton'>READ MORE</button></Link>
            
       </div>

    </div>
  )
}

export default About
