import Typed from "typed.js";
import bannerImage from "../assets/banner2.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Java Developer",
        "Software Developer",
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerBackground})` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-12 text-white">
        
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-xl md:text-3xl font-semibold">
            Hi, I am
          </h3>

          <h1 className="mt-3 text-3xl md:text-5xl font-bold">
            Kaushlendra Pandey
          </h1>

          <h2 className="mt-4 text-lg md:text-2xl">
            And I am a{" "}
            <span className="font-bold underline" ref={el}></span>
          </h2>

          <p className="mt-4 text-sm md:text-base leading-relaxed">
            A motivated developer with a strong foundation in Java and modern
            front-end technologies. I enjoy building responsive web
            applications and turning ideas into practical, user-friendly
            solutions.
          </p>

          {/* Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-6">
            <a
              href="https://github.com/code-with-kaushlendra"
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-600 transition"
            >
              <i className="fa-brands fa-github text-2xl md:text-3xl"></i>
            </a>

            <a
              href="https://linkedin.com/in/kaush-pandey-tech"
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-600 transition"
            >
              <i className="fa-brands fa-linkedin text-2xl md:text-3xl"></i>
            </a>
          </div>

          <div className="mt-8">
            <Link to="/contact">
              <button className="px-5 py-2 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bannerImage}
            alt="Profile"
            className="w-48 h-48 md:w-72 md:h-72 rounded-full shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
