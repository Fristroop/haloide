/* eslint-disable react/prop-types */
import { useEffect } from "react";
import logo from "../assets/imgs/halo-logo.png";
import { SearchModal } from "./SearchModal";

export const Navbar = ({ data }) => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) document.body.style.paddingTop = `${navbar.offsetHeight}px`;
  }, []);
  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-md bg-dark-subtle">
        <div className="container-fluid">
          <a href={"/"} className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="Logo" height="50" className="logo" />
          </a>

          <div className="d-flex">
            <button
              className="btn d-md-none"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa-solid fa-search"></i>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ width: "280px", height: "100vh" }}
          >
            <div className="offcanvas-header border-bottom">
              <a href={"/"} className="navbar-brand d-flex align-items-center">
                <img src={logo} alt="Logo" height="50" className="logo mx-1" />
              </a>
              <button
                type="button"
                className="btn"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav align-items-center flex-row flex-wrap flex-grow-1 mb-auto ms-md-auto">
                <li className="nav-item col-6 col-md-auto">
                  <a href="/" className="nav-link">
                    <i className="fa-solid fa-share-from-square me-2 d-md-none"></i>
                    Anasayfa
                  </a>
                </li>
                <li className="nav-item col-6 col-md-auto">
                  <a href="/hakkimizda" className="nav-link">
                    <i className="fa-solid fa-user-group me-2 d-md-none"></i>
                    Hakkımızda
                  </a>
                </li>
                <li className="nav-item col-6 col-md-auto">
                  <a href="/iletisim" className="nav-link">
                    <i className="fa-solid fa-phone me-2 d-md-none"></i>
                    Iletisim
                  </a>
                </li>

                <div className="d-none d-md-flex mx-auto align-items-center">
                  <button
                    className="btn btn-dark d-flex align-items-center input-group magazine-desc"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <span className="input-group-text bg-transparent border-0 p-0 me-2">
                      <i className="fa-solid fa-search"></i>
                    </span>
                    <span className="text">Dergilerde Ara</span>
                  </button>
                </div>
              </ul>

              <hr />

              <div className="d-flex align-items-center m-auto">
                <a
                  href="https://www.instagram.com/haloidergisi/"
                  className="btn fs-5 ig"
                >
                  <i className="fa-brands fa-instagram me-1"></i>
                  haloidergisi
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <SearchModal data={data} />
    </>
  );
};
