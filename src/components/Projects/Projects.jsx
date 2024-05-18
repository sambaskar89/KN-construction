import React from 'react'
import './Projects.css'
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Building1 from '../../assets/Building1.jpg'
import Building2 from '../../assets/Building2.jpg'
import Building3 from '../../assets/Building3.jpg'
import Building4 from '../../assets/Building4.jpg'
import Building5 from '../../assets/Building5.jpg'
import Building6 from '../../assets/Building6.jpg'
import Building7 from '../../assets/Building7.jpg'

const Projects = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        responsive: [

            {
              breakpoint: 2000 , // Large screen breakpoint
              settings: {
                slidesToShow: 5, // Show three slides in a row for large screens
              },
            },
            {
              breakpoint: 1800, // Medium screen breakpoint
              settings: {
                slidesToShow: 4, // Show two slides in a row for medium screens
              },
            },
            {
              breakpoint: 1450, // Small screen breakpoint
              settings: {
                slidesToShow: 3, // Show one slide in a row for smaller screens
              },
            },
            {
              breakpoint: 1050 , // Large screen breakpoint
              settings: {
                slidesToShow: 2, // Show three slides in a row for large screens
              },
            },
            {
              breakpoint: 746 , // Large screen breakpoint
              settings: {
                slidesToShow: 2, // Show three slides in a row for large screens
              },
            }
          ],
        };
      const sliderRef = React.createRef();
    
      const goToNextSlide = () => {
        sliderRef.current.slickNext();
      };
    
      const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
      };
    

      return (

        <div className="testimonial-slider-container">

          <Slider {...settings} ref={sliderRef}>

            <div className="testimonial-slide">
              <p >Building</p>
              <img src={Building1} alt="Project 1" />
            </div>

            <div className="testimonial-slide">
              <p>Building</p>
              <img src={Building2} alt="Project 2" />
            </div>

            <div className="testimonial-slide">
              <p>Interior Design</p>
              <img src={Building3} alt="Project 2" />
            </div>

            <div className="testimonial-slide">
              <p>Interior Design</p>
              <img src={Building4} alt="Project 3" />
            </div>

            <div className="testimonial-slide">
              <p>Interior Design</p>
              <img src={Building5} alt="Project 4" />
            </div>

            <div className="testimonial-slide">
              <p>Interior Design</p>
              <img src={Building6} alt="Project 5" />
            </div>

            <div className="testimonial-slide">
              <p>Interior Design</p>
              <img src={Building7} alt="Project 6" />
            </div>

          </Slider>


          <div className="slider-navigation">
            <button className="prev-button" onClick={goToPrevSlide}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="next-button" onClick={goToNextSlide}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      );
    };
    
export default Projects
