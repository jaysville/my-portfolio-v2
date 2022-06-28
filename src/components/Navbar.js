import "../styles/main.css";

const Navbar = () => {
  return (
    <header id="header" className="px-3">
      <nav
        id="mainNavbar"
        className="navbar navbar-expand-md navbar-dark bg-none"
      >
        <div className="container-fluid">
          <a className="olaotan">Olaotan</a>
          <button
            className="navbar-toggler hamburger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#projects"
                >
                  My Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  My Stack
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#contact">
                  contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://drive.google.com/file/d/1hAzOwOS-gtQ-xO8AuorbZer3-B7Kj0Ag/view"
                  className="nav-link"
                >
                  My Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
