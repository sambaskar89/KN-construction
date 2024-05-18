import React from 'react'
import { Link } from 'react-router-dom';
import structuralworksimg from '../../assets/structuralworksimg.jpg'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';


const StructuralWorks = () => {


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
        <h2>Structural Works</h2>
    
        <div className='aboutus-2-content1'>
              <img src={structuralworksimg } alt='structuralworksimg '></img>
            <div className='aboutus-2-paragraph'>
              <p>
                We have the extensive domain experience, knowledge of industry standards and well-trained engineers who understand Structural Engineering Services and are innovative in their solutions. While endeavoring to maintain international standards in quality, our structural engineering team strives to reduce product design cycle time as well as ensure cost effectiveness. We are every engineer, architect and builder's support system as the services offered are in adherence to major international building codes and practices and can integrate into any design situation globally.</p>


            </div>
        </div>
    
    </div>
     {/*-----aboutus-2 section ends------*/}  
       <Footer/>   
        </div>
  )
}

export default StructuralWorks
