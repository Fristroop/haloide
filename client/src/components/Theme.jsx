import { useState } from "react";

export const Theme = () => {
  const [theme, setTheme] = useState(
    document.body.getAttribute("data-bs-theme")
  );
  const changeTheme = () => {
    const target = theme == "dark" ? "light" : "dark";
    document.body.setAttribute("data-bs-theme", target);
    localStorage.setItem("theme", target);
    setTheme(target);
    location.reload();
  };

  return (
    <button
      className="btn text-white position-fixed bottom-0 end-0 m-3 z-3"
      style={{ backgroundColor: "#712cf9" }}
      onClick={changeTheme}
    >
      {theme === "dark" ? (
        <i className="fa-solid fa-moon"></i>
      ) : (
        <i className="fa-solid fa-sun"></i>
      )}
    </button>
  );
};
