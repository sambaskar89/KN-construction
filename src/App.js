import React from 'react';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import ConstructionWorks from './components/ConstructionWorks/ConstructionWorks';
import Realtors from './components/Realtors/Realtors';
import ApprovalDrawings from './components/ApprovalDrawings/ApprovalDrawings';
import ArchitecturalDesign from './components/ArchitecturalDesign/ArchitecturalDesign';
import InteriorWorks from './components/InteriorWorks/InteriorWorks';
import LandscapeDesign from './components/LandscapeDesign/LandscapeDesign';
import StructuralWorks from './components/StructuralWorks/StructuralWorks';
import ProjectsDetail from './components/ProjectsDetail/ProjectsDetail';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';



function App() {
  return(

    <Router>

        <Navbar/>
        
       
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/projects" element={<ProjectsDetail/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/construction-works" element={<ConstructionWorks/>} />
          <Route path="/realtors" element={<Realtors/>} />
          <Route path="/approval-drawings" element={<ApprovalDrawings/>} />
          <Route path="/architectural-design" element={<ArchitecturalDesign/>} />
          <Route path="/interior-works" element={<InteriorWorks/>} />
          <Route path="/landscape-designs" element={<LandscapeDesign/>} />
          <Route path="/structural-works" element={<StructuralWorks/>} />
      </Routes>

</Router>
  )
  

} 

export default App;


// import React from 'react';
// import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import About from './components/About/About';
// import Title from './components/Title/Title';
// import Testimonials from './components/Testimonials/Testimonials';
// import Projects from './components/Projects/Projects';
// import Footer from './components/Footer/Footer';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";



// function App() {
//   return(
//     <Router>
//         <Routes>
//             <Route
//                 path="/"
//                 element={<Home />}
//              />
//         </Routes>
  
// </Router>

//   )
  

// } 

// export default App;
