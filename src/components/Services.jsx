const Services=()=>{
    return(
        <>
        <div className="main" py-16>
            <h2 className="text-4xl font-bold underline text-center mt-10"> My Skills</h2>
          <div/>

          <div className="services-container flex mt-12 space-x-5 px-10">
              
            <div className="service1  bg-slate-200 p-5 shadow-lg rounded-xl space-y-4 cursor-pointer hover:bg-amber-100">
                {/* text1 */}
                <i class=" text-5xl px-40 fa-brands fa-aws"></i>
                <h1 className="text-4xl">Web Developer</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet corrupti aliquam voluptate, consectetur voluptates voluptatibus incidunt repellat temporibus enim hic.</p>
                <button className="px-3 py-2 bg-orange-500 rounded-full text-1xl">Check</button>
            </div>

            <div className="service2  bg-slate-200 p-5 shadow-lg rounded-xl space-y-4 cursor-pointer hover:bg-amber-100">
                {/* text2 */}
                <i class=" text-5xl px-40 fa-brands fa-java"></i>
                <h1 className="text-4xl">Java Developer</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet corrupti aliquam voluptate, consectetur voluptates voluptatibus incidunt repellat temporibus enim hic.</p>
                <button className="px-3 py-2 bg-orange-500 rounded-full text-1xl">Check</button>
            </div>

            <div className="service3  bg-slate-200 p-5 shadow-lg rounded-xl space-y-4 cursor-pointer hover:bg-amber-100">
                {/* text3 */}
                <i class="text-5xl px-40 fa-brands fa-react"></i>
                <h1 className="text-4xl">ReactJs Developer</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet corrupti aliquam voluptate, consectetur voluptates voluptatibus incidunt repellat temporibus enim hic.</p>
                <button className="px-3 py-2 bg-orange-500 rounded-full text-1xl">Check</button>
            </div>

            


          </div>

        </div>
        
        </>
    )
}

export default Services;