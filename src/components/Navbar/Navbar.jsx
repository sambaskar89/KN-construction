import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/CompanyLogo.png'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {


  // const navRef = useRef();

  // const showNavbar = () => {
  //      navRef.current.classList.toggle("responsive_nav")
  // }

 // regarding hamburger menu icon showing in small screens //
 const [isMenuOpen, setIsMenuOpen] = useState(false);


 const toggleMenu = () => {

  setIsMenuOpen(!isMenuOpen);
};
 // ended...//




 
//hiding navbar
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {         //if it moved above 80px the navbar will be hidden
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
}, []);


  return (
   <header>
     
       <nav className={isScrolled ? 'navbar-hidden' : ''} >
       
               <Link to='/'><img src={logo} alt='logo' className='logo'/></Link>
            <ul className={isMenuOpen ? 'nav-links-mob' : 'nav-links'} onClick={()=> setIsMenuOpen(false)}>
                <li className='listitems'><Link to='/' className='navitems ' >Home</Link></li>
                <li className='listitems'><Link to='/about' className='navitems'>About Us</Link></li>
                <li className='listitems '><DropdownMenu/></li>
                <li className='listitems'><Link to='/projects' className='navitems '>Projects</Link></li>
                <li className='listitems'><Link to='/contact-us'className='navitems ' >Contact Us</Link></li>

        
            </ul>
         
            {isMenuOpen? <FontAwesomeIcon icon={faSquareXmark} className='crossmark-icon' onClick={toggleMenu}/> : <FontAwesomeIcon icon={faBars} className='hamburger-icon' onClick={toggleMenu} /> }
      </nav>
</header>
  )
}

export default Navbar
