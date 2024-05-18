import React from 'react'
import { Link } from 'react-router-dom';
import landscapedesignimg from '../../assets/landscapedesignimg.jpg'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';


const LandscapeDesign = () => {


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
        <h2>Landscape Designs</h2>
    
        <div className='aboutus-2-content1'>
              <img src={landscapedesignimg } alt='landscapedesignimg '></img>
            <div className='aboutus-2-paragraph'>
              <p>
              
                Landscaping is an art that involves manipulating the natural environment in an area to make it look an aesthetic way. Our Landscaping range from the development of the overall garden design concept, to designing and implementing soft and hard landscaping, which includes choosing the right plants, laying lawns and pathways, constructing walls, as well as installing irrigation systems and providing continuous maintenance.</p>


            </div>
        </div>
    
    </div>
     {/*-----aboutus-2 section ends------*/}  
       <Footer/>   
        </div>
  )
}

export default LandscapeDesign
