import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import About from '../About/About';
import Title from '../Title/Title';
import Testimonials from '../Testimonials/Testimonials';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';

const Home = () => {


  //Scrolling from top of the page function
useEffect(() => {
  window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
}, []);


  return (

    <div style={{overflowX:'hidden'}}>
    <div className='home'>
        <div className='home-text'>
            <h1>Building Dreams Into <span>Reality</span></h1>
            <h3>Your Vision, Our Expertise, Endless Possibilities</h3>
            <Link to='/contact-us'><button className='mybutton'>Contact Us</button></Link>
      </div>
    </div>

  
<div className='mycontainer'>
<Title title='ABOUT US' subtitle='Who We Are'/>
<About/>
<Title title='WHAT WE DO' subtitle='Our priorities your project'/>
<Testimonials/>
<Title title='PROJECTS' subtitle='Our Latest Projects'/>
</div>

<div className='mycontainer-2'>
<Projects/>
</div>


<Footer/>

</div>
  )
}

export default Home
