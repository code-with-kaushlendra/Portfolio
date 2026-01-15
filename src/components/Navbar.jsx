import React from "react";
import { useState } from "react";


const Navbar=()=>{

    
const [brandName,setBrandName]=useState("Kaushlendra Pandey");
 const [menuLinks,setMenuLinks]=useState([
    {title:"Home",
        link:"/",
        id:1,
    },
     {title:"About",
        link:"/about",
        id:1,
    },
     {title:"Skills",
        link:"/skills",
        id:1,
    },
     {title:"Portfolio",
        link:"/portfolio",
        id:1,
    },
     {title:"Contact",
        link:"/contact",
        id:1,
    }
]);




    return(
        <>
        <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
            
            <div className="text-2xl font-bold">
                {/* logo */}
                <h1>{brandName}</h1>
            </div>

            <div className="space-x-6">
                {/* menu links */}

              {  menuLinks.map((link)=>(<a key={link.id} href={link.link}  className="hover:text-orange-600">{link.title}</a>))}


            
                 {/* <a href="/about" className="hover:text-orange-600">About</a>
                  <a href="/skills" className="hover:text-orange-600">Skills</a>
                   <a href="/portfolio" className="hover:text-orange-600">Portfolio</a>
                    <a href="/contact" className="hover:text-orange-600">Contact</a> */}
            </div>

                   <div>
                    {/* Hire */}
                   <button className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl hover:bg-blue-100">Hire me</button>
                   </div>


             <div>
            </div>
        </div>
        </>
    )
}

export default Navbar;