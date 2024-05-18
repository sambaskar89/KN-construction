import React from 'react'
import { Link } from 'react-router-dom';
import architecturaldesignimg from '../../assets/architecturaldesignimg.jpg'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';



const ArchitecturalDesign = () => {


//Scrolling from top of the page function
useEffect(() => {
  window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
}, []);




  return (

    <div className='aboutus'>

    <div className='aboutus-1'> 
    
    <h1>SERVICES</h1>
    <ul>
     <li><Link to='/' className='aboutus-anchortag'> HOME /</Link> </li>
     <li><Link to='/' className='aboutus-anchortag'> <span className='orange-text'> SERVICES</span></Link> </li>
    
    </ul>
    </div>
    {/*-----aboutus-1 section ends------*/}
    
    <div className='aboutus-2'> 
        <h6>OUR SERVICES</h6>
        <h2>Architectural Design</h2>
    
        <div className='aboutus-2-content1'>
              <img src={architecturaldesignimg} alt='architecturaldesignimg'></img>
            <div className='aboutus-2-paragraph'>
              <p>
               Concept that focuses on the components or elements of a structure or system and unifies them into a coherent and functional whole, according to a particular approach in achieving the objective(s) under the given constraints or limitations.</p>

              <p>We provide full range of architectural services for our projects from inception to completion. Our architecture honors you- our client and also the people who will be using the building.Our services are focused on assisting our clients in cutting downtime and costs, offering them more value for money than what can be gained from conventional 2D drafting.</p>
    
            </div>
        </div>
    
    </div>
     {/*-----aboutus-2 section ends------*/}  
       <Footer/>   
        </div>
  )
}

export default ArchitecturalDesign
