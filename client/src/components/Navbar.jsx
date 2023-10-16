import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    document.body.style.paddingTop = `${navbar.offsetHeight}px`;
  }, []);
  return (
    <>
      <nav
        id="navbar"
        className="navbar bg-secondary-subtle px-2 border-bottom"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold fs-4">
            <img
              src="https://haloedebiyat.files.wordpress.com/2023/05/halo-logo.png"
              width={"80px"}
              className="me-3 logo"
              alt="me-3"
            />
          </Link>
          <div className="d-md-none">
            <button
              className="btn text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav-content"
              aria-controls="nav-content"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars fs-5"></i>
            </button>
          </div>

          <div className="d-none d-md-block">
            <ul
              className="list-unstyled d-flex m-0 gap-4 me-auto fw-semibold"
              style={{ fontSize: "18px" }}
            >
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Anasayfa
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/hakkimizda"}>
                  Hakkımızda
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/iletisim"}>
                  İletisim
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse mt-3 border-top"
            id="nav-content"
          >
            <ul className="navbar-nav me-auto my-3 fs-5 fw-semibold">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fa-solid fa-home me-2"></i>
                  Anasayfa
                </Link>
                <hr className="my-1" />
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hakkimizda">
                  <i className="fa-solid fa-users me-2"></i>
                  Hakkımızda
                </Link>
                <hr className="my-1" />
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/iletisim">
                  <i className="fa-solid fa-phone me-2"></i>
                  İletişim
                </Link>
                <hr className="my-1" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
