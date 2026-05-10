import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold underline text-center mb-12">
        My Skills
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* AI Integration / Generative AI */}
        <div className="bg-slate-200 p-6 shadow-lg rounded-xl space-y-4 text-center hover:bg-amber-100 transition">
          <i className="text-5xl fa-solid fa-robot"></i>

          <h1 className="text-2xl font-semibold">
            AI Integration / Generative AI
          </h1>

          <p className="text-sm md:text-base">
            I build AI-powered applications using Generative AI APIs,
            chatbot integration, prompt-based systems, and intelligent
            content generation solutions.
          </p>

          {/* Projects */}
          <div className="bg-white rounded-lg p-4 text-left shadow-sm">
            <h3 className="font-bold text-lg mb-2">Projects</h3>

            <ul className="text-sm space-y-2">
              <li>• AI Article Generator</li>
              <li>• AI Chatbot Assistant Integration</li>
              <li>• Prompt-Based Content Creation Tool</li>
            </ul>
          </div>

          <Link to="/portfolio?filter=ai">
            <button className="px-4 py-2 bg-orange-500 rounded-full text-sm hover:bg-blue-100">
              Check
            </button>
          </Link>
        </div>


        {/* Web Developer */}
        <div className="bg-slate-200 p-6 shadow-lg rounded-xl space-y-4 text-center hover:bg-amber-100 transition">
          <i className="text-5xl fa-brands fa-aws"></i>
          <h1 className="text-2xl font-semibold">Web Developer</h1>
          <p className="text-sm md:text-base">
            I build responsive and user-friendly websites using HTML, CSS,
            JavaScript, and modern UI practices.
          </p>
          <Link to="/portfolio?filter=web">
            <button className="px-4 py-2 bg-orange-500 rounded-full text-sm hover:bg-blue-100">
              Check
            </button>
          </Link>
        </div>

        {/* Java Developer */}
        <div className="bg-slate-200 p-6 shadow-lg rounded-xl space-y-4 text-center hover:bg-amber-100 transition">
          <i className="text-5xl fa-brands fa-java"></i>
          <h1 className="text-2xl font-semibold">Java Developer</h1>
          <p className="text-sm md:text-base">
            Experienced in building backend applications using Core Java,
            OOP concepts, JSP, Servlets, and MySQL.
          </p>
          <Link to="/portfolio?filter=java">
            <button className="px-4 py-2 bg-orange-500 rounded-full text-sm hover:bg-blue-100">
              Check
            </button>
          </Link>
        </div>

        {/* React Developer */}
        <div className="bg-slate-200 p-6 shadow-lg rounded-xl space-y-4 text-center hover:bg-amber-100 transition">
          <i className="text-5xl fa-brands fa-react"></i>
          <h1 className="text-2xl font-semibold">ReactJS Developer</h1>
          <p className="text-sm md:text-base">
            I create modern single-page applications using React,
            reusable components, and hooks.
          </p>
          <Link to="/portfolio?filter=react">
            <button className="px-4 py-2 bg-orange-500 rounded-full text-sm hover:bg-blue-100">
              Check
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;
