import React from 'react'
import './ConstructionWorks.css'
import { Link } from 'react-router-dom'; 
import constructionworks from '../../assets/constructionworks.jpg'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';


const ConstructionWorks = () => {

//Scrolling from top of the page function
useEffect(() => {
  window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
}, []);



  return (
    <div className='constructionworks'>
          <div className='aboutus-1'> 
       
       <h1>SERVICES</h1>
       <ul>
        <li><Link to='/' className='aboutus-anchortag'> HOME /</Link> </li>
        <li><Link to='/' className='aboutus-anchortag'> <span className='orange-text'>SERVICES</span></Link> </li>

       </ul>
       </div>
       {/*-----aboutus-1 section ends------*/}

       <div className='constructionworks-2'> 
            <h6>OUR SERVICES</h6>
            <h2>Construction Works</h2>

            <div className='constructionworks-2-content1'>
                  <img src={constructionworks} alt='constructionworks'></img>
                <div className='constructionworks-2-paragraph'>
                  <p>A contractor is assigned to a construction project once the design has been completed by the person or is still in progress. This is done by going through a bidding process with different contractors. The contractor is selected by using one of three common selection methods: low-bid selection, best-value selection, or qualifications-based selection.</p>

                  <p>We focus on transforming homes with outdated design or fewer features into something extraordinary. Our priority is to make your home more functional, comfortable, energy efficient and beautiful with a flawless finish. We are one of the top constructions companies in kovilpatti. Our team with all the experience in construction helps us in both pre & post building works. We are expertise in constructing individual homes, flats, villas, commercial and industrial buildings.</p>
                </div>
            </div>

        </div>
         {/*-----aboutus-2 section ends------*/} 
          
          <Footer/>

    </div>
  )
}

export default ConstructionWorks
