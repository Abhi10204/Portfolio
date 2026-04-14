const Navbar = ({ active, scrollTo }) => {
  const links = ["about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center ">
        
        {/* Logo */}
        <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ">
          ASB
        </span>

        {/* Links */}
        <div className="flex gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`capitalize transition-all duration-300 cursor-pointer ${
                active === l
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-blue-400"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
