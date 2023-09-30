import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { App } from "./Pages/App";
import { NotFound } from "./Pages/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
