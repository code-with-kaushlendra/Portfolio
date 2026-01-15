
import Typed from "typed.js"
import bannerImage from '../assets/banner.jpg'
import bannerBackground from '../assets/banner_wallpaper.svg'
import { useEffect, useRef } from "react";

const Banner=()=>{
 
    const el=useRef(null);
    useEffect(()=>{
         const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer", "Java Devloper", "Software Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop:true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
    },[]);

    return(
        <div  style={{backgroundImage:`url(${bannerBackground})`, backgroundSize:"cover"}} className="main-container  flex items-center">

            <div className=' w-full flex  justify-center text-white'>
            
                {/* text */}
                <div className='w-2/3'>
                    <h3 className='text-3xl font-semibold'>Hi , I am</h3>
                <h1 className=' mt-4 text-5xl font-bold'>Kaushlendra Pandey</h1>
                <h2 className='mt-4 text-2xl'>And I am a <span className="font-bold underline" ref={el}></span></h2>
                <p className='mt-2'> A motivated developer with a strong foundation in Java and modern
    front-end technologies. I enjoy building responsive web applications
    and turning ideas into practical, user-friendly solutions.</p>
                
                <div className='icon-container space-x-5 flex'>
                    <a className="cursor hover:bg-orange-600 border  mt-2 px-3 py-4 w-14 h-14 rounded-full flex justify-between items-center bg-gray-700" href=""><i class="fa-brands text-3xl fa-facebook"></i></a>
                    <a className="cursor hover:bg-orange-600 border  mt-2 px-3 py-4 w-14 h-14 rounded-full flex justify-between items-center bg-gray-700"  href=""><i class="fa-brands text-3xl fa-instagram"></i></a>
                    <a className="cursor hover:bg-orange-600 border  mt-2 px-3 py-4 w-14 h-14 rounded-full flex justify-between items-center bg-gray-700"  href=""><i class="fa-brands text-3xl fa-youtube"></i></a>
                    <a className="cursor hover:bg-orange-600 border mt-2 px-3 py-4 w-14 h-14 rounded-full flex justify-between items-center bg-gray-700"  href=""> <i class="fa-brands text-3xl fa-linkedin"></i></a>
                    
                </div>

                <br/>
                <a href="mailto:pandeykaushlendra9628@gmail.com" className='px-3 py-2 bg-orange-500 rounded-full shadow-lg text-1xl'>Contact Me</a>
                </div>
                
            </div>

            <div className=' w-full flex justify-center'>
                {/* image */}
                <img className="rounded-full shadow-lg w-fit" src={bannerImage} alt="" />
            </div>
         


        </div>
    )
};

export default Banner;