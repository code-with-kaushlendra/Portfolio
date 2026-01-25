import bannerBackground from '../assets/banner_wallpaper.svg'
import { Link } from 'react-router-dom'

const Expertise = () => {
  return (
    <>
      <div className="py-16">
        <h1 className="text-3xl md:text-4xl font-bold underline text-center mb-8">
          My Expertise
        </h1>

        {/* box section */}
        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="main-dabba flex flex-col md:flex-row py-16 gap-12"
        >
          {/* LEFT */}
          <div className="flex justify-center items-center w-full md:w-1/2 px-4">
            <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold">
                I love working with these technologies
              </h1>

              <p className="text-sm md:text-base">
                I enjoy building full-stack applications using modern technologies.
                From backend logic to responsive user interfaces, I focus on writing
                clean, efficient, and scalable code.
              </p>

              <Link to="/contact">
                <button className="px-4 py-2 bg-orange-500 rounded-full hover:bg-blue-100 cursor-pointer">
                  Hire me
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center w-full md:w-1/2 px-4">
            <div className="flex justify-center gap-3 flex-wrap max-w-lg">
              {[
                "CoreJava","JS","ReactJs","Oops","Php","Python","Mysql","MongoDB",
                "Html","CSS","Springboot","Devops","Bootstrap","Tailwind",
                "Git/Github","Postman","Php","Figma","UI/UX","Linux",
                "Artificial Intelligence","Cloud"
              ].map((skill, i) => (
                <p
                  key={i}
                  className="text-sm md:text-base px-3 py-2 bg-gray-300 rounded-full cursor-pointer hover:bg-orange-500 transition"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expertise
