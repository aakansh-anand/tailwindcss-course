const Navbar = () => {
  const links = [
    { title: "Founders", href: "#" },
    { title: "Guide", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Login", href: "#" },
  ];
  return (
    <div className="flex items-center justify-between py-6">
      <span className="text-3xl font-bold">Finta</span>
      <div className="flex items-center gap-4">
        {links.map((link, idx) => {
          return (
            <a
              href={link.href}
              key={idx}
              className="text-neutral-900 transition-colors duration-200 ease-in-out hover:text-neutral-700/90"
            >
              {link.title}
            </a>
          );
        })}
        <button className="mx-4 rounded-lg border border-blue-100 bg-blue-500 px-4 py-2 text-white shadow-xl shadow-neutral-200 transition-colors duration-200 ease-in-out text-shadow-md hover:bg-blue-500/90">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Navbar;
