import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'; 


const Footer = () => {

  const gmailEmail = 'kmhomedevelopers@gmail.com';
  const mailtoLink = `mailto:${gmailEmail}`;

  return (
    <div className='Footer'>
      <div className='footercontainer-1'>

        <div className='Footer-content-1'>
             <h6>ABOUT US</h6>
             <p> K&M Homes & Developers takes on the role of main contractor for small to medium size projects and performs project management services to coordinates specialist trades for industrial/commercial projects.</p>
        </div>
       { /*----Footer-content-1 ends-----*/}
       
       <div className='Footer-content-2'>
            <h6>SERVICES</h6>
              <Link to="/construction-works" className="noUnderline">
                 <p>CONSTRUCTION WORKS</p>
              </Link>
               <Link to="/realtors" className="noUnderline">
                 <p>REALTORS</p>
              </Link>
              <Link to="/Interior-Works" className="noUnderline">
                 <p>INTERIOR WORKS</p>
              </Link>
      </div>
      { /*----Footer-content-2 ends-----*/}

      <div className='Footer-content-3'>
          <h6>SERVICES</h6>
           <Link to="/Architectural-Design" className="noUnderline">
               <p>ARHCITECTURAL DESIGN</p>
           </Link>

           <Link to="/Landscape-Designs" className="noUnderline">
               <p>LANDSCAPE DESIGNS</p>
           </Link>

           <Link to="/Structural-Works" className="noUnderline">
               <p>STRUCTURAL WORKS</p>
           </Link>

     </div>

     { /*----Footer-content-3 ends-----*/}

     <div className='Footer-content-4'>
           <h6>GET IN TOUCH</h6>
           <p>+91 9790395545</p>
           <p>+91 9003599745</p>

           <p><a href={mailtoLink}>kmhomedevelopers@gmail.com</a></p>
        
     </div>

     { /*----Footer-content-4 ends-----*/}

     </div>
     { /*----Footer-container ends-----*/}
   
     <div className='footercontainer-2'>
      
      <p>&copy; {new Date().getFullYear() } K&M Homes & Developers | Designed by SAM</p>
        <ul>
         <li><Link to="/" className='downfooter'>Home</Link></li>
         <li><Link to="/about" className='downfooter' >About Us</Link></li>
         <li><Link to="/construction-works" className='downfooter'>Services</Link></li>
         <li><Link to="/projects" className='downfooter'>Projects</Link></li>
         <li><Link to="/contact-us"className='downfooter' >Contact Us</Link></li>
        </ul>
 
        </div>
    </div>
  )
}

export default Footer
