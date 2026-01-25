
import { section } from 'framer-motion/client'
import Banner2 from '../assets/banner.jpg'

const About=()=>{
    return(
        <section id="about">

            <div className="about-container py-16 bg-gray-100 ">
            <h1 className="text:3xl md:text-4xl font-bold underline text-center mb-12">About Me</h1>

            <div className="main-dabba max-w-6xl mx-auto px-6 ">

                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/* image */}
                    <img className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover "  src={Banner2} alt="" />
                </div>

                {/* <div className='w-full'> */}
                    {/* text */}

                    <div className="w-full md:w-1/2 text-center md:text-left">
                       <h1 className='text-2xl md:text-3xl font-semibold mb-4 '>Java Developer & Frontend Developer</h1>
                    <p  className='mb-3'>Building reliable backend systems and clean, responsive user interfaces.</p>
                    <p className='mb-6'> I specialize in developing scalable Java-based applications and crafting
  responsive front-end interfaces. With a strong foundation in both backend
  and UI development, I aim to build efficient, user-focused web solutions.</p>

                    <button className='bg-orange-500 cursor px-3 py-2 text-1xl rounded-full hover:bg-blue-100 transition'>Read More..</button>
                    </div>
                    
                </div>

            </div>
        {/* </div> */}
        </section>
        
    )
}

export default About;