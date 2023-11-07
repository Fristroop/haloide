import darkLogo from "../assets/imgs/halo-dark.png";
import lightLogo from "../assets/imgs/halo-light.png";

export const Footer = () => {
  const logo = localStorage.getItem("theme") === "dark" ? darkLogo : lightLogo;

  return (
    <>
      <footer className="border-top p-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-1 ">
          <div>
            <img src={logo} width={"100px"} className="" alt="me-3" />
          </div>
          <div>
            <h6>© 2023 HALO Edebiyat Dergisi</h6>
          </div>
        </div>
      </footer>
    </>
  );
};
