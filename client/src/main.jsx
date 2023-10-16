import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { App } from "./Pages/App";
import { NotFound } from "./Pages/NotFound";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";

//import "./assets/styles/main.css"
import { Login } from "./Pages/Login";
//import { Register } from "./Pages/Register";
import { Dashboard } from "./Pages/Dashboard";

document.body.setAttribute("data-bs-theme", "dark");

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/hakkimizda" element={<About />} />
      <Route path="/iletisim" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

//<Route path="/register" element={<Register />} />