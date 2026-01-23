import bannerImage from '../assets/banner.jpg'
import bannerBackground from '../assets/banner_wallpaper.svg'

const Expertise=()=>{
    return(
        <>
          <div className='py-16'>
             <h1 className="text-4xl font-bold underline text-center mb-16">My Expertise</h1>

             {/* box section */}
          
          <div style={{backgroundImage:`url(${bannerBackground})`, backgroundSize:"cover"}}  className="main-dabba flex py-16 ">
         
         <div className='flex items-center'>
                <div className=" w-2/3 text-center space-y-4">
                {/* banner */}
                
                <h1 className='text-4xl font-bold'>I love working with these technologies</h1>
                <p >  I enjoy building full-stack applications using modern technologies. 
  From backend logic to responsive user interfaces, I focus on writing
  clean, efficient, and scalable code.</p>
                <button href="mailto:pandeykaushlendra9628@gmail.com" className='px-4 py-2 bg-orange-500 rounded-full text-1xl hover:bg-blue-100'>Hire me</button>
            </div>

         </div> 
            

         <div className='flex  justify-center' >
<div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap  ">
                {/* texts */} 
                <p  className="text-1xl px-3 py-2 bg-gray-300 rounded-full  w-fit mt-1  cursor-pointer hover:bg-orange-500">CoreJava</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit  mt-1 cursor-pointer hover:bg-orange-500 ">JS</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1  cursor-pointer hover:bg-orange-500">ReactJs</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">Oops</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">Php</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">Python</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">Mysql</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">MongoDB</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">Html</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">CSS</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">Springboot</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">Devops</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">Bootstrap</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">Tailwind</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">Git/Github</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">Postman</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500 ">Php</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">Figma</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">UI/UX</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">Linux</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">Artificial Intelligence</p>
                <p className="text-1xl px-3 py-2 bg-gray-300 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">Cloud</p>
                

            </div>

         </div>
            

          </div>
     </div>


        </>
    )
}
export default Expertise;