const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-20 flex items-center justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl p-8 md:p-12">

        {/* LEFT SIDE – TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h1>

          <p className="text-gray-600 mb-8">
            I’m currently open to internships and full-time opportunities.  
            Feel free to reach out if you want to collaborate or just say hi 👋
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              📧 <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:pandeykaushlendra9628@gmail.com"
                className="text-orange-500 hover:underline"
              >
                pandeykaushlendra9628@gmail.com
              </a>
            </p>

            <p>
              🔗 <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/kaush-pandey-tech"
                target="_blank"
                className="text-orange-500 hover:underline"
              >
                linkedin.com/in/kaush-pandey-tech
              </a>
            </p>

            <p>
              💻 <span className="font-semibold">GitHub:</span>{" "}
              <a
                href="https://github.com/code-with-kaushlendra"
                target="_blank"
                className="text-orange-500 hover:underline"
              >
                github.com/code-with-kaushlendra
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Send Message 
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
