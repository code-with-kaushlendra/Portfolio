const Footer = () => {
  return (
    <footer className="bg-gray-100 border">
      <div className="
        max-w-7xl mx-auto
        px-4 sm:px-8 lg:px-16
        py-5
        flex flex-col md:flex-row
        items-center md:justify-between
        gap-4
      ">
        
        {/* Left text */}
        <p className="text-sm text-gray-600 text-center md:text-left">
          © 2023 Kaushlendra Pandey <span className="block md:inline">All Rights Reserved</span>
        </p>

        {/* Links */}
        <div className="
          flex flex-wrap
          justify-center md:justify-end
          gap-4
          text-sm
        ">
          <a href="/about" className="hover:underline">About</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/licency" className="hover:underline">Licensing</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
