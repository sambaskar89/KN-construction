import React from 'react'
import './ProjectsDetail.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Building1 from '../../assets/Building1.jpg'
import Building2 from '../../assets/Building2.jpg'
import Building3 from '../../assets/Building3.jpg'
import Building4 from '../../assets/Building4.jpg'
import Building5 from '../../assets/Building5.jpg'
import Building6 from '../../assets/Building6.jpg'
import Building7 from '../../assets/Building7.jpg'
import Building8 from '../../assets/Building8.jpg'
import Building9 from '../../assets/Building9.jpg'
import Building10 from '../../assets/Building10.jpg'
import { useState } from 'react';
import  { useEffect } from 'react';

const ProjectsDetail = () => {

   //Scrolling from top of the page function
useEffect(() => {
  window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
}, []);




    const [allClicked, setAllClicked] = useState(false);
    const [completedClicked, setCompletedClicked] = useState(false);
    const [upComingClicked, setUpComingClicked] = useState(false);
    const [animationEffect, setAnimationEffect] = useState(false);
  
    useEffect(() => {
        handleAllClick(); // Trigger handleAllClick when the component mounts
    }, []); // Empty dependency array means it runs only once after mount


    const handleCompletedClick = () => {
        setCompletedClicked(true);
        setAllClicked(false); // Reset allClicked state
        setUpComingClicked(false);
        setAnimationEffect(true); // Trigger animation effect
      };
    
      const handleAllClick = () => {
        setAllClicked(true);
        setCompletedClicked(false); // Reset completedClicked state
        setUpComingClicked(false);
        setAnimationEffect(true); // Trigger animation effect
      };

      const handleUpComingClick = () => {
        setUpComingClicked(true);
        setAllClicked(false); // Reset allClicked state
        setCompletedClicked(false);
        setAnimationEffect(true); // Trigger animation effect
      };

  return (

    <div className='aboutus'>
        <div className='aboutus-1'> 
                <h1>PROJECTS</h1>
           <ul>
             <li ><Link to='/' className='aboutus-anchortag' > HOME /</Link> </li>
             <li><Link to='/' className='aboutus-anchortag'> <span className='orange-text'>PROJECTS</span></Link> </li>
            </ul>
        </div>
          {/*-----aboutus-1 section ends------*/}
          
        <div className='projectsdetail-2'> 
            <div className='projectsdetail-2-top'>
                <ul>
                <li onClick={handleAllClick}>
                 <span className={`aboutus-anchortag-list ${allClicked ? 'orange-underlined' : ''}`}>ALL</span>
             </li>
             <li onClick={handleCompletedClick}>
                 <span className={`aboutus-anchortag-list ${completedClicked ? 'orange-underlined' : ''}`}>COMPLETED PROJECTS</span>
             </li>
             <li onClick={handleUpComingClick }>
                 <span className={`aboutus-anchortag-list ${upComingClicked ? 'orange-underlined' : ''}`}>UPCOMING PROJECTS</span>
             </li>
                </ul>
            </div>
            {/*-----aboutus-1 projectsdetail-2-top ends------*/}
            {allClicked && (
                
                    <div className={`projectsdetail-2-bottom ${ animationEffect? 'animation-effect' : ''}`}>

                
                        <div className='projectsdetail-2-bottom-content'>
                           <img src={Building1 } alt='Building1 '></img>
                           <h5>Building Works</h5>
                        </div>
                        <div className='projectsdetail-2-bottom-content'>
                           <img src={Building2 } alt='Building2 '></img>
                           <h5>Building Works</h5>
                        </div>
                        <div className='projectsdetail-2-bottom-content'>
                           <img src={Building3 } alt='Building3 '></img>
                           <h5>Interior Design</h5>
                        </div>
                       <div className='projectsdetail-2-bottom-content'>
                         <img src={Building4 } alt='Building2 '></img>
                         <h5>Interior Design</h5>
                        </div>
                        <div className='projectsdetail-2-bottom-content'>
                          <img src={Building5 } alt='Building2 '></img>
                          <h5>Interior Design</h5>
                         </div>
                        <div className='projectsdetail-2-bottom-content'>
                           <img src={Building6 } alt='Building2 '></img>
                          <h5>Interior Design</h5>
                        </div>
                        <div className='projectsdetail-2-bottom-content'>
                            <img src={Building7 } alt='Building2 '></img>
                            <h5>Interior Design</h5>
                        </div>
                        <div className='projectsdetail-2-bottom-content'>
                           <img src={Building8 } alt='Building2 '></img>
                          <h5>Interior Design</h5>
                        </div>
                        <div className='projectsdetail-2-bottom-content'>
                          <img src={Building9 } alt='Building2 '></img>
                          <h5>Interior Design</h5>
                        </div>
                       <div className='projectsdetail-2-bottom-content'>
                          <img src={Building10 } alt='Building2 '></img>
                          <h5>Interior Design</h5>
                        </div>
                        
                

                    </div>
                    
                     )}

                   {/*-----aboutus-1 projectsdetail-2-bottom ends------*/} 
       

             { completedClicked &&(
            <>
                <div className={`projectsdetail-2-bottom ${animationEffect? 'animation-effect' : ''}`}>

                         <div className='projectsdetail-2-bottom-content'>
                           <img src={Building1 } alt='Building1 '></img>
                           <h5>Building Works</h5>
                        </div>
                        <div className='projectsdetail-2-bottom-content'>
                           <img src={Building2 } alt='Building2 '></img>
                           <h5>Building Works</h5>
                        </div>
                
                </div>
            </>
             )}      

{upComingClicked && (
                       
             <div className={`projectsdetail-2-bottom ${animationEffect ? 'animation-effect' : ''}`}>


                        <div className='projectsdetail-2-bottom-content'>
                           <img src={Building3 } alt='Building3 '></img>
                           <h5>Interior Design</h5>
                        </div>
                       <div className='projectsdetail-2-bottom-content'>
                         <img src={Building4 } alt='Building2 '></img>
                         <h5>Interior Design</h5>
                        </div>
                        <div className='projectsdetail-2-bottom-content'>
                          <img src={Building5 } alt='Building2 '></img>
                          <h5>Interior Design</h5>
                         </div>
                        <div className='projectsdetail-2-bottom-content'>
                           <img src={Building6 } alt='Building2 '></img>
                          <h5>Interior Design</h5>
                        </div>
                        <div className='projectsdetail-2-bottom-content'>
                            <img src={Building7 } alt='Building2 '></img>
                            <h5>Interior Design</h5>
                        </div>
                        <div className='projectsdetail-2-bottom-content'>
                           <img src={Building8 } alt='Building2 '></img>
                          <h5>Interior Design</h5>
                        </div>
                        <div className='projectsdetail-2-bottom-content'>
                          <img src={Building9 } alt='Building2 '></img>
                          <h5>Interior Design</h5>
                        </div>
                       <div className='projectsdetail-2-bottom-content'>
                          <img src={Building10 } alt='Building2 '></img>
                          <h5>Interior Design</h5>
                        </div>




             </div>

)}
             </div>
          {/*-----aboutus-1 projectsdetail-2- ends------*/}
         
        
    </div>
    /*-----aboutus- ends------*/
  )
}

export default ProjectsDetail
