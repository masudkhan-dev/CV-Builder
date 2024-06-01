const Navbar = () => {
  return (
    <header className="fixed top-5 left-5 right-5 bg-[#f1f1f1] px-8 py-5 z-10 rounded-2xl shadow-xl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <h2>Masudur Rahman</h2>
          </div>
          <nav>
            <ul className="flex gap-5">
              <li>Home</li>
              <li>About</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
