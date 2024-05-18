import React from 'react'
import { Link } from 'react-router-dom';
import interiorworksimg from '../../assets/interiorworksimg.jpg'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';




const InteriorWorks = () => {

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
        <h2>Interior Works</h2>
    
        <div className='aboutus-2-content1'>
              <img src={interiorworksimg} alt='interiorworksimg'></img>
            <div className='aboutus-2-paragraph'>
              <p>
              Our company has the best interior design partnership to provide the wonderful interior work like false ceiling, modular kitchen, cupboard, wallpaper, etc. We get our highs from transforming our clients' vision into reality, even better than their imagination.We will match you with the quality Interior Design Service professionals with their prices and reviews.providing a variety of False Ceiling. We are a team of highly-skilled and extremely prolific designers and interior space decor professionals.We undertake the design and execution of complete Electrical & Plumbing Works for all types of infrastructure and housing projects.</p>


            </div>
        </div>
    
    </div>
     {/*-----aboutus-2 section ends------*/}  
       <Footer/>   
        </div>
  )
}

export default InteriorWorks
