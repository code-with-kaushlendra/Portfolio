
import Banner2 from '../assets/banner2.jpg'

const About=()=>{
    return(
        <div className="about-container py-16 bg-gray-100 ">
            <h1 className="text-4xl font-bold underline text-center pb-16">About Me</h1>

            <div className="main-dabba flex justify-center ">

                <div className=' w-full flex justify-center'>
                    {/* image */}
                    <img className="rounded-full shadow-lg w-70 flex justify-center "  src={Banner2} alt="" />
                </div>

                <div className='w-full'>
                    {/* text */}

                    <div className='space-y-5 w-2/3 justify-center'>
                       <h1 className='text-3xl font-semibold '>Java Developer & Frontend Developer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate assumenda deleniti unde! Sed, omnis?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsam provident placeat quisquam laboriosam sapiente repudiandae laudantium possimus corrupti! Numquam.</p>

                    <button className='bg-orange-500 cursor px-3 py-2 text-1xl rounded-full'>Read More..</button>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default About;