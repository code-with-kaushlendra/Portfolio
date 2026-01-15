const Services = () => {
  return (
    <>
      <div className="main py-16">
        <h2 className="text-4xl font-bold underline text-center mt-10">
          My Skills
        </h2>

        <div className="services-container flex mt-12 space-x-5 px-10">

          {/* Web Developer */}
          <div className="service1 bg-slate-200 p-5 shadow-lg rounded-xl space-y-4 cursor-pointer hover:bg-amber-100">
            <i className="text-5xl px-40 fa-brands fa-aws"></i>
            <h1 className="text-4xl">Web Developer</h1>
            <p>
              I build responsive and user-friendly websites using HTML, CSS,
              JavaScript, and modern UI practices to deliver clean and
              accessible web experiences.
            </p>
            <button className="px-3 py-2 bg-orange-500 rounded-full text-lg hover:bg-blue-100">
              Check
            </button>
          </div>

          {/* Java Developer */}
          <div className="service2 bg-slate-200 p-5 shadow-lg rounded-xl space-y-4 cursor-pointer hover:bg-amber-100">
            <i className="text-5xl px-40 fa-brands fa-java"></i>
            <h1 className="text-4xl">Java Developer</h1>
            <p>
              Experienced in building backend applications using Core Java,
              OOP concepts, JSP, Servlets, and database integration with MySQL.
            </p>
            <button className="px-3 py-2 bg-orange-500 rounded-full text-lg hover:bg-blue-100">
              Check
            </button>
          </div>

          {/* React Developer */}
          <div className="service3 bg-slate-200 p-5 shadow-lg rounded-xl space-y-4 cursor-pointer hover:bg-amber-100">
            <i className="text-5xl px-40 fa-brands fa-react"></i>
            <h1 className="text-4xl">ReactJS Developer</h1>
            <p>
              I create modern single-page applications using React,
              reusable components, hooks, and clean UI design for better
              performance and usability.
            </p>
            <button className="px-3 py-2 bg-orange-500 rounded-full text-lg hover:bg-blue-100">
              Check
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;
