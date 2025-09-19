
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400">© 2025 Rishiv Goutam. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="www.linkedin.com/in/rishivgoutam" className="text-gray-400 hover:text-white transition duration-300">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
