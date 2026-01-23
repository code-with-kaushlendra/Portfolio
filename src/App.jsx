import React from "react";
import {Route, Routes} from 'react-router-dom'
import Header from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertise from "./components/Expertise";
import Footer from "./components/Footer"
import Contact from "./pages/Contact";

function App(){
  return(
    <>
    <Header/>
 <Routes>
  <Route path="/" element={
    <>
         <Banner/>

         <section id="about">
      <About/>
    </section>
    
    <section id="skills">
      <Services/>
    </section>
    
    <section id="technologies">
       <Expertise/>
    </section>

   </>
  }
/>

 <Route path="/contact" element={<Contact/>} />
     
 </Routes>

  
    <Footer/>
    </>
  )
}

export default App;