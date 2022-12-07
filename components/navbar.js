import Link from "next/link";

const linkStyle = {
  color: "#000000",
  fontWeight: "bold"
}
const navStyle = {
  background: "#FFFFFF",
  borderBottom: "2px black solid",
  color: "#000000"
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-2" style={navStyle}>
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
            <a className="navbar-brand" style={linkStyle}>[Aaryamann]</a>
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/skills">
                <a className="nav-link" aria-current="page" style={linkStyle}>
                  [Skills]
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects">
                <a className="nav-link" style={linkStyle}>[Projects]</a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="https://github.com/aaryamann171">
                <a className="nav-link" target="_blank" rel="noreferrer" style={linkStyle}>
                  [GitHub]
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://aaryamann171.github.io/blog/">
                <a className="nav-link" target="_blank" rel="noreferrer" style={linkStyle}>
                  [Blog]
                </a>
              </Link>
            </li>
            <li>
              <Link href="mailto:aaryamann171@gmail.com">
                <a className="nav-link" style={linkStyle}>[E-mail]</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
