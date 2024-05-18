import React from 'react'
import './AboutUsPage.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'; 
import aboutusimage from '../../assets/aboutusimage.jpg'
import aboutusimage1 from '../../assets/aboutusimage1.jpg'
import aboutusimage3 from '../../assets/aboutusimage3.jpg'
import aboutusimage4 from '../../assets/aboutusimage4.jpg'
import icon50 from '../../assets/icon50.png'
import icon10 from '../../assets/icon10.png'
import icon20 from '../../assets/icon20.png'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';


const AboutUsPage = () => {

//Scrolling from top of the page function
useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (

    <div className='aboutus'>

        <div className='aboutus-1'> 
       
        <h1>ABOUT US</h1>
        <ul>
         <li><Link to='/' className='aboutus-anchortag'> HOME /</Link> </li>
         <li><Link to='/' className='aboutus-anchortag'> <span className='orange-text'>ABOUT US</span></Link> </li>

        </ul>
        </div>
        {/*-----aboutus-1 section ends------*/}

        <div className='aboutus-2'> 
            <h6>ABOUT K&M HOMES & DEVELOPERS</h6>
            <h2>We are Construct</h2>

            <div className='aboutus-2-content1'>
                  <img src={aboutusimage} alt='Aboutusimage'></img>
                <div className='aboutus-2-paragraph'>
                  <p>K&M Homes & Developers started their journey in 2023. Over the years, the group has undertaken many challenging projects and accumulated skills, know-how and experiences in design and build solutions, project management services, building trades and related engineering works.</p>

                  <p>Our objective is to provide our clients with an “I am assured” experience when we are chosen to execute their projects. Our emphasis on clear communication and follow-through procedures ensures that client’s objectives are top priority in the planning and execution of all our processes.</p>
                </div>
            </div>

        </div>
         {/*-----aboutus-2 section ends------*/}  

         <div className='aboutus-3'> 

             <div className='aboutus-3-left'>
                <h6>CORE VALUES </h6>
                <h2>Our project management and execution philosophy is:</h2>
                <h4>2</h4>
                <h5>YEARS OF EXPERIENCE</h5>
            </div>
         
            <div className='aboutus-3-right'>
               <p><span>&#10004;</span> <span className="bold">Create detail schedule and resources plan to meet client’s project objective</span></p>
               <p><span>&#10004;</span> <span className="bold">Communicate clearly with all project stakeholders</span></p>
               <p><span>&#10004;</span> <span className="bold">Track project progress and fine-tune deviations</span></p>
               <p><span>&#10004;</span> <span className="bold">Supervise closely on quality of work done</span></p>
               <p><span>&#10004;</span> <span className="bold">Supervise closely on quality of work done</span></p>
               <p><span>&#10004;</span> <span className="bold">Complete and commission the project on time</span></p>
           </div>
         
         </div>
         {/*-----aboutus-3 section ends------*/}  

        <div className='aboutus-4'>
               <div className='aboutus-4-content'>
                    <div className='aboutus-4-content-top'>
                            <div className='aboutus-4-content-top-left'>   
                                <h6>K&M HOMES & DEVELOPERS</h6>
                                <h2>Why Choose Us</h2>
                            </div>
                            <div className='aboutus-4-content-top-right'>  
                                <p>If you’re planning on building a home, choose builders that you can trust. Contact K&M Homes &    Developers today to get started.</p>
                            </div>
                    </div>
                    {/*-----aboutus-4-content-top-ends------*/} 

                    <div className='aboutus-4-content-bottom'>
                         <div className='bottom'>
                        <div className='aboutus-4-content-bottom-1'>
                            <img src={aboutusimage1} alt='Aboutusimage'></img>
                            <div className='aboutus-4-content-bottom-1-content'>
                                 <img src={icon50} alt='icon50'></img>
                                 <h6>CUSTOMERS</h6>
                            </div>
                        </div>
                          
                        </div>
                        {/*-----aboutus-4-content-bottom-1-ends------*/}
                        <div className='bottom'>
                        <div className='aboutus-4-content-bottom-2'>
                            <img src={aboutusimage3} alt='Aboutusimage'></img>
                            <div className='aboutus-4-content-bottom-2-content'>
                                 <img src={icon10} alt='icon10'></img>
                                 <h6>PROJECTS COMPLETED</h6>
                            </div>
                        </div>
                        </div>
                        {/*-----aboutus-4-content-bottom-2-ends------*/}  
                        <div className='bottom'>
                        <div className='aboutus-4-content-bottom-3'>
                        
                           <img src={aboutusimage4} alt='Aboutusimage'></img>
                           <div className='aboutus-4-content-bottom-3-content'>
                                 <img src={icon20} alt='icon20'></img>
                                 <h6>STAFFS</h6>
                                  
                            </div>
                        </div>
                        {/*-----aboutus-4-content-bottom-3-ends------*/} 
                        </div>
                    </div>
                    {/*-----aboutus-4-content-bottom-ends------*/}

                </div>
               {/*-----aboutus-4-content-ends------*/}  


        </div>
        {/*-----aboutus-4- ends------*/}   

        <Footer/>
    </div>
     /*-----aboutus-4- ends------*/   
  )
}

export default AboutUsPage
