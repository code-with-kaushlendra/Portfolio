import { useEffect } from "react";
import { useLocation } from "react-router-dom"


const ScrollToSection=()=>{
    
        const {hash}=useLocation();

        useEffect(()=>{
         
        if(hash){
            const el=document.querySelector(hash);
            el.scrollIntoView({behavior:"smooth"});
        }

        },[hash]);

        }

        export default ScrollToSection;
    
