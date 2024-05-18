import React from 'react'
import { Link } from 'react-router-dom';
import Realtorsimg from '../../assets/Realtorsimg.jpg'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';

const Realtors = () => {



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
    <h2>Realtors</h2>

    <div className='aboutus-2-content1'>
          <img src={Realtorsimg} alt='Realtors'></img>
        <div className='aboutus-2-paragraph'>
          <p>Being one of the leading real estate promoter & developer in Tamilnadu,Vetha's Construction constructs with a conscience. Vetha's Construction signifies the epitome of luxury integrated with superior quality and understated grandeur.We believes that with each business we are getting a new relative,The spirit of creativity and perfection of the organization is reflected in its endeavors to achieve excellence, a quality perfected in serving the nation for the past two decades.</p>

        </div>
    </div>

</div>
 {/*-----aboutus-2 section ends------*/}  
   <Footer/>   
    </div>
  )
}

export default Realtors
