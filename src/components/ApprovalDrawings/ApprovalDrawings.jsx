import React from 'react'
import { Link } from 'react-router-dom';
import approvaldrawingimg from '../../assets/approvaldrawingimg.jpg'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';


const ApprovalDrawings = () => {


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
        <h2>Approval Drawings & Estimations</h2>
    
        <div className='aboutus-2-content1'>
              <img src={approvaldrawingimg} alt='approvaldrawingimg'></img>
            <div className='aboutus-2-paragraph'>
              <p>
                 We provide cost estimates for competitive bids or comprehensive project budget estimates using up to date techniques for estimating earth and material quantities, current industry pricing, and in field work experience. Establishing accurate project costs is one of the most important aspects of a winning bid or a successful project.Estimation determines the probable construction cost of a project. Estimating can be done at various stages of project duration depending on the purpose of estimation. First estimation is done before construction starts for the purpose of making budget of the project or bidding the project as a contractor.</p>
    
            </div>
        </div>
    
    </div>
     {/*-----aboutus-2 section ends------*/}  
       <Footer/>   
        </div>
  )
}

export default ApprovalDrawings
