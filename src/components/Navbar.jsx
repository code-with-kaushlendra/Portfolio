import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar=()=>{

    
const [brandName,setBrandName]=useState("Kaushlendra Pandey");
 const [menuLinks,setMenuLinks]=useState([
    {title:"Home",
        link:"/",
        id:1,
    },
     {title:"About",
        link:"/about",
        id:2,
    },
     {title:"Skills",
        link:"/skills",
        id:3,
    },
     {title:"Portfolio",
        link:"/portfolio",
        id:4,
    },
     {title:"Contact",
        link:"/contact",
        id:5,
    }
]);

const scrollToSection =(id)=>{
 document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
 });
};






    return(
        <>
        <div className="h-20 border main md:flex justify-between items-center px-16 bg-gray-100">
            
            <div className="text-2xl font-bold">
                {/* logo */}
                <h1>{brandName}</h1>
            </div>

            <div className="hidden md:flex items-c space-x-6">
                {/* menu links */}

              {/* {  menuLinks.map((link)=>(<a key={link.id} onClick={()=>{scrollToSection(link.link)}} className="hover:text-orange-600" >{link.title}</a>))} */}


            
                 <a href="/" className="hover:text-orange-600">Home</a>
                 <a onClick={()=>{scrollToSection("about")}} className="hover:text-orange-600 cursor-pointer">About</a>
                  <a onClick={()=>scrollToSection("skills")} className="hover:text-orange-600 cursor-pointer">Skills</a>
                   <a onClick={()=>{scrollToSection("technologies")}} className="hover:text-orange-600 cursor-pointer">Technologies</a>
                   
                    <Link to="/contact" className="hover:text-orange-600">Contact</Link>
                    
            </div>

                   <div>
                    {/* Hire */}
                    <Link to="/contact">
                    <button className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl hover:bg-blue-100">Hire me</button>
                    </Link>
                   
                  
                   </div>

                   <button className="md:hidden text-3xl" onClick={()=> setIsOpen(!isOpen)}> ☰</button> 
        </div>
        
        </>
    )
}

export default Navbar;