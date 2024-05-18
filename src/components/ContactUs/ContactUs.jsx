import React from 'react'
import './ContactUs.css'
import {Link } from 'react-router-dom';
import mapimg from '../../assets/mapimg.png'
import phoneimg from '../../assets/phoneimg.png'
import messageimg from '../../assets/messageimg.png'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';


const ContactUs = () => {


//Scrolling from top of the page function
useEffect(() => {
  window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
}, []);




//onsubmit function started!!
const [result, setResult] = React.useState("");

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

  formData.append("access_key", "ab18d276-b0b9-48df-a600-2a9cc6b63c15");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully");
    event.target.reset();

  // Clear the success message after 3 seconds
  setTimeout(() => {
    setResult("");
    }, 3000);

  } else {
    console.log("Error", data);
    setResult(data.message);
  }
};
// on submit function ended!!




  return (

<div className='aboutus'>

    <div className='aboutus-1'> 
           <h1>CONTACT US</h1>
        <ul>
           <li><Link to='/' className='aboutus-anchortag'> HOME /</Link> </li>
           <li><Link to='/' className='aboutus-anchortag'> <span className='orange-text'> CONTACT US</span></Link> </li>
        </ul>
    </div>
 {/*-----aboutus-1 section ends------*/}
        <div className='contactus-2'>
            <div className='contactus-2-top'>
                <div className='contactus-2-top-1' >
                    <img src={mapimg}></img>
                    <h6>Address</h6>
                    <div className='para'>
                    <p>819/6 E.B colony, Rajiv Nagar, Kovilpatti-628501</p>
                    </div>
                </div>
                <div className='contactus-2-top-2'>
                    <img src={phoneimg}></img>
                    <h6>Call Us</h6>
                    <div className='para'>
                    <p>+91 9790395545</p>
                    <p>+91 9003599745</p>
                    </div>
                </div>
                <div className='contactus-2-top-3'>
                    <img src={ messageimg}></img>
                    <h6>Write Us</h6>
                    <div className='para'> 
                    <p>kmhomedevelopers@gmail.com</p>
                    <p>www.kmhomedevelopers.com</p>
                    </div>
                    
                </div>

                


            </div>
             {/*-----contactus-2-top section ends------*/}
           <div className='contactus-2-bottom'>
                <div className='contactus-2-bottom-1'>
                   <h6>GET IN TOUCH</h6>
                   <h2>Leave Your Message About Our Services</h2>
                </div>
            
             {/*-----contactus-2-bottom-1 section ends------*/}

        <div className='contactus-2-bottom-2'>
                     
            <form onSubmit={onSubmit}>
        
                <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" name="name" placeholder='Enter your name'required/>
                </div>
                <div className="form-group">
                     <label htmlFor="phone">Phone Number</label>
                     <input type="tel" id="phone" name="phone"placeholder='Enter your phone number' required/>
                </div>
                <div className="form-group">
                     <label htmlFor="email">E-mail</label>
                     <input type="email" id="email" name="email"placeholder='Enter your phone number' required/>
                </div>
               <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="6" placeholder='Enter your message'required></textarea>
                </div>

                    <button type="submit" className='mybtn dark-mybtn'>Submit now</button>
  
            </form>
            <span>{result}</span>



        </div>
        {/*-----'contactus-2-bottom-2section ends------*/}

         </div>
          {/*-----contactus-2-bottom-section ends------*/}

          </div>
         {/*-----contactus-2 section ends------*/}


<Footer/>

</div> 

  )
}

export default ContactUs
