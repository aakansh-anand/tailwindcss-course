const Navbar = () => {
  const links = [
    { title: "Founders", href: "#" },
    { title: "Guide", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Login", href: "#" },
  ];
  return (
    <div className="flex justify-between py-6 items-center">
      <span className="text-2xl font-bold">Finta</span>
      <div className="flex gap-4 items-center">
        {links.map((link, idx) => {
          return (
            <a
              href={link.href}
              key={idx}
              className="text-neutral-900 hover:text-neutral-700/90 transition-colors ease-in-out duration-200"
            >
              {link.title}
            </a>
          );
        })}
        <button className="mx-4 bg-blue-500 rounded-lg text-white px-4 py-2 text-shadow-md shadow-xl shadow-neutral-200 hover:bg-blue-500/90  transition-colors ease-in-out duration-200 border-blue-100 border">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Navbar;
