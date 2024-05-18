import React from 'react'
import './Testimonials.css'
import icon_1 from '../../assets/icon1.png'
import icon_2 from '../../assets/icon2.png'
import icon_3 from '../../assets/icon3.png'
import icon_4 from '../../assets/icon4.png'
import icon_5 from '../../assets/icon5.png'
import icon_6 from '../../assets/icon6.png'

const Testimonials = () => {

    const handleClick = (event) => {

        event.preventDefault(); // Prevent default navigation behavior
        
      };


  return (


    <div className='testimonials'>
        <div className='testimonials-1'>
            <img src={icon_1}></img>
            <h3>Experience Engineer</h3> 
            <p>It's very clear to experience engineer give the best quality your project.</p> 
            <a href='#' onClick={handleClick}>+</a>
        </div>

        <div className='testimonials-2'>
            <img src={icon_2}></img>
            <h3>Good Planner</h3> 
            <p>Our architecture give the best plan your project.</p> 
            <a href='#'>+</a>
        </div>

        <div className='testimonials-3'>
              <img src={icon_3}></img>
              <h3>Man Power</h3> 
              <p>We have 18 working in house we building according to your time frame.</p> 
              <a href='#'>+</a>
        </div>

        <div className='testimonials-4'> 
               <img src={icon_4}></img>
               <h3>After Care</h3> 
               <p>We are alwaysimproving our infrastructure and new technology.</p> 
               <a href="#">+</a>
         </div>

        <div className='testimonials-5'>
                 <img src={icon_5}></img>
                 <h3>Maintanance</h3> 
                <p>We are improving your Refurbishment that the new look your home.</p> 
                <a href='#'>+</a>
        </div>

        <div className='testimonials-6'>
                 <img src={icon_6}></img>
                 <h3>Timely Hand Over</h3> 
                 <p>We are handle sticky about your time frame your project.</p> 
                 <a href='#'>+</a>
        </div>
      

    </div >
  )
}

export default Testimonials
