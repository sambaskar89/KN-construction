import React from 'react'
import './DropdownMenu.css'

import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


const DropdownMenu = ({setIsMenuOpen}) => {
  const [showMenu, setShowMenu] = useState(false);

 
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <div className="dropdown"   >
      
<span className="dropdown-toggle " onClick={toggleMenu} onMouseEnter={handleMouseEnter} >Services<FontAwesomeIcon icon={faCaretDown} className='dropdown-icon' onClick={()=>setShowMenu(true)}/></span>
      {showMenu && (
        <ul className="dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  >
           <li ><Link to='/construction-works'className='dropdown-box' onClick={setIsMenuOpen}>Construction Works</Link></li>
           <li><Link to='/realtors' className='dropdown-box' onClick={setIsMenuOpen}>Realtors</Link></li>
           <li><Link to='/approval-drawings' className='dropdown-box' onClick={setIsMenuOpen}>Approval Drawings & Estimations</Link></li>
           <li> <Link to='/Architectural-Design' className='dropdown-box' onClick={setIsMenuOpen}>Architectural Design</Link></li>
           <li><Link to='/Interior-Works' className='dropdown-box' onClick={setIsMenuOpen}>Interior Works</Link></li>
           <li><Link to='/Landscape-Designs' className='dropdown-box'  onClick={setIsMenuOpen}>Landscape Designs</Link></li>
           <li><Link to='/Structural-Works' className='dropdown-box'  onClick={setIsMenuOpen}> Structural Works</Link></li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
