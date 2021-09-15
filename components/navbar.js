import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link href="/">
            <a className="navbar-brand">Aaryamann</a>
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/skills">
                <a className="nav-link" aria-current="page">
                  Skills
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects">
                <a className="nav-link">Projects</a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="https://github.com/aaryamann171">
                <a className="nav-link" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://aaryamann171.github.io/blog/">
                <a className="nav-link" target="_blank" rel="noreferrer">
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="mailto:aaryamann171@gmail.com">
                <a className="nav-link">E-mail</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
